import { Button, Input } from "@chakra-ui/react";
import { FormatPrice } from "../lib/utils";
import {
  resolvers,
  TUpdateStatusParameters,
} from "../validator/change-status-order";
import { useForm } from "react-hook-form";
import { useState } from "react";
import UpdateOrderHandler from "../integration/update-order";
import DeleteOrderHandler from "../integration/delete-order";

function OrderItem({ data }: { data: any }) {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<TUpdateStatusParameters>({
    resolver: resolvers,
  });

  let [checked, setChecked] = useState<boolean>(false);
  const Submit = async (params: TUpdateStatusParameters) => {
    console.log(params, checked);
    if (!checked) return;
    const res = await UpdateOrderHandler(data.id, checked, params.date);
    if (!res) return;
    if (res?.success) window.location.reload();
  };

  const DeleteOrder = async () => {
    const res = await DeleteOrderHandler(data.id);
    if (!res) return;
    if (res?.success) window.location.reload();
  };
  return (
    <div className="flex border   w-[80%] md:w-[70%]  mx-auto flex-col px-3 py-2 md:py-4 mt-10 shadow-md h-fit rounded-lg gap-y-5">
      <div className="w-full   flex flex-col px-2 lg:px-5 py-4 gap-y-3">
        <div className="flex flex-col gap-y-1">
          <div className="flex lg:gap-x-4 items-center">
            <p className="text-lg font-bold text-gray-500">Order ID :</p>
            <p className="text-red-400 lg:text-lg">
              {data.id.substring(0, 15) + "..."}
            </p>
          </div>
          {data.isDelaiverd ? (
            <p className="text-green-500">Delaiverd</p>
          ) : (
            <p className="text-red-500">Proccecing...</p>
          )}

          <p className="lg:text-lg text-gray-400">
            {data.createdAt.split("T")[0]}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-2 lg:justify-between mb-2 ">
          <div className="flex flex-col">
            <h1 className="font-medium text-gray-400">Address</h1>
            <div className="flex flex-col">
              <p>{data.address.country}</p>
              <p>{data.address.city}</p>
              <p>{data.address.street}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap gap-14 justify-center">
          {data.card.cardItem.map((item: any) => (
            <div className="flex gap-x-2 items-center">
              <div className="relative w-[75px] h-[75px]">
                <img
                  src={item.plante.imageUrl || "/book.avif"}
                  alt="book"
                  className="border"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h1>{item.plante.name}</h1>
                <h1>{item.plante.category.name}</h1>
                <h1 className="font-medium">
                  {FormatPrice({
                    value: item.plante.price * item.quantity,
                    currency: item.plante.currency,
                  })}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {data.isDelaiverd ? (
        <Button
          color={"red"}
          onClick={() => {
            DeleteOrder();
          }}
        >
          Delete Order
        </Button>
      ) : (
        <form
          className="flex-col w-full gap-x-3 h-full"
          onSubmit={handleSubmit(Submit)}
        >
          <div className="flex justify-between flex-col md:flex-row  gap-y-3">
            <Input type="date" {...register("date")} width={"70%"} />
            <div className="flex justify-center gap-x-1 md:gap-x-2 items-center">
              <input
                className="rounded-full"
                type="checkbox"
                onClick={() => setChecked(true)}
                checked={checked}
              />
              <label>isDelaiverd</label>
            </div>
          </div>
          {errors.date ? (
            <p className="text-xs italic text-red-500 w-[100px]">
              {errors.date.message}
            </p>
          ) : null}
          <Button width={"100%"} marginTop={"18px"} type="submit">
            Update
          </Button>
        </form>
      )}
    </div>
  );
}

export default OrderItem;

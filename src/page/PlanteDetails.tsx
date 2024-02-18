import { Button, Input } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { PlanteContext } from "../context/PlanteContext";
import { useContext, useState } from "react";
import { resolvers, TUpdateItemsCredentials } from "../validator/update-items";
import { useForm } from "react-hook-form";
import UpdatePlanteHandler from "../integration/update-plante";
import DeletePlanteHandler from "../integration/delete-plante";

function PlanteDetails() {
  const { plantes } = useContext(PlanteContext);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<TUpdateItemsCredentials>({
    resolver: resolvers,
  });

  const element = plantes.find((plant) => plant.id == id);

  const SubmitHandler = async (params: TUpdateItemsCredentials) => {
    if (!params.name && !params?.imageUrl) return;
    if (!element) return;
    setLoading(true);
    const res = await UpdatePlanteHandler(
      element.id,
      params.name,
      params.imageUrl
    );

    setLoading(false);

    if (!res) return;

    window.location.href = "/";
  };
 
  const deleteHandler = async ( ) => {
    if(!element) return;
    const res = await DeletePlanteHandler(element.id);
    if(!res) return;
    window.location.href = "/"
  }

  return (
    <div className="p-3 w-full h-[100vh  lg:w-[calc(100%-200px)] lg:left-[200px] lg:relative flex flex-col mt-12 lg:mt-5 gap-y-6">
      <div className="border w-[80%] md:w-[500px] md:mt-10  mx-auto mt-5 px-5 py-4 h-fit rounded-lg shadow-md ">
        <form
          className="w-11/12  flex flex-col gap-y-5 mx-auto"
          onSubmit={handleSubmit(SubmitHandler)}
        >
          <h1 className="font-bold">Update Plante Information</h1>
          <div className="flex-col gap-y-1">
            <label className="font-medium">Name of Plante</label>
            <Input {...register("name")} />
            {errors.name ? (
              <p className="text-red-400">{errors.name.message}</p>
            ) : null}
          </div>
          <div className="flex-col gap-y-1">
            <label className="font-medium">Image</label>
            <div className="flex justify-between w-full items-center gap-x-2">
              <div className="relative rounded-full w-[50px] h-[50px]">
                <img
                  src={element?.imageUrl || "/"}
                  alt="avatar"
                  className="rounded-full border"
                />
              </div>
              <Input
                type="file"
                className="w-[75%]"
                {...register("imageUrl")}
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-x-2">
            <Button
              className="bg-blue-500 hover:bg-blue-400 text-white"
              type="submit"
              isLoading={loading}
            >
              Update
            </Button>
            <Button color={"white"} border={"1px solid gray"} backgroundColor={ "red"} onClick={()=>{deleteHandler()}}>
              delete
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PlanteDetails;

import { Button, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { useParams } from "react-router-dom";
import { resolvers, TUpdateItemsCredentials } from "../validator/update-items";
import { useForm } from "react-hook-form";
import UpdateCategoryHandler from "../integration/update-category";
import DeleteCategoryHandler from "../integration/delete-category";

function CategoryDetails() {
  const { id } = useParams();
  const { categorys } = useContext(CategoryContext);
  const [loading, setLoading] = useState(false);
  const element = categorys.find((ele) => ele.id == id);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<TUpdateItemsCredentials>({
    resolver: resolvers,
  });

  const SubmitHandler = async (params: TUpdateItemsCredentials) => {
    if (!params.name && !params?.imageUrl) return;
    if (!element) return;
    setLoading(true);
    const res = await UpdateCategoryHandler(
      element.id,
      params.name,
      params.imageUrl
    );
    setLoading(false);
    if (!res) return;
    window.location.href = "/category";
  };

  const deleteHandler  =  async () => {
    if(!element) return;
    const res  = await DeleteCategoryHandler(element.id);
    if(!res ) return;
    window.location.href ="/category"
  }
  return (
    <div className="p-3 w-full h-[100vh  lg:w-[calc(100%-200px)] lg:left-[200px] lg:relative flex flex-col mt-12 lg:mt-5 gap-y-6">
      <div className="border w-[80%] md:w-[500px] md:mt-10  mx-auto mt-5 px-5 py-4 h-fit rounded-lg shadow-md ">
        <form
          className="w-11/12  flex flex-col gap-y-5 mx-auto"
          onSubmit={handleSubmit(SubmitHandler)}
        >
          <h1 className="font-bold">Update Category Information</h1>
          <div className="flex-col gap-y-1">
            <label className="font-medium">Name of Category</label>
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
                  src={element?.image || "/plant1-free-img.jpg"}
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

export default CategoryDetails;

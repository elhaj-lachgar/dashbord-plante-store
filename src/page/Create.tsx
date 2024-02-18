import CreateCategory from "../components/CreatePlante";
import CreatePlante from "../components/CreateCategory";
import CreateCoupon from "../components/CreateCoupon";

function Create() {
  return (
    <div className="p-3 w-full h-[100vh]  lg:w-[calc(100%-200px)] lg:left-[200px] lg:relative flex flex-col mt-12 lg:mt-5 my-5 gap-y-6">
      <h1 className="text-center text-4xl font-bold text-gray-700">Create</h1>

      <div className="bg-green flex flex-col items-center mx-auto relative mt-5 w-[300px]  md:w-[400px]  rounded-lg">
        <img
          src={"/plant1-free-img.jpg"}
          alt="collection image"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute flex flex-col px-4 py-3 z-0 ">
          <CreateCategory />
        </div>
      </div>

      <div className="bg-green flex flex-col items-center mx-auto relative mt-5 w-[300px]  md:w-[400px]  rounded-lg">
        <img
          src={"/plant1-free-img.jpg"}
          alt="collection image"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute flex flex-col px-4 py-3 z-0 ">
          <CreatePlante />
        </div>
      </div>

      <div className="bg-green flex flex-col items-center mx-auto relative mt-5 w-[300px]  md:w-[400px]  rounded-lg">
        <img
          src={"/plant1-free-img.jpg"}
          alt="collection image"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute flex flex-col px-4 py-3 z-0 ">
          <CreateCoupon/>
        </div>
      </div>
    </div>
  );
}

export default Create;

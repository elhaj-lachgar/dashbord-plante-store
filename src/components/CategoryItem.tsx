import { Link } from "react-router-dom"

function CategoryItem({data} :{data:any}) {
  return (
    <Link to={`/category/${data.id}`} className="bg-green flex flex-col items-center mx-auto relative mt-5 w-[300px]  md:w-[400px]  rounded-lg">
    <img
      src={data?.image||"/plant1-free-img.jpg"}
      alt="collection image"
      className="object-cover w-full h-full rounded-lg"
    />
    <div className="absolute flex flex-col px-4 py-3 z-0">
    <h1 className="font-medium text-lg text-green-700 ">{data.name}</h1>
    </div>
  </Link>
  )
}

export default CategoryItem

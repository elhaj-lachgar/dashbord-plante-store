import { Link } from "react-router-dom";
import { FormatPrice } from "../lib/utils";
/*  id: plante.id,
        name: plante.name,
        categoryId: plante.category.name,
        description: plante.description,
        imageUrl: plante.imageUrl,
        price: plante.price,
        currency: plante.currency,
        discountPrice: plante.discountPrice,
        rating: plante.rating,
        createdAt: plante.createdAt,
        updatedAt: plante.updatedAt, */

function PlanteItem({data} : { data : any }) {
  return (
    <Link to={`/plantes/${data.id}`} className="flex border  w-[200px]  md:w-[300px]  lg:w-[400px] items-center mx-auto flex-col px-3 py-2 md:py-4 mt-10 shadow-md h-fit rounded-lg cursor-pointer">
          <img src={data.imageUrl} className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]  lg:w-[300px] lg:h-[300px] rounded-lg"/>
          <h1 className="text-gray-600 w-full pl-[50px] font-medium mt-4">{data.name}</h1>
          <h2 className="text-gray-600 w-full pl-[50px] font-medium ">{data?.category?.name||"UNKOW"}</h2>
          <div className="text-gray-600 w-full pl-[50px] font-medium  flex items-center gap-x-3">
            {
              data?.discountPrice
              ?
              <del>{FormatPrice({value : data.price , currency : data.currency})}</del>
              :
              null
            }
            <p>{FormatPrice({value : data?.discountPrice || data.price  , currency : data.currency})}</p>
          </div>
          <p className="text-gray-600 w-full pl-[50px] font-medium">rating : <span className="text-yellow-400">{data.rating||0}</span></p>
    </Link>
  );
}

export default PlanteItem;

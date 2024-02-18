import { TrashIcon } from "lucide-react";
import DeleteCouponHandler from "../integration/delete-coupon";

function CouponItem({ data }: { data: any }) {

  const Delete = async ( ) => {
    if(!data.id) return;
    const res = await DeleteCouponHandler(data.id);
    if(!res) return;
    window.location.reload();
  }
  return (
    <div className="flex w-11/12  md:w-[400px] bg-gray-50 p-3 rounded-md shadow-md mx-auto justify-between items-center cursor-pointer">
      <div className="flex items-center gap-x-3">
        <div className="flex items-center justify-center font-bold text-yellow-300 w-[50px] h-[50px] rounded-full bg-gray-200">
          {data.percentage + "%"}
        </div>
        <div className="flex flex-col ">
          <p className="text-red-500">
            {(data.id as string).substring(0, 20) + "..."}
          </p>
          <p>{data.code}</p>
        </div>
      </div>
      <TrashIcon  onClick={Delete}/>
    </div>
  );
}

export default CouponItem;

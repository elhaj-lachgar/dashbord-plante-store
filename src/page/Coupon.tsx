import { useEffect, useState } from "react";
import GetCouponHandler from "../integration/get-coupon";
import CouponItem from "../components/CouponItem";

function Coupon() {
  const [data, setData] = useState<any>(null);
  const GetCoupon = async () => {
    const res = await GetCouponHandler();
    if (!res) return;
    setData(res.coupons);
  };

  useEffect(() => {
    GetCoupon();
  }, []);

  console.log(data);
  return (
    <div className="p-3 w-full   lg:w-[calc(100%-200px)] lg:left-[200px] lg:relative flex flex-col mt-12 lg:mt-5 gap-y-6 ">
      <h1 className="text-center text-4xl font-bold text-gray-700 w-full">Coupons</h1>
      {data ? (
        <>
          {data?.map((ele: any) => (
            <CouponItem data={ele} />
          ))}
        </>
      ) : null}
    </div>
  );
}

export default Coupon;

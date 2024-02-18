import { useEffect, useState } from "react"
import OrderItem from "../components/OrderItem"
import GetOrders from "../integration/get-orders";

function MyOrders() {
  const [ data , setData ] = useState<any>(null);
  const fetcher = async () => {
    const res = await GetOrders();
    if(!res) return ;
    setData(res.data);
  }

  useEffect(()=>{
    fetcher();
  },[]);
  return (
    <div className="p-3 w-full h-[100vh  lg:w-[calc(100%-200px)] lg:left-[200px] lg:relative flex flex-col mt-12 lg:mt-5 gap-y-6 items-center">
      <h1 className="text-center text-4xl font-bold text-gray-700"> Orders</h1>
        {
          data
          ?
          <>
          {
            data.map((ele:any)=>(
              <OrderItem  data={ele}/>
            ))
          }
          </>
          :
          null
        }
    </div>
  )
}

export default MyOrders

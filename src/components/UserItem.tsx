import { Button, Select } from "@chakra-ui/react";
import { MapPin } from "lucide-react";
import {  useState } from "react";
import UpdateRoleHandler from "../integration/update-role";

function UserItem({ data }: { data: any }) {
  const [role , setRole ] = useState<null|string>(null);
  const roleUpdate = async () => {
    if(!role || role == data.role)  return;
    const res  = await UpdateRoleHandler(data.id , role);
    if(!res) return;
    if(res?.success) window.location.reload();
  }


  return (
    <div className="flex border  w-[80%] md:w-[70%]  mx-auto flex-col px-3 py-2 md:py-4 mt-10 shadow-md h-fit rounded-lg">
      <div className="flex flex-col gap-y-2 ">
        <img
          src={data.profile || "/user/avatar.jpg"}
          className="w-[40px] h-[40px] rounded-full border"
        />
        <div className="flex flex-col md:flex-row md:gap-x-5 gap-y-2 font-medium text-gray-500">
          <p>
            <span className="text-black font-semibold text-lg">
              Email :{"  "}
            </span>{" "}
            {data.email.substring(0, 22)}
          </p>
          <p>
            <span className="text-black font-semibold text-lg">Join : </span>{" "}
            {data.createdAt?.split("T")[0]}
          </p>
        </div>
      </div>
      <hr />
      <div className="min-h-[100px] md:min-h-[200px] flex-col gap-y-3 py-3">
        {data.Address
      ? 
        <>
          {data.Address.map((add : any) => (
        <div className="flex items-center py-3 px-3 bg-gray-100 rounded-lg gap-x-3 mt-3 border border-gray-500">
          <div className="bg-white w-[50px] h-[50px] border-gray-500 flex items-center justify-center rounded-full border  ">
            <MapPin color="yellow" />
          </div>
          <div className="flex flex-col">
            <p className=" text-muted-foreground">
              {add.country}
            </p>
            <p className=" text-muted-foreground">{add.street}</p>
            <p className=" text-muted-foreground">
              {add.city}
            </p>
          </div>
        </div>
       ))}</> : null}
      </div>
      <hr />
      <div className="py-2 px-3 mt-2 flex md:items-center flex-col md:flex-row gap-y-2 justify-between">
        <div className="md:w-[250px]">
          <Select placeholder={data.role} onChange={(e)=>setRole(e.currentTarget.value)}>
          <option value={data.role == "USER" ? "ADMIN" : "USER"}>{data.role == "USER" ? "ADMIN" : "USER"}</option>
          </Select>
        </div>
        <div className="flex items-center gap-x-2 justify-end">
          <Button color={"green"} size={"sm"} onClick={()=>{roleUpdate()}}>
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserItem;

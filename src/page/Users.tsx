import { useEffect, useState } from "react";
import UserItem from "../components/UserItem";
import GetUsers from "../integration/get-users";

function Users() {
  const [data, setData] = useState<any>(null);
  const getUsersHandler = async () => {
    const res = await GetUsers();
    if (!res) return;
    setData(res.data);
  };
  useEffect(() => {
    getUsersHandler();
  }, []);
  return (
    <div className="p-3 w-full h-[100vh  lg:w-[calc(100%-200px)] lg:left-[200px] lg:relative flex flex-col mt-12 lg:mt-5 gap-y-6 items-center">
      <h1 className="text-center text-4xl font-bold text-gray-700">
        Customers
      </h1>
      { data && data.map((ele: any) => (
        <UserItem data={ele} key={ele.id} />
      ))}
    </div>
  );
}

export default Users;

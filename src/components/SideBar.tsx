import { Button } from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { XCircle } from "lucide-react";
import cn from "classnames";
import Logo from "./Logo";
import { SIDE_BAR_ITEMS } from "../lib/utils";
import { Link } from "react-router-dom";

function SideBar() {
  const [extand, setExtand] = useState(false);
  return (
    <>
      <div className="block lg:hidden fixed top-4 left-4 z-10 ">
        <Button onClick={() => setExtand(!extand)}>
          <Menu />
        </Button>
      </div>
      <div
        className={cn(
          "lg:flex flex-col fixed  gap-y-5 w-[200px] bg-gray-50 min-h-[100vh] top-0 py-4 px-3 z-10",
          extand ? "flex" : "hidden"
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <XCircle
            onClick={() => setExtand(false)}
            className="cursor-pointer block lg:hidden"
          />
        </div>
        <hr/>
        {SIDE_BAR_ITEMS.map((item) => (
          <Link to={item.link} className="w-full">
            <div className="hover:bg-blue-100 rounded-md p-2 cursor-pointer flex items-center justify-between text-gray-500 font-medium text-lg">
              {item.name}
              <item.icon className="text-green-400" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default SideBar;

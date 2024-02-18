import React, { useLayoutEffect } from "react";
import SideBar from "../components/SideBar";

function ProtectLayout({ children }: { children: React.ReactNode }) {

  useLayoutEffect(() => {
    if (!window.localStorage.getItem("user")) {
      window.location.href="/sign-in"
      return;
    }
  }, []);
  return (
    <main className="flex ">
      <SideBar />
      {children}
    </main>
  );
}

export default ProtectLayout;

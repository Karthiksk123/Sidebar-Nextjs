import React from "react";
import Sidebar from "./Sidebar";

const Layout = ( { children}) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-[#3B81F6] flex-1 p-4 text-white ">
      {children}</div>
    </div>
  );
};

export default Layout;

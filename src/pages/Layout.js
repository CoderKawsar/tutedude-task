import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <Header />
      <div className="mx-44">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

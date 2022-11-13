import React from "react";
import Breadcrumb from "../Breadcrumb";
import Earnings from "./components/Earnings";
import ReferalCode from "./components/ReferalCode";

function ReferAndEarn() {
  return (
    <div>
      <Breadcrumb />
      <div className="flex justify-center gap-x-24">
        <Earnings />
        <ReferalCode />
      </div>
    </div>
  );
}

export default ReferAndEarn;

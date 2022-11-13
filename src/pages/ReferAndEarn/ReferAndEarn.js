import React from "react";
import "./ReferAndEarn.css";
import Breadcrumb from "./components/Breadcrumb";
import Earnings from "./components/Earnings";
import Guidelines from "./components/Guidelines";
import ReferalCode from "./components/ReferalCode";
import { Link } from "react-router-dom";

function ReferAndEarn() {
  return (
    <div>
      <Breadcrumb />
      <div className="flex justify-center gap-x-24">
        <Earnings />
        <ReferalCode />
      </div>
      <Guidelines />
      <Link to="/" className="font-medium text-primary mb-4 block">
        Friends Who Enrolled
      </Link>
      <Link to="/" className="font-medium text-primary mb-4 block">
        Terms and conditions
      </Link>
    </div>
  );
}

export default ReferAndEarn;

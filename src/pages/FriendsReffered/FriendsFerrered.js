import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";
import FriendsEnrolled from "./components/FriendsEnrolled";
import ReferalCode from "./components/ReferalCode";
import WalletBalance from "./components/WalletBalance";

function FriendsFerrered() {
  return (
    <div>
      <Breadcrumb />
      <div className="flex justify-between">
        <ReferalCode />
        <WalletBalance />
      </div>
      <FriendsEnrolled />
      <Link to="/" className="font-medium text-primary mt-12 mb-4 block">
        Terms and conditions
      </Link>
    </div>
  );
}

export default FriendsFerrered;

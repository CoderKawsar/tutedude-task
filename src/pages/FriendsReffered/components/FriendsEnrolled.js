import React from "react";
import FriendReferred from "./FriendReferred";

function FriendsEnrolled() {
  return (
    <div className="mt-20">
      <h3 className="font-xl mb-5">
        Friends who enrolled <span className="text-[#626262]">(3)</span>
      </h3>
      <div className="grid grid-cols-3 gap-5">
        <FriendReferred />
        <FriendReferred />
        <FriendReferred />
      </div>
    </div>
  );
}

export default FriendsEnrolled;

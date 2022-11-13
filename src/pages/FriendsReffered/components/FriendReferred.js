import React from "react";

function FriendReferred() {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary text-white p-5 rounded-[20px]">
      <div className="flex justify-between">
        <h5 className="font-bold mb-1">Dhiraj Saxena</h5>
        <p className="text-sm">14 Sep, 2022</p>
      </div>
      <h6 className="text-sm">Courses Enrolled (6)</h6>
      <div className="mt-2 flex gap-2 overflow-hidden">
        <button className="px-3 py-1 border rounded-[20px] text-sm">
          UI/UX
        </button>
        <button className="px-3 py-1 border rounded-[20px] text-sm">
          UI/UX
        </button>
        <button className="px-3 py-1 border rounded-[20px] text-sm">
          UI/UX
        </button>
        <button className="px-3 py-1 border rounded-[20px] text-sm">
          UI/UX
        </button>
        <button className="px-3 py-1 border rounded-[20px] text-sm">
          UI/UX
        </button>
        <button className="px-3 py-1 border rounded-[20px] text-sm">
          UI/UX
        </button>
        <button className="px-3 py-1 border rounded-[20px] text-sm">
          UI/UX
        </button>
      </div>
      <h6 className="mt-8">
        Referral Amount{" "}
        <span className="font-semibold text-2xl">&#8377;185</span>
      </h6>
    </div>
  );
}

export default FriendReferred;

import React from "react";

function Earnings() {
  return (
    <div className=" p-5 shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] rounded-[20px]">
      <div className="flex gap-x-16">
        <div>
          <h3 className="text-primary text-sm mb-1">Referal Earning</h3>
          <p className="font-medium text-3xl">&#8377; 2,500</p>
        </div>
        <div>
          <h3 className="text-primary text-sm mb-1">Total Referals</h3>
          <p className="font-medium text-3xl">7</p>
        </div>
        <div>
          <h3 className="text-primary text-sm mb-1">Wallet Balance</h3>
          <p className="font-medium text-3xl">&#8377; 500</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="mt-8 font-medium text-white bg-primary px-4 py-2 rounded-[20px]">
          Withdraw Balance
        </button>
      </div>
    </div>
  );
}

export default Earnings;

import React from "react";
import { HiOutlineCash, HiOutlineChartSquareBar } from "react-icons/hi";
import { BsWallet2 } from "react-icons/bs";

const DashboardCol1 = () => {
  return (
    <div className="flex flex-col w-full gap-4 mb-10">
      <div className="flex">
        <h1 className="text-2xl ">Dashboard</h1>
        <div></div>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-80 h-fit border flex gap-6 rounded-lg px-6 py-4">
          <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
            <HiOutlineCash size="25px" className="text-[#4E00AD]" />
          </div>
          <div className="flex flex-col gap-6">
            <h4>All Time Cash</h4>
            <h2 className="font-bold">N4,390,800</h2>
          </div>
        </div>
        <div className="w-80 h-fit border flex gap-6 rounded-lg px-6 py-4">
          <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
            <BsWallet2 size="20px" className="text-[#4E00AD]" />
          </div>
          <div className="flex flex-col gap-6">
            <h4>Available Cash</h4>
            <h2 className="font-bold">N4,390,800</h2>
          </div>
        </div>
        <div className="w-80 h-fit border flex gap-6 rounded-lg px-6 py-4">
          <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
            <HiOutlineChartSquareBar size="25px" className="text-[#4E00AD]" />
          </div>
          <div className="flex flex-col gap-6">
            <h4>Today Sales</h4>
            <h2 className="font-bold">N4,390,800</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCol1;

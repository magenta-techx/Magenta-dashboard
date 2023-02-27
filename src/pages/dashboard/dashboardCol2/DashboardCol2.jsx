import React from "react";
import TransactionSta from "./TransactionSta";
import { HiOutlineFilter } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { ItemContext } from "../../../contextApi/stateMang.contextApi";

const DashboardCol2 = () => {
  const { GET_CHART_DATA } = ItemContext();
  return (
    <div className=" w-full h-fit mb-1  rounded-lg flex flex-col">
      <div className="flex justify-between">
        <div className="bg-[#4E00AD] rounded-xl w-[143px] h-[48px] mb-5  flex justify-center items-center cursor-pointer">
          <div
            onClick={() => {
              window.location.reload()
            }}
            className="flex gap-6 items-center text-white"
          >
            <small className="text-sm albert font-normal">Refresh</small>
            <img src="/assets/refresh.png" alt="refresh image" />
          </div>
        </div>
        <div>
          <div className="w-[344px] bg-white opacity-75 rounded-xl border gap-4 px-4 h-[48px] flex items-center justify-end">
            <div className="">
              <BsSearch className="text-[#4E00AD]" />
            </div>
            <input
              placeholder="Search"
              className="border-r-[#93A3C0] border-r outline-none w-[80] flex-1 font-medium albert text-[16px]"
            />
            <div className="">
              <HiOutlineFilter className="text-[#4E00AD]" />
            </div>
          </div>
        </div>
      </div>

      <TransactionSta />
    </div>
  );
};

export default DashboardCol2;

import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const DashboardCol3Part1 = () => {
  return (
    <div className="w-8/12 border rounded-lg shadow-md h-fit flex flex-col p-4 gap-4">
      <div className="flex justify-between">
        <h1>Company Branch</h1>
        <p className="text-[rgba(0,0,0,0.6)]">
          last updated <span className="text-black s">16-9-2022</span>
        </p>
      </div>
      <div className="border h-fit w-full py-4">
        <div className="flex justify-between border-b p-2 bg-[#F7F9FA]">
          <h1>Branch name</h1>
          <h1>Branch ID</h1>
          <h1>Date added</h1>
        </div>
        <div className="content-dahboard ">
          <div className="flex justify-between mx-2 py-2 ">
            <small>Lagos Branch</small>
            <small>AD000000</small>
            <small>16 - 9 - 2022</small>
          </div>
          <div className="flex justify-between mx-2 py-2 ">
            <small>Lagos Branch</small>
            <small>AD000000</small>
            <small>16 - 9 - 2022</small>
          </div>
          <div className="flex justify-between mx-2 py-2 ">
            <small>Lagos Branch</small>
            <small>AD000000</small>
            <small>16 - 9 - 2022</small>
          </div>
        </div>
      </div>
      <div className="flex cursor-pointer text-[#4E00AD] items-center gap-6 justify-end">
        <p>View all</p>
        <HiOutlineArrowRight className="text-xl"/>
      </div>
    </div>
  );
};

export default DashboardCol3Part1;

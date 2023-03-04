import React, { useEffect } from "react";
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { HiOutlineFilter } from "react-icons/hi";
import { Navigate, useNavigate } from "react-router-dom";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import Branch from "./Branch";
import Header from "./Header";

const ViewAllBranch = () => {
  const navigate = useNavigate();
  const {
    setShowCreateBranch,
    Get_Branch,
    state: { branchDetails },
  } = ItemContext();
  const handleClick = () => {
    setShowCreateBranch(true);
    // document.body.style.overflow = "hidden";
  };
  useEffect(() => {
    Get_Branch();
  }, []);
  return (
    <div className="w-[80%] px-10 py-6 flex flex-col gap-10 overflow-scroll overflow-x-auto">
      <div className="w-[full]  bg-white   ">
        <Header />
      </div>
      <div className="flex gap-6 items-center">
        <div
          className=" w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer"
          onClick={() => navigate("/branch")}
        >
          <BsArrowLeft className="text-[#4E00AD] text-2xl" />
        </div>
        <p className="text-2xl">Added Branch</p>
      </div>
      <div className="flex flex-col gap-6 w-full ">
        <div className="flex  gap-6 items-center justify-between">
          <div className="w-[344px] bg-white opacity-75 rounded-xl border gap-4 px-4 h-[48px] flex items-center justify-end">
            <div className="">
              <BsSearch className="text-[#4E00AD]" />
            </div>
            <input
              placeholder="Search"
              className="border-r-[#93A3C0] border-r outline-none w-[80] flex-1"
            />
            <div className="">
              <HiOutlineFilter className="text-[#4E00AD]" />
            </div>
          </div>

          <div
            onClick={handleClick}
            className="bg-[#4E00AD] w-[330px] h-[45px] rounded-xl text-white flex justify-center items-center cursor-pointer"
          >
            Create New Branch
          </div>
        </div>
        {/* Mapping through the ARRAY and displaying all here  */}
        <div className="flex flex-wrap gap-10">
          {branchDetails.map((detail) => {
            return <Branch key={detail.id} branch={detail} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewAllBranch;

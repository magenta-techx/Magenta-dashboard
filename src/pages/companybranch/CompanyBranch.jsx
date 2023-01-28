import axios from "axios";
import React  from "react";
import Branch from "../../components/Branch";
import Header from "../../components/Header";
import { HiArrowRight, HiOutlineFilter } from "react-icons/hi";
import {  BsPlusLg, BsSearch } from "react-icons/bs";
import { ItemContext } from "../../contextApi/stateMang.contextApi";
import { Outlet, useNavigate } from "react-router-dom";

const CompanyBranch = () => {
  const navigate = useNavigate();
  const {
    state: { branchDetails },
    setShowCreateBranch,
    Get_Branch,
    setName,
    setAddress,
    setPassCode,
  } = ItemContext();

  const handleClick = () => {
    document.body.style.overflow = "hidden";
    setShowCreateBranch(true);
    setName("");
    setAddress("");
    setPassCode("");
    Get_Branch();
  };
  const handleClick2 = () => {
    navigate("/branch/all");
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <div className="w-[80%] px-8 py-6 ">
        <div className="w-[full]  bg-white   ">
          <Header />
        </div>
        <div className=" flex flex-col gap-4 py-6 w-full">
          <div className="flex justify-between w-full">
            <p className="font-medium text-[24px] albert">Added Branch</p>
            <div>
              <div className="w-[344px] bg-white opacity-75 rounded-xl border gap-4 px-4 h-[48px] flex items-center justify-end">
                <div className="">
                  <BsSearch className="text-[#4E00AD]" />
                </div>
                <input
                  placeholder="Search"
                  className="border-r-[#93A3C0] border-r outline-none w-[80] flex-1 font-medium"
                />
                <div className="">
                  <HiOutlineFilter className="text-[#4E00AD]" />
                </div>
              </div>
            </div>
          </div>
          <div className="border p-4 flex flex-col ">
            <div className="flex flex-wrap gap-4">
              {branchDetails
                ?.filter((a, idx) => idx < 2)
                .map((detail) => {
                  return <Branch key={detail.id} branch={detail} />;
                })}

              <div className="w-[300px]  h-[240px] flex justify-center items-center">
                <div
                  onClick={handleClick}
                  className="bg-[#FAFAFA] cursor-pointer w-full h-[150px] flex justify-center items-center"
                >
                  <div className="w-[40px] h-[40px] bg-[#4E00AD] rounded-md flex justify-center items-center">
                    <BsPlusLg className="text-white " />
                  </div>
                </div>
              </div>
            </div>
            {branchDetails?.length >= 2 && (
              <div className="flex justify-end w-full items-center">
                <div
                  className="cursor-pointer flex items-center- gap-4 albert"
                  onClick={handleClick2}
                >
                  <p className="text-[18px] font-medium">View all</p>
                  <HiArrowRight className="text-xl text-[#7132BD]" />
                </div>
              </div>
            )}
          </div>
          <div className="w-full flex gap-10">
            <div className="w-1/2 border rounded-lg shadow-md h-fit flex flex-col p-4 gap-4">
              <h2 className="font-medium text-xl">Create New Branch</h2>
              <p className="text-[18px]">
                You have created 3 branches for Shorprite, would you like to
                create a new branch?
              </p>
              <div className="w-full flex justify-center">
                <img
                  className="w-[300px] h-[162.1px]"
                  src="/assets/undraw_grades_re_j7d6 1.png"
                  alt="undraw_grades_re_j7d6 1"
                />
              </div>
              <div className="flex justify-end" onClick={() => {
                setShowCreateBranch(true);
                     document.body.style.overflow = "hidden";
              }}>
                <button className="text-sm w-[157px] h-[45px]  flex rounded-xl justify-center items-center bg-[#4E00AD] text-white font-medium cursor-pointer  ">
                  Create New Branch
                </button>
              </div>
            </div>
            <div className="w-1/2 border rounded-lg shadow-md h-fit flex flex-col p-4 gap-4"></div>
          </div>
        </div>
        {/* <Outlet /> */}
      </div>
    </>
  );
};

export default CompanyBranch;

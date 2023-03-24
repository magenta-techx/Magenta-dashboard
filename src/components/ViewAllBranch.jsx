import React from "react";
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { HiOutlineFilter } from "react-icons/hi";
import { Navigate, useNavigate } from "react-router-dom";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import Branch from "./Branch";
import AllBranch from "./allBranch";
import Header from "./Header";

const ViewAllBranch = () => {
  const navigate = useNavigate();
  const {
    setShowCreateBranch,
    state: { branchDetails },
  } = ItemContext();
  const handleClick = () => {
    setShowCreateBranch(true);
    // document.body.style.overflow = "hidden";
  };
  return (
    <div className="flex sm:flex-row flex-col-reverse w-screen h-full">
      {showNav && (
        <div className="lg:w-[20%] hidden h-screen sm:w-[107px] sm:min-h-screen  min-h-screen bg-[#200047] sm:flex flex-col">
          <Navbar />
        </div>
      )}
      <div className="lg:w-[80%] xs:w-[100%] overflow-hidden overflow-y-scroll h-full sm:h-screen sm:px-8 pb-4 sm:py-6 flex flex-col gap-6">
      <div className="w-full hidden sm:flex bg-white   ">
          <Header showLogo={true} />
        </div>
        <div
          className="w-full  bg-white sm:hidden "
          onClick={() => navigate("/branch")}
        >
          <Header showLogo={false} />
        </div>
        <div className="flex gap-6 items-center font-medium text-xl albert mx-4 sm:ml-0">
          <div
            className=" w-[50px] h-[50px] xs:hidden sm:flex flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer"
            onClick={() => navigate("/branch")}
          >
            <BsArrowLeft className="text-[#4E00AD] text-2xl" />
          </div>
          <p className="text-2xl xs:mx-4 sm:mx-0">Added Branch</p>
        </div>
        <div className="flex flex-col gap-6 w-full ">
          <div className="flex  gap-6 items-center justify-between font-medium text-xl albert mx-4 sm:ml-0">
            <div className="w-full sm:w-[344px] bg-white opacity-75 rounded-xl border gap-4 px-4 h-[48px] flex items-center justify-end">
              <div className="">
                <BsSearch className="text-[#4E00AD]" />
              </div>
              <input
                placeholder="Search"
                className="border-r-[#93A3C0] border-r outline-none w-full flex-1 font-medium albert text-[16px]"
              />
              <div className="">
                <HiOutlineFilter className="text-[#4E00AD]" />
              </div>
            </div>
            <div
              onClick={handleClick}
              className="bg-[#4E00AD] lg:w-[330px] sm:w-[241px] h-[45px] rounded-xl text-white hidden sm:flex justify-center items-center cursor-pointer text-[12px] sm:text-sm"
            >
              Create New Branch
            </div>
          </div>
          <div className="  relative ">
            <div
              className="bg-[#4E00AD] rounded-xl   w-[45%]  flex justify-center items-center cursor-pointer  text-white h-[60px] sm:hidden top-3 left-4 px-2 absolute btn  sm:static pointer-events-auto z-10"
              onClick={handleClick}
            >
              Create New Branch
            </div>
            <div className="w-full h-fit  overflow-scroll overflow-x-hidden xs:grid relative  grid-cols-2 sm:grid-cols-3  py-4 px-4 grid-work gap-3">
              {branchDetails.map((detail) => {
                return (
                  <>
                    <AllBranch isDev={true} key={detail.id} branch={detail} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllBranch;

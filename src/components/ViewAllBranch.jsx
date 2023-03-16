import React, { useEffect } from "react";
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { HiOutlineFilter } from "react-icons/hi";
import { Navigate, useNavigate } from "react-router-dom";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import Branch from "./Branch";
import AllBranch from "./allBranch";
import Header from "./Header";
import Navbar from "./Navbar";

const ViewAllBranch = () => {
  const navigate = useNavigate();
  const {
    setShowCreateBranch,
    Get_Branch,
    showNav,
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
    <div className="flex w-screen ">
      {showNav && (
        <div className="lg:w-[20%] xs:hidden h-screen sm:w-[107px] sm:min-h-screen sm:flex min-h-screen bg-[#200047] flex flex-col">
          <Navbar />
        </div>
      )}
      <div className="lg:w-[80%] sm:w-[90%] sm:px-10 sm:py-6 flex flex-col gap-10 overflow-y-scroll sm:overflow-hidden">
        <div className="w-full xs:hidden sm:flex bg-white   ">
          <Header showLogo={true}/>
        </div>
        <div className="w-full  bg-white sm:hidden "   onClick={() => navigate("/branch")}>
          <Header showLogo={false}/>
        </div>
        <div className="flex gap-6 items-center">
          <div
            className=" w-[50px] h-[50px] xs:hidden sm:flex flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer"
            onClick={() => navigate("/branch")}
          >
            <BsArrowLeft className="text-[#4E00AD] text-2xl" />
          </div>
          <p className="text-2xl xs:mx-4 sm:mx-0">Added Branch</p>
        </div>
        <div className="flex flex-col gap-6 w-full ">
          <div className="flex xs:flex-col sm:flex-row gap-6 items-center justify-between  ">
            <div className="lg:w-[344px] sm:w-[290px] xs:w-[95%] bg-white opacity-75 rounded-xl border gap-4 px-4 h-[48px] flex items-center justify-end ">
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
              className="bg-[#4E00AD] xs:w-[95%]  lg:w-[330px] sm:w-[241px] xs:p-3 xs:ml-2 sm:mr-0 xs:mr-auto h-[45px] rounded-xl text-white flex justify-center items-center cursor-pointer"
            >
              Create New Branch
            </div>
          </div>
          {/* Mapping through the ARRAY and displaying all here  */}
          <div className="flex  xs:flex-wrap-reverse sm:flex-wrap lg:gap-10 xs:gap-2 xs:mx-2 sm:mx-0 sm:gap-[24px] ">
            {branchDetails.map((detail) => {
              return <AllBranch key={detail.id} branch={detail} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllBranch;

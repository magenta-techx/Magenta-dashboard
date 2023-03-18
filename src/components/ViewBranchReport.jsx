import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsArrowLeft, BsSearch, BsWallet2 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import {
  HiOutlineCash,
  HiOutlineChartSquareBar,
  HiOutlineFilter,
  HiOutlineUserGroup,
  HiOutlineArrowNarrowDown,
} from "react-icons/hi";
import { MdEditLocation } from "react-icons/md";
import { CiSaveUp1 } from "react-icons/ci";
import { RiCalendar2Line } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
import { AiOutlineIdcard } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import Header from "./Header";
import Navbar from "./Navbar";
import TransactionCard from "./transactionCard";

const ViewBranchReport = () => {
  const [data, setData] = useState([]);
  const {
    setShowEdit,
    showNav,
    setShowCreateBranch,
    setShowDeleteBranch,
    dispatch,
  } = ItemContext();
  const history = async () => {
    const token = localStorage.getItem("login_token");
    const get = localStorage.getItem("branch_report");
    const { id } = JSON.parse(get);
    try {
      const res = await axios.get(
        `https://backend.magentacashier.com/business/branch/transactions/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleTransScroll = () => {
    document.getElementById("scroll").scrollTop += 100;
  };
  const handleClick = () => {
    setShowCreateBranch(true);
    // document.body.style.overflow = "hidden";
  };
  useEffect(() => {
    history();
  }, []);
  const handleEdit = () => {
    setShowEdit(true);
    // document.body.style.overflow = "hidden";
  };
  const handleDelete = (item) => {
    setShowDeleteBranch(true);
    dispatch({ type: "Individual Details", payload: item });
  };
  const navigate = useNavigate();
  const repor = localStorage.getItem("branch_report");

  const report = JSON.parse(repor);

  return (
    <div className="flex w-screen">
      {showNav && (
        <div className="lg:w-[20%] hidden h-screen sm:w-[107px] sm:min-h-screen  min-h-screen bg-[#200047] sm:flex flex-col">
          <Navbar />
        </div>
      )}
      <div className="sm:w-[100%] w-[100%] sm:px-10 sm:py-6 flex flex-col gap-10 overflow-y-scroll">
        <div className="w-full hidden sm:flex bg-white   ">
          <Header showLogo={true} />
        </div>
        <div
          className="w-full  bg-white sm:hidden "
          onClick={() => navigate("/branch")}
        >
          <Header showLogo={false} />
        </div>
        <div className="flex justify-between items-center">
          <div className="mx-3 sm:mx-0 flex gap-6 items-center">
            <div
              className=" w-[50px] hidden sm:flex h-[50px]  justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer"
              onClick={() => {
                navigate("/branch");
                document.documentElement.scrollTop = 0;
              }}
            >
              <BsArrowLeft className="text-[#4E00AD] text-2xl" />
            </div>
            <p className="text-2xl -mt-5 sm:-mt-0 font-medium abert">{report?.name}</p>
          </div>
          <p className="text-[#6B778C] text-[16px]  gap-2 hidden sm:flex">
            <span>Branch Id</span>
            <span className="text-black inter font-normal ">
              {report?.unique_id}
            </span>
          </p>
        </div>
        <div className="flex w-full px-3 -mt-6 sm:-mt-0 sm:px-0">
          <div className="flex gap-2 items-center albert text-[#7132BD] xs:w-full sm:w-fit ">
            <MdEditLocation className="h-[20px] w-[17.25px] text-[#4E00AD]" />
            <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-[16px] font-normal">
              {report?.address}
            </p>
            <div className="flex flex-col cursor-pointer xs:ml-auto">
              <p
                className="flex items-center justify-center"
                onClick={handleEdit}
              >
                <FiEdit className="" />
                <small className="xs:hidden sm:flex">Edit</small>
              </p>
              <img className="hidden sm:flex" src="/assets/line.png" />
            </div>
          </div>
        </div>
        <div className="upper sm:hidden flex justify-between">
          <div
            onClick={handleClick}
            className="bg-[#4E00AD] mx-2 sm:hidden w-[50%]  lg:w-[330px] sm:w-[241px] xs:p-3 xs:ml-2 sm:mr-0 xs:mr-auto h-[45px] rounded-xl text-white flex justify-center items-center cursor-pointer"
          >
            Create New Branch
          </div>
          <div className="bg-[#4E00AD] w-fit p-3 h-[45px] rounded-lg mr-2">
            <BsTrash
              className="text-white text-xl cursor-pointer"
              onClick={() => handleDelete(report)}
            />
          </div>
        </div>

        <div className="sm:flex p-2 w-full justify-between sm:m-0 gap-4 grid grid-cols-2">
          <div className="sm:w-80 w-[1/2] h-fit sm:h-fit border lg:flex lg:gap-6 sm:gap-2 rounded-lg px-6 py-4">
            <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
              <HiOutlineChartSquareBar size="25px" className="text-[#4E00AD]" />
            </div>
            <div className="flex flex-col gap-6 inter">
              <h4 className=" font-light sm:font-normal sm:text-[14px] lg:text-[16px] pt-3 sm:pt-4 sm:text-gray-500">
                Total Sales Made
              </h4>
              <h2 className="font-medium flex items-center text-base sm:text-xl">
                {/* <TbCurrencyNaira /> */}
                {report?.sales_and_customers?.sales}
              </h2>
            </div>
          </div>
          <div className="sm:w-80 w-[1/2] h-fit sm:h-fit border lg:flex lg:gap-6 sm:gap-2 rounded-lg px-6 py-4">
            <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
              <HiOutlineUserGroup size="20px" className="text-[#4E00AD]" />
            </div>
            <div className="flex flex-col gap-6 inter">
              <h4 className="font-light sm:font-normal sm:text-[14px] lg:text-[16px] pt-3 sm:pt-4 sm:text-gray-500">
                Total Customers
              </h4>
              <h2 className="font-medium flex items-center text-base sm:text-xl">
                {/* <TbCurrencyNaira />{" "} */}
                {report?.sales_and_customers?.sales
                  ? report?.sales_and_customers?.sales
                  : 0}
              </h2>
            </div>
          </div>
          <div className="sm:w-80 w-[1/2] h-fit rounded-lg sm:h-fit border lg:flex lg:gap-6 sm:gap-2rounded-lg px-6 py-4">
            <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
              <RiCalendar2Line size="25px" className="text-[#4E00AD]" />
            </div>
            <div className="flex flex-col gap-6 inter">
              <h4 className="font-light sm:font-normal sm:text-[14px] lg:text-[16px] pt-3 sm:pt-4 sm:text-gray-500">
                Date Created
              </h4>
              <h2 className="font-medium text-base sm:text-xl">
                {report?.created_at?.substring(0, 10)}
              </h2>
            </div>
          </div>
          <div className="sm:w-80 w-[1/2] h-fit sm:h-fit sm:hidden  border lg:flex lg:gap-6 sm:gap-2 rounded-lg px-6 py-4">
            <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
              <AiOutlineIdcard size="25px" className="text-[#4E00AD]" />
            </div>
            <div className="flex flex-col gap-1 sm:gap-6 inter">
              <h4 className="font-light sm:font-normal sm:text-[14px] lg:text-[16px] pt-3 sm:pt-4 sm:text-gray-500">
                Branch Id
              </h4>
              <h2 className="font-medium flex items-center text-[15px] sm:text-xl">
                {report?.unique_id}
              </h2>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" sm:flex justify-between items-center albert  sm:mb-5">
            <h2 className="text-xl font-medium sm:pb-0 p-2 sm:p-0 pb-3">
              Transaction History
            </h2>
            <div className=" w-[95%] mx-2 sm:mx-0 sm:w-[344px] bg-white opacity-75 rounded-xl border gap-4 px-4 h-[48px] flex items-center justify-end">
              <div className="">
                <BsSearch className="text-[#4E00AD]" />
              </div>
              <input
                placeholder="Search"
                className="border-r-[#93A3C0] border-r outline-none w-[80px] albert flex-1 font-medium"
              />
              <div className="">
                <HiOutlineFilter className="text-[#4E00AD]" />
              </div>
            </div>
          </div>
          <div className=" sm:hidden">
            <div className="content h-[480px]  mb-3">
              <div className="clip h-[480px] overflow-y-auto">
                {data.map((item) => (
                  <TransactionCard data={item} key={item.id} />
                ))}
                <div className="div sm:hidden relative h-full">
                  {!data.length && (
                    <div className="absolute  left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                      <img
                        src="/assets/NothingHereYet.png"
                        alt="Nothing here yet image"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="sm:border mt-1 h-[442px] hidden sm:block">
            <div
              id="scroll"
              className="wrap  border-none overflow-y-scroll h-[380px] scroll-smooth"
            >
              <table
                className="border-none hidden sm:table w-full py-4 relative "
                onClick={() => console.log("object")}
              >
                <thead className="-top-0.5  sticky ">
                  <tr className="border-b  bg-[#F7F9FA]">
                    <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">
                      User UUID
                    </th>
                    <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">
                      Branch Name
                    </th>
                    <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">
                      Billed Amount
                    </th>
                    <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">
                      Amount
                    </th>
                    <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">
                      Reference
                    </th>
                    <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">
                      Card Type
                    </th>
                  </tr>
                </thead>
                <tbody className="content-dashboard border">
                  {data.map((dat, idx) => {
                    return (
                      <tr className="text-center border" key={idx}>
                        <td className="py-2 font-normal text-sm sm:text-xs">
                          {dat.client.magenta_id}
                        </td>
                        <td className="py-2 font-normal text-sm sm:text-xs">
                          {dat.branch_name}
                        </td>
                        <td className="py-2 font-normal text-sm sm:text-xs">
                          {dat.billed_amount}
                        </td>
                        <td className="py-2 font-normal text-sm sm:text-xs">
                          {dat.amount}
                        </td>
                        <td className="py-2 font-normal text-sm sm:text-xs">
                          {dat.reference}
                        </td>
                        <td className="py-2 font-normal text-sm sm:text-xs">
                          {dat.card_type}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                {!data.length && (
                  <div className="absolute  left-[50%] top-[200px] -translate-x-[50%] -translate-y-[50%]">
                    <img
                      src="/assets/NothingHereYet.png"
                      alt="Nothing here yet image"
                    />
                  </div>
                )}
              </table>
            </div>
            <div className="xs:hidden sm:flex justify-end  relative h-2 m-4 ">
              <div className="ma mt-[15.2px] flex ">
                <IoMdArrowDropdown
                  className={
                    !data.length
                      ? "flex justify-center m-auto text-gray-500 cursor-pointer"
                      : "flex justify-center m-auto text-[#4E00AD] cursor-pointer "
                  }
                />
                <p
                  className={
                    !data.length
                      ? "text-xs albert text-gray-500"
                      : "text-xs albert text-black"
                  }
                >
                  9 row(s) per page
                </p>
              </div>
              <div className="m mx-2 ">
                <HiOutlineArrowNarrowDown
                  onClick={handleTransScroll}
                  className={
                    !data.length
                      ? "flex justify-center m-auto text-gray-500 cursor-pointer"
                      : "flex justify-center m-auto text-[#4E00AD] cursor-pointer"
                  }
                />
                <p
                  className={
                    !data.length
                      ? "text-xs albert text-gray-500"
                      : "text-xs albert text-black"
                  }
                >
                  More
                </p>
              </div>
            </div>
          </div>
          <button
            disabled={!data.length}
            className="mx-3 mb-3 sm:mb-0 sm:mx-0 bg-[#4E00AD] text-white disabled:text-gray-400 disabled:font-normal disabled:bg-gray-100 flex  w-fit rounded-xl p-3 lg:mt-4 sm:mt-4 "
          >
            <h1 className="px-2  font-normal albert ">
              Export Transaction Table
            </h1>
            <b className="cursor-pointer px-1 ">
              <CiSaveUp1 className="mt-1 text-lg " />
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBranchReport;

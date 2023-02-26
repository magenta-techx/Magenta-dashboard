import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsArrowLeft, BsSearch, BsWallet2 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import {
  HiOutlineCash,
  HiOutlineChartSquareBar,
  HiOutlineFilter,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { MdEditLocation } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import Header from "./Header";

const ViewBranchReport = () => {
  const [data, setData] = useState([]);
  const {
    setShowEdit,
  } = ItemContext();
  const history = async () => {
    const token = localStorage.getItem("login_token");
    const get =localStorage.getItem("branch_report")
    const {id}=JSON.parse(get);
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
  useEffect(() => {
    history();
  }, []);
  const handleEdit = () => {
    setShowEdit(true);
    document.body.style.overflow = "hidden";
  };
  const navigate = useNavigate();
  const repor = localStorage.getItem("branch_report");

  const report = JSON.parse(repor);
  // console.log(report)


  return (
    <div className="lg:w-[80%] sm:w-[90%] px-10 py-6 flex flex-col gap-10">
      <div className="w-[full]  bg-white   ">
        <Header />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <div
            className=" w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer"
            onClick={() => {
              navigate("/branch");
              document.documentElement.scrollTop = 0;
            }}
          >
            <BsArrowLeft className="text-[#4E00AD] text-2xl" />
          </div>
          <p className="text-2xl font-medium abert">{report?.name}</p>
        </div>
        <p className="text-[#6B778C] text-[16px] flex gap-2">
          <span>Branch Id</span>
          <span className="text-black inter font-normal ">
            {report?.unique_id}
          </span>
        </p>
      </div>
      <div className="flex w-full">
        <div></div>
        <div className="flex gap-2 items-center albert text-[#7132BD]">
          <MdEditLocation className="h-[20px] w-[17.25px] text-[#4E00AD]" />
          <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-[16px] font-normal">
            {report?.address}
          </p>
          <div className="flex flex-col cursor-pointer">
            <p
              className="flex items-center justify-center"
              onClick={handleEdit}
            >
              <FiEdit />
              <small>Edit</small>
            </p>
            <img src="/assets/line.png" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between gap-4">
        <div className="w-80 h-fit border lg:flex lg:gap-6 sm:gap-2 rounded-lg px-6 py-4">
          <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
          <HiOutlineChartSquareBar size="25px" className="text-[#4E00AD]" />
          </div>
          <div className="flex flex-col gap-6 inter">
            <h4 className="font-normal sm:text-[14px] lg:text-[16px] sm:pt-4 sm:text-gray-500">Total Sales Made</h4>
            <h2 className="font-medium flex items-center text-xl">
              {/* <TbCurrencyNaira /> */}
              {report?.sales_and_customers?.sales}
            </h2>
          </div>
        </div>
        <div className="w-80 h-fit border lg:flex lg:gap-6 sm:gap-2 rounded-lg px-6 py-4">
          <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
            <HiOutlineUserGroup size="20px" className="text-[#4E00AD]" />
          </div>
          <div className="flex flex-col gap-6 inter">
            <h4 className="font-normal sm:text-[14px] lg:text-[16px] sm:pt-4 sm:text-gray-500">Total Transactions</h4>
            <h2 className="font-medium flex items-center text-xl">
              {/* <TbCurrencyNaira />{" "} */}
              {report?.sales_and_customers?.total_transactions?report?.sales_and_customers?.total_transactions:0}
            </h2>
          </div>
        </div>
        <div className="w-80 h-fit border lg:flex lg:gap-6 sm:gap-2rounded-lg px-6 py-4">
          <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
            <RiCalendar2Line size="25px" className="text-[#4E00AD]" />
          </div>
          <div className="flex flex-col gap-6 inter">
            <h4 className="font-medium sm:text-[14px] lg:text-[16px] sm:pt-4 sm:text-gray-500">Date Created</h4>
            <h2 className="font-medium text-xl">
              {report?.created_at?.substring(0, 10)}
            </h2>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center albert">
          <h2 className="text-xl font-medium ">Transaction History</h2>
          <div className="w-[344px] bg-white opacity-75 rounded-xl border gap-4 px-4 h-[48px] flex items-center justify-end">
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
        <div className="border mt-10">
          <table className="border h-[412px] w-full py-4 relative">
            <thead>
              <tr className="border-b  bg-[#F7F9FA] font-medium sm:font-small lg:text-lg">
                <th className="py-3">User UIID</th>
                <th className="py-3">Branch Name</th>
                <th className="py-3">Invoice date</th>
                <th className="py-3">Amount</th>
                <th className="py-3">Reference</th>
                <th className="py-3">Card Type</th>
              </tr>
            </thead>

            <tbody className="content-dashboard flex">
              {data.length > 1 &&
                data
                  // .filter((data, idx) => {
                  //   return idx < 4;
                  // })
                  .map((data) => {
                    return (
                      <tr className="text-center">
                        <td className="py-2">{data.id} </td>
                        <td className="py-2">{data.name}</td>
                        <td className="py-2">{data.i} </td>
                        <td className="py-2">{data.amount} </td>
                        <td className="py-2">{data.reference} </td>
                        <td className="py-2">{data.type} </td>
                      </tr>
                    );
                  })}
            </tbody>
          {!data.length && (
            <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
              <img
                src="/assets/NothingHereYet.png"
                alt="Nothing here yet image"
              />
            </div>
          )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewBranchReport;

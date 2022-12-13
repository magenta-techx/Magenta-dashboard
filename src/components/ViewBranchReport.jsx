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
    state: { ForEachDetail },
    showEdit,
    setShowEdit,
  } = ItemContext();
  const history = async () => {
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.get(
        `https://backend.magentacashier.com/business/branch/transactions/${ForEachDetail?.id}/`,
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

  return (
    <div className="w-[80%] px-10 py-6 flex flex-col gap-10">
      <div className="w-[full]  bg-white   ">
        <Header />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <div
            className=" w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer"
            onClick={() => {
              navigate(-1);
              document.documentElement.scrollTop = 0;
            }}
          >
            <BsArrowLeft className="text-[#4E00AD] text-2xl" />
          </div>
          <p className="text-2xl">{report?.name}</p>
        </div>
        <p className="text-[#6B778C] text-sm flex gap-2">
          <span>Branch Id</span>
          <span className="text-black">{report?.unique_id}</span>
        </p>
      </div>
      <div className="flex w-full">
        <div></div>
        <div className="flex gap-2 items-center">
          <MdEditLocation className="h-[20px] w-[17.25px] text-[#4E00AD]" />
          <p className=" whitespace-nowrap overflow-hidden text-ellipsis">
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
        <div className="w-80 h-fit border flex gap-6 rounded-lg px-6 py-4">
          <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
            <HiOutlineChartSquareBar size="25px" className="text-[#4E00AD]" />
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-normal">Total Sales Made</h4>
            <h2 className="font-bold flex items-center">
              <TbCurrencyNaira />
              {report?.sales_and_customers?.total_transactions}
            </h2>
          </div>
        </div>
        <div className="w-80 h-fit border flex gap-6 rounded-lg px-6 py-4">
          <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
            <HiOutlineUserGroup size="20px" className="text-[#4E00AD]" />
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-normal">Total Customers</h4>
            <h2 className="font-bold flex items-center">
              {/* <TbCurrencyNaira />{" "} */}
              {report?.sales_and_customers?.unique_customers}
            </h2>
          </div>
        </div>
        <div className="w-80 h-fit border flex gap-6 rounded-lg px-6 py-4">
          <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
            <RiCalendar2Line size="25px" className="text-[#4E00AD]" />
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-normal">Date Created</h4>
            <h2 className="font-bold">
              {report?.created_at?.substring(0, 10)}
            </h2>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Transaction History</h2>
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
        <div className="border mt-10">
          <table className="border h-fit w-full py-4">
            <thead>
              <tr className="border-b  bg-[#F7F9FA]">
                <th className="py-3">User UIID</th>
                <th className="py-3">Branch Name</th>
                <th className="py-3">Invoice date</th>
                <th className="py-3">Amount</th>
                <th className="py-3">Reference</th>
                <th className="py-3">Card Type</th>
              </tr>
            </thead>

            <tbody className="content-dashboard">
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
          </table>
          {!data.length && (
            <div className="flex justify-center items-center">
              <img
                src="/assets/NothingHereYet.png"
                alt="Nothing here yet image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewBranchReport;

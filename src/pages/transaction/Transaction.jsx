import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  HiOutlineArrowRight,
  HiOutlineArrowNarrowDown,
  HiOutlineArrowNarrowUp,
  HiOutlineChevronUp,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { HiOutlineFilter } from "react-icons/hi";
import { CiSaveUp1 } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Header from "../../components/Header";
import TransactionCard from "../../components/transactionCard";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import { ItemContext } from "../../contextApi/stateMang.contextApi";
const Transaction = () => {
  const [data, setData] = useState([]);

  const { showNav } = ItemContext();

  const navigate = useNavigate();

  const Get_transaction = async () => {
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.get(
        "https://backend.magentacashier.com/business/merchant-transaction-list/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(res.data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTransScroll = () => {
    document.getElementById("scroll").scrollTop += 100;
  };
  useEffect(() => {
    Get_transaction();
  }, []);

  return (
    <div className="flex sm:flex-row flex-col-reverse w-screen">
      {showNav && (
        <div className="lg:w-[20%]  h%] h-fit  sm:h-screen sm:w-[107px]  sm:flex  bg-[#200047] flex sm:flex-col flex-row items-center">
          <Navbar />
        </div>
      )}
      <div className="lg:w-[80%] xs:w-[100%]  overflow-x-hidden sm:px-8 sm:py-6 h-[92%] sm:h-screen  overflow-y-scroll ">
        <div className="w-full flex  bg-white   ">
          <Header showLogo={true} />
        </div>
        <section>
          <div className="wrap sm:justify-between flex sm:flex-row flex-col gap-4 lg:justify-between py-4">
            <h1 className="font-medium text-xl m-2 sm:m-0 sm:text-xl sm:font-bold lg:text-2xl pt-3 albert">
              Transaction History
            </h1>
            <div className="lg:w-[344px] m-2 sm:m-0 sm:w-[277px] bg-white opacity-75 rounded-xl border gap-4 px-4 h-[48px] flex items-center justify-end">
              <div className="">
                <BsSearch className="text-[#4E00AD]" />
              </div>
              <input
                placeholder="Search"
                className="border-r-[#93A3C0] border-r outline-none w-[80]  flex-1 font-medium albert text-[16px]"
              />
              <div className=" ">
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
                <div className="div sm:hidden">
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
            className="mx-3 sm:mx-0 mb-3 sm:mb-0 bg-[#4E00AD] text-white disabled:text-gray-400 disabled:font-normal disabled:bg-gray-100 flex  w-fit rounded-xl p-3 lg:mt-4 sm:mt-4 "
          >
            <h1 className="px-2  font-normal albert ">
              Export Transaction Table
            </h1>
            <b className="cursor-pointer px-1 ">
              <CiSaveUp1 className="mt-1 text-lg " />
            </b>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Transaction;

import React, { useEffect , useState} from "react";
import axios from "axios";
import { HiOutlineArrowRight , HiOutlineArrowNarrowDown, HiOutlineArrowNarrowUp, HiOutlineChevronUp, HiOutlineChevronDown} from "react-icons/hi";
import { HiOutlineFilter } from "react-icons/hi";
import { CiSaveUp1 } from "react-icons/ci";
import {IoMdArrowDropdown} from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import Header from "../../components/Header";
import { motion } from "framer-motion";
const Transaction = () => {
const [data, setData] = useState([]);

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
  document.getElementById('scroll').scrollTop += 100;
} 
useEffect(() => {
  Get_transaction();
}, []);



  return (
    <div className="lg:w-[80%] sm:w-[90%] px-8 py-6 overflow-y-scroll ">
      <div className="w-[full]  bg-white   ">
        <Header />
      </div>
      <section>
        <div className="wrap lg:flex sm:flex sm:justify-between lg:justify-between py-4">
          <h1 className="font-medium sm:text-xl sm:font-bold lg:text-2xl pt-3 albert">Transaction History</h1>
          <div className="lg:w-[344px] sm:w-[277px] bg-white opacity-75 rounded-xl border gap-4 px-4 h-[48px] flex items-center justify-end">
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
        <div className="border mt-1 h-[442px] ">
        <div id="scroll" className="wrap  border-none overflow-y-scroll h-[380px] scroll-smooth">
        <table
         className="border-none  w-full py-4 relative "
          onClick={() => console.log("object")}
        >
          <thead className="-top-0.5  sticky ">
            <tr className="border-b  bg-[#F7F9FA]">
              <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">User UUID</th>
              <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">Branch Name</th>
              <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">Billed Amount</th>
              <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">Amount</th>
              <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">Reference</th>
              <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">Card Type</th>
            </tr>
          </thead>
          <tbody className="content-dashboard border">
            {data
            .filter((dat, idx) => {
              return idx < 9;
            })
            .map((dat, idx) => {
              return (
                <tr className="text-center border" key={idx}>
                  <td className="py-2 font-normal text-sm sm:text-xs">{dat.client.magenta_id}</td>
                  <td className="py-2 font-normal text-sm sm:text-xs">{dat.branch_name}</td>
                  <td className="py-2 font-normal text-sm sm:text-xs">{dat.billed_amount}</td>
                  <td className="py-2 font-normal text-sm sm:text-xs">{dat.amount}</td>
                  <td className="py-2 font-normal text-sm sm:text-xs">{dat.reference}</td>
                  <td className="py-2 font-normal text-sm sm:text-xs">{dat.card_type}</td>
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
        <div className="flex justify-end  relative h-2 m-4 ">
              <div className="ma mt-[15.2px] flex ">
              <IoMdArrowDropdown className={!data.length ? "flex justify-center m-auto text-gray-500 cursor-pointer" : "flex justify-center m-auto text-[#4E00AD] cursor-pointer "} />
              <p className={!data.length ? "text-xs albert text-gray-500" : "text-xs albert text-black]"}>9 row(s) per page</p>
              </div>
              <div className="m mx-2 " >
              <HiOutlineArrowNarrowDown onClick={handleTransScroll}  className={!data.length ? "flex justify-center m-auto text-gray-500 cursor-pointer" : "flex justify-center m-auto text-[#4E00AD] cursor-pointer"} />
              <p className={!data.length ? "text-xs albert text-gray-500" : "text-xs albert text-black]"}>More</p>
              </div>
              </div>
    </div>

  <button disabled={!data.length} className=" bg-[#4E00AD] text-white disabled:text-gray-400 disabled:font-normal disabled:bg-[#E2E6EE] flex  w-fit rounded-xl p-3 lg:mt-4 sm:mt-4 ">
          <h1 className=" px-2 font-normal albert">Export Transaction Table</h1>
          <b className="cursor-pointer px-1 ">
          <CiSaveUp1 className="mt-1 text-lg " />
          </b>
        </button>

      </section>
    </div>
  );
}


export default Transaction;

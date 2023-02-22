import React, { useEffect , useState} from "react";
import axios from "axios";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineFilter } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import Header from "../../components/Header";
import { motion } from "framer-motion";
const Transaction = () => {
const [data, setData] = useState([]);

const Get_transaction = async () => {
  const token = localStorage.getItem("login_token");
  try {
    const res = await axios.get(
      "https://backend.magentacashier.com/business/merchant-transaction/",
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
useEffect(() => {
  Get_transaction();
}, [data]);



  return (
    <div className="lg:w-[80%] sm:w-[92%] px-8 py-6 ">
      <div className="w-[full]  bg-white   ">
        <Header />
      </div>
      <section>
        <div className="wrap flex justify-between py-5">
          <h1 className="font-medium text-2xl pt-4 albert">Transaction Details</h1>
          <div className="w-[344px] bg-white opacity-75 rounded-xl border gap-4 px-4 h-[48px] flex items-center justify-end">
            <div className="">
              <BsSearch className="text-[#4E00AD]" />
            </div>
            <input
              placeholder="Search"
              className="border-r-[#93A3C0] border-r outline-none w-[80] flex-1 font-medium albert text-[16px]"
            />
            <div className=" ">
              <HiOutlineFilter className="text-[#4E00AD]" />
            </div>
          </div>
        </div>
        <div className="border mt-10">
        <table
          className="border lg:h-[380px] w-full py-4 albert"
          onClick={() => console.log("object")}
        >
          <thead>
            <tr className="border-b  bg-[#F7F9FA]">
              <th className="py-3 font-medium text-[16px]">User UUID</th>
              <th className="py-3 font-medium text-[16px]">Branch Name</th>
              <th className="py-3 font-medium text-[16px]">Invoice Data</th>
              <th className="py-3 font-medium text-[16px]">Amount</th>
              <th className="py-3 font-medium text-[16px]">Reference</th>
              <th className="py-3 font-medium text-[16px]">Card Type</th>
            </tr>
          </thead>
          <tbody className="content-dashboard border">
            {data
            .filter((dat, idx) => {
              return idx < 8;
            })
            .map((dat, idx) => {
              return (
                <tr className="text-center border " key={idx}>
                  <td className="py-2 font-normal text-sm">{dat.name}</td>
                </tr>
              );
            })}
          </tbody>
          {!data.length && (
            <div className="absolute lg:left-[50%] lg:top-[50%] lg:-translate-x-[-30%] lg:-translate-y-[0%">
              <img
                src="/assets/NothingHereYet.png"
                alt="Nothing here yet image"
              />
            </div>
          )}
        </table>
    </div>
        <div className="bg-[#4E00AD] flex w-fit rounded-xl p-3 mt-4 absolute lg:top-[85%]">
          <h1 className="text-white font-normal px-3">Export Transaction Table</h1>
          <b className="cursor-pointer px-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.32031 6.50043L11.8803 3.94043L14.4403 6.50043"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8809 14.1798V4.00977"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12C4 16.42 7 20 12 20C17 20 20 16.42 20 12"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </b>
        </div>
      </section>
    </div>
  );
}


export default Transaction;

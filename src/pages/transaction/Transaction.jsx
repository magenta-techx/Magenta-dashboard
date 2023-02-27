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
useEffect(() => {
  Get_transaction();
}, []);



  return (
    <div className="lg:w-[80%] sm:w-[90%] px-8 py-6 ">
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
        <div className="border mt-1">
        <table
         className="border h-[412px] w-full py-4 relative"
          onClick={() => console.log("object")}
        >
          <thead>
            <tr className="border-b  bg-[#F7F9FA] ">
              <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">User UUID</th>
              <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">Branch Name</th>
              <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">Invoice Data</th>
              <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">Amount</th>
              <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">Reference</th>
              <th className="py-3 font-medium sm:text-sm sm:font-semibold lg:font-semibold lg:text-[16px]">Card Type</th>
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
                  <td className="py-2 font-normal text-sm">{data.id}</td>
                  <td className="py-2 font-normal text-sm">{data.branch_name}</td>
                  <td className="py-2 font-normal text-sm">{data.memo}</td>
                  <td className="py-2 font-normal text-sm">{data.amount}</td>
                  <td className="py-2 font-normal text-sm">{data.reference}</td>
                  <td className="py-2 font-normal text-sm">{data.card_type}</td>
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

  <button disabled={!data.length} className=" bg-[#4E00AD] text-white disabled:text-gray-400 disabled:font-normal disabled:bg-[#E2E6EE] flex  w-fit rounded-xl p-3 lg:mt-4 sm:mt-4 ">
          <h1 className=" px-3">Export Transaction Table</h1>
          <b className="cursor-pointer px-2 ">
            <svg
              // disabled={!data.length}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transaction"
                d="M9.32031 6.50043L11.8803 3.94043L14.4403 6.50043"
                stroke="grey"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="transaction"
                d="M11.8809 14.1798V4.00977"
                stroke="grey"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="transaction"
                d="M4 12C4 16.42 7 20 12 20C17 20 20 16.42 20 12"
                stroke="grey"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </b>
        </button>

      </section>
    </div>
  );
}


export default Transaction;

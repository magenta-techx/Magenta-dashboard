import axios from "axios";
import React from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import WithdrawalDetails from "./WithdrawalDetails";

export const WithdrawPassword = () => {
  const {
    withdrawAmount,
    withdrawPassword,
    setWithdrawPassword,
    state: { ForEachAcctDetail },
    setShowWithdrawAmount,
    setShowWithdrawPassword,
    setShowWithdrawOTP,
  } = ItemContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.get(
        "https://backend.magentacashier.com/accounts/send-otp/",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShowWithdrawPassword(false);
      setShowWithdrawOTP(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-[434px] h-fit bg-white rounded-3xl relative"
    >
      <div
        onClick={() => {
          setShowWithdrawPassword(false);
          setShowWithdrawAmount("");
          // document.body.style.overflow = "visible";
        }}
        className="absolute w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer top-0 -right-4"
      >
        <img src="/assets/x.png" alt="Delete image" />
      </div>
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex items-center ">
          <img src="/assets/ATM machine.png" alt="ATM machine image" />
          <h1 className="text-xl font-medium">Make A withdrawal</h1>
        </div>
        <h2 className="text-center font-medium text-2xl">{withdrawAmount}</h2>
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <label className="text-[#505F79] cursor-text" htmlFor="password">
            Enter password to complete withdawal
          </label>
          <input
            inputMode="numeric"
            type="number"
            value={withdrawPassword}
            onChange={(e) => setWithdrawPassword(e.target.value)}
            name=""
            placeholder="Enter password"
            id="password"
            className="input border-[#AF8BDA] border text-center text-lg font-normal outline-none w-[299px] h-[60px] px-4 rounded-xl text-[#6B778C] "
          />
        </div>
        <div className="w-full h-full bg-[#F7F9FA] p-6 flex flex-col gap-6s">
          <button
            disabled={!withdrawPassword}
            className="w-[299px] mx-auto h-[46px] text-white flex justify-center items-center disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-[#E2E6EE]  bg-[#4E00AD] rounded-xl"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

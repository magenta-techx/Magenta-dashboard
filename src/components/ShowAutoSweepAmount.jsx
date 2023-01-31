import axios from "axios";
import React from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import WithdrawalDetails from "./WithdrawalDetails";

export const ShowAutoSweepAmount = () => {
  const {
    autoSweepAmount,
    setAutoSweepAmount,
    setShowAutoSweepAmount,
    isLoading,
    setIsLoading,
    setShowAutoSweepOTP,
    showAutoSweepAmount,
    selected,
    setSelected,
    state: { accountDetails },
  } = ItemContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      if (res.statusText === "OK") {
        setShowAutoSweepAmount(false);
        setIsLoading(false);
        setShowAutoSweepOTP(true);

        setSelected(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
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
          // showAutoSweepAmount(false);
          setShowAutoSweepAmount(false);
          setAutoSweepAmount("");
          setSelected(false);
          document.body.style.overflow = "visible";
           localStorage.removeItem("account");
           localStorage.removeItem("num");
          if (isLoading === true) {
            setIsLoading(false);
          }
        }}
        className="absolute w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer top-0 -right-4"
      >
        <img src="/assets/x.png" alt="Delete image" />
      </div>
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex items-center ">
          <img src="/assets/ATM machine.png" alt="ATM machine image" />
          <h2 className="text-xl font-medium poppins">Make A withdrawal</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <input
            inputMode="numeric"
            type="number"
            value={autoSweepAmount}
            onChange={(e) => setAutoSweepAmount(e.target.value)}
            name=""
            placeholder="Enter withdrawal amount"
            id=""
            className="input border-[#ADB3BD] bg-[#F7F9FA] border text-center text-lg font-normal outline-none w-[299px] h-[60px] px-4 rounded-xl text-[#6B778C] inter"
          />
        </div>
        <div className="w-full h-full bg-[#F7F9FA] p-6 flex flex-col gap-6">
          <h2 className="text-lg font-medium poppins">
            Select destination account
          </h2>
          <div className="flex flex-col gap-4">
            {accountDetails?.map((account, idx) => {
              return <WithdrawalDetails account={account} key={idx} />;
            })}
          </div>
          <button
            disabled={autoSweepAmount<10 || !selected || isLoading}
            className="w-[299px] mx-auto h-[46px] text-white flex justify-center items-center disabled:text-gray-500 disabled:bg-[#E2E6EE]  bg-[#4E00AD] rounded-xl disabled:cursor-not-allowed poppins font-normal"
          >
            {isLoading ? (
              <div className="flex items-center gap-4">
                <div className=" cursor-pointer  text-white rounded-full w-6 h-6 flex justify-center items-center animate-spin border-white border-4 border-t-[#4E00AD] text-transparent">
                  null
                </div>
                <span>Loading</span>
              </div>
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

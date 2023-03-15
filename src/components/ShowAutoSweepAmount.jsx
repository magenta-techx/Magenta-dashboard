import axios from "axios";
import React from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import WithdrawalDetails from "./WithdrawalDetails";
import Header from "./Header";

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
    setShowError,
    setSuccess,
    setShowSuccess,
    setError
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
        setSuccess(res?.data.message);
        setShowSuccess(true);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setShowError(true);
      setError(err.message)
    }
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-screen h-full overflow-y-scroll overflow-x-hidden sm:overflow-hidden  sm:w-[434px] sm:h-fit bg-[#FAFAFA] sm:bg-white flex flex-col justify-between sm:rounded-3xl sm:relative"
    >
      <div
        onClick={() => {
          setShowAutoSweepAmount(false);
          setAutoSweepAmount("");
          setSelected(false);
          localStorage.removeItem("account");
          localStorage.removeItem("num");
          if (isLoading === true) {
            setIsLoading(false);
          }
        }}
        className="absolute w-[60px] h-[60px] sm:flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer top-0 -right-4 hidden"
      >
        <img src="/assets/x.png" alt="Delete image" />
      </div>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="w-full bg-white  sm:hidden mb-4">
          <Header
            showLogo={false}
            handleClick={() => {
              setShowAutoSweepAmount(false);
              setAutoSweepAmount("");
              setSelected(false);
              localStorage.removeItem("account");
              localStorage.removeItem("num");
              if (isLoading === true) {
                setIsLoading(false);
              }
            }}
          />
        </div>
        <div className="flex sm:items-center flex-col-reverse sm:flex-row ">
          <img
            src="/assets/ATM machine.png"
            alt="ATM machine image"
            className="object-cover sm:w-fit w-[254px] mx-auto sm:mx-0"
          />
          <h2 className="text-xl font-medium inter sm:poppins ml-6 sm:ml-0">
            Make A withdrawal
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 sm:w-full">
          <input
            inputMode="numeric"
            type="number"
            value={autoSweepAmount}
            onChange={(e) => setAutoSweepAmount(e.target.value)}
            name=""
            placeholder="Enter withdrawal amount"
            id=""
            autoFocus={true}
            className="input border-[#ADB3BD] bg-[#F7F9FA] border text-center text-lg font-normal outline-none w-[254px] sm:w-[299px] h-[60px] px-4 rounded-xl text-[#6B778C] inter"
          />
        </div>
        <div className="w-full h-full bg-[#FAFAFA] sm:bg-[#F7F9FA] p-6 flex flex-col gap-6">
          <h2 className="text-lg font-medium inter sm:poppins ">
            Select destination account
          </h2>
          <div className="flex flex-col gap-4">
            {accountDetails?.map((account, idx) => {
              return <WithdrawalDetails account={account} />;
            })}
          </div>
          <button
            disabled={autoSweepAmount < 10 || !selected || isLoading}
            className="w-full sm:w-[299px] mx-auto h-[46px] text-white flex justify-center items-center disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-[#E2E6EE]  bg-[#4E00AD] rounded-xl poppins font-normal"
          >
            {isLoading ? (
              <div className="flex items-center gap-4">
                <div className=" cursor-pointer  text-white rounded-full w-6 h-6 flex justify-center items-center animate-spin border-white border-4 border-t-[#4E00AD] text-transparent">
                  
                </div>
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

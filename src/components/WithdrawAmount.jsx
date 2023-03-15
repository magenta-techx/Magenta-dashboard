import axios from "axios";
import React from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import Header from "./Header";
import Navbar from "./Navbar";
import WithdrawalDetails from "./WithdrawalDetails";

export const WithdrawAmount = () => {
  const {
    withdrawAmount,
    setWithdrawAmount,
    setIsLoading,
    isLoading,
    showWithdrawAmount,
    dispatch,
    state: { accountDetails },
    setShowWithdrawAmount,
    setShowWithdrawOTP,
    selected,
    setSelected,
    setError,
    setShowSuccess,
    setSuccess,
    showNav,
    setShowError,
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
      console.log(res);
      if (res.statusText === "OK") {
        setShowWithdrawAmount(false);
        setShowWithdrawOTP(true);
        setIsLoading(false);
        setShowSuccess(true);
        setSuccess(res.data.message);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setShowError(true);
      setError(err.message);
    }
  };
  const handleClick = () => {
    setShowWithdrawAmount(false);
    setWithdrawAmount("");

    localStorage.removeItem("account");
    setSelected(false);
    if (isLoading === true) {
      setIsLoading(false);
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
          setShowWithdrawAmount(false);
          setWithdrawAmount("");

          localStorage.removeItem("account");
          // localStorage.removeItem("num")
          setSelected(false);
          if (isLoading === true) {
            setIsLoading(false);
          }
        }}
        className="absolute w-[60px] h-[60px] sm:flex justify-center items-center rounded-full  bg-[#EEE8F8] cursor-pointer top-0 -right-4 hidden"
      >
        <img src="/assets/x.png" alt="Delete image" />
      </div>

      <form
        className=" flex flex-col gap-4 w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="w-full bg-white  sm:hidden mb-4">
          <Header showLogo={false} handleClick={handleClick} />
        </div>

        <div className="flex sm:items-center flex-col-reverse sm:flex-row ">
          <img
            src="/assets/ATM machine.png"
            alt="ATM machine image"
            className="object-cover sm:w-fit w-[254px] mx-auto sm:mx-0"
          />
          <h1 className="text-xl font-medium inter sm:poppins ml-6 sm:ml-0">
            Make A withdrawal
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center sm:w-full ">
          <input
            autoFocus={true}
            inputMode="numeric"
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            name=""
            placeholder="Enter withdrawal amount"
            id=""
            className="input border-[#ADB3BD] bg-[#F7F9FA] border text-center text-lg font-normal outline-none w-[254px] sm:w-[299px] h-[60px] px-4 rounded-xl text-[#6B778C] inter "
          />
        </div>
        <div className="w-full h-full bg-[#FAFAFA] sm:bg-[#F7F9FA] p-6 flex flex-col gap-6">
          <h2 className="text-lg font-medium inter sm:poppins ">
            Select destination account
          </h2>
          <div className="flex flex-col gap-4">
            {accountDetails?.map((account, idx) => {
              return (
                <>
                  <WithdrawalDetails key={account.id} account={account} />
                </>
              );
            })}
          </div>
          <button
            disabled={withdrawAmount < 10 || isLoading || !selected}
            className="w-full sm:w-[299px] mx-auto h-[46px] text-white flex justify-center items-center disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-[#E2E6EE]  bg-[#4E00AD] rounded-xl poppins font-normal"
          >
            {isLoading ? (
              <div className="flex items-center gap-4">
                <div className=" cursor-pointer  text-white rounded-full w-6 h-6 flex justify-center items-center animate-spin border-white border-4 border-t-[#4E00AD] text-transparent "></div>
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

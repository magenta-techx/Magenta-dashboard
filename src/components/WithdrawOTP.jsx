import axios from "axios";
import React from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import Header from "./Header";

const WithdrawOTP = () => {
  const {
    showWithdrawOTP,
    setShowWithdrawOTP,
    withdrawOTP,
    setWithdrawAmount,
    setWithdrawOTP,
    loginEmail,
    isLoading,
    setIsLoading,
    withdrawAmount,
    setShowWithdrawSucc,
    setSuccess,
    setShowSuccess,
    setError,
    setShowError,
    setAccountName,
    setAccountNumber,
    state: { ForEachAcctDetail },
  } = ItemContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const getAcct = localStorage.getItem("account");
    const result = JSON.parse(getAcct);
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.post(
        "https://backend.magentacashier.com/business/cashout/",
        {
          account_id: result.id,
          bank_code: result.bank_code,
          amount: withdrawAmount,
          token: withdrawOTP,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      // setShowAcctSucc(true);
      if (res.status === 200) {
        setShowWithdrawSucc(true);
        setShowWithdrawOTP(false);
        setIsLoading(false);
        localStorage.removeItem("account");
        // setWithdrawAmount("")
      } else {
        setShowWithdrawSucc(false);
      }
    } catch (error) {
      if (error) {
        setShowError(true);
        setError(
          error?.response?.data?.message
            ? error?.response?.data.message
            : error?.message
        );
        setIsLoading(false);
        // console.log(error);

   
      }
    }
    // setOTP("");
  };
  const REQUEST_OTP = async () => {
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
      if (res.status === 200) {
        setShowSuccess(true);
        setSuccess(res.data.message);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
      setShowError(true);
    }
  };
  const handleClick = () => {
    setShowWithdrawOTP(false);
    setWithdrawAmount("");
    // document.body.style.overflow = "visible";
    localStorage.removeItem("account");
    // localStorage.removeItem("num");
    if (isLoading === true) {
      setIsLoading(false);
      //STOP THE API CALL OR REMOVE EVENT LISTENER
    }
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-screen sm:w-[434px] overflow-y-scroll overflow-x-hidden h-full sm:h-fit sm:bg-white sm:rounded-3xl relative sm:p-6 flex flex-col justify-between sm:overflow-hidden bg-[#FAFAFA]"
    >
      <div
        onClick={() => {
          setShowWithdrawOTP(false);
          setWithdrawAmount("");
          // document.body.style.overflow = "visible";
          localStorage.removeItem("account");
          // localStorage.removeItem("num");
          if (isLoading === true) {
            setIsLoading(false);
            //STOP THE API CALL OR REMOVE EVENT LISTENER
          }
        }}
        className="absolute w-[60px] h-[60px] sm:flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer top-0 -right-4 hidden "
      >
        {/* <FaTimes size="25px" fontWeight={"300"} /> */}
        <img src="/assets/x.png" alt="Delete image" />
      </div>
      <form className="flex flex-col gap-4  " onSubmit={(e) => handleSubmit(e)}>
        <div className="w-full bg-white  sm:hidden mb-4">
          <Header showLogo={false} handleClick={handleClick} />
        </div>
        <div className="flex sm:items-center flex-col-reverse sm:flex-row ">
          <img
            src="/assets/ATM machine.png"
            alt="ATM machine image"
            className="object-cover sm:w-fit w-[254px] mx-auto sm:mx-0"
          />
          <h1 className="text-xl font-medium inter sm:poppins ml-4 sm:ml-0">
            Make A withdrawal
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mx-4 sm:mx-0 sm:w-full">
          <label
            className="text-lg inter sm:poppins font-normal text-[#505F79]"
            htmlFor="name"
          >
            Enter OTP sent to{" "}
            <span className="text-sm">
              {loginEmail ? loginEmail : "your email"}
            </span>
          </label>
          <input
            inputMode="numeric"
            type="number"
            value={withdrawOTP}
            onChange={(e) => setWithdrawOTP(e.target.value)}
            name=""
            placeholder=""
            id=""
            className="input border-[#ADB3BD] bg-[#F7F9FA] border text-center text-lg font-normal outline-none w-[254px] sm:w-[299px] h-[60px] px-4 rounded-xl text-[#6B778C] inter"
          />
        </div>
        <div className="mx-4">
          <button
            disabled={!withdrawOTP || isLoading}
            className="w-full sm:w-[351px] mx-auto h-[45px] text-white flex justify-center items-center disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-[#E2E6EE]  bg-[#4E00AD] rounded-xl  sm:mx-0"
          >
            {isLoading ? (
              <div className="flex items-center gap-4">
                <div className=" cursor-pointer  text-white rounded-full w-6 h-6 flex justify-center items-center animate-spin border-white border-4 border-t-[#4E00AD] text-transparent poppins font-medium text-sm"></div>
              </div>
            ) : (
              "Continue"
            )}
          </button>
        </div>
        <div className="flex justify-center" onClick={REQUEST_OTP}>
          <p className="text-[#B800AE] border-b-[#B800AE]  border-b cursor-pointer text-lg font-medium albert mb-3 sm:mb-0">
            Resend OTP code
          </p>
        </div>
      </form>
    </div>
  );
};

export default WithdrawOTP;

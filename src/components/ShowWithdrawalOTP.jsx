import axios from "axios";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import ShowChangePassword from "./ShowEditSucc";

const ShowWithdrawalOTP = () => {
  const {
    showWithdrawalOTP,
    setShowWithdrawalOTP,
    withdrawOTP,
    withdrawAmount,
    setWithdrawOTP,
    loginEmail,
  } = ItemContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.post(
        "https://backend.magentacashier.com/accounts/account/",
        {
          //     account_id: accountNumber,
          //     bank_code: bankCode,
          amount: withdrawAmount,
          //     token: ,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // setShowAcctSucc(true);
      // setShowOTP(false);
      // if (res.status === 200) {
      //   console.log('object');
      // }
    } catch (error) {
      console.log(error);
    }
    //     setOTP("");
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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[434px] h-fit bg-white rounded-3xl relative p-6"
    >
      <div
        onClick={() => {
          setShowWithdrawalOTP(false);
        }}
        className="absolute w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer top-0 -right-4"
      >
        {/* <FaTimes size="25px" fontWeight={"300"} /> */}
        <img src="/assets/x.png" alt="Delete image" />
      </div>
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="text-xl">Add New Account Number</h1>
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <label className="text-lg poppins font-normal" htmlFor="name">
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
            className="input border-[#AF8BDA] border text-center text-xl font-normal outline-none w-[238px] h-[46px] px-4 rounded-xl"
          />
        </div>

        <button
          disabled={!withdrawOTP}
          className="w-[351px] mx-auto h-[45px] text-white flex justify-center items-center disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-[#E2E6EE]  bg-[#4E00AD] rounded-xl poppins text-sm font-medium"
        >
          Continue
        </button>
        <div className="flex justify-center" onClick={REQUEST_OTP}>
          <p className="text-[#B800AE] border-b-[#B800AE]  border-b cursor-pointer text-lg font-medium albert">
            Resend OTP code
          </p>
        </div>
      </form>
    </div>
  );
};

export default ShowWithdrawalOTP;

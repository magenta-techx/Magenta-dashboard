import axios from "axios";
import React from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";

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
    setAccountName,
    setAccountNumber,
    setBankName,
    state: { ForEachAcctDetail },
  } = ItemContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.post(
        "https://backend.magentacashier.com/business/cashout/",
        {
          // account_id: ForEachAcctDetail?.raw_payload.data.id,
          account_id: ForEachAcctDetail?.id,
          bank_code: ForEachAcctDetail?.raw_payload.data.details.bank_code,
          amount: withdrawAmount,
          token: withdrawOTP,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // setShowAcctSucc(true);
      if (res.status === 200) {
        setShowWithdrawSucc(true);
        setShowWithdrawOTP(false);
        setIsLoading(false);
        
        // setWithdrawAmount("")
      } else {
        setShowWithdrawSucc(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-[434px] h-fit bg-white rounded-3xl relative p-6"
    >
      <div
        onClick={() => {
          setShowWithdrawOTP(false);
          setWithdrawAmount("");
          document.body.style.overflow = "visible";
          if (isLoading === true) {
            setIsLoading(false);
            //STOP THE API CALL OR REMOVE EVENT LISTENER
          }
        }}
        className="absolute w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer top-0 -right-4"
      >
        {/* <FaTimes size="25px" fontWeight={"300"} /> */}
        <img src="/assets/x.png" alt="Delete image" />
      </div>
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex items-center ">
          <img src="/assets/ATM machine.png" alt="ATM machine image" />
          <h1 className="text-xl font-medium">Make A withdrawal</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <label className="text-lg" htmlFor="name">
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
          disabled={!withdrawOTP || isLoading}
          className="w-[351px] mx-auto h-[45px] text-white flex justify-center items-center disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-[#E2E6EE]  bg-[#4E00AD] rounded-xl"
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
        <div className="flex justify-center" onClick={REQUEST_OTP}>
          <p className="text-[#B800AE] border-b-[#B800AE]  border-b cursor-pointer text-lg font-medium">
            Resend OTP code
          </p>
        </div>
      </form>
    </div>
  );
};

export default WithdrawOTP;

import axios from "axios";
import React from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";

const AutoSweepOTP = () => {
  const {
    setShowWithdrawOTP,
    withdrawOTP,
    resetAutoSweepFreq,
    setResetAutoSweepFreq,
    resetAutoSweepTime,
    setResetAutoSweepTime,
    loginEmail,
    withdrawAmount,
    setShowWithdrawSucc,
    setShowAutoSweepOTP,
    autoSweepOTP,
    setSetOrResetAutoSweep,
    setAutoSweepOTP,
    time,
    hour,
    isLoading,
    setIsLoading,
    Get_Auto_Sweep,
    freq,
    state: { ForEachAcctDetail },
  } = ItemContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const index = hour.indexOf(" ");
    const hou = hour.substring(index + 1, 0);
    const token = localStorage.getItem("login_token");
    const getAcct = localStorage.getItem("account");
    const result = JSON.parse(getAcct);
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://backend.magentacashier.com/business/recurrentcashout/",
        {
          token: autoSweepOTP,
          frequency: freq,
          time: time,
          hour: hou,
          account: result.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // setShowAcctSucc(true);
      if (res.status === 200 || res.status === 201) {
        setShowAutoSweepOTP(false);
        setResetAutoSweepTime(res.data?.hour);
        document.body.style.overflow = "visible";
        setResetAutoSweepFreq(res.data?.frequency?.toLowerCase());
        localStorage.removeItem("account");
        // localStorage.setItem("num",)
        console.log(res);
        setIsLoading(false);
        Get_Auto_Sweep();
        localStorage.setItem(
          "reset_auto_sweep_result",
          JSON.stringify(res.data)
        );
        localStorage.setItem("item", true);
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
      onClick={(e) => e.stopPropagation()}
      className="w-[434px] h-fit bg-white rounded-3xl relative p-6"
    >
      <div
        onClick={() => {
          setShowAutoSweepOTP(false);
          document.body.style.overflow = "visible";
          localStorage.removeItem("account");
          localStorage.removeItem("num");
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
            value={autoSweepOTP}
            onChange={(e) => setAutoSweepOTP(e.target.value)}
            name=""
            placeholder=""
            id=""
            className="input border-[#AF8BDA] border text-center text-xl font-normal outline-none w-[238px] h-[46px] px-4 rounded-xl"
          />
        </div>

        <button
          disabled={!autoSweepOTP}
          className="w-[351px] mx-auto h-[45px] text-white flex justify-center items-center disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-[#E2E6EE]  bg-[#4E00AD] rounded-xl"
        >
          {isLoading ? (
            <div className="flex items-center gap-4">
              <div className=" cursor-pointer  text-white rounded-full w-6 h-6 flex justify-center items-center animate-spin border-white border-4 border-t-[#4E00AD] text-transparent">
                null
              </div>
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

export default AutoSweepOTP;

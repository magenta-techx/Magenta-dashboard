import axios from "axios";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import Header from "./Header";
import ShowChangePassword from "./ShowEditSucc";

const ShowOTP = () => {
  const {
    otp,
    setOTP,
    setShowOTP,
    loginEmail,
    setIsLoading,
    isLoading,
    accountNumber,
    setAccountNumber,
    accountName,
    setAccountName,
    bankCode,
    selectedOption,
    setSelectedOption,
    GET_ACCOUNT,
    setError,
    setShowError,
    setSuccess,
    setShowSuccess,
  } = ItemContext();

  const handleSubmit = async (e) => {
    // console.log(selectedOption);
    e.preventDefault();
    const token = localStorage.getItem("login_token");
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://backend.magentacashier.com/accounts/account/",
        {
          account_number: accountNumber,
          bank_name: selectedOption?.label,
          bank_code: selectedOption?.value,
          account_name: accountName,
          token: otp,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200 || res.status === 201) {
        setIsLoading(false);
        setShowOTP(false);
        setAccountNumber("");
        // document.body.style.overflow = "visible";
        GET_ACCOUNT();
        setAccountName("");
        setShowSuccess(true);
        setSuccess(res.statusText);
        console.log(res);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(
        error?.response?.data?.message
          ? error?.response?.data.message
          : error?.message
      );
      // setError(error.message)
      setShowError(true);
    }
    setOTP("");
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
      console.log(res);
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
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-full h-full sm:w-[434px] sm:overflow-hidden overflow-y-hidden overflow-x-hidden sm:h-fit bg-white sm:rounded-3xl relative sm:p-6"
    >
      <div
        onClick={() => {
          setShowOTP(false);
          setOTP("");
          // document.body.style.overflow = "visible";
          setAccountName("");
          setAccountNumber("");
          if (isLoading === true) {
            setIsLoading(false);
          }
        }}
        className="absolute w-[60px] h-[60px] sm:flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer top-0 -right-4 hidden "
      >
        {/* <FaTimes size="25px" fontWeight={"300"} /> */}
        <img src="/assets/x.png" alt="Delete image" />
      </div>
      <form
        className="flex flex-col gap-6 sm:gap-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="w-full bg-white  sm:hidden mb-4">
          <Header
            showLogo={false}
            handleClick={() => {
              setShowOTP(false);
              setOTP("");
              // document.body.style.overflow = "visible";
              setAccountName("");
              setAccountNumber("");
              if (isLoading === true) {
                setIsLoading(false);
              }
            }}
          />
        </div>
        <h1 className="text-xl mx-4 sm:mx-0">Add New Account Number</h1>
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <label
            className="text-sm sm:text-[16px]  inter sm:poppins font-normal mx-4 text-[#505F79]"
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
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            name=""
            placeholder=""
            id=""
            className="input border-[#AF8BDA] border text-center text-xl font-normal outline-none w-[238px] h-[46px] px-4 rounded-xl"
          />
        </div>
        <div className="mx-4">
          <button
            disabled={!otp || isLoading}
            className="w-full sm:w-[351px] mx-auto h-[45px] text-white flex justify-center items-center disabled:cursor-default disabled:text-gray-500 disabled:bg-[#E2E6EE]  bg-[#4E00AD] rounded-xl"
          >
            {isLoading ? (
              <div className="flex items-center gap-4">
                <div className=" cursor-pointer  text-white rounded-full w-6 h-6 flex justify-center items-center animate-spin border-white border-4 border-t-[#4E00AD] text-transparent"></div>
              </div>
            ) : (
              "Continue"
            )}
          </button>
        </div>
        <div className="flex justify-center" onClick={REQUEST_OTP}>
          <p className="text-[#B800AE] border-b-[#B800AE]  border-b cursor-pointer text-lg font-medium">
            Resend OTP code
          </p>
        </div>
      </form>
    </div>
  );
};

export default ShowOTP;

import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import axios from "axios";
import { useState } from "react";
import { data } from "./data";

const AddAccount = () => {
  const pa = "";
  const {
    accountName,
    setAccountName,
    accountNumber,
    setAccountNumber,
    isLoading,
    setIsLoading,
    bankName,
    setBankName,
    setShowAddAccount,

    setShowOTP,
    bankCode,
    setBankCode,
    acct,
    setAcct,
  } = ItemContext();

  const REQUEST_OTP = async () => {
    const token = localStorage.getItem("login_token");
    setIsLoading(true);
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
        setIsLoading(false);
        document.body.style.overflow = "hidden";
      } else {
        setIsLoading(true);
      }
      if (accountName) {
        setShowOTP(true);
        setShowAddAccount(false);
      } else {
        return;
      }
    } catch (err) {
      setIsLoading(false);
    }
    // setAccountNumber("");
    // setBankName("");
    // setAccountName("");
  };

  useEffect(() => {
    const entries = Object.entries(data);
    const arraySet = [];
    for (const key in entries) {
      const set = entries[key];
      arraySet.push(`${set[0]}: ${set[1]}`);
    }
    setAcct(arraySet);
  }, []);
  const handleChange = (acc) => {
    let selectedOpt = acct.filter((val) => val.includes(acc))[0]?.split(":");
    setBankCode(selectedOpt[0]);
    setBankName(selectedOpt[1]);
  };

  const GET_ACCOUNT_NAME = async () => {
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.post(
        "https://backend.magentacashier.com/accounts/resolvebankdetails/",
        {
          account_number: accountNumber,
          bank_code: bankCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if ((accountNumber && bankName) || res.data.status === 200) {
        setAccountName(JSON.stringify(res.data.data.account_name));
      } else {
        setAccountName("");
      }
    } catch (error) {
      console.log(error.response.data.message);
      // setAccountName(error.response.data.message);
    }
  };
  useEffect(() => {
    GET_ACCOUNT_NAME();
  }, [accountNumber, bankName]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    //     setBankName("");
    //     setAccountNumber("");
    //     setAccountName("");
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        document.body.style.overflow = "visible";
      }}
      className="w-[487px] h-[398px] bg-white rounded-3xl relative p-6"
    >
      <div
        onClick={() => {
          setShowAddAccount(false);
          setBankName("");
          setAccountNumber("");
          setAccountName("");
          document.body.style.overflow = "visible";
          if (isLoading === true) {
            setIsLoading(false);
          }
        }}
        className="absolute w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#EEE8F8] top-0 -right-4 cursor-pointer"
      >
        <img src="/assets/x.png" alt="Delete image" />
      </div>
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="text-xl font-medium">Add New Account Name</h1>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-1/2">
            <label
              className="text-lg text-[rgba(11,11,11,0.8)]"
              htmlFor="accountnumber"
            >
              Account number
            </label>
            <input
              type="number"
              value={accountNumber}
              onChange={(e) => {
                setAccountNumber(e.target.value);
              }}
              name=""
              id="accountnumber"
              className="border-[#AF8BDA] border outline-none w-full h-[46px] px-4 rounded-xl font-medium"
            />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label
              className="text-lg text-[rgba(11,11,11,0.8)]"
              htmlFor="bankname"
            >
              Bank name
            </label>

            {acct.length && (
              <select
                className="border-[#AF8BDA] border outline-none w-full h-[46px] text-[#ADB3BD]  pr-6 rounded-xl font-medium cursor-pointer"
                onChange={(e) => handleChange(e.target.value)}
              >
                {acct.map((acc, i) => {
                  let set = acc.split(":");
                  return (
                    <>
                      {/* <option key={i}></option> */}
                      <option key={i}>{set[1].trim()}</option>
                    </>
                  );
                })}
              </select>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full mb-10">
          <label
            className="text-lg text-[rgba(11,11,11,0.8)]"
            htmlFor="accountname"
          >
            Account name
          </label>
          <input
            value={accountName.trim()}
            onChange={(e) => setAccountName(e.target.value)}
            disabled={true}
            type="text"
            name=""
            id="accountname"
            className="border-[#AF8BDA] border outline-none w-full h-[46px] px-4 rounded-xl font-medium"
          />
        </div>
        <div className="w-full  flex justify-center" onClick={REQUEST_OTP}>
          <button
            disabled={!accountNumber || !bankName || !accountName || isLoading}
            className="w-[351px] h-[49px] flex rounded-xl justify-center items-center font-medium cursor-pointer disabled:cursor-not-allowed  disabled:text-gray-500 disabled:bg-[#E2E6EE] bg-[#4E00AD] text-white"
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

export default AddAccount;

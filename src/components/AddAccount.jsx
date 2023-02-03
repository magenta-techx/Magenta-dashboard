import React, { useCallback, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import axios from "axios";
import { useState } from "react";
import { data } from "./data";
import { debounce } from "lodash";
import Select from "react-select";

const AddAccount = () => {
  const {
    accountName,
    setAccountName,
    accountNumber,
    setAccountNumber,
    isLoading,
    setIsLoading,
    setShowAddAccount,
    setShowOTP,

    setSelectedOption,
    selectedOption,
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
  };

  const GET_ACCOUNT_NAME = async () => {
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.post(
        "https://backend.magentacashier.com/accounts/resolvebankdetails/",
        {
          account_number: accountNumber,
          bank_code: selectedOption?.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      if ((accountNumber && selectedOption) || res.data.status === 200) {
        setAccountName(res?.data?.data.account_name);
      } else {
        setAccountName("");
      }
    } catch (error) {
      setAccountName(error?.response?.data?.message);
    }
  };
  const deb = useCallback(
    debounce((name) => setAccountNumber(name), 1000),
    []
  );

  const handleBankName = (name) => {
    deb(name);
    // setAccountNumber(name);
  };
  useEffect(() => {
    GET_ACCOUNT_NAME();
  }, [accountNumber, selectedOption]);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-[487px] h-[398px] bg-white rounded-3xl relative p-6 poppins"
    >
      <div
        onClick={() => {
          document.body.style.overflow = "visible";
          setShowAddAccount(false);
          setAccountNumber("");
          setSelectedOption(null);
          setAccountName("");
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
              autoFocus={true}
              // value={accountNumber}
              onChange={(e) => handleBankName(e.target.value)}
              name=""
              id="accountnumber"
              className="border-[#AF8BDA] border outline-none w-full h-[46px] px-4 rounded-xl font-medium bg-[#F7F9FA] poppins"
            />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label
              className="text-lg text-[rgba(11,11,11,0.8)]"
              htmlFor="bankname"
            >
              Bank name
            </label>

            <Select
              options={data}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  height: "46px",
                  borderRadius: "12px",
                  backgroundColor: "#F7F9FA",
                  border: "#AF8BDA 1px solid",
                }),
              }}
            />
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
            value={accountName ? accountName : ""}
            onChange={(e) => setAccountName(e.target.value)}
            disabled={true}
            type="text"
            name=""
            id="accountname"
            className={`${
              accountName === "could not fetch account name"
                ? "text-red-500"
                : "text-black"
            } border-[#AF8BDA] border outline-none w-full h-[46px] px-4 rounded-xl font-medium poppins bg-[#F7F9FA] `}
          />
        </div>
        <div className="w-full  flex justify-center" onClick={REQUEST_OTP}>
          <button
            disabled={
              !accountNumber ||
              !accountName ||
              !selectedOption ||
              accountName === "could not fetch account name" ||
              isLoading
            }
            className="w-[351px] h-[49px] flex rounded-xl justify-center items-center font-medium cursor-pointer disabled:cursor-not-allowed  disabled:text-gray-500 disabled:bg-[#E2E6EE] bg-[#4E00AD] text-white"
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
        </div>
      </form>
    </div>
  );
};

export default AddAccount;

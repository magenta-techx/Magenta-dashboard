import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { HiOutlineChartSquareBar, HiOutlineUserGroup } from "react-icons/hi";
import { RiCalendar2Line } from "react-icons/ri";
import { TbCurrencyNaira } from "react-icons/tb";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import Card from "./Card";
import Header from "./Header";

const CashOut = () => {
  const {
    setShowAddAccount,
    setIsLoading,
    isLoading,
    setName,
    setAddress,
    setPassCode,
    setOTP,
    setShowWithdrawAmount,
    setShowSelectAutoSweep,
    time,
    GET_ACCOUNT,
    state: { accountDetails },
    autoSweepID,
  } = ItemContext();
  const get = localStorage.getItem("reset_auto_sweep_result");
  let items;
  if (localStorage.getItem("item") === null) {
    items = false;
  } else {
    items = true;
  }
  const timeSet = JSON.parse(get);
  const hour = timeSet?.hour;
  const frequency = timeSet?.frequency;
  const index = time.indexOf(" ");
  const timeAmOrPm = time.substring(index).trim();
  const handleWithdraw = () => {
    setShowWithdrawAmount(true);
  };
  const handleAutoSweep = () => {
    setShowSelectAutoSweep(true);
    document.body.style.overflow = "hidden";
  };
  const handleAutoSweepDelete = async () => {
    const token = localStorage.getItem("login_token");
    setIsLoading(true);
    try {
      const res = await axios.delete(
        `https://backend.magentacashier.com/business/recurrentcashout/delete/${autoSweepID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 204) {
        setIsLoading(false);

        localStorage.removeItem("reset_auto_sweep_result");
        if (localStorage.getItem("item") !== null) {
          localStorage.removeItem("item");
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    GET_ACCOUNT();
  }, []);
  return (
    <div className="w-[80%] min-h-full px-8 py-6 flex flex-col gap-6">
      <div className="w-full  bg-white   ">
        <Header />
      </div>
      <h2 className="font-medium text-xl">Cash Out</h2>
      <div className="flex w-full justify-between gap-4 ">
        <div className="w-80 h-fit border-[#E1E1E1] border-2 rounded-xl flex gap-6 px-6 py-4">
          <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
            <HiOutlineChartSquareBar size="25px" className="text-[#4E00AD]" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-normal">Total Withdrawal</h4>
            <h2 className="font-bold flex items-center">
              <TbCurrencyNaira /> 0
            </h2>
          </div>
        </div>
        <div className="w-80 h-fit border-[#E1E1E1] border-2 rounded-xl flex gap-6 px-6 py-4">
          <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
            <HiOutlineUserGroup size="20px" className="text-[#4E00AD]" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-normal">Total Payment Made</h4>
            <h2 className="font-bold flex items-center">
              <TbCurrencyNaira /> 0
            </h2>
          </div>
        </div>
        <div className="w-80 h-fit border-[#E1E1E1] border-2 rounded-xl flex gap-6 px-6 py-4">
          <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
            <RiCalendar2Line size="25px" className="text-[#4E00AD]" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-normal">In App Cash</h4>
            <h2 className="font-bold flex items-center">
              <TbCurrencyNaira />1
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex  gap-4 mt-6">
        <div className="w-1/2 border-[#E1E1E1] border-2 p-4 rounded-xl flex flex-col gap-4">
          <p className="text-lg font-medium">
            Bank account number associated with your magenta account.
          </p>
          <div className="flex gap-4 ">
            {accountDetails.map((detail) => {
              return <Card key={detail.id} detail={detail} />;
            })}
          </div>
          <div className="flex justify-end ">
            <button
              onClick={() => {
                setShowAddAccount(true);
                setName("");
                setAddress("");
                setOTP("");
                setPassCode("");
                document.body.style.overflow = "hidden";
              }}
              disabled={accountDetails?.length >= 2 ? true : false}
              className="text-sm w-[236px] h-[49px]
                  text-white 
                 flex rounded-xl justify-center items-center bg-[#4E00AD] font-medium cursor-pointer disabled:bg-[#E2E6EE] disabled:text-gray-500 disabled:cursor-not-allowed "
            >
              Add Account Number
            </button>
          </div>
        </div>
        <div className="w-1/2  p-4 flex gap-4 border-[#E1E1E1] border-2  rounded-xl">
          <div className="w-1/2 px-4 py-3 h-full bg-[#4E00AD] shadow-[4px_4px_13px_rgba(0,0,0,0.3)] rounded-3xl flex flex-col gap-2">
            <div>
              <img
                className="w-[120px] h-[120px]"
                src="/assets/ATM machine.png"
                alt="atm machine image"
              />
            </div>
            <p className="text-white text-sm ml-2 mb-2">
              Make a withdrawal into your bank account
            </p>
            <div className="flex justify-end" onClick={handleWithdraw}>
              <button className="text-[16px] w-[157px] h-[45px] m-auto  flex rounded-xl justify-center items-center bg-white text-[#4E00AD] font-medium cursor-pointer  ">
                Withdraw
              </button>
            </div>
          </div>
          {!items && (
            <div className="w-1/2  px-4 py-3 h-full bg-white shadow-[2px_2px_4px_4px_rgba(113,50,189,0.15)] rounded-3xl flex flex-col gap-2">
              <div>
                <img
                  className="w-[114px] h-[114px]"
                  src="/assets/Time image.png"
                  alt="Time management-cuate"
                />
              </div>
              <p className="text-black font-medium text-sm ml-2 mt-2">
                Set an auto sweep for <br /> withdrawal
              </p>
              <div className="flex justify-end" onClick={handleAutoSweep}>
                <button className="text-[15px] mt-2 w-[157px] h-[45px] m-auto flex rounded-xl justify-center items-center font-normal bg-[#4E00AD] text-white cursor-pointer  ">
                  Set auto sweep
                </button>
              </div>
            </div>
          )}
          {items && (
            <div className="w-1/2  px-4 py-3 h-full bg-white shadow-[2px_2px_4px_4px_rgba(113,50,189,0.15)] rounded-3xl flex flex-col gap-2">
              <div className="flex justify-between">
                <img
                  className="w-[114px] h-[114px]"
                  src="/assets/Time image.png"
                  alt="Time management-cuate"
                />
                <span className="text-[#CC00C1] font-medium">
                  {hour}
                  {timeAmOrPm}
                </span>
              </div>
              <p className="text-black font-medium text-sm">
                An auto sweep for {hour}{ timeAmOrPm} {frequency} has been set
              </p>
              <div className="flex justify-end" onClick={handleAutoSweepDelete}>
                <button className="text-sm w-[157px] h-[45px]  flex rounded-xl justify-center items-center bg-[#4E00AD] text-white font-medium cursor-pointer  ">
                  {isLoading ? (
                    <div className="flex items-center gap-4">
                      <div className=" cursor-pointer  text-white rounded-full w-6 h-6 flex justify-center items-center animate-spin border-white border-4 border-t-[#4E00AD] text-transparent">
                        null
                      </div>
                      <span>Loading</span>
                    </div>
                  ) : (
                    "Reset auto sweep"
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CashOut;

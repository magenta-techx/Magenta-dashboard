import React from "react";
import { useEffect } from "react";
import { HiOutlineChartSquareBar, HiOutlineUserGroup } from "react-icons/hi";
import { RiCalendar2Line } from "react-icons/ri";
import { TbCurrencyNaira } from "react-icons/tb";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import Card from "./Card";
import Header from "./Header";
import Navbar from "./Navbar";
import { NumericFormat } from "react-number-format";

const CashOut = () => {
  const {
    setShowAddAccount,
    isLoading,
    setName,
    setAddress,
    setPassCode,
    setOTP,
    setShowWithdrawAmount,
    setShowSelectAutoSweep,
    time,
    GET_ACCOUNT,
    handleAutoSweepDelete,
    state: { accountDetails },
    dispatch,
    showNav,
    transaction,
    GET_MERCHANT_TRANSACTION,
  } = ItemContext();
  const get = localStorage.getItem("reset_auto_sweep_result");
  const all_time_sales = transaction?.all_time_sales;
  const available_cash = transaction?.available_cash;
  const total_withdrawal = Number(all_time_sales) - Number(available_cash);
  let items;
  if (localStorage.getItem("item") === null) {
    items = false;
  } else {
    items = true;
  }
  const timeSet = JSON.parse(get);
  const hour = timeSet?.hour;
  const frequency = timeSet?.frequency;
  const index = time?.indexOf(" ");
  const timeAmOrPm = time?.substring(index)?.trim();
  const handleWithdraw = () => {
    setShowWithdrawAmount(true);
    // document.body.style.overflow = "hidden";
  };
  const handleAutoSweep = () => {
    setShowSelectAutoSweep(true);
    // document.body.style.overflow = "hidden";
  };

  const handleChangeTrue = (id) => {
    const change = accountDetails?.map((detail) => {
      return detail.id === id
        ? { ...detail, isAbtDel: true }
        : { ...detail, isAbtDel: false };
    });

    dispatch({ type: "Account Details", payload: change });
  };

  const handleClose = (id) => {
    const change = accountDetails?.map((detail) => {
      return detail.id === id
        ? { ...detail, isAbtDel: false }
        : { ...detail, isAbtDel: false };
    });
    dispatch({ type: "Account Details", payload: change });
  };
  useEffect(() => {
    GET_ACCOUNT();
    GET_MERCHANT_TRANSACTION();
  }, []);

  return (
    <div className="flex sm:flex-row flex-col-reverse w-screen h-full">
      {showNav && (
        <div className="lg:w-[20%] h-fit sm:h-screen sm:w-[107px] sm:min-h-screen sm:flex  bg-[#200047] flex sm:flex-col flex-row items-center">
          <Navbar />
        </div>
      )}
      <div className="lg:w-[80%] xs:w-[100%] overflow-x-hidden overflow-y-scroll h-full sm:h-screen sm:px-8 pb-4 sm:py-6 flex flex-col gap-6 ">
        <div className="w-full bg-white   ">
          <Header showLogo={true} />
        </div>
        <h2 className="font-medium text-xl albert mx-4 sm:ml-0">Cash Out</h2>
        <div className=" flex sm:w-full justify-between gap-4 mx-4 sm:ml-0 flex-wrap sm:flex-nowrap">
          <div className="w-full  sm:w-[45%] sm:h-[162px] border-[#E1E1E1] sm:bg-white border-2 rounded-xl lg:flex gap-6 px-6 py-4 bg-[#EEE8F8] flex items-center sm:flex-col sm:items-start">
            <div className="bg-white sm:bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
              <HiOutlineChartSquareBar size="25px" className="text-[#4E00AD]" />
            </div>
            <div className="flex flex-col inter sm:albert gap-3 ">
              <h4 className="font-normal sm:text-sm sm:text-gray-500">
                Total Withdrawal
              </h4>
              <h2 className="font-medium flex items-center text-[24px]">
                <TbCurrencyNaira className="sm:block hidden" />
                <NumericFormat
                  value={total_withdrawal > 0 ? total_withdrawal : 0}
                  thousandSeparator=","
                  displayType="text"
                  renderText={(value) => <b>{value}</b>}
                />
              </h2>
            </div>
          </div>
          <div className="w-full sm:w-full flex gap-4">
            <div className="w-1/2 flex flex-col sm:w-full sm:h-[162px] border-[#E1E1E1] border-2 rounded-xl lg:flex gap-2 sm:gap-6 px-6 sm:py-4 py-2">
              <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
                <HiOutlineUserGroup size="20px" className="text-[#4E00AD]" />
              </div>
              <div className="flex flex-col inter sm:albert gap-2 sm:gap-3 ">
                <h4 className="font-normal sm:text-sm text-[rgba(0,0,0,0.82)]">
                  Total Payments Made
                </h4>
                <h2 className="font-medium flex items-center text-[24px]">
                  <TbCurrencyNaira className="sm:block hidden" />
                  <NumericFormat
                    value={all_time_sales ? all_time_sales : 0}
                    thousandSeparator=","
                    displayType="text"
                    renderText={(value) => <b>{value}</b>}
                  />
                </h2>
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-2 sm:w-full sm:h-[162px] border-[#E1E1E1] border-2 rounded-xl lg:flex  sm:gap-6 px-6 sm:py-4 py-2">
              <div className="bg-[#C7AFE4] w-10 h-8 flex justify-center items-center rounded-lg">
                <RiCalendar2Line size="25px" className="text-[#4E00AD]" />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 inter sm:albert">
                <h4 className="font-normal sm:text-sm sm:text-gray-500">
                  In App Cash
                </h4>
                <h2 className="font-medium text-[24px] flex items-center">
                  <TbCurrencyNaira className="sm:block hidden" />
                  <NumericFormat
                    value={available_cash ? available_cash : 0}
                    thousandSeparator=","
                    displayType="text"
                    renderText={(value) => (
                      <b>{value.includes("-") ? "0" : value}</b>
                    )}
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-full h-fit flex flex-col sm:flex-row  gap-4 mt-6 mx-4 sm:ml-0 ">
          <div className="w-full sm:w-1/2 border-[#E1E1E1] sm:border-2 sm:p-4 rounded-xl flex flex-col gap-4">
            <p className="text-[14px] sm:text-lg font-normal inter sm:albert w-full">
              Bank account number associated with your magenta account.
            </p>
            <div className="flex gap-4 flex-col lg:flex-row ">
              {accountDetails.map((detail) => {
                return (
                  <Card
                    key={detail.id}
                    detail={detail}
                    handleChangeTrue={handleChangeTrue}
                    handleClose={handleClose}
                    // GET_ACCOUNT={GET_ACCOUNT}
                  />
                );
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
                  // document.body.style.overflow = "hidden";
                }}
                disabled={accountDetails?.length >= 2 ? true : false}
                className="text-sm w-[236px] h-[49px] poppins text-white 
                 flex rounded-xl justify-center items-center bg-[#4E00AD] font-medium cursor-pointer disabled:bg-[#E2E6EE] disabled:text-gray-500 disabled:cursor-not-allowed "
              >
                Add Account Number
              </button>
            </div>
          </div>
          <div className="w-full   mx- sm:w-1/2 flex flex-row  sm:flex-col lg:flex-row  sm:p-4 lg:flex gap-3 sm:gap-2 border-[#E1E1E1] sm:border-2  sm:rounded-xl">
            <div className=" w-1/2 sm:w-full lg:w-1/2 px-4 py-3 lg:h-full sm:h-fit sm:grid sm:grid-cols-2 bg-[#4E00AD] shadow-[4px_4px_13px_rgba(0,0,0,0.3)] rounded-3xl lg:flex lg:flex-col gap-2">
              <div>
                <img
                  className="w-[120px] h-[120px] object-cover"
                  src="/assets/ATM machine.png"
                  alt="atm machine image"
                />
              </div>
              <div>
                <p className="text-white text-sm sm:pt-3 sm:w-full w-[133p]  ml-2 mb-2 albert font-normal">
                  Make a withdrawal into your bank account
                </p>
                <div className="flex lg:justify-end" onClick={handleWithdraw}>
                  <button
                    disabled={accountDetails.length === 0}
                    className="lg:text-[16px] sm:text-sm w-[157px] h-[45px] m-auto  flex  albert rounded-xl justify-center items-center bg-white text-[#4E00AD] font-normal cursor-pointer  disabled:text-black disabled:bg-[#E2E6EE] disabled:cursor-not-allowed"
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
            {!items && (
              <div className="w-1/2  sm:w-full lg:w-1/2 px-4 py-3 sm:mt-4 lg:mt-0 lg:h-full sm:h-fit sm:grid sm:pt-7 sm:grid-cols-2 bg-white shadow-[2px_2px_4px_4px_rgba(113,50,189,0.15)] rounded-3xl sm:gap-2 lg:flex lg:flex-col lg:gap-0  sm:items-center lg:items-start">
                <div className="w-full">
                  <img
                    className="sm:w-full h-[114px] object-cover"
                    src="/assets/Time image.png"
                    alt="Time management-cuate"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-black font-normal xs:w-[126px] sm:w-full text-sm ml-2 mt-2 sm:albert inter">
                    Set an auto sweep for withdrawal
                  </p>
                  <div
                    className="flex justify-end w-full"
                    onClick={handleAutoSweep}
                  >
                    <button
                      disabled={accountDetails.length === 0}
                      className="lg:text-[16px] sm:text-sm text-[12px] mt-2 w-full h-[45px] m-auto inter sm:albert flex rounded-xl justify-center items-center inter font-normal bg-[#4E00AD] text-white cursor-pointer   disabled:text-black disabled:bg-[#E2E6EE] disabled:cursor-not-allowed"
                    >
                      Set auto sweep
                    </button>
                  </div>
                </div>
              </div>
            )}
            {items && (
              <div className="sm:w-full lg:w-1/2  px-4 py-3 h-full bg-white shadow-[2px_2px_4px_4px_rgba(113,50,189,0.15)] rounded-3xl flex flex-col gap-2 ">
                <div className="flex  justify-between relative">
                  <img
                    className="w-[114px] h-[114px]"
                    src="/assets/Time image.png"
                    alt="Time management-cuate"
                  />
                  <span className="text-[#CC00C1] font-medium absolute -right-5 sm:static sm:-right-0">
                    {hour === 0 ? "12" : hour}
                    {timeAmOrPm}
                  </span>
                </div>
                <p className="text-black text-sm sm:pt-3 sm:w-full w-[133p]  ml-2 mb-2 albert font-normal">
                  An auto sweep for {hour === 0 ? "12" : hour}
                  {timeAmOrPm} {frequency} has been set
                </p>
                <div
                  className="flex justify-end"
                  onClick={handleAutoSweepDelete}
                >
                  <button className="lg:text-[16px] sm:text-sm text-[12px] mt-2 w-full h-[45px] m-auto inter sm:albert flex rounded-xl justify-center items-center inter font-normal bg-[#4E00AD] text-white cursor-pointer   disabled:text-black disabled:bg-[#E2E6EE] disabled:cursor-not-allowed ">
                    {isLoading ? (
                      <div className="flex items-center gap-4">
                        <div className=" cursor-pointer  text-white rounded-full w-6 h-6 flex justify-center items-center animate-spin border-white border-4 border-t-[#4E00AD] text-transparent"></div>
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
    </div>
  );
};

export default CashOut;
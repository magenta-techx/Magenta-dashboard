import React from "react";
import { useState } from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import { hourrs } from "./data";
import Header from "./Header";

const Frequency = () => {
  const { hour, setHour, setShowAutoSweepAmount, setFrequency } = ItemContext();
  const [index, setIndex] = useState(1);
  const handleIncrease = () => {
    setIndex((prevState) => prevState - 1);
    setHour(hourrs[index]);
  };
  const handleDecrease = () => {
    setIndex((prevState) => prevState + 1);
    setHour(hourrs[index]);
  };
  const handleSubmit = () => {
    setShowAutoSweepAmount(true);
    setFrequency(false);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-full h-full sm:w-[472px] overflow-y-scroll overflow-x-hidden sm:overflow-hidden sm:h-fit bg-[#FAFAFA] sm:bg-white sm:rounded-3xl relative sm:pt-4 poppins"
    >
      <div
        onClick={() => {
          setFrequency(false);
        }}
        className="absolute w-[60px] h-[60px]  sm:flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer top-0 -right-4 hidden"
      >
        <img src="/assets/x.png" alt="Delete image" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full bg-white sm:hidden">
          <Header showLogo={false} handleClick={() => setFrequency(false)} />
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-4 p-4 w-full">
          <img
            src="/assets/Time image.png"
            className="self-center w-[130px] h-[130px] sm:w-[96px] sm:h-[96px]"
            alt="Time management-cuate 2"
          />
          <p className="text-lg tracking-normal  sm:w-[265px] font-normal">
            How frequent would you like to make a withdrawal in one day?
          </p>
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="w-[228px] h-[52px] flex ">
            <div className="w-[40%] h-full bg-[#F7F9FA] rounded-tl-lg rounded-bl-lg flex justify-center items-center poppins font-normal">
              Every
            </div>
            <div className="bg-[#4E00AD] w-[60%] rounded-lg h-full px-4 text-white">
              {" "}
              <div className="flex justify-between items-center h-full">
                <h2 className="poppins font-normal">{hour}</h2>
                <div className="flex flex-col gap-4">
                  <button disabled={index === 0} onClick={handleIncrease}>
                    <img
                      src="/assets/Vector.png"
                      alt="Arrow up for increasing time"
                      className="cursor-pointer"
                    />
                  </button>
                  <button
                    onClick={handleDecrease}
                    disabled={index === hourrs.length - 1}
                  >
                    <img
                      src="/assets/Vector (2).png"
                      alt="Arrow down for decreasing time"
                      className="cursor-pointer"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#F7F9FA] p-6 flex flex-col gap-6">
          {/* <h2 className="text-lg font-medium">Select destination account</h2> */}
          {/* <div className="flex flex-col gap-4">
            {accountDetails?.map((account, idx) => {
              return <WithdrawalDetails account={account} key={idx} />;
            })}
          </div> */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="w-[299px] h-[46px] bg-[#4E00AD]  text-white  flex justify-center rounded-xl items-center poppins"
            >
              Create Daily Withdrawal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Frequency;

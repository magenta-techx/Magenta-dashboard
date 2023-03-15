import React from "react";
import { useState } from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import { timee } from "./data";
import Header from "./Header";
const SelectHourly = () => {
  const { setFrequency, time, setShowSelectHourly, setTime } = ItemContext();
  const [index, setIndex] = useState(0);
  const handleIncrease = () => {
    setIndex((prevState) => prevState - 1);
    setTime(timee[index]);
  };
  const handleDecrease = () => {
    setIndex((prevState) => prevState + 1);
    setTime(timee[index]);
  };
  const handleSubmit = () => {
    setFrequency(true);
    setShowSelectHourly(false);
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-full h-full  overflow-y-scroll overflow-x-hidden sm:overflow-hidden sm:w-[472px] sm:h-fit bg-[#FAFAFA] sm:bg-white sm:rounded-3xl relative sm:pt-4 poppins"
    >
      <div
        onClick={() => {
          setShowSelectHourly(false);
        }}
        className="absolute w-[60px] h-[60px]  sm:flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer top-0 -right-4 hidden"
      >
        <img src="/assets/x.png" alt="Delete image" />
      </div>
      <div className="w-full bg-white   sm:hidden">
        <Header
          showLogo={false}
          handleClick={() => setShowSelectHourly(false)}
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-4 p-4 w-full">
          <img
            src="/assets/Time image.png"
            className="self-center w-[130px] h-[130px] sm:w-[96px] sm:h-[96px] "
            alt="Time management-cuate 2"
          />
          <p className="text-lg tracking-normal  sm:w-[265px] font-normal">
            Set an auto Hourly or Daily withdrawal sweep for your company to
            your bank account
          </p>
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="w-[228px] h-[52px] flex ">
            <div className="bg-[#4E00AD] w-[60%] rounded-lg h-full px-4 text-white">
              <div className="flex justify-between items-center h-full">
                <h2 className="font-normal">{time}</h2>
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
                    disabled={index === timee.length - 1}
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
            <div className="w-[40%] h-full bg-[#F7F9FA] rounded-tr-lg rounded-br-lg flex justify-center items-center font-normal">
              Daily
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#F7F9FA] p-6 flex flex-col gap-6">
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="w-[299px] h-[46px] bg-[#4E00AD]  text-white  flex justify-center rounded-xl items-center"
            >
              Create Daily Withdrawal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectHourly;

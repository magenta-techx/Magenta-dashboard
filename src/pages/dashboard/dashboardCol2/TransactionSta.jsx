import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ItemContext } from "../../../contextApi/stateMang.contextApi";
const TransactionSta = () => {
  const { data1, option1 } = ItemContext();
  return (
    <div className="h-[300px] w-full border border-[#EEE8F8] rounded-lg shadow-lg py-10 px-6 albert">
      <h1 className="text-xl font-medium ">Transaction Statistics</h1>
      <Line options={option1} data={data1} />
    </div>
  );
};

export default TransactionSta;

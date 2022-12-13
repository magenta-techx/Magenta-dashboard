import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { ItemContext } from "../../../contextApi/stateMang.contextApi";
import {Chart as ChartJS} from "chart.js/auto"
const DashboardCol3Part2 = () => {
    const {data2, option2}=ItemContext()
  return (
    <div className="w-4/12 h-[296.59px] border rounded-lg shadow-md flex flex-col p-4 items-center gap-10">
      <div className="flex justify-between items-center w-full">
        <h1>Customers</h1>
        <small className="text-[rgba(0,0,0,0.6)]">
          last updated <span className="text-black ">16-9-2022</span>
        </small>
      </div>
      <div className="w-full h-36 p10">
        <Doughnut data={data2} options={option2}/>
      </div>
    </div>
  );
};

export default DashboardCol3Part2;

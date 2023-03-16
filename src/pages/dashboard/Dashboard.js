import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { ItemContext } from "../../contextApi/stateMang.contextApi";
import DashboardCol1 from "./dashboardCol1/DashboardCol1";
import DashboardCol2 from "./dashboardCol2/DashboardCol2.jsx";
import DashboardCol3 from "./dashboardCol3/DashboardCol3";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
const Dashboard = () => {
  const { setShowNav, Get_Branch, GET_CHART_DATA, showNav } = ItemContext();
  const navigate = useNavigate();
  useEffect(() => {
    setShowNav(true);
    GET_CHART_DATA();
    // if (!localStorage.getItem("isAuth")) {
    //   navigate("/login");
    // }
  }, []);

  return (
    <div className="flex sm:flex-row flex-col-reverse w-screen">
      {showNav && (
        <div className="lg:w-[20%]  h-fit sm:h-screen sm:w-[107px] sm:min-h-screen sm:flex  bg-[#200047] flex sm:flex-col flex-row items-center">
          <Navbar />
        </div>
      )}
      <div className="lg:w-[80%] overflow-x-hidden xs:w-[100%] sm:px-8 h-[92%] sm:h-screen sm:py-6 font overflow-y-scroll">
        <div className="w-[full]  bg-white  ">
          <Header showLogo={true} />
        </div>
        <DashboardCol1 />
        <div className="sm:border border-[#C7AFE4] border-t  sm:border-[#C7AFE4] mx-4 sm:mx-0 sm:px-6 py-4 sm:rounded-[12px]">
          <DashboardCol2 />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

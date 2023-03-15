import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { ItemContext } from "../../contextApi/stateMang.contextApi";
import DashboardCol1 from "./dashboardCol1/DashboardCol1";
import DashboardCol2 from "./dashboardCol2/DashboardCol2.jsx";
import DashboardCol3 from "./dashboardCol3/DashboardCol3";
import { motion } from "framer-motion";
const Dashboard = () => {
  const { setShowNav, Get_Branch, GET_CHART_DATA } = ItemContext();
  const navigate = useNavigate();
  useEffect(() => {
    setShowNav(true);
    GET_CHART_DATA();
    if (!localStorage.getItem("isAuth")) {
      navigate("/login");
    }
  }, []);

  return (
    <div
     
      className="lg:w-[80%] sm:w-[90%] px-8 py-6 font overflow-y-scroll"
    >
      <div className="w-[full]  bg-white  ">
        <Header />
      </div>
      <DashboardCol1 />
      <div className="border px-6 py-4 rounded-[12px]">
        <DashboardCol2 />
        {/* <DashboardCol3 /> */}
      </div>
    </div>
  );
};

export default Dashboard;

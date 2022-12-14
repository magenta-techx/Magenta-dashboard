import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { ItemContext } from "../../contextApi/stateMang.contextApi";
import DashboardCol1 from "./dashboardCol1/DashboardCol1";
import DashboardCol2 from "./dashboardCol2/DashboardCol2.jsx";
import DashboardCol3 from "./dashboardCol3/DashboardCol3";

const Dashboard = () => {
  const { setShowNav, Get_Branch } = ItemContext();
  const navigate=useNavigate()
  useEffect(() => {
    setShowNav(true);
    if (!localStorage.getItem("isAuth")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="w-[80%] px-8 py-6">
      <div className="w-[full]  bg-white  ">
        <Header />
      </div>
      <DashboardCol1 />
      <div className="border px-6 py-4">
        <DashboardCol2 />
        <DashboardCol3 />
      </div>
    </div>
  );
};

export default Dashboard;

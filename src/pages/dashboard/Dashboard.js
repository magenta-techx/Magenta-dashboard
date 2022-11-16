import React from "react";
import Header from "../../components/Header";
import DashboardCol1 from "./dashboardCol1/DashboardCol1";
import DashboardCol2 from "./dashboardCol2/DashboardCol2.jsx";
import DashboardCol3 from "./dashboardCol3/DashboardCol3";

const Dashboard = () => {
  return (
    <div className="w-[80%] p-10">
      <div className="w-[full]  bg-white  py-6 ">
          <Header />
        </div>
      <DashboardCol1 />
      <DashboardCol2 />
      <DashboardCol3 />
    </div>
  );
};

export default Dashboard;

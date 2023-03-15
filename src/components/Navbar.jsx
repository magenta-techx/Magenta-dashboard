import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  BsFillBarChartLineFill,
  BsGrid,
  BsJournalBookmark,
} from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TbCashBanknote } from "react-icons/tb";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { BiLogOutCircle } from "react-icons/bi";
const Navbar = () => {
  const navigate = useNavigate();
  const [isItActive, setIsItActive] = useState(null);
  return (
    <>
      <div className="h-fit p-10 sm:block hidden">
        <Link to="/">
          <img
            src="/assets/magentalogo.png"
            alt="MAGENTA HEADER LOGO"
            className="object-cover lg:hidden"
          />
          <img
            src="/assets/MAGENTA LOGO 4.png"
            alt="MAGENTA HEADER LOGO"
            className="object-cover sm:hidden lg:flex"
          />
        </Link>
      </div>
      <NavLink
        onClick={() => (document.documentElement.scrollTop = 0)}
        to="/"
        className={({ isActive }) => {
          if (isActive) {
            setIsItActive("dashboard");
            return "text-white duration-500 w-full sm:bg-[#7132BD] px-4 sm:px-10 py-2 sm:py-3  border-[#C7AFE4] sm:border-r-4 sm:my-2";
          } else {
            return " text-[#ADB3BD] w-full px-4 sm:px-10 py-2 sm:py-3 sm:my-2 sm:";
          }
        }}
      >
        <div className="lg:flex flex flex-col items-center lg:flex-row gap-3 albert sm:block ">
          <BsGrid
            size={isItActive === "dashboard" ? "20px" : "18px"}
            className=" sm:text-lg"
          />
          <p className="text-[16px] sm:overflow-hidden sm:opacity-0 lg:opacity-100 sm:hidden lg:flex  hidden">
            Dashboard
          </p>
          {isItActive === "dashboard" && (
            <p className="text-[10px] block sm:hidden">dashboard</p>
          )}
        </div>
      </NavLink>
      <NavLink
        onClick={() => (document.documentElement.scrollTop = 0)}
        to="/branch"
        className={({ isActive }) => {
          if (isActive) {
            setIsItActive("branch");
            return "text-white duration-500 w-full sm:bg-[#7132BD] sm:px-10 py-3 px-4  sm:border-[#C7AFE4] sm:border-r-4 sm:my-2";
          } else {
            return " text-[#ADB3BD] w-full sm:px-10 sm:py-3 sm:my-2 px-4";
          }
        }}
      >
        <div className="lg:flex flex flex-col items-center lg:flex-row gap-3 albert sm:block ">
          <HiOutlineChartSquareBar
            size={isItActive === "branch" ? "22px" : "20px"}
            className="sm:text-xl  "
          />
          <p className="text-[16px] sm:overflow-hidden sm:opacity-0 lg:opacity-100 sm:hidden lg:flex  hidden">
            Company Branch
          </p>
          {isItActive === "branch" && (
            <p className="text-[10px] block sm:hidden">Branch</p>
          )}
        </div>
      </NavLink>
      <NavLink
        onClick={() => (document.documentElement.scrollTop = 0)}
        to="/transaction"
        className={({ isActive }) => {
          if (isActive) {
            setIsItActive("transaction");
            return "text-white duration-500 w-full sm:bg-[#7132BD] sm:px-10 py-3 px-4  sm:border-[#C7AFE4] sm:border-r-4 sm:my-2";
          } else {
            return " text-[#ADB3BD] w-full sm:px-10 px-4 py-3 sm:my-2 ";
          }
        }}
      >
        <div className="lg:flex flex flex-col items-center lg:flex-row gap-3 albert sm:block ">
          <BsJournalBookmark
            // size={isItActive === "transaction" ? "20px" : "18px"}
            className=" sm:text-lg"
          />
          <p className="text-[16px] sm:overflow-hidden sm:opacity-0 lg:opacity-100 sm:hidden lg:flex  hidden">
            Transaction History
          </p>
          {isItActive === "transaction" && (
            <p className="text-[10px] block sm:hidden">History</p>
          )}
        </div>
      </NavLink>
      <NavLink
        onClick={() => (document.documentElement.scrollTop = 0)}
        to="/cashout"
        className={({ isActive }) => {
          if (isActive) {
            setIsItActive("cashout");
            return "text-white duration-500 w-full sm:bg-[#7132BD] sm:px-10 py-3 px-4  sm:border-[#C7AFE4] sm:border-r-4 sm:my-2";
          } else {
            return " text-[#ADB3BD] w-full sm:px-10 px-4 py-3 sm:my-2 ";
          }
        }}
      >
        <div className="lg:flex flex flex-col items-center lg:flex-row gap-2 albert sm:block ">
          <TbCashBanknote
            size={isItActive === "cashout" ? "24px" : "20px"}
            className="text-sm sm:text-xl"
          />
          <p className="text-[15px] sm:overflow-hidden sm:opacity-0 lg:opacity-100 sm:hidden lg:flex  hidden">
            Cash Out
          </p>
          {isItActive === "cashout" && (
            <p className="text-[10px] block sm:hidden">Cashout</p>
          )}
        </div>
      </NavLink>
      <NavLink
        onClick={() => (document.documentElement.scrollTop = 0)}
        to="/settings"
        className={({ isActive }) => {
          if (isActive) {
            setIsItActive("settings");
            return "text-white duration-500 w-full sm:bg-[#7132BD] sm:px-10 sm:py-3 py-2 px-4  sm:border-[#C7AFE4] sm:border-r-4 sm:my-2";
          } else {
            return " text-[#ADB3BD] w-full sm:px-10 px-4 py-2 sm:py-3 sm:my-2 ";
          }
        }}
      >
        <div className="lg:flex flex flex-col items-center lg:flex-row gap-2 albert sm:block ">
          <FiSettings
            size={isItActive === "settings" ? "20px" : "18px"}
            className="text-sm sm:text-xl"
          />
          <p className="text-[16px] sm:overflow-hidden sm:opacity-0 lg:opacity-100 sm:hidden lg:flex  hidden">
            Settings
          </p>
          {isItActive === "settings" && (
            <p className="text-[10px] block sm:hidden">Settings</p>
          )}
        </div>
      </NavLink>
      <div
        className="  gap-4 items-center absolute bottom-5 px-10 py-3 justify-between text-white cursor-pointer hidden sm:flex "
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
      >
        <BiLogOutCircle className="w-10 h-10  " />
        <p className="text-xl albert sm:overflow-hidden sm:opacity-0 lg:opacity-100 sm:hidden lg:flex">
          Logout
        </p>
      </div>
    </>
  );
};

export default Navbar;

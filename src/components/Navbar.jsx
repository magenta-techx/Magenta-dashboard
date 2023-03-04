import React from "react";
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
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [isActive,setIsActive]=useState()
  return (
    <>
      <div className="h-fit p-10 s">
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
          return isActive
            ? "text-white duration-500 w-[full] bg-[#7132BD] px-10 py-3   border-[#C7AFE4] border-r-4 my-2"
            : " text-[#ADB3BD] w-full px-10 py-3 my-2 sm:";
        }}
      >
        <div className="lg:flex items-center gap-3 albert sm:block">
          <BsGrid className="text-lg" />
          <p className="text-[16px] sm:overflow-hidden sm:opacity-0 lg:opacity-100 sm:hidden lg:flex">Dashboard</p>
        </div>
      </NavLink>
      <NavLink
        onClick={() => (document.documentElement.scrollTop = 0)}
        to="/branch"
        className={({ isActive }) => {
          return isActive
            ? "text-white duration-500 w-full bg-[#7132BD]   px-10 py-3   border-[#C7AFE4] border-r-4 my-2"
            : " text-[#ADB3BD] w-full px-10 py-3 my-2";
        }}
      >
        <div className="lg:flex items-center gap-3 albert sm:block">
          <HiOutlineChartSquareBar className="text-xl  " />
          <p className="text-[16px] sm:overflow-hidden sm:opacity-0 lg:opacity-100 sm:hidden lg:flex">Company Branch</p>
        </div>
      </NavLink>
      <NavLink
        onClick={() => (document.documentElement.scrollTop = 0)}
        to="/transaction"
        className={({ isActive }) => {
         
          return isActive
          ? "text-white duration-500 w-full bg-[#7132BD]   px-10 py-3   border-[#C7AFE4] border-r-4 my-2"
          : " text-[#ADB3BD] w-full px-10 py-3 my-2 ";
        }}
      >
        <div className="lg:flex items-center gap-3 albert sm:block">
          <BsJournalBookmark className="text-lg" />
          <p className="text-[16px] sm:overflow-hidden sm:opacity-0 lg:opacity-100 sm:hidden lg:flex">Transaction History</p>
        </div>
      </NavLink>
      <NavLink
        onClick={() => (document.documentElement.scrollTop = 0)}
        to="/cashout"
        className={({ isActive }) => {
          return isActive
            ? "text-white duration-500 w-full bg-[#7132BD] px-10 py-3   border-[#C7AFE4] border-r-4 my-2"
            : " text-[#ADB3BD] w-full px-10 py-3 my-2";
        }}
      >
        <div className="lg:flex items-center gap-3 albert sm:block">
          <TbCashBanknote className="text-xl" />
          <p className="text-[16px] sm:overflow-hidden sm:opacity-0 lg:opacity-100 sm:hidden lg:flex">Cash out</p>
        </div>
      </NavLink>
      <NavLink
        onClick={() => (document.documentElement.scrollTop = 0)}
        to="/settings"
        className={({ isActive }) => {
          return isActive
            ? "text-white duration-500 w-full bg-[#7132BD]   px-10 py-3   border-[#C7AFE4] border-r-4 my-2"
            : " text-[#ADB3BD] w-full px-10 py-3 my-2";
        }}
      >
        <div className="lg:flex items-center gap-3 albert sm:block">
          <FiSettings className="text-lg" />
          <p className="text-[16px] sm:overflow-hidden sm:opacity-0 lg:opacity-100 sm:hidden lg:flex ">Settings</p>
        </div>
      </NavLink>
      <div
        className=" flex gap-4 items-center absolute bottom-5 px-10 py-3 justify-between text-white cursor-pointer "
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
      >
        <BiLogOutCircle className="w-10 h-10  " />
        <p className="text-xl sm:overflow-hidden sm:opacity-0 lg:opacity-100 sm:hidden lg:flex">Logout</p>
      </div>
    </>
  );
};

export default Navbar;

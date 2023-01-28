import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BsFillBarChartLineFill,
  BsGrid,
  BsJournalBookmark,
} from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TbCashBanknote } from "react-icons/tb";
import { HiOutlineChartSquareBar } from "react-icons/hi";
const Navbar = () => {
  return (
    <>
      <div className="h-fit p-10">
        <Link to="/">
          <img
            src="/assets/MAGENTA LOGO 4.png"
            alt="MAGENTA HEADER LOGO"
            className=" object-cover"
          />
        </Link>
      </div>
      <NavLink
        onClick={() => (document.documentElement.scrollTop = 0)}
        to="/"
        className={({ isActive }) => {
          return isActive
            ? "text-white duration-500 w-[full] bg-[#7132BD]   px-10 py-3   border-[#C7AFE4] border-r-4 my-2"
            : " text-[#ADB3BD] w-full px-10 py-3 my-2";
        }}
      >
        <div className="flex items-center gap-3 albert">
          <BsGrid className="text-lg" />
          <p className="text-[16px]">Dashboard</p>
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
        <div className="flex items-center gap-3 albert">
          <HiOutlineChartSquareBar className="text-xl" />

          <p className="text-[16px]">Company Branch</p>
        </div>
      </NavLink>
      <NavLink
        onClick={() => (document.documentElement.scrollTop = 0)}
        to="/transaction"
        className={({ isActive }) => {
          return isActive
            ? "text-white duration-500 w-full bg-[#7132BD]   px-10 py-3   border-[#C7AFE4] border-r-4 my-2"
            : " text-[#ADB3BD] w-full px-10 py-3 my-2";
        }}
      >
        <div className="flex items-center gap-3 albert">
          <BsJournalBookmark className="text-lg" />
          <p className="text-[16px]">Transaction History</p>
        </div>
      </NavLink>
      <NavLink
        onClick={() => (document.documentElement.scrollTop = 0)}
        to="/cashout"
        className={({ isActive }) => {
          return isActive
            ? "text-white duration-500 w-full bg-[#7132BD]   px-10 py-3   border-[#C7AFE4] border-r-4 my-2"
            : " text-[#ADB3BD] w-full px-10 py-3 my-2";
        }}
      >
        <div className="flex items-center gap-3 albert">
          <TbCashBanknote className="text-xl" />
          <p className="text-[16px]">Cash out</p>
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
        <div className="flex items-center gap-3 albert">
          <FiSettings className="text-lg" />
          <p className="text-[16px]">Settings</p>
        </div>
      </NavLink>
    </>
  );
};

export default Navbar;

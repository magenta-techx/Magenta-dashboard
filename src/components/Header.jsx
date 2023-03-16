import React from "react";
import { TbNotification } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import { Link, useNavigate } from "react-router-dom";
import Notification from "./Notification";
import DisplayName from "./DisplayName";
import { BsArrowLeft } from "react-icons/bs";

const Header = ({ showLogo, handleClick }) => {
  const { dispatch } = ItemContext();

  return (
    <div className="shadow-xl  w-full h-16 border px-4 sm:px-6 sm:rounded-xl  flex justify-between items-center bg-[#F4F5F7] sm:bg-white">
      <div>
        <TbNotification
          size="30px"
          className="text-[#7132BD] sm:block hidden"
        />
        {showLogo ? (
          <Link to={"/"}>
            <img
              src="/assets/Layer_x0020_1.png"
              alt="MAGENTA HEADER LOGO"
              className="object-cover sm:hidden block"
            />
          </Link>
        ) : (
          <div
            onClick={handleClick}
            className=" w-[50px] h-[50px] flex justify-center items-center rounded-full  bg-[#E2E6EE] cursor-pointer text-[#4E00AD]"
          >
            <BsArrowLeft size={"30px"} />
          </div>
        )}
      </div>
      <div className="flex gap-6 ">
        <Notification />
        <div
          onClick={() => {
            dispatch({ type: "show-profile" });
          }}
        >
          <DisplayName
            mobile="false"
            width={"42px"}
            height={"42px"}
            fontSize={"18px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

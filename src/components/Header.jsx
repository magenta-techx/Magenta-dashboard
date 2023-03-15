import React from "react";
import { TbNotification } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import { useNavigate } from "react-router-dom";
import Notification from "./Notification";
import DisplayName from "./DisplayName";

const Header = () => {
  const {
    state: { showProfile },
    dispatch,
  } = ItemContext();

  return (
    <div className="shadow-xl  shadow-[rgba(113,50,189,0.05)] w-full h-16 border px-6 rounded-xl  flex justify-between items-center">
      <div>
        <TbNotification size="30px" className="text-[#7132BD]" />
      </div>
      <div className="flex gap-6 ">
        <Notification />
        <div
          onClick={() => {
            dispatch({ type: "show-profile" });
            // document.body.style.overflow = "hidden";
          }}
        >
          <DisplayName width={"42px"} height={"42px"} fontSize={"18px"} />
        </div>
      </div>
    </div>
  );
};

export default Header;

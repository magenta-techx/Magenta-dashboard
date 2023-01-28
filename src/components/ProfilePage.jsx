import React from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import DisplayName from "./DisplayName";
import Notification from "./Notification";

const ProfilePage = () => {
  const {
    state: { showProfile },
    dispatch,
  } = ItemContext();
  const user = localStorage.getItem("user");
  const email = JSON.parse(user);

  const userFirstLetter = email?.email?.split("")[0];
  const userSecondLetter = email?.email?.split("")[1];
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white w-[504px] h-full p-4 relative transition-all"
    >
      <div className="bg-[#EEE8F8] absolute top-2 -left-6 rounded-full w-fit h-fit text-[#EEE8F8] p-2">
        <img
          onClick={() => {
            dispatch({ type: "hide-profile" });
             document.body.style.overflow = "visible";
          }}
          src="/assets/Group 2184.png"
          className="cursor-pointer"
          alt=""
        />
      </div>

      <div className="flex justify-end">
        <Notification />
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="font-medium text-xl">Profile Settings</h1>
        <DisplayName width={"80px"} height="80px" fontSize={"32px"}/>
      </div>
    </div>
  );
};

export default ProfilePage;

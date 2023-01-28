import React from "react";
import { IoMdNotifications } from "react-icons/io";

const Notification = () => {
  return (
    <div className="relative w-fit cursor-pointer">
      <IoMdNotifications size="25px" className="text-[#93A3C0] w-[6.5" />
      <p className="absolute top-0 right-0 bg-[#7132BD] w-3 h-3 rounded-full "></p>
    </div>
  );
};

export default Notification;

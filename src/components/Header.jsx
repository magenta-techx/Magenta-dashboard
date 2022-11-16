import React from "react";
import { TbNotification } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  return (
    <div className="shadow-xl  shadow-[rgba(113,50,189,0.15)] w-full h-16 border px-6 rounded-xl  flex justify-between items-center">
      <div>
        <TbNotification size="30px" className="text-[#7132BD]" />
      </div>
      <div className="flex gap-4">
        <div className="relative w-fit cursor-pointer">
          <IoMdNotifications size="25px" className="text-[#93A3C0] " />
          <p className="absolute top-0 right-0 bg-[#7132BD] w-3 h-3 rounded-full"></p>
        </div>
        <div className="bg-[#7132BD] cursor-pointer rounded-full w-8 text-white h-8 flex justify-center items-center">
          JK
        </div>
      </div>
    </div>
  );
};

export default Header;

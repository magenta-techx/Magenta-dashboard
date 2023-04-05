import { motion } from "framer-motion";
import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { ItemContext } from "./contextApi/stateMang.contextApi";

const IdleTimer = () => {
  const { open, remaining, handleStillHere } = ItemContext();
  return (
    <>
      {localStorage.getItem("isAuth") && (
        <motion.div
          animate={{ y: open ? 10 : -100 }}
          transition={{ type: "" }}
          className={`bg-[#EEE8F8] p-4 poppins w-[90%]  sm:w-[300px] lg:w-[400px] justify-between   items-center fixed sm:right-10 sm:-translate-x-[10%]  border-l-4  sm:top-5 z-[100]   h-fit  border-l-[#200047] rounded-lg m-4 sm:m-0 gap-2
            ${open ? "flex" : "hidden"}`}
        >
          <HiOutlineExclamationCircle size={"30px"} />
          <div className="w-1/2">
            <p className="sm:text-[16px] text-sm">
              Due to inactivity you will be logged out of your account in{" "}
              {remaining} seconds
            </p>
          </div>
          <div className="">
            <button
              onClick={handleStillHere}
              className="bg-white shadow-lg p-2 text-[#200047] rounded-lg"
            >
              I'm still here
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default IdleTimer;
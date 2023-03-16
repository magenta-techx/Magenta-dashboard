import React from "react";
import { ItemContext } from "./contextApi/stateMang.contextApi";
import { motion } from "framer-motion";
const Alert = () => {
  const {
    showError,
    showSuccess,
    setShowError,
    setShowSuccess,
    error,
    success,
  } = ItemContext();
  return (
    <>
      <motion.div
        animate={{ y: showError ? 10 : -100 }}
        transition={{ type: "spring" }}
        className={`bg-[#EEE8F8] p-4 poppins w-[90%]  sm:w-[300px] justify-between   items-center fixed sm:right-10 sm:-translate-x-[10%]  border-l-4  sm:top-5 z-[100]   h-fit  border-l-red-700 rounded-lg m-4 sm:m-0 ${
          showError ? "flex" : "hidden"
        }`}
      >
        <p className="w-full"> {showError ? error : error}</p>

        <div className="w-[20%] flex justify-end">
          <img
            onClick={() => setShowError(false)}
            src="/assets/x.png"
            className="object-cover w cursor-pointer h-8"
          />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: showSuccess ? 10 : -100 }}
        transition={{ type: "spring" }}
        className={`bg-[#EEE8F8] p-4 poppins w-[90%]  sm:w-[300px] justify-between   items-center fixed sm:right-10 sm:-translate-x-[10%]  border-l-4  sm:top-5 z-[100]   h-fit  border-l-green-700 rounded-lg m-4 sm:m-0 ${
          showSuccess ? "flex" : "hidden"
        }`}
      >
        <p className="w-full"> {showSuccess ? success : success}</p>
        <div className="w-[20%] flex justify-end">
          <img
            onClick={() => setShowSuccess(false)}
            src="/assets/x.png"
            className="object-cover w cursor-pointer h-8"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Alert;

import axios from "axios";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { ItemContext } from "../contextApi/stateMang.contextApi";

const AcctDeleteMsg = () => {
  const {
    setShowAcctDelete,
    isLoading,
    setIsLoading,
    GET_ACCOUNT,
    setShowDeleteSucc,
    handleAutoSweepDelete,
    state: { ForEachAcctDetail },
    setStates,
    det,
    setDel,
  } = ItemContext();

  const acc = localStorage.getItem("num");
  const filterColon = acc
    ?.split("")
    ?.filter((a) => a !== '"')
    ?.join("");
  const handleDelete = async (detail) => {
    // setIsLoading(true);

    console.log(typeof Number(filterColon));
    console.log(ForEachAcctDetail);

    const token = localStorage.getItem("login_token");
    // Check if acct number are equal
    if (localStorage.getItem("item")) {
      if (detail === Number(filterColon)) {
        handleAutoSweepDelete();
        try {
          const res = await axios.delete(
            `https://backend.magentacashier.com/accounts/account/delete/${detail}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        console.log(res);
          if (res.status === 204) {
            setStates(false);
            setIsLoading(false)
            setShowAcctDelete(false);
            setShowDeleteSucc(true);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        // localStorage.removeItem("num");

        try {
          const res = await axios.delete(
            `https://backend.magentacashier.com/accounts/account/delete/${detail}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (res.status === 204) {
            // GET_ACCOUNT();
            setStates(false);
            setShowAcctDelete(false);
            setShowDeleteSucc(true);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
        // localStorage.removeItem("num");

      try {
        const res = await axios.delete(
          `https://backend.magentacashier.com/accounts/account/delete/${detail}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.status === 204) {
          setShowAcctDelete(false);
          setStates(false);
          setShowDeleteSucc(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[500px] h-[212px] bg-white rounded-3xl relative px-6 py-10 flex flex-col gap-3 justify-between albert"
    >
      <p className="text-lg ">
        Are you sure you want to <span className="text-[#DD55D4]">Delete</span>{" "}
        this account number from your magenta account?
      </p>

      <div className="flex w-full justify-center gap-10 items-center">
        <div
          onClick={() => {
            setShowAcctDelete(false);
            document.body.style.overflow = "visible";
            console.log(filterColon)
          }}
          className="bg-[#4E00AD] w-[140px] h-[46px] rounded-xl text-white flex justify-center items-center cursor-pointer"
        >
          Cancel
        </div>
        <div
          onClick={() => {
            handleDelete(ForEachAcctDetail?.id);
          }}
          className="bg-[#EEE8F8] w-[140px] h-[46px] rounded-xl text-black flex justify-center gap-4 items-center cursor-pointer"
        >
          {isLoading ? (
            <div className="flex items-center gap-4">
              <div className=" cursor-pointer  text-white rounded-full w-6 h-6 flex justify-center items-center animate-spin border-white border-4 border-t-[#4E00AD] text-transparent">
                null
              </div>
            </div>
          ) : (
            <div className="text-[#DD55D4] flex items-center gap-4 font-normal">
              <BsTrash className="text-[#DD55D4] text-xl" />
              <p>Delete</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcctDeleteMsg;

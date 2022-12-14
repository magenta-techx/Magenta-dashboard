import axios from "axios";
import React from "react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { TbTrash } from "react-icons/tb";
import { ItemContext } from "../contextApi/stateMang.contextApi";

const Card = ({ detail: { account_number, bank_name, id }, detail }) => {
  const {
    GET_ACCOUNT,
    handleAutoSweepDelete,
    state: { ForEachAcctDetail },
  } = ItemContext();
  const [state, setState] = useState(false);
  const split = account_number.split("");
  const fitr = split?.filter((a, i) => {
    return i < 3;
  });
  const latr = split?.filter((a, i) => {
    return i >= 7;
  });
  const midfrs = split
    ?.filter((a, i) => {
      return i > 2;
    })
    .join("")
    .substring(4, 0);
  const midfth = midfrs.split("");
  const fir = midfth.splice(0, 0, "*");
  const sec = midfth.splice(1, 1, "*");
  const trd = midfth.splice(2, 2, "*");
  const fth = midfth.splice(3, 2, "*");
  const acct = localStorage.getItem("account");
  const acct_num = JSON.parse(acct);
  const handleClick = (detail) => {
    if (detail.id === id) {
      setState(!state);
      console.log(acct_num);
    } else {
      setState(false);
    }
  };
  // console.log(accountDetails)
  const handleDelete = async (detail) => {
    const token = localStorage.getItem("login_token");
    console.log(detail);
    // Check if acct number are equal
    if (localStorage.getItem("item")) {
      if (detail?.account_number === acct_num) {
        handleAutoSweepDelete();
        try {
          const res = await axios.delete(
            `https://backend.magentacashier.com/accounts/account/delete/${detail?.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (res.status === 204) {
            GET_ACCOUNT();
            setState(false);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const res = await axios.delete(
            `https://backend.magentacashier.com/accounts/account/delete/${detail?.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (res.status === 204) {
            GET_ACCOUNT();
            setState(false);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      try {
        const res = await axios.delete(
          `https://backend.magentacashier.com/accounts/account/delete/${detail?.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.status === 204) {
          GET_ACCOUNT();
          setState(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="w-[242px] bg-[#F4F5F7] h-[86px] p-4 flex flex-col gap-4 rounded-lg">
      <div className="flex justify-between">
        <small className="text-sm font-medium text-black">
          {fitr}
          {midfth?.join("")}
          {latr}
        </small>
        <div className="relative">
          <div onClick={() => handleClick(detail)}>
            {state ? (
              <FaTimes className="cursor-pointer" />
            ) : (
              <BsThreeDots className="cursor-pointer" />
            )}
          </div>
          {state && (
            <div
              onClick={() => handleDelete(detail)}
              className="absolute w-[107px] h-[60px] bg-white text-[#DD55D4] flex justify-center items-center gap-2 rounded-2xl cursor-pointer"
            >
              <TbTrash size="20px" />
              <small className="text-lg">Delete</small>
            </div>
          )}
        </div>
      </div>
      <h4 className="text-[rgba(0,0,0,0.4)]">{bank_name}</h4>
    </div>
  );
};

export default Card;

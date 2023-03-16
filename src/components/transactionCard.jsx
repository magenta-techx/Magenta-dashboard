import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  HiOutlineArrowRight,
  HiOutlineArrowNarrowDown,
  HiOutlineArrowNarrowUp,
  HiOutlineChevronUp,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { HiOutlineFilter } from "react-icons/hi";
import { CiSaveUp1 } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

import { motion } from "framer-motion";

import { ItemContext } from "../contextApi/stateMang.contextApi";
const TransactionCard = ({ data }) => {
  const { showNav } = ItemContext();

  return (
    <div className="content h-[480px]  mb-3">
      {data.map((item, id) => (
        <div className="clip h-[480px] overflow-y-auto" key={id}>
          <div className="wrap-card bg-gray-100 rounded-md m-3 p-4 albert">
            <div className="top flex justify-between">
              <p>
                User UUID <span className="font-medium"> | {item.client.magenta_id} </span>{" "}
              </p>
              <p className="text-sm">{item.created_at}</p>
            </div>
            <div className="header pb-2">
              <h3>
                Branch Name{" "}
                <span className="font-medium"> | {item.branch_name} </span>{" "}
              </h3>
            </div>
            <div className="body bg-white h-fit rounded-lg mb-2 p-2">
              <div className=" flex justify-between p-2">
                <p>Amount</p>
                <p>{item.amount}</p>
              </div>
              <div className="flex justify-between p-2 bg-gray-100">
                <p>Reference</p>
                <p>{item.local_reference}</p>
              </div>
              <div className="flex justify-between p-2">
                <p>Card type</p>
                <p>{item.card_type}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
     <div className="div sm:hidden">
     {!data.length && (
        <div className="absolute  left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          <img src="/assets/NothingHereYet.png" alt="Nothing here yet image" />
        </div>
      )}
     </div>
    </div>
  );
};

export default TransactionCard;

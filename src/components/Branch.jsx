import React, { useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../contextApi/stateMang.contextApi";

const Branch = ({ branch }) => {
  const {
    setShowDeleteBranch,
    dispatch,
    setEditBranchAddress,
    setEditBranchName,
    setEditBranchPasscode,
    state: { ForEachAcctDetail },
  } = ItemContext();

 
  
  const navigate = useNavigate();
  const handleClick = (item) => {
    setEditBranchAddress(item?.address);
    setEditBranchName(item?.name);
    setEditBranchPasscode(item?.passcode);
    navigate(`/branch/${item.id}`);
    document.documentElement.scrollTop = 0;
    localStorage.setItem("branch_report", JSON.stringify(item));
  };
  const handleDelete = (item) => {
    setShowDeleteBranch(true);
    dispatch({ type: "Individual Details", payload: item });
    // document.body.style.overflow = "hidden";
  };
  return (
    <div className="flex flex-col gap-2  w-[280px]">
      <div className="bg-[#4E00AD] h-[57px] px-3  flex rounded-tl-lg rounded-tr-lg justify-between items-center">
        <h2 className="text-white text-xl inter">{branch.name}</h2>
        <BsTrash
          className="text-white text-xl cursor-pointer"
          onClick={() => handleDelete(branch)}
        />
      </div>
      <div className="border  bg-[#FAFAFA] rounded-bl-lg rounded-br-lg">
        <div className="border-b-[#8652C7] border-b m-2 py-2">
          <p className="text-[#6B778C] text-sm flex gap-2 inter font-normal">
            <span>Date Created:</span>
            <span className="text-black">
              {branch.created_at?.substring(0, 10)}
            </span>
          </p>
          <p className="text-[#6B778C] text-sm flex gap-2 inter font-normal">
            <span>Address:</span>
            <span className="text-black whitespace-nowrap overflow-hidden text-ellipsis">
              {branch?.address}
            </span>
          </p>
        </div>
        <div className="p-2">
          <p className="text-[#6B778C] text-sm flex gap-2 items-center albert">
            <span>Total Sales:</span>
            <span className="text-black text-xl flex items-center">
              <TbCurrencyNaira />
              {branch?.sales_and_customers.total_transactions}
            </span>
          </p>

          <p className="text-[#6B778C] text-sm flex gap-2 items-center albert">
            <span>Total Customers</span>
            <span className="text-black text-xl flex items-center">
              <TbCurrencyNaira />
              {branch?.sales_and_customers.unique_customers}
            </span>
          </p>
        </div>
        <div
          className="bg-white w-full h-[56px] flex justify-end px-4 items-center gap-4 cursor-pointer poppins"
          onClick={() => handleClick(branch)}
        >
          <p className="font-normal">View Branch Report</p>
          <MdOutlineArrowForwardIos className="text-[#7132BD]" />
        </div>
      </div>
    </div>
  );
};

export default Branch;

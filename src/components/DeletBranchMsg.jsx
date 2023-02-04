import axios from "axios";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { ItemContext } from "../contextApi/stateMang.contextApi";

const DeleteBranchMsg = () => {
  const {
    setShowDeletedMsg,
    isLoading,
    setIsLoading,
    state: { ForEachDetail },
    setShowDeleteBranch,
  } = ItemContext();
  const handleDelete = async (id) => {
    //   Check if the message is successful before setting showDeletedMsg=true
    const token = localStorage.getItem("login_token");
    setIsLoading(true)
    console.log('isLoading');
    try {
      const res = await axios.delete(
        `https://backend.magentacashier.com/business/branch/delete/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 204) {
        setShowDeletedMsg(true);
        setIsLoading(false)
        setShowDeleteBranch(false);
      } else {
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false)
    }
    //     setShowDeletedMsg(true);
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[339px] h-[307px] bg-white rounded-3xl relative p-6 flex flex-col gap-3"
    >
      <p>Are you sure you want to delete this branch?</p>
      {/* Get the array and apply it in here */}
      <div className="border-b-[#8652C7] py-2 flex flex-col gap-2">
        <h1 className="text-xl font-[Albert Sans] font-medium">
          {ForEachDetail?.name}
        </h1>
        <p className="text-[#6B778C] text-sm flex gap-2">
          <span>Branch Id:</span>
          <span className="text-black">{ForEachDetail?.unique_id}</span>
        </p>
        <p className="text-[#6B778C] text-sm flex gap-2">
          <span>Date Created:</span>
          <span className="text-black">
            {ForEachDetail?.created_at?.substring(0, 10)}
          </span>
        </p>
        <p className="text-[#6B778C] text-sm flex gap-2">
          <span>Address: </span>
          <span className="text-black">{ForEachDetail?.address}</span>
        </p>
      </div>
      <div className="flex w-full justify-between items-center">
        <div
          onClick={() => {
            setShowDeleteBranch(false)
            document.body.style.overflow = "visible";
          }}
          className="bg-[#4E00AD] w-[140px] h-[46px] rounded-xl text-white flex justify-center items-center cursor-pointer"
        >
          Cancel
        </div>
        <div
          onClick={() => handleDelete(ForEachDetail?.unique_id)}
          className="bg-[#EEE8F8] w-[140px] h-[46px] rounded-xl text-black flex justify-center gap-4 items-center cursor-pointer"
        >
          {isLoading ? (
            <div className="flex items-center gap-4">
              <div className=" cursor-pointer  text-white rounded-full w-6 h-6 flex justify-center items-center animate-spin border-white border-4 border-t-[#4E00AD] text-transparent">
                null
              </div>
            </div>
          ) : (
            <>
              <BsTrash className="text-black text-xl" />
              <p>Delete</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteBranchMsg;

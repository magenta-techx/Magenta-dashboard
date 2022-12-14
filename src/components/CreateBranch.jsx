import React from "react";
import { FaTimes } from "react-icons/fa";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBranch = () => {
  const {
    setShowCreateBranch,
    Get_Branch,
    dispatch,
    name,
    address,
    passcode,
    isLoading,
    setIsLoading,
    setName,
    setAddress,
    setPassCode,
    state: { ForEachDetail },
  } = ItemContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.post(
        "https://backend.magentacashier.com/business/branch/",
        { passcode, address, name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setName("");
      setAddress("");
      setPassCode("");
      if (res.status === 200) {
        setIsLoading(false);
        Get_Branch();
        setShowCreateBranch(false);
        navigate(`/branch/${res?.data?.id}`);
        localStorage.setItem("branch_report", JSON.stringify(res?.data));
        document.body.style.overflow = "visible";
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
    // setName("");
    // setAddress("");
    // setPassCode("");
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[434px] h-[481px] bg-white rounded-3xl relative p-6"
    >
      <div
        onClick={() => {
          setShowCreateBranch(false);
          document.body.style.overflow = "visible";
          if (isLoading === true) {
            setIsLoading(false);
          }
        }}
        className="absolute w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#EEE8F8] top-0 -right-4 cursor-pointer"
      >
        <img src="/assets/x.png" alt="Delete image" />
      </div>
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="text-xl font-medium">Create New Branch</h1>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-lg" htmlFor="name">
            Branch Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name=""
            placeholder="Shoprite Lekki"
            id="name"
            className="border-[#AF8BDA] border outline-none w-full h-[46px] px-4 rounded-xl font-medium"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-lg" htmlFor="address">
            Branch Address
          </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="11, Rock Stone Estate, Addo, Ikeja"
            name=""
            id="address"
            className="border-[#AF8BDA] border outline-none w-full h-[46px] px-4 rounded-xl font-medium"
          />
        </div>
        <div className="flex flex-col gap-2 w-full mb-10">
          <label className="text-lg" htmlFor="passcode">
            Create Passcode
          </label>
          <input
            value={passcode}
            onChange={(e) => setPassCode(e.target.value)}
            placeholder="673yge79iwuhy"
            type="text"
            name=""
            id="passcode"
            className="border-[#AF8BDA] border outline-none w-full h-[46px] px-4 rounded-xl font-medium"
          />
        </div>
        <button
          disabled={!name || !address || !passcode || isLoading}
          className="w-full h-[45px]  flex rounded-[200px] justify-center items-center font-medium cursor-pointer disabled:cursor-not-allowed  disabled:text-gray-500 disabled:bg-[#E2E6EE] bg-[#4E00AD] text-white"
        >
          {isLoading ? (
            <div className="flex items-center gap-4">
              <div className=" cursor-pointer  text-white rounded-full w-6 h-6 flex justify-center items-center animate-spin border-white border-4 border-t-[#4E00AD] text-transparent">
                null
              </div>
              <span>Loading</span>
            </div>
          ) : (
            "Continue"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateBranch;

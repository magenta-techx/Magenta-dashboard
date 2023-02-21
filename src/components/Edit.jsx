import axios from "axios";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import ShowChangePassword from "./ShowEditSucc";

const Edit = () => {
  const {
    setEditBranchAddress,
    setEditBranchName,
    setEditBranchPasscode,
    editBranchAddress,
    editBranchName,
    editBranchPasscode,
    setShowEdit,
    setShowEditSucc,
   
    isLoading,
    Get_Branch,
    setIsLoading,
    setError,
    setShowError,
    state: { ForEachDetail },
  } = ItemContext();
  const navigate=useNavigate()
  const report = localStorage.getItem("branch_report");
  const result = JSON.parse(report);
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.patch(
        "https://backend.magentacashier.com/business/branch/",
        {
          name: editBranchName,
          passcode: editBranchPasscode,
          id: result.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        setIsLoading(false);
        setShowEditSucc(true)
        setShowEdit(false)
        Get_Branch()
        navigate("branch/all")
        // setError()
        
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.name)
      setIsLoading(false);
      setShowError(true);
    }
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[404px] h-[487px] bg-white rounded-3xl relative p-6"
    >
      <div
        onClick={() => {
          setShowEdit(false);
          if (isLoading === true) {
            setIsLoading(false);
          }
          document.body.style.overflow = "visible";
        }}
        className="albert absolute w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer top-0 -right-4"
      >
        <img src="/assets/x.png" alt="Delete image" />
      </div>
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="text-xl  font-medium">Edit Branch Information</h1>
        <div className="flex flex-col gap-4 w-full">
          <label className="text-lg albert font-normal" htmlFor="name">
            Branch Name
          </label>
          <input
            autoFocus={true}
            type="text"
            value={editBranchName}
            // value={result.name}
            onChange={(e) => setEditBranchName(e.target.value)}
            name=""
            placeholder="Shoprite Lekki"
            id=""
            className="border-[#AF8BDA] font-normal border outline-none w-full h-[46px] px-4 rounded-xl albert bg-[#F7F9FA]"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <label className="text-lg albert font-normal" htmlFor="address">
            Branch Address
          </label>
          <input
            disabled
            value={editBranchAddress}
            // value={result.address}
            // onChange={(e) => setEditBranchAddress(e.target.value)}
            type="text"
            placeholder="11, Rock Stone Estate, Addo, Ikeja"
            name=""
            id=""
            className="border-[#AF8BDA] bg-[#F7F9FA] font-normal border outline-none w-full h-[46px] px-4 rounded-xl albert"
          />
        </div>
        <div className="flex flex-col gap-4 w-full mb-5">
          <label className="text-lg font-normal albert" htmlFor="passcode">
            Branch Passcode
          </label>
          <div className="w-full flex gap-8 items-end relative">
            <input
              value={editBranchPasscode}
              // value={result.passcode}
              onChange={(e) => setEditBranchPasscode(e.target.value)}
              placeholder="673yge79iwuhy"
              type="text"
              name=""
              id=""
              className="border-[#AF8BDA]  border outline-none h-[46px] px-4 rounded-xl w-full albert bg-[#F7F9FA]"
            />
          </div>
        </div>
        <button
          disabled={isLoading}
          className="w-full h-[45px] text-white flex justify-center items-center bg-[#4E00AD] rounded-xl disabled:cursor-not-allowed poppins"
        >
          {isLoading ? (
            <div className="flex items-center gap-4">
              <div className=" cursor-pointer  text-white rounded-full w-6 h-6 flex justify-center items-center animate-spin border-white border-4 border-t-[#4E00AD] text-transparent">
                null
              </div>
            </div>
          ) : (
            "Save Changes"
          )}
        </button>
      </form>
      {/* {showChangePassword && (
        <div
          onClick={() => setShowChangePassword(false)}
          className="w-screen h-screen z-50  bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <ShowChangePassword />
        </div>
      )} */}
    </div>
  );
};

export default Edit;

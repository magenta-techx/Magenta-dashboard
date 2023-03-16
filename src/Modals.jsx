import React from "react";
import AcctDeleteMsg from "./components/AcctDeleteMsg";
import AcctSuccMsg from "./components/AcctSuccMsg";
import AddAccount from "./components/AddAccount";
import AutoSweepOTP from "./components/AutoSweepOTP";
import CreateBranch from "./components/CreateBranch";
import DeleteBranchMsg from "./components/DeletBranchMsg";
import DeletedMsg from "./components/DeletedMsg";
import Edit from "./components/Edit";
import Frequency from "./components/Frequency";
import Navbar from "./components/Navbar";
import ProfilePage from "./components/ProfilePage";
import SelectAutoSweep from "./components/SelectAutoSweep";
import SelectHourly from "./components/SelectHourly";
import { ShowAutoSweepAmount } from "./components/ShowAutoSweepAmount";
import ShowDeleteSucc from "./components/ShowDeleteSucc";
import ShowEditSucc from "./components/ShowEditSucc";
import ShowOTP from "./components/ShowOTP";
import { WithdrawAmount } from "./components/WithdrawAmount";
import WithdrawOTP from "./components/WithdrawOTP";
import WithdrawSuccMsg from "./components/WithdrawSucc";
import { ItemContext } from "./contextApi/stateMang.contextApi";
import { useNavigate } from "react-router-dom";

const Modals = () => {
  const {
    showNav,
    showCreateBranch,
    setShowCreateBranch,
    showDeletedMsg,
    setShowDeletedMsg,
    showDeleteBranch,
    setShowDeleteBranch,
    setSelectedOption,
    showEdit,
    setShowEdit,
    showEditSucc,
    setShowEditSucc,
    setShowAddAccount,
    showAddAccount,
    showWithdrawSucc,
    setShowWithdrawSucc,

    setWithdrawOTP,
    showOTP,
    setShowOTP,
    setName,
    setAddress,
    setPassCode,
    setEditBranchAddress,
    setEditBranchName,
    setEditBranchPasscode,
    showSelectHourly,
    setShowSelectHourly,
    frequency,
    setFrequency,
    showAutoSweepOTP,
    setShowAutoSweepOTP,
    setAccountName,
    setAccountNumber,
    setIsLoading,
    showAcctSucc,
    showAcctDelete,
    setShowAcctDelete,
    setShowAcctSucc,
    showWithdrawAmount,
    setShowWithdrawAmount,
    showAutoSweepAmount,
    setShowAutoSweepAmount,
    setWithdrawAmount,
    showWithdrawOTP,
    setShowWithdrawOTP,
    showSelectAutoSweep,
    setShowSelectAutoSweep,
    setSelected,
    isLoading,
    setShowDeleteSucc,
    showDeleteSucc,
    state: { showProfile },
    dispatch,
  } = ItemContext();
  const auth = localStorage.getItem("isAuth");
  const isAuth = JSON.parse(auth);
  const navigate = useNavigate();
  return (
    <>
      {showCreateBranch && isAuth && (
        <div
          onClick={() => {
            setShowCreateBranch(false);
            setName("");
            setAddress("");
            setPassCode("");
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-full  h-full max-w-7xl m-auto z-20 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <CreateBranch />
        </div>
      )}
      {showWithdrawAmount && isAuth && (
        <div
          onClick={() => {
            setShowWithdrawAmount(false);
            setWithdrawAmount("");
            setSelected(false);
            localStorage.removeItem("account");
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed sm:bg-[rgba(0,0,0,0.5)] flex sm:justify-end sm:items-center flex-col sm:flex-row sm:px-20"
        >
          <WithdrawAmount />
          {showNav && (
            <div className="sm:hidden h-fit  bg-[#200047] flex  flex-row items-center">
              <Navbar />
            </div>
          )}
        </div>
      )}
      {frequency && isAuth && (
        <div
          onClick={() => {
            setFrequency(false);
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed sm:bg-[rgba(0,0,0,0.5)] flex sm:justify-end sm:items-center flex-col sm:flex-row sm:px-20"
        >
          <Frequency />
          {showNav && (
            <div className="sm:hidden h-fit  bg-[#200047] flex  flex-row items-center">
              <Navbar />
            </div>
          )}
        </div>
      )}
      {showAutoSweepAmount && isAuth && (
        <div
          onClick={() => {
            setShowAutoSweepAmount(false);
            setSelected(false);
            localStorage.removeItem("account");
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed sm:bg-[rgba(0,0,0,0.5)] flex sm:justify-end sm:items-center flex-col sm:flex-row sm:px-20"
        >
          <ShowAutoSweepAmount />
          {showNav && (
            <div className="sm:hidden h-fit  bg-[#200047] flex  flex-row items-center">
              <Navbar />
            </div>
          )}
        </div>
      )}
      {showAutoSweepOTP && isAuth && (
        <div
          onClick={() => {
            setShowAutoSweepOTP(false);
            localStorage.removeItem("account");
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed sm:bg-[rgba(0,0,0,0.5)] flex sm:justify-end sm:items-center flex-col sm:flex-row sm:px-20"
        >
          <AutoSweepOTP />
          {showNav && (
            <div className="sm:hidden h-fit  bg-[#200047] flex  flex-row items-center">
              <Navbar />
            </div>
          )}
        </div>
      )}
      {showWithdrawSucc && isAuth && (
        <div
          onClick={() => {
            setShowWithdrawSucc(false);
            setWithdrawOTP("");
            setWithdrawAmount("");
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex sm:justify-end flex-col sm:flex-row sm:items-center sm:px-20"
        >
          <WithdrawSuccMsg />
        </div>
      )}
      {showWithdrawOTP && isAuth && (
        <div
          onClick={() => {
            setShowWithdrawOTP(false);
            setWithdrawAmount("");
            localStorage.removeItem("account");
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-full  h-full max-w-7xl sm:m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex sm:justify-end flex-col sm:flex-row sm:items-center sm:px-20"
        >
          <WithdrawOTP />
          {showNav && (
            <div className="sm:hidden h-fit  bg-[#200047] flex  flex-row items-center">
              <Navbar />
            </div>
          )}
        </div>
      )}
      {showSelectHourly && isAuth && (
        <div
          onClick={() => {
            setShowSelectHourly(false);
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex sm:justify-end sm:items-center flex-col sm:flex-row sm:px-20"
        >
          <SelectHourly />
          {showNav && (
            <div className="sm:hidden h-fit  bg-[#200047] flex  flex-row items-center">
              <Navbar />
            </div>
          )}
        </div>
      )}
      {showSelectAutoSweep && isAuth && (
        <div
          onClick={() => {
            setShowSelectAutoSweep(false);
            setSelected(false);
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex sm:justify-end flex-col sm:flex-row sm:items-center sm:px-20"
        >
          <SelectAutoSweep />
          {showNav && (
            <div className="sm:hidden h-fit  bg-[#200047] flex  flex-row items-center">
              <Navbar />
            </div>
          )}
        </div>
      )}
      {showDeleteBranch && isAuth && (
        <div
          onClick={() => {
            setShowDeleteBranch(false);
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <DeleteBranchMsg />
        </div>
      )}
      {showDeletedMsg && isAuth && (
        <div
          onClick={() => {
            setShowDeletedMsg(false);
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <DeletedMsg />
        </div>
      )}
      {showEdit && isAuth && (
        <div
          onClick={() => {
            setShowEdit(false);
            setEditBranchAddress("");
            setEditBranchName("");
            setEditBranchPasscode("");
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <Edit />
        </div>
      )}
      {showEditSucc && isAuth && (
        <div
          onClick={() => {
            setShowEditSucc(false);
            navigate("/branch/all");
            setIsLoading(false);
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <ShowEditSucc />
        </div>
      )}
      {showDeleteSucc && isAuth && (
        <div
          onClick={() => {
            setShowDeleteSucc(false);
            setIsLoading(false);
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <ShowDeleteSucc />
        </div>
      )}
      {showOTP && isAuth && (
        <div
          onClick={() => {
            setShowOTP(false);
            setAccountName("");
            setAccountNumber("");
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex sm:justify-center sm:items-center flex-col sm:flex-row"
        >
          <ShowOTP />
          {showNav && (
            <div className="sm:hidden h-fit  bg-[#200047] flex  flex-row items-center">
              <Navbar />
            </div>
          )}
        </div>
      )}
      {showAddAccount && isAuth && (
        <div
          onClick={() => {
            setShowAddAccount(false);
            setAccountName("");
            setAccountNumber("");
            setSelectedOption(null);
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex sm:justify-center sm:items-center flex-col sm:flex-row"
        >
          <AddAccount />
          {showNav && (
            <div className="sm:hidden h-fit  bg-[#200047] flex  flex-row items-center">
              <Navbar />
            </div>
          )}
        </div>
      )}
      {showAcctSucc && isAuth && (
        <div
          onClick={() => {
            setShowAcctSucc(false);
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <AcctSuccMsg />
        </div>
      )}
      {showAcctDelete && isAuth && (
        <div
          onClick={() => {
            setShowAcctDelete(false);
            if (isLoading) setIsLoading(false);
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center px-4 sm:px-0"
        >
          <AcctDeleteMsg />
        </div>
      )}
      {showProfile && isAuth && (
        <div
          onClick={() => {
            dispatch({ type: "hide-profile" });
          }}
          className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-end items-center flex-col sm:flex-row"
        >
          <ProfilePage />
          {showNav && (
            <div className="lg:w-[20%] w-full h-fit sm:h-screen sm:w-[107px] sm:min-h-screen flex  bg-[#200047]  sm:flex-col flex-row items-center sm:hidden">
              <Navbar />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Modals;

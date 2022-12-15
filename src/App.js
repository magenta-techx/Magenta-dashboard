import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Onboarding from "./pages/signup";
import ProtectedRoutes from "./ProtectedRoutes";
import LoginComponent from "./pages/login/userlogin";
import EmailChangeComponent from "./pages/login/addemail";
import PasswordResetComponent from "./pages/login/passwordreset";
import VerificationComponent from "./pages/signup/sign-up pages/verification";
import GetStarted from "./pages/signup/getStarted";
import { ItemContext } from "./contextApi/stateMang.contextApi";
import CompanyBranch from "./pages/companybranch/CompanyBranch";
import CreateBranch from "./components/CreateBranch";
import ViewAllBranch from "./components/ViewAllBranch";
import DeletedMsg from "./components/DeletedMsg";
import ViewBranchReport from "./components/ViewBranchReport";
import Edit from "./components/Edit";
import DeleteBranchMsg from "./components/DeletBranchMsg";
import ShowEditSucc from "./components/ShowEditSucc";
import CashOut from "./components/CashOut";
import AddAccount from "./components/AddAccount";
import Transaction from "./pages/transaction/Transaction";
import ErrorPage from "./pages/ErrorPage";
import ShowOTP from "./components/ShowOTP";
import Settings from "./pages/Settings";
import AcctSuccMsg from "./components/AcctSuccMsg";
import { WithdrawAmount } from "./components/WithdrawAmount";
import WithdrawOTP from "./components/WithdrawOTP";
import SelectAutoSweep from "./components/SelectAutoSweep";
import SelectHourly from "./components/SelectHourly";
import WithdrawSuccMsg from "./components/WithdrawSucc";
import Frequency from "./components/Frequency";
import { ShowAutoSweepAmount } from "./components/ShowAutoSweepAmount";
import AutoSweepOTP from "./components/AutoSweepOTP";
import { useNavigate } from "react-router-dom";
import AcctDeleteMsg from "./components/AcctDeleteMsg";
import ShowDeleteSucc from "./components/ShowDeleteSucc";
function App() {
  const {
    showNav,
    GET_ACCOUNT,
    showCreateBranch,
    setShowCreateBranch,
    Get_Branch,
    showDeletedMsg,
    setShowDeletedMsg,
    showDeleteBranch,
    setShowDeleteBranch,
    showEdit,
    setShowEdit,
    showEditSucc,
    // showAddAccount,
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
    setBankName,
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
    showDeleteSucc
  } = ItemContext();
  let docTitle = document.title;
  const navigate = useNavigate();
  window.addEventListener("blur", () => {
    document.title = "Come back 😒";
  });
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  }, []);

  const auth = localStorage.getItem("isAuth");
  const isAuth = JSON.parse(auth);
  return (
    <div className="flex">
      {showNav && (
        <div className="w-[20%] min-h-screen bg-[#200047] flex flex-col">
          <Navbar />
        </div>
      )}
      {showCreateBranch && isAuth && (
        <div
          onClick={() => {
            setShowCreateBranch(false);
            setName("");
            setAddress("");
            setPassCode("");
            document.body.style.overflow = "visible";
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-screen h-screen z-20 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <CreateBranch />
        </div>
      )}
      {showWithdrawAmount && isAuth && (
        <div
          onClick={() => {
            setShowWithdrawAmount(false);
            setWithdrawAmount("");
            document.body.style.overflow = "visible";
            setSelected(false);
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-end items-center px-20"
        >
          <WithdrawAmount />
        </div>
      )}
      {frequency && isAuth && (
        <div
          onClick={() => {
            setFrequency(false);
            document.body.style.overflow = "visible";
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-end items-center px-20"
        >
          <Frequency />
        </div>
      )}
      {showAutoSweepAmount && isAuth && (
        <div
          onClick={() => {
            setShowAutoSweepAmount(false);
            setSelected(false);
            document.body.style.overflow = "visible";
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-end items-center px-20"
        >
          <ShowAutoSweepAmount />
        </div>
      )}
      {showAutoSweepOTP && isAuth && (
        <div
          onClick={() => {
            setShowAutoSweepOTP(false);
            document.body.style.overflow = "visible";
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-end items-center px-20"
        >
          <AutoSweepOTP />
        </div>
      )}
      {showWithdrawSucc && isAuth && (
        <div
          onClick={() => {
            setShowWithdrawSucc(false);
            setWithdrawOTP("");
            setWithdrawAmount("");
            document.body.style.overflow = "visible";
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-end items-center px-20"
        >
          <WithdrawSuccMsg />
        </div>
      )}
      {showWithdrawOTP && isAuth && (
        <div
          onClick={() => {
            setShowWithdrawOTP(false);
            document.body.style.overflow = "visible";
            setWithdrawAmount("");
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-end items-center px-20"
        >
          <WithdrawOTP />
        </div>
      )}
      {showSelectHourly && isAuth && (
        <div
          onClick={() => {
            setShowSelectHourly(false);
            document.body.style.overflow = "visible";
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-end items-center px-20"
        >
          <SelectHourly />
        </div>
      )}
      {showSelectAutoSweep && isAuth && (
        <div
          onClick={() => {
            setShowSelectAutoSweep(false);
            setSelected(false);
            document.body.style.overflow = "visible";
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-end items-center px-20"
        >
          <SelectAutoSweep />
        </div>
      )}
      {showDeleteBranch && isAuth && (
        <div
          onClick={() => {
            setShowDeleteBranch(false);
            document.body.style.overflow = "visible";
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <DeleteBranchMsg />
        </div>
      )}
      {showDeletedMsg && isAuth && (
        <div
          onClick={() => {
            setShowDeletedMsg(false);
            Get_Branch();
            document.body.style.overflow = "visible";
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
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
            document.body.style.overflow = "visible";
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <Edit />
        </div>
      )}
      {showEditSucc && isAuth && (
        <div
          onClick={() => {
            setShowEditSucc(false);
            Get_Branch();
            setIsLoading(false);
            document.body.style.overflow = "visible";
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <ShowEditSucc />
        </div>
      )}
      {showDeleteSucc && isAuth && (
        <div
          onClick={() => {
            setShowDeleteSucc(false);
            setIsLoading(false);
            document.body.style.overflow = "visible";
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
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
            setBankName("");
            GET_ACCOUNT();
            document.body.style.overflow = "visible";
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <ShowOTP />
        </div>
      )}
      {showAddAccount && isAuth && (
        <div
          onClick={() => {
            setShowAddAccount(false);
            setAccountName("");
            setAccountNumber("");
            setBankName("");
            document.body.style.overflow = "visible";
            if (isLoading === true) {
              setIsLoading(false);
            }
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <AddAccount />
        </div>
      )}
      {showAcctSucc && isAuth && (
        <div
          onClick={() => {
            setShowAcctSucc(false);
            document.body.style.overflow = "visible";
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <AcctSuccMsg />
        </div>
      )}
      {showAcctDelete && isAuth && (
        <div
          onClick={() => {
            setShowAcctDelete(false);
            document.body.style.overflow = "visible";
          }}
          className="w-screen h-screen z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
        >
          <AcctDeleteMsg />
        </div>
      )}

      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="cashout" element={<CashOut />}></Route>
          <Route path="branch" element={<CompanyBranch />}></Route>
          <Route path="transaction" element={<Transaction />}></Route>
          <Route path="branch/all" element={<ViewAllBranch />}></Route>
          <Route path="branch/:id" element={<ViewBranchReport />}></Route>
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/getStarted" element={<GetStarted />} />
        <Route path="/forgotPassword" element={<PasswordResetComponent />} />
        <Route path="/emailchange" element={<EmailChangeComponent />} />
        <Route path="/verify" element={<VerificationComponent />} />
        <Route path="/signup" element={<Onboarding />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </div>
  );
}
export default App;

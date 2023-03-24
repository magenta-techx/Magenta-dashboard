import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { calcLength, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BNav from "./components/bottomnav";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Onboarding from "./pages/signup";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import EmailChangeComponent from "./pages/login/addemail";
import PasswordResetComponent from "./pages/login/passwordreset";
import VerificationComponent from "./pages/signup/sign-up pages/verification";
import GetStarted from "./pages/signup/getStarted";
import { ItemContext } from "./contextApi/stateMang.contextApi";
import CreateBranch from "./components/CreateBranch";
import ViewAllBranch from "./components/ViewAllBranch";
import DeletedMsg from "./components/DeletedMsg";
import Edit from "./components/Edit";
import DeleteBranchMsg from "./components/DeletBranchMsg";
import ShowEditSucc from "./components/ShowEditSucc";
import AddAccount from "./components/AddAccount";
import ErrorPage from "./pages/ErrorPage";
import ShowOTP from "./components/ShowOTP";
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
import ProfilePage from "./components/ProfilePage";
import { AnimatePresence } from "framer-motion";
import { useIdleTimer } from "react-idle-timer";
import { HiOutlineExclamationCircle } from "react-icons/hi";
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const CompanyBranch = lazy(() => import("./pages/companybranch/CompanyBranch"));
const CashOut = lazy(() => import("./components/CashOut"));
const LoginComponent = lazy(() => import("./pages/login/userlogin"));
const Onboarding = lazy(() => import("./pages/signup"));
const Transaction = lazy(() => import("./pages/transaction/Transaction"));
const Settings = lazy(() => import("./pages/Settings"));
const ViewBranchReport = lazy(() => import("./components/ViewBranchReport"));
function App() {
  const location = useLocation();
  const {
    setShowCreateBranch,
    setShowDeletedMsg,
    setShowDeleteBranch,
    setShowEdit,
    setShowEditSucc,
    setShowAddAccount,
   
    setShowWithdrawSucc,
   
    setShowOTP,
    setShowSelectHourly,
    setFrequency,
    setShowAutoSweepOTP,
    setShowAcctDelete,
    setShowAcctSucc,
    setShowWithdrawAmount,
    setShowAutoSweepAmount,
    setShowWithdrawOTP,
    setShowSelectAutoSweep,
    setShowDeleteSucc,
    showError,
    setShowError,
    showSuccess,
    setShowSuccess,
  } = ItemContext();
  let docTitle = document.title;
  const navigate = useNavigate();

  window.addEventListener("blur", () => {
    document.title = "Come back 😒";
  });
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });
  // useEffect(() => {
  //   document.addEventListener("contextmenu", (event) => event.preventDefault());
  // }, []);

  const auth = localStorage.getItem("isAuth");
  const isAuth = JSON.parse(auth);
  setTimeout(() => {
    if (showError) {
      setShowError(false);
    }
    if (showSuccess) setShowSuccess(false);
  }, 3000);
  window.onpopstate = function () {
    // document.body.style.overflow = "visible";
    setShowAcctDelete(false);
    setShowAcctSucc(false);
    setShowAddAccount(false);
    setShowAutoSweepAmount(false);
    setShowAutoSweepOTP(false);
    setShowCreateBranch(false);
    setShowDeleteBranch(false);
    setShowDeleteSucc(false);
    setShowDeletedMsg(false);
    setShowEdit(false);
    setShowEditSucc(false);
    setShowWithdrawAmount(false);
    setShowSelectHourly(false);
    setShowWithdrawSucc(false);
    setShowWithdrawOTP(false);
    setShowOTP(false);
    setShowSelectAutoSweep(false);
    setFrequency(false);
  };

  return (
    <>
      <div className="flex relative   sm:w-[100%]  h-screen overflow-hidden">
        <Alert />
        <IdleTimer />
        <Modals />

        <Suspense
          fallback={
            <span className="flex h-12 w-12   gap-2 absolute top-[50%] right-[50%] ml-10 -translate-x-[50%] -translate-y-[50%] animate-ping">
              <span className=" h-3 w-3 rounded-full bg-[#200047] opacity-75"></span>
              <span className="  rounded-full h-3 w-3 bg-[#200047]"></span>
              <span className=" rounded-full h-3 w-3 bg-[#200047]"></span>
            </span>
          }
        >
          <Routes location={location} key={location.pathname}>
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
            <Route
              path="/forgotPassword"
              element={<PasswordResetComponent />}
            />
            <Route path="/emailchange" element={<EmailChangeComponent />} />
            <Route path="/verify" element={<VerificationComponent />} />
            <Route path="/signup" element={<Onboarding />} />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
export default App;

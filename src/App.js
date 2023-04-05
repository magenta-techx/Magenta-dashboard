import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BNav from "./components/bottomnav";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import EmailChangeComponent from "./pages/login/addemail";
import PasswordResetComponent from "./pages/login/passwordreset";
import VerificationComponent from "./pages/signup/sign-up pages/verification";
import GetStarted from "./pages/signup/getStarted";
import { ItemContext } from "./contextApi/stateMang.contextApi";
import CreateBranch from "./components/CreateBranch";
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
import IdleTimer from "./IdleTimer";
import Alert from "./Alert";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import Modals from "./Modals";
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const CompanyBranch = lazy(() => import("./pages/companybranch/CompanyBranch"));
const CashOut = lazy(() => import("./components/CashOut"));
const LoginComponent = lazy(() => import("./pages/login/userlogin"));
const Onboarding = lazy(() => import("./pages/signup"));
const Transaction = lazy(() => import("./pages/transaction/Transaction"));
const ViewAllBranch = lazy(() => import("./components/ViewAllBranch"));
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

  setTimeout(() => {
    if (showError) {
      setShowError(false);
    }
    if (showSuccess) setShowSuccess(false);
  }, 3000);
  window.onpopstate = function () {
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
            <div className="flex  gap-2 absolute top-[50%] right-[50%] mx-auto -translate-x-[50%] -translate-y-[50%] animate-ping justify-center">
              <span className=" h-3 w-3 rounded-full bg-[#200047] opacity-75"></span>
              <span className="  rounded-full h-3 w-3 bg-[#200047]"></span>
              <span className=" rounded-full h-3 w-3 bg-[#200047]"></span>
            </div>
          }
        >
          {/* {timeTillPromptp} */}
          <Routes location={location}>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="cashout" element={<CashOut />}></Route>
              <Route path="transaction" element={<Transaction />}></Route>
              <Route path="branch" element={<CompanyBranch />}></Route>
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
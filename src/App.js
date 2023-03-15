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
    showError,

    setShowError,
    state: { showProfile },
    dispatch,
    error,
    showSuccess,
    success,
    setShowSuccess,
    activate,
    resume,
    pause,
    // getRemainingTime,
    remaining,
    open,
    timeTillPrompt,
    seconds,
    handleStillHere,
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
      <div className="flex relative   sm:w-[100%] max-w-[1400px] h-screen overflow-hidden  m-auto">
        <Alert />
        <IdleTimer />
        <Modals />
        {/* {showCreateBranch && isAuth && (
          <div
            onClick={() => {
              setShowCreateBranch(false);
              setName("");
              setAddress("");
              setPassCode("");
              // document.body.style.overflow = "visible";
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
              // document.body.style.overflow = "visible";
              setSelected(false);
              localStorage.removeItem("account");
              // localStorage.removeItem("num");
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
              // document.body.style.overflow = "visible";
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
              // document.body.style.overflow = "visible";
              localStorage.removeItem("account");
              // localStorage.removeItem("num");
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
              // document.body.style.overflow = "visible";
              localStorage.removeItem("account");
              // localStorage.removeItem("num");
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
              // document.body.style.overflow = "visible";
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
              // document.body.style.overflow = "visible";
              setWithdrawAmount("");
              localStorage.removeItem("account");
              // localStorage.removeItem("num");
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
              // document.body.style.overflow = "visible";
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
              // document.body.style.overflow = "visible";
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
              // document.body.style.overflow = "visible";
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
              // document.body.style.overflow = "visible";
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
              // document.body.style.overflow = "visible";
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
              // document.body.style.overflow = "visible";
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
              // document.body.style.overflow = "visible";
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
              // document.body.style.overflow = "visible";
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
              // document.body.style.overflow = "visible";
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
              // document.body.style.overflow = "visible";
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

              // document.body.style.overflow = "visible";
            }}
            className="w-full  h-full max-w-7xl m-auto z-50 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center px-4 sm:px-0"
          >
            <AcctDeleteMsg />
          </div>
        )}
        {showProfile && isAuth && (
          <div
            onClick={() => {
              // document.body.style.overflow = "visible";
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
        )} */}

        {/* <div>{timeTillPrompt}</div> */}
        {/* {showNav && (
          <div className="lg:w-[20%] xs:hidden h-screen sm:w-[107px] sm:min-h-screen sm:flex min-h-screen bg-[#200047] flex flex-col"
          ref={ref}
          >
            <Navbar />
          </div>
        )} */}

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

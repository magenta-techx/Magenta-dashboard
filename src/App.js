import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/Header";
import Onboarding from "./pages/signup";
import LoginComponent from "./pages/login/userlogin";
import EmailChangeComponent from "./pages/login/addemail";
import PasswordResetComponent from "./pages/login/passwordreset";
import VerificationComponent from "./pages/signup/sign-up pages/verification";
import GetStarted from "./pages/signup/getStarted";
import { ItemContext } from "./contextApi/stateMang.contextApi";
import Login from "./pages/Login";

function App() {
  const { showNav, setShowNav } = ItemContext();
  return (
    <div className="flex">
      {showNav && (
          <div className="w-1/5 min-h-screen bg-[#200047] flex flex-col">
            <Navbar />
          </div>
      )}
      <Routes>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="/signup" element={<Onboarding />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/forgotPassword" element={<PasswordResetComponent />} />
        <Route path="/emailchange" element={<EmailChangeComponent />} />
        <Route path="/verify" element={<VerificationComponent />} />
        <Route path="/getStarted" element={<GetStarted />} />
      </Routes>
    </div>
  );
}
export default App;
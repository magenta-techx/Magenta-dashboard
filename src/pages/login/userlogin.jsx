import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import InputComponent from "../InputComponent";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import MagentaLogo from "../../assets/logo";
// import Cookies from "js-cookie"
import { ItemContext } from "../../contextApi/stateMang.contextApi";

const LoginComponent = () => {
  const [err, setErr] = useState("");
  const [bool, setBool] = useState("");
  const navigate = useNavigate();

  const {
    loginEmail,
    loginPassword,
    setLoginEmail,
    setLoginPassword,
    setShowNav,
    isLoading,
    setOpen,
    setIsLoading,
    Get_Auto_Sweep,Get_Branch
  } = ItemContext();

 const auth = localStorage.getItem("isAuth");
  const isAuth = JSON.parse(auth);
  useEffect(() => {
    setShowNav(false);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://backend.magentacashier.com/accounts/login/",
        {
          email: loginEmail,
          password: loginPassword,
        }
        );
        if (response.status !== 401 && response.status !== 400) {
        const login_token = response.data.tokens["access"];
        localStorage.setItem("login_token", login_token);
        localStorage.setItem("isAuth", true);
        navigate("/");
          setIsLoading(false);
          setOpen(false)
        Get_Auto_Sweep()
       
      } else {
        console.log("bad request");
        console.log(response.data);
        setIsLoading(false)
      }
      localStorage.setItem("user",JSON.stringify(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      if (err?.response?.data === undefined) {
        setErr(err.message);
      } else {
        setErr(err.response.data.detail);
      }
      setBool(true);
    }
  };
  setTimeout(() => {
    setBool(false);
  }, 3000);

  return (
    <div className="w-screen">
      <div className="px-[20px] py-4">
        <MagentaLogo />
      </div>
      <div className="w-full albert">
        <div className="user-details text-center bg-[#EEE8F8] rounded-xl w-[550px] m-auto my-[50px] flex pt-[44px] flex-col gap-5">
          <div className="flex justify-center relative z-[]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7906 13.9301C16.7306 15.9801 13.7806 16.6101 11.1906 15.8001L6.48063 20.5001C6.14063 20.8501 5.47063 21.0601 4.99063 20.9901L2.81063 20.6901C2.09063 20.5901 1.42063 19.9101 1.31063 19.1901L1.01063 17.0101C0.940635 16.5301 1.17063 15.8601 1.50063 15.5201L6.20063 10.8201C5.40063 8.22007 6.02063 5.27007 8.08063 3.22007C11.0306 0.270068 15.8206 0.270068 18.7806 3.22007C21.7406 6.17007 21.7406 10.9801 18.7906 13.9301Z"
                stroke="#4E00AD"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.89062 16.49L8.19062 18.79"
                stroke="#4E00AD"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 10C14.3284 10 15 9.32843 15 8.5C15 7.67157 14.3284 7 13.5 7C12.6716 7 12 7.67157 12 8.5C12 9.32843 12.6716 10 13.5 10Z"
                stroke="#4E00AD"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="text-[32px] font-semibold ">Login to your Account</h1>
          <p className="text-[14px]">Pls Provide your details</p>

          <div
            className={`${
              bool
                ? " w-[360px] max-w-full h-[26px] m-auto rounded-[10px] justify-center text-red-700"
                : "hidden"
            }`}
          >
            <p className="flex justify-center align-center font-medium text-[14px] items-center">
              {err}
            </p>
          </div>

          <div className="input-group flex  m-auto flex-col gap-7">
            <InputComponent
              className="bg-[#EEE8F8] border-[#C7AFE4]"
              type="email"
              label="Email"
              name="email"
              onChange={(evt) => {
                setLoginEmail(evt.target.value);
              }}
            />
          </div>
          <div className="input-group flex m-auto flex-col gap-7">
            <InputComponent
              className="bg-[#EEE8F8] border-[#C7AFE4]"
              type="password"
              label="Password"
              name="password"
              onChange={(evt) => setLoginPassword(evt.target.value)}
            />
          </div>

          <p className="mx-[90px] p-[0px] text-[14px] w-[120px]">
            Forgot Password
          </p>
          <button
            className="w-[360px] max-w-full h-[46px]  m-auto rounded-[10px] disabled:text-gray-500 disabled:bg-[#E2E6EE] bg-[#4E00AD] text-white flex justify-center items-center disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={
              !loginPassword ||
              !loginPassword > 2 ||
              isLoading||
              !loginEmail ||
              !loginEmail.includes("@") ||
              !loginEmail.includes(".")
            }
          >
            {isLoading ? (
              <div className="flex items-center gap-4">
                <div className="  text-white rounded-full w-6 h-6 flex justify-center items-center animate-spin border-white border-4 border-t-[#4E00AD] text-transparent">
                  null
                </div>
                
              </div>
            ) : (
              "Continue"
            )}
          </button>

          <p className="pb-5">
            <Link to={"/signup"}>
              {" "}
              Not a member yet? <span className="text-violet-500">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

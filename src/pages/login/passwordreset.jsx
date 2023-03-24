import React from "react";
import { useState, useEffect } from "react";
import InputComponent from "../InputComponent";
import MagentaLogo from "../../assets/logo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ItemContext } from "../../contextApi/stateMang.contextApi";


const PasswordResetComponent = () => {
  // const [passwordDetails, setPasswordDetails] = useState({})
  const [err, setErr] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const { userDetails,setShowFooter, setShowNav,verificationMail, setVerificationMail } = ItemContext();
  const [token, setToken] = useState("")
  const navigate = useNavigate()


  const handleToken = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend.magentacashier.com/accounts/password/change/",
        { password: newPassword, email: verificationMail }
      );
      if (response.status == 401 || response.status == 400 || response.status == 500) {
        console.log(response.status);

     
    } else {
      console.log(response.data);
      navigate("/verify")
    }
    
 
    } catch (err) {
      if (err.response.data === undefined) {
        setErr(err.message);
      } else {
        setErr(err.response.data.detail);

      }
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend.magentacashier.com/accounts/password/change/",
        { password: newPassword, email: verificationMail }
      );
      if (response.status == 401 || response.status == 400 || response.status == 500) {
        console.log(response.status);

     
    } else {
      console.log(response.data);
      navigate("/verify")
    }
    
 
    } catch (err) {
      if (err.response.data === undefined) {
        setErr(err.message);
      } else {
        setErr(err.response.data.detail);

      }
    }
  };
  useEffect(() => {
    setShowNav(false);
    setShowFooter(false);
  }, []);

  return (
    <div className="sm:w-screen xs:w-[100%]">
      <div className="sm:px-[20px] sm:py-4 sm:block sm:align-middle xs:m-[auto] xs:flex xs:justify-center xs:pt-12">
        <MagentaLogo />
      </div>
      <div className="sm:w-full  xs:mt-[-20px] xs:flex xs:justify-center xs:m-[auto] albert">
      <div className="user-details text-center xs:mt-8  sm:bg-white xs:m-[auto] xs:flex xs:justify-center lg:bg-[#EEE8F8] rounded-xl w-[550px] m-auto my-[50px] flex pt-[44px] flex-col gap-4">
        <div className="flex justify-center">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.832 1.33325H9.4987C3.66536 1.33325 1.33203 3.66659 1.33203 9.49992V16.4999C1.33203 22.3333 3.66536 24.6666 9.4987 24.6666H16.4987C22.332 24.6666 24.6654 22.3333 24.6654 16.4999V14.1666"
              stroke="#4E00AD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.7122 2.52338L8.51888 11.7167C8.16888 12.0667 7.81888 12.7551 7.74888 13.2567L7.24722 16.7684C7.06055 18.04 7.95888 18.9267 9.23055 18.7517L12.7422 18.2501C13.2322 18.1801 13.9205 17.8301 14.2822 17.4801L23.4755 8.28672C25.0622 6.70005 25.8089 4.85672 23.4755 2.52338C21.1422 0.190051 19.2989 0.936717 17.7122 2.52338Z"
              stroke="#4E00AD"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.3945 3.84155C17.1762 6.62989 19.3579 8.81155 22.1579 9.60489"
              stroke="#4E00AD"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-[32px] font-semibold">Change Password</h1>

        <div className="input-group flex m-auto flex-col gap-7">
        <InputComponent
          className="sm:bg-white lg:bg-[#EEE8F8] border-[#C7AFE4]"
            type="email"
            label="Email"
            name="email"
            onChange={(evt) => {
              setVerificationMail(evt.target.value);
            }}
          />

          <InputComponent
            type="password"
            className="lg:bg-[#EEE8F8] xs:bg-white border-[#C7AFE4]"
            label="Confirm Password"
            name="confirmPassword"
            onChange={(evt) =>
              setNewPassword(evt.target.value)
            }
          />

          <InputComponent
            type="text"
            className="lg:bg-[#EEE8F8] xs:bg-white border-[#C7AFE4]"
            label="Token"
            name="Token"
            onChange={(evt) =>
              setNewPassword(evt.target.value)
            }
          />
          <button className="w-fit ml-auto flex justify-center -mt-4 -mb-1" onClick={handleToken}>
            <p className="text-red-700 text-sm">Send Token</p>
          </button>

        </div>

        <button
          className="w-[360px] m-auto max-w-full h-[46px] rounded-[10px] disabled:text-gray-500 disabled:bg-[#E2E6EE] bg-[#4E00AD] text-white"
          onClick={handleSubmit}
          disabled={
            !verificationMail ||
            !verificationMail.includes("@") ||
            !verificationMail.includes(".") ||
            !newPassword.trim()||
            !(newPassword.length >= 6)
            // !(newPassword?.password === newPassword?.confirmPassword)
          }
        >
          Continue
        </button>

        {/* {!(newPassword?.password === newPassword?.confirmPassword) && (
          <span className="text-red-500 text-sm">Passwords do not match!</span>
        )} */}
        <Link to={"/login"}>
          {" "}
          Already a member? <span className="text-violet-500">Sign In</span>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default PasswordResetComponent;

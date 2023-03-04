import React from "react";
import InputComponent from "../InputComponent";
import { useState , useEffect} from "react";
import MagentaLogo from "../../assets/logo";
import { Link, useNavigate } from "react-router-dom";
import { ItemContext } from "../../contextApi/stateMang.contextApi";

const EmailChangeComponent = () => {
  const navigate = useNavigate()
  const { verificationMail, setVerificationMail , showNav,setShowFooter, setShowNav} = ItemContext();
  useEffect(() => {
    setShowNav(false);
    setShowFooter(false);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sm:w-screen xs:w-[100%]">
      <div className="sm:px-[20px] sm:py-4 sm:block sm:align-middle xs:m-[auto] xs:flex xs:justify-center xs:pt-12">
        <MagentaLogo />
      </div>
      <div className="sm:w-full  xs:mt-[-20px] xs:flex xs:justify-center xs:m-[auto] albert">
      <div className="user-details xs:mt-8 text-center sm:bg-white lg:bg-[#EEE8F8] rounded-xl w-[550px] m-auto my-[50px] flex pt-[44px] flex-col gap-4">
        <div className="flex justify-center">
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.33325V8.33325L14.3333 5.99992"
              stroke="#4E00AD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0013 8.33333L9.66797 6"
              stroke="#4E00AD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.16667 13C1.5 13 1.5 15.0883 1.5 17.6667V18.8333C1.5 22.0533 1.5 24.6667 7.33333 24.6667H16.6667C21.3333 24.6667 22.5 22.0533 22.5 18.8333V17.6667C22.5 15.0883 22.5 13 17.8333 13C16.6667 13 16.34 13.245 15.7333 13.7L14.5433 14.96C13.1667 16.43 10.8333 16.43 9.445 14.96L8.26667 13.7C7.66 13.245 7.33333 13 6.16667 13Z"
              stroke="#4E00AD"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.83203 13V8.33338C3.83203 5.98838 3.83203 4.05171 7.33203 3.71338"
              stroke="#4E00AD"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.168 13V8.33338C20.168 5.98838 20.168 4.05171 16.668 3.71338"
              stroke="#4E00AD"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-[32px] font-semibold">Add Email</h1>
        <p className="text-[14px] flex justify-center align-text-center">Enter the email address associated with your account <br /> and we'll send you a link to reset your password. </p>

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
        </div>

        <button
          className="w-[360px] max-w-full h-[46px] m-auto rounded-[10px] disabled:text-gray-500 disabled:bg-[#E2E6EE] bg-[#4E00AD] text-white"
          onClick={handleSubmit}
          disabled={
            !verificationMail ||
            !verificationMail.includes("@") ||
            !verificationMail.includes(".")
          }
        >
          Continue
        </button>
        <p className="pb-5">

            Not a member yet? <span className="text-violet-500">Sign Up</span>

        </p>
      </div>
      </div>
    </div>
  );
};

export default EmailChangeComponent;
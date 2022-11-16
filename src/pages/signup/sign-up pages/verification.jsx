import React from "react";
import InputComponent from "../../InputComponent";
import {useState} from "react"
import MagentaLogo from "../../../assets/logo";
import { Link } from "react-router-dom";
import { ItemContext } from "../../../contextApi/stateMang.contextApi";

const VerificationComponent = () => {
    const {userOtp, setUserOtp} = ItemContext();
    // const{ userMail} = ItemContext();
    
   
    const handleSubmit =(e) => {
    e.preventDefault();
    console.log(userOtp)
    }



    return (
  <div>
      <div className="px-[20px] py-4">
  <MagentaLogo />
  </div>
         <div className="user-details text-center bg-[#EEE8F8] rounded-xl w-[550px] m-auto my-[50px] flex pt-[44px] flex-col gap-4">
          <div className="flex justify-center">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.77734 13L11.589 15.8233L17.224 10.1766" stroke="#4E00AD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.5423 1.85829C12.3473 1.16996 13.6657 1.16996 14.4823 1.85829L16.3257 3.44496C16.6757 3.74829 17.329 3.99329 17.7957 3.99329H19.779C21.0157 3.99329 22.0307 5.00829 22.0307 6.24496V8.22829C22.0307 8.68329 22.2757 9.34829 22.579 9.69829L24.1657 11.5416C24.854 12.3466 24.854 13.665 24.1657 14.4816L22.579 16.325C22.2757 16.675 22.0307 17.3283 22.0307 17.795V19.7783C22.0307 21.015 21.0157 22.03 19.779 22.03H17.7957C17.3407 22.03 16.6757 22.275 16.3257 22.5783L14.4823 24.165C13.6773 24.8533 12.359 24.8533 11.5423 24.165L9.69901 22.5783C9.34901 22.275 8.69568 22.03 8.22901 22.03H6.21068C4.97401 22.03 3.95901 21.015 3.95901 19.7783V17.7833C3.95901 17.3283 3.71401 16.675 3.42234 16.325L1.84734 14.47C1.17068 13.665 1.17068 12.3583 1.84734 11.5533L3.42234 9.69829C3.71401 9.34829 3.95901 8.69496 3.95901 8.23996V6.23329C3.95901 4.99662 4.97401 3.98162 6.21068 3.98162H8.22901C8.68401 3.98162 9.34901 3.73662 9.69901 3.43329L11.5423 1.85829Z" stroke="#4E00AD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
        <h1 className="text-[32px] font-semibold">Account Verification</h1>
        <p className="text-[14px]">Pls enter otp sent to <span className="text-violet-700 font-bold">asbc@gmail.com</span> </p>
  
        <div className="input-group flex m-auto flex-col gap-7">       
           <InputComponent
            type="text"
            label=""
            name="otp"
            onChange={(evt) => {
              setUserOtp({
                ...userOtp,
                [evt.target.name]: evt.target.value,
              });
            }}
          />
        </div>
     <p>
     <Link to={"/"}><span className="text-red-500 text-[14px] ml-[270px]">Resend OTP</span></Link>
     </p>
        <button
          className="w-[360px] max-w-full h-[46px] m-auto rounded-[10px] disabled:text-gray-500 disabled:bg-[#E2E6EE] bg-[#4E00AD] text-white"
          onClick={handleSubmit}
          disabled={
            !userOtp.otp
          }
        >
          Verify Account
        </button>
        <p className="pb-5">

    </p>
      </div>

  </div>
  )
}


export default VerificationComponent
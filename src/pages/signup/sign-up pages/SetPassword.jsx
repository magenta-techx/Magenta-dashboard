import { useState } from "react";
import InputComponent from "../../InputComponent";
import { ItemContext } from "../../../contextApi/stateMang.contextApi";

const SetPassword = ({ markAsComplete = () => {} }) => {

  const {passwordDetails, setPasswordDetails} = ItemContext();

  return (
    <div className="user-details text-center flex flex-col gap-4">
      <h1 className="text-[32px] font-semibold">Set Password</h1>

      <div className="input-group flex flex-col gap-7">
        <InputComponent
          type="password"
          label="Create Password"
          name="password"
          onChange={(evt) =>
            setPasswordDetails({
              ...passwordDetails,
              [evt.target.name]: evt.target.value,
            })
          }
        />

        <InputComponent
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          onChange={(evt) =>
            setPasswordDetails({
              ...passwordDetails,
              [evt.target.name]: evt.target.value,
            })
          }
        />
      </div>

      <button
        className="w-[360px] max-w-full h-[46px] rounded-[10px] disabled:text-gray-500 disabled:bg-[#E2E6EE] bg-[#4E00AD] text-white"
        onClick={markAsComplete}
        disabled={
          !passwordDetails?.password?.trim() ||
          !passwordDetails?.confirmPassword?.trim() ||
          !(passwordDetails?.password === passwordDetails?.confirmPassword)
        }
        onMouseDown={()=>console.log('password')}
      >
        Continue
      </button>

      {!(passwordDetails?.password === passwordDetails?.confirmPassword) && (
        <span className="text-red-500 text-sm">Passwords do not match!</span>
      )}

      <p>
        Already a member? <span className="text-violet-500">Sign In</span>
      </p>
    </div>
  );
};

export default SetPassword;

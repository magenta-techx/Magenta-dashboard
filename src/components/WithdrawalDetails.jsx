import React from "react";
import { useRef } from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";

const WithdrawalDetails = ({
  account: { account_number, bank_name, id },
  account,
  key,
}) => {
  const { setSelected, selected } = ItemContext();
  const split = account_number.split("");
  const fitr = split?.filter((a, i) => {
    return i < 3;
  });
  const latr = split?.filter((a, i) => {
    return i >= 7;
  });
  const midfrs = split
    ?.filter((a, i) => {
      return i > 2;
    })
    .join("")
    .substring(4, 0);
  const midfth = midfrs.split("");
  const fir = midfth.splice(0, 0, "*");
  const sec = midfth.splice(1, 1, "*");
  const trd = midfth.splice(2, 2, "*");
  const fth = midfth.splice(3, 2, "*");
  const ref = useRef(null);
  const { dispatch } = ItemContext();

  return (
    <div
      key={id}
      className="w-full h-[43px] relative bg-white rounded-xl flex justify-between p-2 albert items-center cursor-pointer gap-2 sm:gap-0 border border-[#E2E6EE] sm:border-none"
      onClick={() => {
        ref.current.checked = true;
        setSelected(true);
        // localStorage.setItem("num", JSON.stringify(account_number));
        // STORE THE ID!!!
        localStorage.setItem("num", JSON.stringify(id));
        localStorage.setItem("account", JSON.stringify(account));
      }}
    >
      <h3 className="text-[14px] sm:text-[16px]">
        {fitr}
        {midfth?.join("")}
        {latr}
      </h3>
      <div className="flex gap-10 w-ful  sm:gap-4 check items-center border border-[#FFFFFF] rounded-sm sm:border-none">
        <span className="text-[12px] sm:text-[14px]">{bank_name}</span>
        {/* <div className=""> */}
        <input
          ref={ref}
          className="appearance-none  w-[33px]   h-[33px] rounded-xl bg-[#8652C7] cursor-pointer"
          onChange={(e) => {
            dispatch({
              type: "Individual AcctDetails",
              payload: account,
            });
            
            setSelected(true);
            localStorage.setItem("account", JSON.stringify(account));
            localStorage.setItem("num", JSON.stringify(id));
          }}
          type="radio"
          name="sam"
          id={Math.random()}
        />
        {/* </div> */}
        <div className="w-full absolute top-0 left-0 bg-transparent h-[43px] bg-white rounded-xl  pointer-events-none"></div>
      </div>
    </div>
  );
};

export default WithdrawalDetails;

import React from "react";
import { useRef } from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";

const WithdrawalDetails = ({
  account: { account_number, bank_name },
  account,
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
      className="w-full h-[43px] relative bg-white rounded-xl flex justify-between p-2 albert items-center cursor-pointer"
      onClick={() => {
        console.log(ref);
        ref.current.checked = true;
        setSelected(true)
        localStorage.setItem("num", JSON.stringify(account_number));
        localStorage.setItem("account", JSON.stringify(account));
      }}
    >
      <h3 className="">
        {fitr}
        {midfth?.join("")}
        {latr}
      </h3>
      <div className="flex gap-4 check items-center">
        <span>{bank_name}</span>
        <input
          ref={ref}
          className="appearance-none  w-[33px] h-[33px] rounded-xl bg-[#8652C7] cursor-pointer"
          onChange={(e) => {
            dispatch({
              type: "Individual AcctDetails",
              payload: account,
            });

            setSelected(true);
            localStorage.setItem("account", JSON.stringify(account));
            localStorage.setItem("num", JSON.stringify(account_number));
          }}
          type="radio"
          name="sam"
          id={Math.random()}
        />
        <div className="w-full absolute top-0 left-0 bg-transparent h-[43px] bg-white rounded-xl  pointer-events-none"></div>
      </div>
    </div>
  );
};

export default WithdrawalDetails;

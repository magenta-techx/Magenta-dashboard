import React from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";

const WithdrawalDetails = ({
  account: { account_number, bank_name },
  account,
  selected,
  
}) => {
  const {
    state: { ForEachAcctDetail },setSelected,
  } = ItemContext();
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
  // arr.splice(1, 1, "replacement");
  const fir = midfth.splice(0, 0, "*");
  const sec = midfth.splice(1, 1, "*");
  const trd = midfth.splice(2, 2, "*");
  const fth = midfth.splice(3, 2, "*");
  const { dispatch } = ItemContext();
  return (
    <div className="w-full h-[43px] bg-white rounded-xl flex justify-between p-2">
      <h3>
        {fitr}
        {midfth?.join("")}
        {latr}
      </h3>
      <div className="flex gap-4">
        <span>{bank_name}</span>
        <input
          // checked
          onChange={() => {
            dispatch({
              type: "Individual AcctDetails",
              payload: account,
            });
            setSelected(true);
            localStorage.setItem("account",JSON.stringify(account_number))
          }}
          type="radio"
          name="sam"
          id=""
        />
      </div>
    </div>
  );
};

export default WithdrawalDetails;

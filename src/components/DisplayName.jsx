import React from "react";

const DisplayName = ({ width, height, fontSize }) => {
  const user = localStorage.getItem("user");
  const email = JSON.parse(user);

  const userFirstLetter = email?.email?.split("")[0];
  const userSecondLetter = email?.email?.split("")[1];
  return (
    <div
      style={{ width: width, height: height, fontSize: fontSize }}
      className="bg-[#7132BD] cursor-pointer rounded-full text-white flex justify-center items-center"
    >
      {`${userFirstLetter?.toUpperCase()}${userSecondLetter?.toUpperCase()}  `}
    </div>
  );
};

export default DisplayName;

import React from "react";
const DisplayName = ({ width, height, fontSize, mobile }) => {
  const user = localStorage.getItem("user");
  const email = JSON.parse(user);

  const userFirstLetter = email?.email?.split("")[0];
  const userSecondLetter = email?.email?.split("")[1];
  const userName = `${userFirstLetter?.toUpperCase()}${userSecondLetter?.toUpperCase()}`;
  return (
    <div
      // style={`${
      //   !mobile
      //     ? { width: "60"+ "px", height: "60"+"px", fontSize: "60"+"px"}
      //     : { width, height, fontSize }
      // }`}
      style={{width,height,fontSize}}
      className="bg-[#7132BD] cursor-pointer rounded-full text-white flex justify-center items-center  "
    >
      {userName === "undefinedundefined" ? "NU" : userName}
    </div>
  );
};
export default DisplayName;

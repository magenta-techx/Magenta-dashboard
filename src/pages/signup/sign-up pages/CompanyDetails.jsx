import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputComponent from "../../InputComponent";
import { ItemContext } from "../../../contextApi/stateMang.contextApi";
import axios from "axios";
import MagentaLogo from "../../../assets/logo";

const CompanyDetails = ({ markAsComplete = () => {} }) => {
  const {
    companyDetails,
    setCompanyDetails,
    userDetails,
    passwordDetails,
    merchant,
    client,
  } = ItemContext();
  const [bool, setBool] = useState(true);
  const [err, setErr] = useState("");

  const handleSubmit = async () => {
    try {

      const response = await axios.post(
        "https://backend.magentacashier.com/accounts/register-merchant/",
        {
          company_name: companyDetails?.companyName,
          email: userDetails.email,
          phone_number: companyDetails.companyPhone,
          password: passwordDetails.password,
        }
      );
      if (response.status !== 401 && response.status !== 400) {
        const token = response.data.tokens["access"];
        localStorage.setItem("token", token);
        setBool(false)
      } else {
        console.log("bad request");
      }
      // console.log(response.data.tokens["access"])

      console.log(response.data)
    } catch (err) {
      console.log(err);
      if (err.response.data === undefined) {
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
    <div className="xs:w-screen lg:w-[60%] sm:h-full ">
      <div className="sm:px-[20px] sm:py-4 sm:block lg:hidden sm:align-middle xs:m-[auto] xs:flex xs:justify-center pt-12">
        <MagentaLogo />
      </div>
    <div className="user-details text-center flex flex-col gap-4 pt-12">
      <h1 className="text-[32px] font-semibold">Company Details</h1>
      <p>Enter Company Details</p>
      {/* <div
        className={`${
          bool
            ? " w-[360px] max-w-full h-[26px] m-auto rounded-[10px] justify-center text-red-700"
            : "hidden"
        }`}
      >
        <p className="flex justify-center align-center font-medium text-[14px] items-center">
          {err}
        </p>
      </div> */}

      <div className="input-group xs:m-auto flex flex-col gap-7">
        <InputComponent
          type="text"
          label="Company name"
          name="companyName"
          onChange={(evt) =>
            setCompanyDetails({
              ...companyDetails,
              [evt.target.name]: evt.target.value,
            })
          }
        />

        <InputComponent
          type="text"
          label="Phone number"
          name="companyPhone"
          onChange={(evt) =>
            setCompanyDetails({
              ...companyDetails,
              [evt.target.name]: evt.target.value,
            })
          }
        />
      </div>

      <button
        className="w-[360px] xs:m-auto max-w-full h-[46px] rounded-[10px] disabled:text-gray-500 disabled:bg-[#E2E6EE] bg-[#4E00AD] text-white"
        onClick={markAsComplete}
        disabled={
          !companyDetails?.companyName?.trim() ||
          !companyDetails?.companyPhone?.trim()
        }
        onMouseDown={handleSubmit}
      >
        Continue
      </button>

      <Link to={"/login"}>
          {" "}
          Already a member? <span className="text-violet-500">Sign In</span>
        </Link>
    </div>
    </div>
  );
};

export default CompanyDetails;

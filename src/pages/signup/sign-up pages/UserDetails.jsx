import { useState } from "react";
import InputComponent from "../../InputComponent";
import { Link } from "react-router-dom";
import MagentaLogo from "../../../assets/logo";
import { ItemContext } from "../../../contextApi/stateMang.contextApi";

const UserDetails = ({ markAsComplete = () => {} }) => {
  // const [userDetails, setUserDetails] = useState({});
  const { userDetails, setUserDetails } = ItemContext();

  return (
    <div className="xs:w-screen lg:w-[60%] sm:h-full ">
      <div className="sm:px-[20px] sm:py-4 sm:block lg:hidden sm:align-middle xs:m-[auto] xs:flex xs:justify-center pt-12">
        <MagentaLogo />
      </div>
    <div className="user-details text-center flex flex-col gap-4 ">

      <h1 className="text-[32px] font-semibold sm:pt-20 m-0 xs:pt-12">Add Details</h1>
   
      <p>Please provide your name and email</p>
      

      <div className="input-group flex xs:m-auto flex-col gap-7">
        <InputComponent
          type="text"
          label="First name"
          name="firstname"
          user={userDetails}
          onChange={(evt) =>
            setUserDetails({
              ...userDetails,
              [evt.target.name]: evt.target.value,
            })
          }
        />
        <InputComponent
          type="text"
          user={userDetails}
          label="Surname"
          name="surname"
          onChange={(evt) =>
            setUserDetails({
              ...userDetails,
              [evt.target.name]: evt.target.value,
            })
          }
        />
        <InputComponent
          type="email"
          label="Email"
          name="email"
          onChange={(evt) => {
            setUserDetails({
              ...userDetails,
              [evt.target.name]: evt.target.value,
            });
          }}
        />
      </div>

      <button
        className="w-[360px] max-w-full xs:m-auto h-[46px] rounded-[10px] disabled:text-gray-500 disabled:bg-[#E2E6EE] bg-[#4E00AD] text-white"
        onClick={markAsComplete}
        disabled={
          !userDetails.firstname ||
          !userDetails.firstname.length > 2 ||
          !userDetails.surname ||
          !userDetails.surname.length > 2 ||
          !userDetails.email ||
          !userDetails.email.includes("@") ||
          !userDetails.email.includes(".")
        }
      >
        Continue
      </button>
      <p>
        <Link to={"/login"}>
          {" "}
          Already a member? <span className="text-violet-500">Sign In</span>
        </Link>
      </p>
      </div>
    </div>
  );
};

export default UserDetails;

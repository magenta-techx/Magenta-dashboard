import { useState } from "react";
import InputComponent from "../../InputComponent";
import { Link } from "react-router-dom";
import { ItemContext } from "../../../contextApi/stateMang.contextApi";

const UserDetails = ({ markAsComplete = () => {} }) => {
  // const [userDetails, setUserDetails] = useState({});
  const { userDetails, setUserDetails } = ItemContext();
  

  return (
    <div className="user-details text-cente r flex flex-col gap-4">
      <h1 className="text-[32px] font-semibold">Add Details</h1>

      <div className="input-group flex flex-col gap-7">
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
        className="w-[360px] max-w-full h-[46px] rounded-[10px] disabled:text-gray-500 disabled:bg-[#E2E6EE] bg-[#4E00AD] text-white"
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
  );
};

export default UserDetails;

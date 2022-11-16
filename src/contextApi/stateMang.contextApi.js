import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useRef,
} from "react";
import reducer, { INITIAL_STATE } from "../components/reducer/reducer";
import { onboardingSteps } from "../pages/utils";
const StateMang = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const label = [
    "Jan",
    "",
    "March",
    "",
    "May",
    "",
    "July",
    "",
    "September",
    "",
    "November",
    "",
  ];
  const option1 = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
      },
    },
  };

  const data1 = {
    labels: label,
    datasets: [
      {
        label: "Sales",
        data: [
          "50",
          "100",
          "150",
          "200",
          "20",
          "50",
          "100",
          "150",
          "200",
          "20",
          "30",
          "13",
        ],
        backgroundColor: "#7132BD",
        cutout: "90%",
        // borderWidth: 3,
        borderRadius: 100,
      },
      {
        label: "Customer",
        data: [
          "50",
          "100",
          "10",
          "100",
          "30",
          "50",
          "100",
          "150",
          "200",
          "20",
          "40",
          "20",
        ],
        backgroundColor: "#D733CE",
        cutout: "90%",
        // borderWidth: 3,
        borderRadius: 100,
      },
    ],
  };
  const option2 = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
      },
    },
  };
  // dashboard customer's chart
  const data2 = {
    labels: ["New Customer", "Old Customer"],
    datasets: [
      {
        label: "# of Votes",
        data: [80, 19],
        backgroundColor: ["#7132BD", "#C302C6"],
        cutout: "80%",
        borderWidth: 1,
        borderRadius: 20,
      },
    ],
  };

  const [steps, setSteps] = useState(onboardingSteps);
  const [currentStep, setCurrentStep] = useState(0);
  //sign up flow

  const [value, setValue] = useState("");
  const [showEye, setShowEye] = useState(true);
  const labelRef = useRef(null);
  const inputRef = useRef(null);
  const [userDetails, setUserDetails] = useState({});
  const [passwordDetails, setPasswordDetails] = useState({});
  const [companyDetails, setCompanyDetails] = useState({});
  const [file, setFile] = useState(null);
  const [userMail, setUserMail] = useState({});
  const [userOtp, setUserOtp] = useState({});
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [newPassword, setNewPassword] = useState({})
  const [verificationMail, setVerificationMail] = useState("")
  const [user, setUser] = useState({});
  const [showNav, setShowNav] = useState(true);

  const merchant = {
    company_name: companyDetails?.companyName,
    email: userDetails.email,
    phone_number: companyDetails.companyPhone,
    password: passwordDetails.password,
  };
  const client = {
    email: userDetails.email,
    first_name:userDetails.firstname,
    last_name:userDetails.surname,
    password: passwordDetails.password,
    phone_number: companyDetails.companyPhone,

  };
  // console.log(dat)
  return (
    <StateMang.Provider
      value={{ state, dispatch, data1, option1, data2, option2,
      value, setValue, showEye, setShowEye, labelRef, inputRef,
      userDetails, setUserDetails, passwordDetails, setPasswordDetails,
      companyDetails, setCompanyDetails, file, setFile, steps, setSteps,
      currentStep, setCurrentStep, userMail, setUserMail, userOtp, setUserOtp,
      loginEmail, setLoginEmail, loginPassword , setLoginPassword, isAuth, setIsAuth,
      newPassword, setNewPassword, verificationMail, setVerificationMail, user , setUser,
      client,merchant, showNav, setShowNav

      
      }}
    >
      {children}
    </StateMang.Provider>
  );
};
export default Context;
export const ItemContext = () => {
  return useContext(StateMang);
};

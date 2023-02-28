import axios from "axios";
import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useRef,
  useEffect,
} from "react";
import { useIdleTimer } from "react-idle-timer";
import { useNavigate } from "react-router-dom";
import reducer, { INITIAL_STATE } from "../components/reducer/reducer";
import { onboardingSteps } from "../pages/utils";
const StateMang = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const token = localStorage.getItem("login_token");
  const [passcode, setPassCode] = useState("");
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [autoSweepID, setAutoSweepID] = useState(null);
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
  // const [isAuth, setIsAuth] = useState(false);
  const { branchDetails } = state;
  const [newPassword, setNewPassword] = useState({});
  const [verificationMail, setVerificationMail] = useState("");
  const [states, setStates] = useState({ firstAcct: false, secondAcct: false });
  const [user, setUser] = useState({});
  const [showNav, setShowNav] = useState(true);
  const [showCreateBranch, setShowCreateBranch] = useState(false);
  const [showDeleteBranch, setShowDeleteBranch] = useState(false);
  const [showDeletedMsg, setShowDeletedMsg] = useState(false);
  const [showAcctDelete, setShowAcctDelete] = useState(false);

  const [showEdit, setShowEdit] = useState(false);
  const [editBranchName, setEditBranchName] = useState("");
  const [editBranchAddress, setEditBranchAddress] = useState("");
  const [editBranchPasscode, setEditBranchPasscode] = useState("");
  const [showEditSucc, setShowEditSucc] = useState(false);
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [acctName, setAcctName] = useState("");
  const [acct, setAcct] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [showAcctSucc, setShowAcctSucc] = useState(false);
  const [showWithdrawSucc, setShowWithdrawSucc] = useState(false);
  const [showDeleteSucc, setShowDeleteSucc] = useState(false);
  const [otp, setOTP] = useState("");
  const [withdrawOTP, setWithdrawOTP] = useState("");
  const [withdrawPassword, setWithdrawPassword] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [showWithdrawOTP, setShowWithdrawOTP] = useState(false);
  const [showWithdrawAmount, setShowWithdrawAmount] = useState(false);
  const [showWithdrawPassword, setShowWithdrawPassword] = useState(false);
  const [showSelectAutoSweep, setShowSelectAutoSweep] = useState(false);
  const [showSelectHourly, setShowSelectHourly] = useState(false);
  const [showSelectDaily, setShowSelectDaily] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [frequency, setFrequency] = useState(false);
  const [freq, setFreq] = useState("");
  const [showAutoSweepAmount, setShowAutoSweepAmount] = useState(false);
  const [showAutoSweepOTP, setShowAutoSweepOTP] = useState(false);
  const [autoSweepOTP, setAutoSweepOTP] = useState("");
  const [autoSweepAmount, setAutoSweepAmount] = useState("");
  const [hour, setHour] = useState("1 hour");
  const [time, setTime] = useState("12:00 am");
  const [setOrResetAutoSweep, setSetOrResetAutoSweep] = useState(false);
  const [resetAutoSweepTime, setResetAutoSweepTime] = useState("");
  const [resetAutoSweepFreq, setResetAutoSweepFreq] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [det, setDel] = useState(null);
  const [transaction, setTransaction] = useState({});
  const [chartLineRes, setLineChartRes] = useState([]);
  const [remaining, setRemainingTime] = useState(0);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  let delayed;
  let isAuth;
  let timeleft;
  const handleAutoSweepDelete = async () => {
    const token = localStorage.getItem("login_token");
    const id = localStorage.getItem("key");
    setIsLoading(true);
    try {
      const res = await axios.delete(
        `https://backend.magentacashier.com/business/recurrentcashout/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 204) {
        setIsLoading(false);
        console.log(res);
        localStorage.removeItem("reset_auto_sweep_result");
        localStorage.removeItem("item");
        localStorage.removeItem("key");
        localStorage.removeItem("num");
        setShowSuccess(true);
        setSuccess(res.statusText);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setError(error.message);
      setShowError(true);
    }
  };

  const promptBeforeIdle = 30_000;
  const timeout = 3000_000;
  const onIdle = () => {
    setOpen(false);
    localStorage.clear();
  };
  const onActive = () => {
    setOpen(false);
  };
  const onPrompt = () => {
    // if (localStorage.isAuth) {
    setOpen(true);
    // }
    // setOpen(false);
  };
  const onAction = () => {
    // setOpen(false)
  };

  const { getRemainingTime, activate, pause, resume, reset } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    onPrompt,
    timeout,
    promptBeforeIdle,
    throttle: 1000,
  });

  const timeTillPrompt = Math.max(remaining - promptBeforeIdle / 1000, 0);
  const seconds = timeTillPrompt > 1 ? "seconds" : "second";
  useEffect(() => {
    timeleft = setInterval(() => {
      setRemainingTime(Math.ceil(getRemainingTime() / 1000));
    }, 1000);

    return () => {
      clearInterval(timeleft);
    };
  }, []);
  const handleStillHere = () => {
    activate();
    // console.log("Logged out");
  };
  if (!localStorage.getItem("isAuth")) {
    pause();
    reset();
  } else {
    resume();
    // reset();
  }
  const Get_Branch = async () => {
    let controller = new AbortController();
    (async () => {
      try {
        const res = await axios.get(
          "https://backend.magentacashier.com/business/branch/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            signal: controller.signal,
          }
        );
        dispatch({ type: "Branch Details", payload: res.data });
        controller = null;
      } catch (e) {
        // Handle the error
      }
    })();
    //aborts the request when the component umounts
    return () => controller?.abort();
  };

  const Get_Auto_Sweep = async () => {
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.get(
        "https://backend.magentacashier.com/business/recurrentcashout/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      res?.data?.map((a) => {
        localStorage.setItem("reset_auto_sweep_result", JSON.stringify(a));
        localStorage.setItem("key", JSON.stringify(a?.id));
        localStorage.setItem("item", true);
        localStorage.setItem("num", a.account);
        console.log(a.account);
      });
    } catch (err) {}
  };
  const GET_MERCHANT_TRANSACTION = async () => {
    // console.log("merchant")
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.get(
        "https://backend.magentacashier.com/business/merchant-transaction-total/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) setTransaction(res?.data);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const GET_ACCOUNT = async () => {
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.get(
        "https://backend.magentacashier.com/accounts/account/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: "Account Details", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  const REQUEST_OTP = async () => {
    const token = localStorage.getItem("login_token");
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://backend.magentacashier.com/accounts/send-otp/",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        setIsLoading(false);
        setShowSuccess(true);
        setSuccess(res.data.message);
        // document.body.style.overflow = "hidden";
        setShowOTP(true);
        setShowAddAccount(false);
      } else {
        return;
      }
      // if (accountName) {
      // } else {
      //   return;
      // }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      setError(error?.response?.data.message);
      setShowError(true);
    }
  };

  // console.log("first");
  const GET_ACCOUNT_NAME = async () => {
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.post(
        "https://backend.magentacashier.com/accounts/resolvebankdetails/",
        {
          account_number: accountNumber,
          bank_code: selectedOption?.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      if ((accountNumber && selectedOption) || res.data.status === 200) {
        setAccountName(res?.data?.data.account_name);
      } else {
        setAccountName("");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setShowError(true);
      setIsLoading(false);
      setAccountName(error?.response?.data?.message);
    }
  };
  const GET_CHART_DATA = async () => {
    const token = localStorage.getItem("login_token");
    try {
      const res = await axios.get(
        "https://backend.magentacashier.com/business/merchant-daily-transaction",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // return res.status===200?setLineChartRes(res.data):""
      if (res.status === 200) setLineChartRes(res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const label = chartLineRes?.map((data) => data.day);
  const option1 = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        display: false,
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        autoSkip: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false //this will remove only the label
        }
      },
      y: {
        border: {
          display: false
        },
        grid: {
          display: true,
        },
      }
  },
  };

  const data1 = {
    labels: label,
    datasets: [
      {
        fill: true,
        label: "Total",
        tension: 0.5,
        data: chartLineRes?.map((data) => data.total),
        // backgroundColor: "#D733CE",
        // cutout: "90%",
        fontFamily: "albert",
        // borderRadius: 100,
        // fill: true,
        fill : true,
        showLine : true,
        borderColor: '#7133bd',
        backgroundColor: '#7133bd4f',
        pointRadius : 2,
        cubicInterpolationMode: 'monotone',
        tension: 0.1
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
    // options: {
    //   scales: {
    //     x: {
    //       ticks: {
    //         display: false,
    //       },
    //     },
    //   },
    // },
  };

  if (localStorage.getItem("isAuth") === null) {
    isAuth = false;
  } else {
    isAuth = true;
  }

  const merchant = {
    company_name: companyDetails?.companyName,
    email: userDetails.email,
    phone_number: companyDetails.companyPhone,
    password: passwordDetails.password,
  };
  const client = {
    email: userDetails.email,
    first_name: userDetails.firstname,
    last_name: userDetails.surname,
    password: passwordDetails.password,
    phone_number: companyDetails.companyPhone,
  };

  return (
    <StateMang.Provider
      value={{
        showAcctSucc,
        autoSweepOTP,
        resetAutoSweepFreq,
        setResetAutoSweepFreq,
        resetAutoSweepTime,
        setResetAutoSweepTime,
        GET_ACCOUNT,
        autoSweepID,
        GET_ACCOUNT_NAME,
        setAutoSweepOTP,
        timeTillPrompt,
        handleStillHere,
        showAutoSweepOTP,
        freq,
        setFreq,
        setShowAutoSweepOTP,
        autoSweepAmount,
        setAutoSweepAmount,
        GET_MERCHANT_TRANSACTION,
        showDeleteSucc,
        setShowDeleteSucc,
        showAutoSweepAmount,
        isLoading,
        setOpen,
        setIsLoading,
        setShowAutoSweepAmount,
        GET_CHART_DATA,
        Get_Auto_Sweep,
        frequency,
        det,
        showSuccess,
        setShowSuccess,
        setDel,
        setFrequency,
        isAuth,
        showError,
        setShowError,
        open,
        remaining,
        hour,
        setHour,
        time,
        setTime,
        REQUEST_OTP,
        setOrResetAutoSweep,
        setSetOrResetAutoSweep,
        transaction,
        chartLineRes,
        showWithdrawPassword,
        showSelectHourly,
        setShowSelectHourly,
        showSelectDaily,
        setShowSelectDaily,
        showWithdrawSucc,
        setShowWithdrawSucc,
        showSelectAutoSweep,
        setShowSelectAutoSweep,
        selected,
        success,
        setSuccess,
        setSelected,
        showWithdrawOTP,
        setShowWithdrawOTP,
        setShowWithdrawPassword,
        withdrawOTP,
        selectedOption,
        setSelectedOption,
        error,
        setError,
        setWithdrawOTP,
        showWithdrawAmount,
        setShowWithdrawAmount,
        withdrawPassword,
        states,
        setStates,
        setWithdrawPassword,
        setShowAcctSucc,
        withdrawAmount,
        setWithdrawAmount,
        bankCode,
        setBankCode,
        acctName,
        setAcctName,
        showOTP,
        setShowOTP,
        acct,
        otp,
        setOTP,
        setAcct,
        showAddAccount,
        setShowAddAccount,
        accountNumber,
        setAccountNumber,
        accountName,
        setAccountName,
        showEditSucc,
        setShowEditSucc,
        setEditBranchAddress,
        setEditBranchName,
        setEditBranchPasscode,
        handleAutoSweepDelete,
        editBranchAddress,
        editBranchName,
        editBranchPasscode,
        showEdit,
        setShowEdit,
        state,
        dispatch,
        data1,
        option1,
        data2,
        option2,
        value,
        setValue,
        showEye,
        setShowEye,
        labelRef,
        inputRef,
        userDetails,
        setShowDeleteBranch,
        showDeleteBranch,
        showAcctDelete,
        setShowAcctDelete,
        setUserDetails,
        passwordDetails,
        setPasswordDetails,
        companyDetails,
        setCompanyDetails,
        file,
        setFile,
        steps,
        setSteps,
        currentStep,
        setCurrentStep,
        userMail,
        setUserMail,
        userOtp,
        setUserOtp,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        showDeletedMsg,
        setShowDeletedMsg,
        newPassword,
        Get_Branch,
        setNewPassword,
        verificationMail,
        setVerificationMail,
        showCreateBranch,
        setShowCreateBranch,
        user,
        setUser,
        client,
        merchant,
        showNav,
        setShowNav,
        passcode,
        setPassCode,
        address,
        setAddress,
        name,
        setName,
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

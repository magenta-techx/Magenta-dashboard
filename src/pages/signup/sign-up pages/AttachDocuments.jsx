import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DragDropInputComponent from "../DragDropInputComponent";
import { ItemContext } from "../../../contextApi/stateMang.contextApi";
import axios from "axios";
import MagentaLogo from "../../../assets/logo";
const AttachDocuments = ({ markAsComplete = () => {} }) => {
  // const [file, setFile] = useState(null);
  const { userDetails } = ItemContext();
  const [file, setFile, attachMent] = useState({});
  const [bool, setBool] = useState(true);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        "https://backend.magentacashier.com/accounts/submit-document/",
        { cac_document: file },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      if (err.response.data === undefined) {
        setErr(err.message);
      } else {
        setErr(err.response.data.detail);
      }
      setBool(true);
    }
  };

  const handleOtp = async () => {
    try {
      const response = await axios.post(
        "https://backend.magentacashier.com/accounts/send-otp/",
        { email: userDetails.email }
      );
    } catch (err) {
      if (err.response.data === undefined) {
        setErr(err.message);
      } else {
        setErr(err.response.data.detail);
      }
    }
  };

  setTimeout(() => {
    setBool(false);
  }, 3000);
  // useEffect(() => {}, []);

  return (
    <div className="h-full ">
      <Link to={"/verify"}>
        <p
          onClick={handleOtp}
          className="text-violet-500 flex justify-end sm:mt-0 sm:px-6 lg:pb-0 lg:m-13 lg:w-[700px] lg:pt-5 lg:-px-20"
        >
          skip
        </p>
      </Link>
      <div className="xs:w-screen sm:w-screen lg:w-[100%] ">
      <div className="sm:px-[20px] sm:py-4 sm:block lg:hidden sm:align-middle xs:m-[auto] xs:flex xs:justify-center pt-12 sm:pt-0">
        <MagentaLogo />
      </div>
      <div className="xs:flex xs:justify-center xs:m-auto">
      <div className="user-details text-center items-center flex flex-col pt-10 sm:pt-20 gap-4  xs:m-auto xs:justify-center">
        <h1 className="text-[32px] font-semibold">Attach Document</h1>

        <p className="mx-[5px] sm:mx-0">You need to upload your Coporate Affairs Commission document</p>

        <div className="input-group xs:m-auto flex flex-col gap-7 ">
          <DragDropInputComponent onChange={(fileInfo) => setFile(fileInfo)} />
        </div>

        <button
          className="w-[360px] xs:m-auto max-w-full h-[46px] rounded-[10px] disabled:text-gray-500 disabled:bg-[#E2E6EE] bg-[#4E00AD] text-white"
          onClick={markAsComplete}
          onMouseUp={handleSubmit}
          disabled={!file}
        >
          Continue
        </button>

        <p>
          Already a member?{" "}
          <span onClick={() => navigate("/login")} className="text-violet-500 cursor-pointer">
            Sign In
          </span>
        </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AttachDocuments;

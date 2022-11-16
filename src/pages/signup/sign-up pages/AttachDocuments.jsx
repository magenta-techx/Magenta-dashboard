import { useState } from "react";
import DragDropInputComponent from "../DragDropInputComponent";
import { ItemContext } from "../../../contextApi/stateMang.contextApi";
import axios, { Axios } from "axios";
import { useEffect } from "react";
const AttachDocuments = ({ markAsComplete = () => {} }) => {
  // const [file, setFile] = useState(null);
  const [file, setFile, attachMent ] = useState({});
  const [bool, setBool] = useState(true);
  const [err, setErr] = useState("");
  const handleSubmit = async () => {
    try{ 
      const res = await axios.patch("https://backend.magentacashier.com/accounts/submit-document/", {
        cac_document : file
      })
      // res.data.headers["content-type"] = "application/json"
      console.log(res.data)
    } catch(err) {
      console.log(err);
      if (err.response.data === undefined) {
        setErr(err.message);
      } else {
        setErr(err.response.data.detail);
      }
      setBool(true);
    }
    }
  

  setTimeout(() => {
    setBool(false)
  },3000)
  // useEffect(() => {}, []);
 

  return (
    <div className="user-details text-center items-center flex flex-col gap-4">
      <h1 className="text-[32px] font-semibold">Attach Document</h1>

      <p>You need to upload your Coporate Affairs Commission document</p>

      <div className="input-group flex flex-col gap-7">
        <DragDropInputComponent onChange={(fileInfo) => setFile(fileInfo)} />
      </div>

      <button
        className="w-[360px] max-w-full h-[46px] rounded-[10px] disabled:text-gray-500 disabled:bg-[#E2E6EE] bg-[#4E00AD] text-white"
        onClick={markAsComplete}
        onMouseUp={handleSubmit}
        disabled={!file}
      >
        Continue
      </button>

      <p>
        Already a member? <span className="text-violet-500">Sign In</span>
      </p>
    </div>
  );
};

export default AttachDocuments;

import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import Navbar from "../components/Navbar";

const Settings = ({ onChange = () => {}, removeFile = () => {} }) => {
  const { state, dispatch, showNav } = ItemContext();
  const [fileAvailable, setFileAvailable] = useState(false);
  const [file, setFile] = useState({});
  const [count, setCount] = useState(1);
  const inputRef = useRef(null);
  const {
    newTransaction,
    mode,
    withdrawMade,
    createdBranch,
    addDocument,
    documentValue,
  } = state.settingStates;
  const triggerFileInput = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }

    return false;
  };
  const processFiles = (files, callBack) => {
    const dataUrlArr = [];
    Array.from(files).forEach((file, index) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", (evt) => {
        let result = evt.target.result;
        dataUrlArr.push({ data: result.toString(), name: file.name, file });

        if (index === files.length - 1) {
          callBack(dataUrlArr);
        }
      });
    });
  };

  const handleUpload = async (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    evt.target.style.background = "transparent";

    if (evt.type === "change") {
      processFiles(evt.target.files, (arr) => {
        onChange(arr[0]);
        setFile(arr[0]);
        setFileAvailable(true);
      });
    } else {
      processFiles(evt.dataTransfer.files, (arr) => {
        onChange(arr[0]);
        setFile(arr[0]);
        setFileAvailable(true);
      });
    }

    return false;
  };
  const handleDragEnter = (evt) => {
    evt.preventDefault();

    evt.target.style.background = "#EFF1FF";

    return false;
  };
  const handleDragLeave = (evt) => {
    evt.preventDefault();

    evt.target.style.background = "transparent";

    return false;
  };
  
  return (
    <div className="flex sm:flex-row flex-col-reverse w-screen">
      {showNav && (
        <div className="lg:w-[20%]  h-fit w-full sm:h-screen sm:w-[107px] sm:min-h-screen sm:flex  bg-[#200047] gap-0 p-2 sm:p-0 flex sm:flex-col flex-row items-center">
          <Navbar />
        </div>
      )}
      <div className="lg:w-[80%] overflow--hidden xs:w-[100%] overflow-x-hidden sm:px-8 h-[92%] sm:h-screen sm:py-6 flex flex-col gap-10 overflow-y-scroll">
        <div className="w-full  bg-white   ">
          <Header showLogo={true}/>
        </div>
        <div className="flex flex-col gap-8 mx-4 sm:mx-0 ">
          <h1 className="font-medium text-2xl albert">Magenta Settings</h1>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl font-medium inter">Notification</h2>
              <div className="flex flex-col gap-4 ">
               
                <div className=" max-w-[328px] sm:max-w-[458px] lg:w-[458px] h-fit border border-[#AF8BDA] rounded-md px-3 py-4 sm:py-4 sm:px-4   relative">
                  <div className="flex justify-between items-center inter ">
                    <p className="font-medium text-[12px] sm:text-[16px] ">
                      Notify me for every new transaction{" "}
                    </p>
                    <div className="flex items-center gap-2">
                      <p
                        className={`text-[12px] sm:text-lg ${
                          !newTransaction ? "text-[#ADB3BD]" : "text-black"
                        }`}
                      >
                        {!newTransaction ? "Disabled" : "Enable"}
                      </p>
                      <div
                        className="relative cursor-pointer"
                        onClick={() => {
                          dispatch({ type: "New transaction" });
                        }}
                      >
                        <p className="w-[24px] sm:w-10 h-3 bg-[#C7AFE4] rounded-lg"></p>
                        <span
                          className={`w-[15px] sm:w-6 h-[15px] sm:h-6 rounded-full block absolute  ${
                            newTransaction
                              ? "bg-[#7132BD] -top-[2px] sm:-top-2 right-0 shadow-[5px_1px_4px_1px_#C7AFE4]"
                              : "-top-[2px] sm:-top-2  bg-purple-50 shadow-[2px_2px_2px_1px_rgba(23,33,43,0.25)]"
                          }`}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" max-w-[328px] sm:max-w-[458px] lg:w-[458px] h-fit border border-[#AF8BDA] rounded-md px-3 py-4 sm:py-4 sm:px-4   relative">
                  <div className="flex justify-between items-center inter ">
                    <p className="font-medium text-[12px] sm:text-[16px] ">
                      Notify me when a new branch is created
                    </p>
                    <div className="flex items-center gap-2">
                      <p
                        className={`text-[12px] sm:text-lg ${
                          !createdBranch ? "text-[#ADB3BD]" : "text-black"
                        }`}
                      >
                        {!createdBranch ? "Disabled" : "Enable"}
                      </p>
                      <div
                        className="relative cursor-pointer"
                        onClick={() => {
                          dispatch({ type: "Created branch" });
                        }}
                      >
                        <p className="w-[24px] sm:w-10 h-3 bg-[#C7AFE4] rounded-lg"></p>
                        <span
                          className={`w-[15px] sm:w-6 h-[15px] sm:h-6 rounded-full block absolute  ${
                            createdBranch
                              ? "bg-[#7132BD] -top-[2px] sm:-top-2 right-0 shadow-[5px_1px_4px_1px_#C7AFE4]"
                              : "-top-[2px] sm:-top-2  bg-purple-50 shadow-[2px_2px_2px_1px_rgba(23,33,43,0.25)]"
                          }`}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" max-w-[328px] sm:max-w-[458px] lg:w-[458px] h-fit border border-[#AF8BDA] rounded-md px-3 py-4 sm:py-4 sm:px-4   relative">
                  <div className="flex justify-between items-center inter ">
                    <p className="font-medium text-[12px] sm:text-[16px] ">
                      Notify me when a withdrawal is made
                    </p>
                    <div className="flex items-center gap-2">
                      <p
                        className={`text-[12px] sm:text-lg ${
                          !withdrawMade ? "text-[#ADB3BD]" : "text-black"
                        }`}
                      >
                        {!withdrawMade ? "Disabled" : "Enable"}
                      </p>
                      <div
                        className="relative cursor-pointer"
                        onClick={() => {
                          dispatch({ type: "Withdrawal made" });
                        }}
                      >
                        <p className="w-[24px] sm:w-10 h-3 bg-[#C7AFE4] rounded-lg"></p>
                        <span
                          className={`w-[15px] sm:w-6 h-[15px] sm:h-6 rounded-full block absolute  ${
                            withdrawMade
                              ? "bg-[#7132BD] -top-[2px] sm:-top-2 right-0 shadow-[5px_1px_4px_1px_#C7AFE4]"
                              : "-top-[2px] sm:-top-2  bg-purple-50 shadow-[2px_2px_2px_1px_rgba(23,33,43,0.25)]"
                          }`}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-medium inter text-[12px] sm:text-[16px]">
                Display
              </h2>
              <div>
                <div className="max-w-[328px] sm:max-w-[459px] h-fit border border-[#AF8BDA] rounded-md p-4 relative">
                  <div className="flex justify-between items-center inter">
                    <p className="font-medium text-[12px] sm:text-[16px]">
                      Dark mode
                    </p>
                    <div className="flex items-center gap-2">
                      <p
                        className={`text-[12px] sm:text-lg text-[#ADB3BD] 
                      `}
                      >
                        Not available
                      </p>
                      <div className="relative">
                        <p className="sm:w-10 h-3 w-[30px] bg-[#E2E6EE] rounded-lg"></p>
                        <span
                          className={` sm:w-6 w-[18px] h-[18px] sm:h-6 rounded-full block absolute  ${
                            mode
                              ? "bg-[#7132BD] top-[2px] sm:-top-2  right-0 shadow-[5px_1px_4px_1px_#C7AFE4]"
                              : "-bottom-[3px] sm:-top-2 bg-[#ADB3BD] shadow-[2px_2px_2px_1px_rgba(23,33,43,0.25)]" 
                          }`}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 inter">
              <h2 className="text-xl font-medium ">Documentation</h2>

              <div className=" h-fit border border-[#AF8BDA] rounded-md p-4 max-w-[329px] sm:max-w-[459px] ">
                <h2 className="text-sm font-medium">
                  {addDocument ? "Added Document" : "Add Document"}
                </h2>
                <div
                  onDrop={handleUpload}
                  onDragOver={(evt) => evt.preventDefault()}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  className="bg-[#FAFAFA] border border-dashed border-violet-500 p-[24px]  rounded-lg w-full"
                >
                  {!fileAvailable && (
                    <div className="flex flex-col items-center gap-4">
                      <p className="text-sm font-medium">
                        Drag and Drop cooperate affair commission doc here
                      </p>
                      <span className="font-medium">or</span>
                      <button
                        className="select-actuator w-[140px] h-[42px] rounded-md border border-[#7132BD] text-[#7132BD]"
                        onClick={triggerFileInput}
                      >
                        Upload
                      </button>
                    </div>
                  )}
                  {fileAvailable && (
                    <div className="flex items-center gap-3">
                      <span>
                        <img
                          src={"/assets/fileVector.png"}
                          alt="FileVector"
                          width={17}
                          height={23}
                        />
                      </span>
                      <p className="truncate w-60">{file?.name}</p>
                      <button
                        className="select-actuator w-[140px] h-[42px] text-[#7132BD] ml-auto"
                        onClick={triggerFileInput}
                      >
                        view
                      </button>
                    </div>
                  )}
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={handleUpload}
                    // onMouseDown={handleSubmit}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
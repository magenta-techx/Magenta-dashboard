import { useState, useRef } from "react";
// import FileVector from "../../../src/assets/"

const DragDropInputComponent = ({
  onChange = () => {},
  removeFile = () => {},
  accepts,
}) => {
  const inputRef = useRef(null);
  const [fileAvailable, setFileAvailable] = useState(false);
  const [file, setFile] = useState({});

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
  const handleSubmit = () => {};

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

  const handleFileRemoval = () => {
    removeFile();
    setFile({});
    setFileAvailable(false);
  };

  return (
    <div
      onDrop={handleUpload}
      onDragOver={(evt) => evt.preventDefault()}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      className="bg-[#FAFAFA] border border-dashed border-violet-500 p-[24px] rounded-lg w-[408px]"
    >
      {!fileAvailable && (
        <div className="flex flex-col items-center gap-4">
          <p>Drag and Drop document here</p>
          <span>or</span>
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
          {/* <span>
            <img src={FileVector} alt="FileVector" width={17} height={23} />
          </span> */}
          <p className="truncate w-60">{file?.name}</p>
          <button
            className="select-actuator w-[140px] h-[42px] rounded-md border border-[#7132BD] text-[#7132BD] ml-auto"
            onClick={triggerFileInput}
          >
            Change Doc
          </button>
        </div>
      )}
      <input
        type="file"
        ref={inputRef}
        onChange={handleUpload}
        onMouseDown={handleSubmit}
        className="hidden"
      />
    </div>
  );
};

export default DragDropInputComponent;

import { useRef, useState } from "react";

const InputComponent = ({
  label = "",
  className = "",
  onChange = () => {},
  type,
  ...inputProps
}) => {
  const [value, setValue] = useState("");
  const [showEye, setShowEye] = useState(true);
  const labelRef = useRef(null);
  const inputRef = useRef(null);

  const labelClassNames = {
    focused:
      "absolute cursor-text p-2 -translate-y-1/2 left-4 transition-all bg-white text-violet-500 top-0 text-[12px]",
    blurred:
      "absolute cursor-text p-2 top-[50%] -translate-y-1/2 left-4 transition-all text-[16px]",
  };

  const handleChange = (evt) => {
    onChange(evt);
    if (evt.target.value.trim()) {
      setValue(evt.target.value);
    } else {
      setValue(evt.target.value);
    }
  };

  const handleFocus = (evt) => {
    if (evt.target.focus) {
      labelRef.current.className = labelClassNames.focused;
    }
  };

  const handleBlur = (evt) => {
    if (value.trim()) {
      labelRef.current.className = labelClassNames.focused;
      return false;
    }

    labelRef.current.className = labelClassNames.blurred;
  };

  return (
    <div className="relative w-[360px] max-w-full h-[48px]">
      <label
        className={`${value ? labelClassNames.focused : labelClassNames.blurred } `}
        ref={labelRef}
        onClick={() => inputRef.current.focus()}
        onChange={() => inputRef.current.focus()}
      >
        {label}
      </label>
      <input
        {...inputProps}
        type={type}
        className={`${className} w-full h-full outline-none border border-gray-300 rounded-lg px-[16px] py-[14px]`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        onChange={handleChange}
      />
      {type === "password" && (
        <button
          className="absolute top-[50%] -translate-y-1/2 right-4"
          onClick={() => {
            inputRef.current.type === "password"
              ? (inputRef.current.type = "text")
              : (inputRef.current.type = "password");
            setShowEye(!showEye);
          }}
        >
          {!showEye ? <EyeSlashIcon /> : <EyeIcon />}
        </button>
      )}
    </div>
  );
};

const EyeSlashIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#7132BD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.532 9.47l-5.06 5.06a3.576 3.576 0 115.06-5.06z"
      ></path>
      <path
        stroke="#7132BD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.422 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47M15.511 12.7a3.565 3.565 0 01-2.82 2.82M9.47 14.53L2 22M22.001 2l-7.47 7.47"
      ></path>
    </svg>
  );
};

const EyeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#7132BD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.582 12c0 1.98-1.6 3.58-3.58 3.58s-3.58-1.6-3.58-3.58 1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58z"
      ></path>
      <path
        stroke="#7132BD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68z"
      ></path>
    </svg>
  );
};

export default InputComponent;

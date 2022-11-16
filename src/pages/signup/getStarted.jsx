import React from 'react';


const GetStarted = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("oh")
    }
  return(
    <div className="m-auto w-[400px] text-center mt-[200px] text-grey">
     <p className="pb-5">Yay we have recieved your document. <br />
     You will get a response from us after it has been verified</p>
     <button
        className="w-[360px] max-w-full h-[46px] rounded-[10px] bg-[#4E00AD] text-white"
        onClick={handleSubmit}
      >
       Get Started
      </button>

    </div>
  )
}

export default GetStarted;
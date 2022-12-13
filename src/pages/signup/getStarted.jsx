import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemContext } from '../../contextApi/stateMang.contextApi';



const GetStarted = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/")
    }
    const {setShowNav} = ItemContext();
    useEffect(() => {},[
      setShowNav(false)
    ])
  return(
    <div className="m-auto w-[400px] text-center mt-[200px] text-grey">
    <img
      className=" m-auto"
      src="/assets/getstarted.png"
      alt="get started image"
    />
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
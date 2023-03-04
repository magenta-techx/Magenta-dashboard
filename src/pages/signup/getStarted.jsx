import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemContext } from '../../contextApi/stateMang.contextApi';
import MagentaLogo from '../../assets/logo';
import { Link } from 'react-router-dom';


const GetStarted = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/")
    }
    const {setShowNav, setShowFooter} = ItemContext();
    useEffect(() => {
      setShowNav(false);
      setShowFooter(false);
    }, []);
  return(
    <div className="sm:w-screen xs:w-[100%]">
      <div className="sm:px-[20px] sm:py-4 sm:block sm:align-middle xs:m-[auto] xs:flex xs:justify-center xs:pt-12">
        <MagentaLogo />
      </div>
    
    <div className="m-auto w-[400px] text-center lg:mt-[200px] xs:mt-[80px] text-grey">
    <img
      className=" m-auto"
      src="/assets/getstarted.png"
      alt="get started image"
    />
     <p className="pb-5">Yay we have received your document. <br />
     You will get a response from us after it has been verified</p>

   <button
        className="w-[360px] max-w-full h-[46px] rounded-[10px] bg-[#4E00AD] text-white"
        onClick={handleSubmit}
      >
        <Link to={"/login"}>
        Get Started
        </Link>
 
      </button>
      </div>
    </div>
  )
}

export default GetStarted;
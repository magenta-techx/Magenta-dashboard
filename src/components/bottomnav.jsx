import React from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import { Link } from "react-router-dom";
import { BsGrid,BsJournalBookmark } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TbCashBanknote } from "react-icons/tb";
import { HiOutlineChartSquareBar } from "react-icons/hi";

const BNav = () => {
    const {active , setActive, showFooter, setShowFooter} = ItemContext()
    const menu = [
        {name:'Dashboard', link: '/', icon: BsGrid, size:"18"},
        {name:'Branch', link: 'branch', icon: HiOutlineChartSquareBar, size:"22"},
        {name:'Transaction', link: 'transaction', icon: BsJournalBookmark, size:"18"},
        {name:'Cash Out', link: 'cashout', icon: TbCashBanknote, size:"22"},
        {name:'Settings', link: '/settings', icon: FiSettings, size:"18"},
    ]
    return(
        <footer className="sm:hidden xs:bg-[#200047]  xs:h-18  xs:w-full xs:flex xs:flex-col fixed bottom-0">
         <ul className="flex relative justify-around">
         {
            menu.map((item, index) => (
             <Link to={item?.link} onClick={() => (setActive(index))}>
             <li key={index}>
                <div className={`${ active === index ? "m-auto flex pt-4 justify-center text-white" : "text-gray-500 pt-6 flex justify-center text-2xl"}`}>{React.createElement(item?.icon, {size: item?.size})}</div>
                <span className={`${ active === index ? "text-white font-normal text-xs " : "text-gray-400 font-normal text-xs opacity-0 text-clip"}`}>{item.name}</span>
             </li>
            </Link>
            ))
        }
         </ul>
        </footer>
    )


}

export default BNav


import { useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import { FaUsers, FaEnvelopeOpenText, FaUserAlt } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoSettingsSharp, IoExitOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { brand_logo } from "../assets";

const SideBar = () => {
  const [arrowDirection, setArrowDirection] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

  const toggleArrow = () => {
    setArrowDirection(!arrowDirection);
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const navLink = `flex items-center w-full  ${arrowDirection ? 'justify-center' : ''}`

  const menuItems = [
    { icon: <AiFillDashboard className="text-xl lg:text-2xl" />, label: "Dashboard" },
    { icon: <FaUsers className="text-xl lg:text-2xl" />, label: "Users" },
    { icon: <FaEnvelopeOpenText className="text-xl lg:text-2xl" />, label: "Messages" },
    { icon: <RiMoneyDollarCircleFill className="text-xl lg:text-2xl" />, label: "Pricing" },
    { icon: <IoSettingsSharp className="text-xl lg:text-2xl" />, label: "Settings" },
    { icon: <IoExitOutline className="text-xl lg:text-2xl" />, label: "Logout" },
  ];

  return (
    <nav className="flex flex-col items-center text-4xl text-slate-700 py-3">
      <ul className="w-full transition-all">
          {arrowDirection ? (
            <li className={`mb-6 flex flex-col gap-6 items-center justify-center px-6`}>
              <img src={brand_logo} alt="SafeTra Logo" />
              <MdOutlineKeyboardDoubleArrowRight
                className="text-slate-700 text-3xl rounded-full cursor-pointer shadow-sm shadow-slate-400"
                onClick={toggleArrow}
              />
            </li>
          ) : (
            <div className="mb-10 flex items-center gap-6 justify-between px-6">
              {!arrowDirection && (
                <span
                  className={`text-base ml-2 transition-opacity duration-500 ${
                    !arrowDirection ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img src={brand_logo} alt="SafeTra Logo" />
                </span>
              )}
              <MdOutlineKeyboardDoubleArrowLeft
                className="text-slate-700 text-3xl rounded-full cursor-pointer shadow-md shadow-slate-400"
                onClick={toggleArrow}
              />
            </div>
          )}
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center ${arrowDirection ? 'justify-center mb-6' : 'mb-8 px-6'} cursor-pointer hover:text-orange-500 transition-transform transform duration-500`}
            onClick={() => handleItemClick(index)}
          >
            <NavLink to={`/user/${item.label}`} className={({isActive}) => isActive ? `text-orange-500 ${navLink}` : `${navLink}`}>
              {item.icon}
              {!arrowDirection && (
                <span className="text-base ml-2">{item.label}</span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const TopBar = () => {
  return (
    <div className="flex flex-row space-x-6 px-16 py-5 text-4xl text-slate-700 justify-end">
      <IoMdNotificationsOutline className="text-xl lg:text-2xl"/>
      <FaUserAlt className="text-xl lg:text-2xl"/>
    </div>
  );
};

export const MiddleContent = () => {
  return (
    <Outlet />
  );
};

const AdminLayout = () => {
  return (
    <div className="h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <div className="row-span-2 border-r border-gray-200">
        <SideBar />
      </div>
      <div className="border-b border-gray-200">
        <TopBar />
      </div>
      <div className="overflow-y-auto">
        <MiddleContent />
      </div>
    </div>
  );
}

export default AdminLayout
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
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [arrowDirection, setArrowDirection] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

  const toggleArrow = () => {
    setArrowDirection(!arrowDirection);
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const menuItems = [
    { icon: <AiFillDashboard />, label: "Transaction" },
    { icon: <FaUsers />, label: "Integration" },
    { icon: <FaEnvelopeOpenText />, label: "Disputes" },
    { icon: <RiMoneyDollarCircleFill />, label: "Payments" },
    { icon: <IoSettingsSharp />, label: "Settings" },
    { icon: <IoExitOutline />, label: "Logout" },
  ];

  return (
    <nav className="flex flex-col items-center text-4xl text-slate-700 py-3 px-6">
      <ul className="w-full">
        <li className="mb-12 flex items-center justify-center">
          {arrowDirection ? (
            <MdOutlineKeyboardDoubleArrowRight
              className="text-slate-700 text-6xl rounded-full cursor-pointer shadow-sm shadow-slate-400"
              onClick={toggleArrow}
            />
          ) : (
            <div className="flex items-center gap-2">
              {!arrowDirection && (
                <span
                  className={`text-base ml-2 transition-opacity duration-500 ${
                    !arrowDirection ? "opacity-100" : "opacity-0"
                  }`}
                >
                  SafeTra
                </span>
              )}
              <MdOutlineKeyboardDoubleArrowLeft
                className="text-slate-700 text-6xl rounded-full cursor-pointer shadow-sm shadow-slate-              400"
                onClick={toggleArrow}
              />
            </div>
          )}
        </li>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`mb-8 flex items-center cursor-pointer hover:text-orange-500 transition-transform transform duration-500 border border-gray-300 rounded-lg p-2`}
            onClick={() => handleItemClick(index)}
          >
            <Link to={`/user/${item.label}`} className="flex items-center">
              {item.icon}
              {!arrowDirection && (
                <span className="text-base ml-2">{item.label}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const TopBar = () => {
  return (
    <div className="flex flex-row space-x-12 px-16 py-8 text-4xl text-slate-700 justify-end">
      <IoMdNotificationsOutline />
      <FaUserAlt />
    </div>
  );
};

export const MiddleContent = () => {
  return (
    <Outlet />
  );
};

const DashboardLayout = () => {
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

export default DashboardLayout

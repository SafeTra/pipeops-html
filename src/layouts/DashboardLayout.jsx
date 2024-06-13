// // import React, { useState } from "react";
// // import {
// //   MdOutlineKeyboardDoubleArrowRight,
// //   MdOutlineKeyboardDoubleArrowLeft,
// // } from "react-icons/md";
// // import { AiFillDashboard } from "react-icons/ai";
// // import { FaUsers, FaEnvelopeOpenText, FaUserAlt } from "react-icons/fa";
// // import { RiMoneyDollarCircleFill } from "react-icons/ri";
// // import { IoSettingsSharp, IoExitOutline } from "react-icons/io5";
// // import { IoMdNotificationsOutline } from "react-icons/io";

// // const SideBar = () => {
// //   const [arrowDirection, setArrowDirection] = useState(true);

// //   const toggleArrow = () => {
// //     setArrowDirection(!arrowDirection);
// //   };

// //   const menuItems = [
// //     { icon: <AiFillDashboard />, label: "Dashboard" },
// //     { icon: <FaUsers />, label: "Users" },
// //     { icon: <FaEnvelopeOpenText />, label: "Messages" },
// //     { icon: <RiMoneyDollarCircleFill />, label: "Finance" },
// //     { icon: <IoSettingsSharp />, label: "Settings" },
// //     { icon: <IoExitOutline />, label: "Logout" },
// //   ];

// //   return (
// //     <nav className="flex flex-col items-center text-4xl text-slate-700 px-6 py-3">
// //       <ul className="w-full">
// //         <li className="mb-12 flex items-center justify-center">
// //           {arrowDirection ? (
// //             <MdOutlineKeyboardDoubleArrowRight
// //               className="text-slate-700 text-6xl rounded-full cursor-pointer shadow-sm shadow-slate-400"
// //               onClick={toggleArrow}
// //             />
// //           ) : (
// //             <div className="flex items-center">
// //               {!arrowDirection && (
// //                 <span className="text-base ml-2">SafeTra</span>
// //               )}
// //               <MdOutlineKeyboardDoubleArrowLeft
// //                 className="text-slate-700 text-6xl rounded-full cursor-pointer shadow-sm shadow-slate-400"
// //                 onClick={toggleArrow}
// //               />
// //             </div>
// //           )}
// //         </li>
// //         {menuItems.map((item, index) => (
// //           <li
// //             key={index}
// //             className="mb-8 flex items-center cursor-pointer hover:text-orange-500 focus:text-orange-500"
// //           >
// //             {item.icon}
// //             {!arrowDirection && (
// //               <span className="text-base ml-2">{item.label}</span>
// //             )}
// //           </li>
// //         ))}
// //       </ul>
// //     </nav>
// //   );
// // };

// // export const TopBar = () => {
// //   return (
// //     <div className="bg-orange-500 flex flex-row space-x-12 px-16 py-8 text-4xl text-slate-700 justify-end">
// //       <IoMdNotificationsOutline />
// //       <FaUserAlt />
// //     </div>
// //   );
// // };

// // export const MiddleContent = () => {
// //   return (
// //     <div className="flex flex-row space-x-12 px-16 py-8 text-4xl text-slate-700">
// //       <IoMdNotificationsOutline />
// //       <FaUserAlt />
// //     </div>
// //   );
// // };

// // export default SideBar;

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import { FaUsers, FaEnvelopeOpenText, FaUserAlt } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoSettingsSharp, IoExitOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

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
    { icon: <AiFillDashboard />, label: "Dashboard" },
    { icon: <FaUsers />, label: "Users" },
    { icon: <FaEnvelopeOpenText />, label: "Messages" },
    { icon: <RiMoneyDollarCircleFill />, label: "Finance" },
    { icon: <IoSettingsSharp />, label: "Settings" },
    { icon: <IoExitOutline />, label: "Logout" },
  ];

  return (
    <nav className="flex flex-col items-center text-4xl text-slate-700  py-3">
      <ul className="w-full">
        <li className="mb-12 flex items-center justify-center">
          {arrowDirection ? (
            <MdOutlineKeyboardDoubleArrowRight
              className="text-slate-700 text-6xl rounded-full cursor-pointer shadow-sm shadow-slate-400"
              onClick={toggleArrow}
            />
          ) : (
            <div className="flex items-center">
              {!arrowDirection && (
                <span className="text-base ml-2">SafeTra</span>
              )}
              <MdOutlineKeyboardDoubleArrowLeft
                className="text-slate-700 text-6xl rounded-full cursor-pointer shadow-sm shadow-slate-400"
                onClick={toggleArrow}
              />
            </div>
          )}
        </li>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`mb-8 flex items-center cursor-pointer hover:text-orange-500 focus:text-orange-500 transition-transform transform duration-500 ${
              activeItem === index ? "bg-gray-300" : ""
            }`}
            onClick={() => handleItemClick(index)}
          >
            <Link to={item.label === 'Dashboard' ? '': item.label} className="w-full" >{item.icon}
            {!arrowDirection && (
              <span className="text-base ml-2">{item.label}</span>
            )}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const TopBar = () => {
  return (
    <div className="bg-orange-500 flex flex-row space-x-12 px-16 py-8 text-4xl text-slate-700 justify-end">
      <IoMdNotificationsOutline />
      <FaUserAlt />
    </div>
  );
};

export const MiddleContent = () => {
  return (
    <>
      <div className="flex flex-row space-x-12 px-16 py-8 text-4xl text-slate-700">
        <IoMdNotificationsOutline />
        <FaUserAlt />
      </div>
      {/* Various Dashboard Pages get render here */}
      <Outlet />
    </>
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

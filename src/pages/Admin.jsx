import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import {
  AiOutlineBarChart,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
  AiOutlineUserDelete,
  AiOutlineUserSwitch,
  AiOutlineLock,
  AiOutlineBell,
} from "react-icons/ai";

const Admin = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedDateTime = now.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    setCurrentDateTime(formattedDateTime);
  }, []);

  const asideItems = [
    { icon: <AiOutlineBarChart />, label: "View Analytics" },
    { icon: <AiOutlineUser />, label: "View All Users" },
    { icon: <AiOutlineUsergroupAdd />, label: "View Active Users" },
    { icon: <AiOutlineUserDelete />, label: "View Inactive Users" },
    { icon: <AiOutlineUserSwitch />, label: "View Suspended Users" },
    { icon: <AiOutlineLock />, label: "Manage Password" },
  ];

  return (
    <div className="w-full h-full space-x-12 px-16 py-8 bg-slate-200">
      <header className="bg-transparent flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard / Admin User</h2>
        <p>{currentDateTime}</p>
      </header>
      <div className="flex gap-8">
        <main className="bg-white p-8">
          <h3 className="text-center"> Admin Details </h3>
          <CgProfile className="text-6xl mx-auto" />
          <p className="font-bold text-center"> Aminu Jasper </p>
          <p className="text-center"> Administrator</p>

          <ul className="space-y-2">
            <li>
              <span className="text-slate-500">Qualification:</span>{" "}
              <span className="font-bold text-black">
                Chief Technical Officer
              </span>
            </li>
            <li>
              <span className="text-slate-500">Permissions:</span>{" "}
              <span className="font-bold text-black">
                Edit, Review, delete, deactivate, freeze
              </span>
            </li>
            <li>
              <span className="text-slate-500">Reference Number:</span>{" "}
              <span className="font-bold text-black">23044455MySt-0023</span>
            </li>
            <li>
              <span className="text-slate-500">Added Date:</span>{" "}
              <span className="font-bold text-black">18/18/2024</span>
            </li>
          </ul>
        </main>

        <aside className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {asideItems.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center gap-2 p-4"
            >
              {item.icon}
              <p>{item.label}</p>
            </div>
          ))}
          <div className="bg-white flex items-center gap-2 p-4 w-full border rounded col-span-1 lg:col-span-2">
            <AiOutlineBell className="text-2xl" />
            <p>Alerts</p>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Admin
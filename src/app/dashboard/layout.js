"use client";
import { useEffect, useState } from "react";
import Sidebar from "../_componant/Sidebar";
import SidebarSmall from "../_componant/SidebarSmall";
import { MdBarChart } from "react-icons/md";
import Navbar from "./componantDashboard/Navbar";
export default function RootLayout({ children }) {
  const [openSidebarSmall, setOpenSidebarSmall] = useState(false);
  useEffect(() => {
    const handleClick = (event) => {
      const clickX = window.innerWidth - event.clientX;
      if (clickX > 310) {
        setOpenSidebarSmall(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [openSidebarSmall]);
  return (
    <div
      className={`flex gap-5 lg:bg-white relative  min-h-screen ${
        openSidebarSmall ? "bg-[#12111166]" : ""
      } `}
    >
      <div className="lg:block hidden">
        <Sidebar />
      </div>
      <div
        className={`${
          openSidebarSmall ? "hidden" : ""
        } absolute top-5 right-5 rotate-[270deg] cursor-pointer text-gray-400`}
        onClick={() => setOpenSidebarSmall((e) => !e)}
      >
        <MdBarChart size={30} />
      </div>
      {openSidebarSmall ? (
        <div className="lg:hidden z-50">
          <SidebarSmall
            setOpenSidebarSmall={setOpenSidebarSmall}
            openSidebarSmall={openSidebarSmall}
          />
        </div>
      ) : (
        ""
      )}
      <div className="w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

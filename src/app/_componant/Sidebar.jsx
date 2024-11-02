"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/images/logo.jpg";
import { usePathname } from "next/navigation";
import MainItem from "./MainItem";
import { FirstSidebar, secondSidebar } from "../_helpers/helpers";
import { FaAngleLeft } from "react-icons/fa6";
export default function Sidebar() {
  const pathname = usePathname();
  const [openSidebarLg, setOpenSidebarLg] = useState(true);
  return (
    <div
      className={` ${
        openSidebarLg ? " w-[310px]" : "w-[110px]"
      } flex flex-col gap-3 ${openSidebarLg ?"p-5":"p-2"} border-l h-screen   relative font-sidebar transition-all duration-150`}
    >
      <div
        className="absolute -left-3 bg-white top-7 cursor-pointer border p-1 rounded-full"
        onClick={() => setOpenSidebarLg((e) => !e)}
      >
        <FaAngleLeft />
      </div>
      <div>
        <Image src={logo} alt="logo" className="w-[60px] mb-3" />
      </div>
      {FirstSidebar.map((item, index) => (
        <div
          className={`flex gap-2 ${
            openSidebarLg ? "flex-row" : "flex-col items-center"
          }  text-gray-500 p-2 cursor-pointer hover:bg-gray-200 rounded-md  ${
            pathname === item.route && "activeSidebar"
          }`}
          key={index}
        >
          {item?.icon}
          <p className={`${!openSidebarLg && "text-[0.7rem]"}`}> {item?.label}</p>
        </div>
      ))}
      {secondSidebar.map((item, index) => (
        <MainItem item={ item } key={ index } openSidebarLg={ openSidebarLg } index={ index} />
      ))}
    </div>
  );
}

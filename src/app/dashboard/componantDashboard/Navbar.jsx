import Image from "next/image";
import React from "react";
import { IoIosSettings } from "react-icons/io";
import avatar from "../../../../public/images/avatar.png";
export default function Navbar() {
  return (
    <div className="flex justify-end gap-3 p-3 items-center ">
      <IoIosSettings size={30} color="#777" className="routate" />
      <Image alt="avatar" src={avatar} className="w-12 h-12 rounded-full  border border-yellow-500" />
    </div>
  );
}

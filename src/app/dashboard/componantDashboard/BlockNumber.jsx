"use client"
import React, { useState } from "react";
import { FaLayerGroup } from "react-icons/fa";
export default function BlockNumber({ title, number, percentage, color }) {
  const [background] = useState(
    color === "green"
      ? "bg-green-700"
      : color === "blue"
      ? "bg-blue-600"
      : color === "orange"
      ? "bg-orange-600"
      : ""
  );
  return (
    <div className="rounded-lg border shadow-md p-5 flex items-center justify-between gap-3 h-fit ">
      <div className="flex flex-col gap-1">
        <div className="w-full  font-bold text-[1.1rem] text-gray-800">
          {title}
        </div>
        <h1 className="font-bold text-[1.71rem]">{number}</h1>
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-gray-500 font-semibold">
            <p>اخر</p>
            <p>7</p>
            <p>ايام</p>
          </div>
          <FaLayerGroup color="#86efac" size={20} />
          <h4 className="text-gray-800 font-bold">+{percentage}%</h4>
        </div>
      </div>
      <div className="flex gap-[2px]  items-end">
        <div className={`w-1 h-5 rounded-t-lg ${background}`}></div>
        <div className={`w-1 h-7 rounded-t-lg ${background}`}></div>
        <div className={`w-1 h-3 rounded-t-lg ${background}`}></div>
        <div className={`w-1 h-5 rounded-t-lg ${background}`}></div>
        <div className={`w-1 h-4 rounded-t-lg ${background}`}></div>
        <div className={`w-1 h-8 rounded-t-lg ${background}`}></div>
        <div className={`w-1 h-9 rounded-t-lg ${background}`}></div>
        <div className={`w-1 h-5 rounded-t-lg ${background}`}></div>
      </div>
    </div>
  );
}

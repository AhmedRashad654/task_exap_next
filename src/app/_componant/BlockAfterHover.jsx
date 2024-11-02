import React from "react";

export default function BlockAfterHover({
  data,
  index,
  hoverCurrent,
  openSidebarLg,
}) {
  return (
    <div
      className={`absolute bg-gray-100 rounded-md px-1 pb-1 w-[200px] ${
        index !== hoverCurrent || openSidebarLg ? "hidden" : ""
      }`}
    >
      <div className="flex flex-col gap-1 mt-2 text-[0.8rem]">
        {data.map((item, index) => (
          <div
            className="flex items-center gap-3 py-1 px-2 hover:bg-gray-200 rounded-md"
            key={index}
          >
            {item.icon}
            <p> {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

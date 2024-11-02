import React from "react";

export default function BlockMenu({ data, openItem, openSidebarLg }) {
  return (
    <div
      className={` flex gap-3 ${
        openItem && openSidebarLg
          ? data.length === 3
            ? "h-32"
            : "h-20"
          : "h-0"
      } overflow-hidden transition-all duration-200 `}
    >
      <div className="w-[2px] h-[70%] bg-gray-200 mr-5"></div>
      <div className="flex flex-col gap-1 mt-2 ">
        {data.map((item, index) => (
          <div
            className="flex items-center gap-3 py-1 px-2 hover:bg-gray-200 rounded-md"
            key={index}
          >
            {item.icon}
            {openSidebarLg && <p> {item.name}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

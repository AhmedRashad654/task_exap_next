import React, { useState } from "react";
import BlockAfterHover from "./BlockAfterHover";
import BlockMenu from "./BlockMenu";
import { motion } from "framer-motion";
export default function MainItem({ item, openSidebarLg, index }) {
  const [openItem, setOpenItem] = useState(false);
  const [hoverCurrent, setHoverCurrent] = useState(null);
  return (
    <motion.div
      className={` text-gray-500  cursor-pointer `}
      onHoverStart={() => setHoverCurrent(index)}
      onHoverEnd={() => setHoverCurrent(null)}
    >
      <div
        className={`flex  relative ${
          openSidebarLg ? "justify-between " : ""
        } items-center p-2 hover:bg-gray-200 rounded-md  ${
          openItem && openSidebarLg ? "activeSidebarMenu":""
        }   `}
        onClick={() => setOpenItem((e) => !e)}
      >
        <div
          className={`flex justify-between ${
            !openSidebarLg && "w-full"
          } gap-2 relative  ${
            openSidebarLg ? "flex-row" : "flex-col items-center"
          }`}
        >
          <div>{item?.iconHead}</div>
          {openSidebarLg ? (
            <p className={`${openItem && openSidebarLg ? "text-black":""}`}>
              {item?.headname}
            </p>
          ) : (
            <p
              className={`${
                openItem && openSidebarLg && "text-black"
              } text-[0.7rem]`}
            >
              {item?.headname.slice(0, 6)}
              {item?.headname?.length > 5 && "..."}
            </p>
          )}
        </div>
        <div className={!openSidebarLg ? "-ml-4 transform translate-x-2":""}>
          {openItem && openSidebarLg ? item.iconHeadOpen : item.iconHeadClose}
        </div>
        <BlockAfterHover
          data={item.insideObject}
          index={index}
          hoverCurrent={hoverCurrent}
          openSidebarLg={openSidebarLg}
        />
      </div>
      <BlockMenu
        data={item.insideObject}
        openItem={openItem}
        openSidebarLg={openSidebarLg}
      />
    </motion.div>
  );
}

import React from "react";
import BlockCircleAndContant from "./BlockCircleAndContant";
import BlockNumber from "./BlockNumber";

export default function GroupBlocks() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] gap-5 p-5">
      <BlockCircleAndContant />
      <BlockNumber title="عدد الموظفين" number="1,500" percentage="2.6" color="green"/>
      <BlockNumber title="عدد الشركات" number="20" percentage="0.2" color="blue"/>
      <BlockNumber title="عدد المهام المنفذة" number="687" percentage="-0.1" color="orange"/>
    </div>
  );
}

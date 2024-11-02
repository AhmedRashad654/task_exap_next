import React from 'react'
import BlockCircle from "./BlockCircle";

export default function BlockCircleAndContant() {
  return (
    <div className="rounded-lg border shadow-md py-5 flex flex-col gap-5">
      <div className="flex flex-col mr-3">
        <h1 className="font-bold">المهام</h1>
        <h4 className="text-gray-500">بحسب الانجاز</h4>
      </div>

      <BlockCircle />
      <div className="flex flex-col gap-1 items-center">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-green-200"></div>
          <p className="text-gray-700">المهام المنفذة</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-green-300"></div>
          <p className="text-gray-700">مهام قيد التنفيذ </p>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          <p className="text-gray-700"> مهام معلقة</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <p className="text-gray-700"> مهام ملغاة</p>
        </div>
      </div>
    </div>
  );
}

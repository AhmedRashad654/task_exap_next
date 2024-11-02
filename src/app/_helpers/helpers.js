import { TbDashboard } from "react-icons/tb";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";

import { IoIosPaper } from "react-icons/io";
import { IoBarChartOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { FaFileImport } from "react-icons/fa6";
import { LuGalleryVertical } from "react-icons/lu";
import { FaUserGroup } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
export const FirstSidebar = [
  {
    label: "لوحة التحكم",
    icon: <TbDashboard size={25} />,
    route: "/dashboard",
  },
  {
    label: " التقويم",
    icon: <BsFillCalendarDateFill size={23} />,
    route: "/date",
  },
];

export const secondSidebar = [
  {
    headname: "الحضور و الانصراف",
    iconHead: <IoIosPaper size={23} />,
    iconHeadClose: <FaAngleRight size={13} />,
    iconHeadOpen: <FaAngleDown size={13} />,
    insideObject: [
      {
        name: "جدول الحضور والانصراف ",
        icon: <IoBarChartOutline size={20} />,
      },
      {
        name: "  تسجيل الحضور",
        icon: <MdMenuBook size={20} />,
      },
    ],
  },
  {
    headname: "المهام",
    iconHead: <FaComputer size={23} />,
    iconHeadClose: <FaAngleRight size={13} />,
    iconHeadOpen: <FaAngleDown size={13} />,
    insideObject: [
      {
        name: "قائمة المهام",
        icon: <IoBarChartOutline size={20} />,
      },
      {
        name: "اضافة مهمة",
        icon: <MdMenuBook size={20} />,
      },
    ],
  },
  {
    headname: "الشركات",
    iconHead: <LuGalleryVertical size={23} />,
    iconHeadClose: <FaAngleRight size={13} />,
    iconHeadOpen: <FaAngleDown size={13} />,
    insideObject: [
      {
        name: "قائمة الشركات",
        icon: <IoBarChartOutline size={20} />,
      },
      {
        name: "اضافة شركة",
        icon: <MdMenuBook size={20} />,
      },
      {
        name: " استيراد ملفات شركات",
        icon: <FaFileImport size={20} />,
      },
    ],
  },
  {
    headname: "الموظفين",
    iconHead: <FaUserGroup size={23} />,
    iconHeadClose: <FaAngleRight size={13} />,
    iconHeadOpen: <FaAngleDown size={13} />,
    insideObject: [
      {
        name: "قائمة الموظفين",
        icon: <IoBarChartOutline size={20} />,
      },
      {
        name: "اضافة موظفين",
        icon: <MdMenuBook size={20} />,
      },
      {
        name: " استيراد ملفات الموظفين",
        icon: <FaFileImport size={20} />,
      },
    ],
  },
  {
    headname: "ألمشاريع",
    iconHead: <AiOutlineFundProjectionScreen size={23} />,
    iconHeadClose: <FaAngleRight size={13} />,
    iconHeadOpen: <FaAngleDown size={13} />,
    insideObject: [
      {
        name: "قائمة ألمشاريع",
        icon: <IoBarChartOutline size={20} />,
      },
      {
        name: "اضافة مشروع",
        icon: <MdMenuBook size={20} />,
      },
    ],
  },
];
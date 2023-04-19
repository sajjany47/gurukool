import React from "react";
import { AiFillDashboard, AiOutlineNotification } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { RiLiveLine } from "react-icons/ri";
import { MdAddTask, MdOutlineMiscellaneousServices } from "react-icons/md";

export const SidebarData = [
  {
    path: "/",
    title: "Dashboard",
    icon: <AiFillDashboard />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: "Our Aim",
    //     path: "/about-us/aim",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    //   {
    //     title: "Our Vision",
    //     path: "/about-us/vision",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    // ],
  },
  {
    path: "/schedule",
    title: "Schedule",
    icon: <SiGoogleclassroom />,
    url: "/schedule",
  },
  {
    path: "/analytics",
    title: "Live Class",
    icon: <RiLiveLine />,
  },
  {
    path: "/comment",
    title: "Task Assign",
    icon: <MdAddTask />,
  },
  {
    path: "/product",
    title: "Service",
    icon: <MdOutlineMiscellaneousServices />,
  },
  {
    path: "/productList",
    title: "Notice",
    icon: <AiOutlineNotification />,
  },
  {
    path: "/productList",
    title: "Profile",
    icon: <i className="pi pi-user" />,
  },
];

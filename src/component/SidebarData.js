import React from "react";
import { AiFillDashboard, AiOutlineNotification } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { RiLiveLine } from "react-icons/ri";
import { MdAddTask, MdOutlineMiscellaneousServices } from "react-icons/md";

const SidebarData = {
  teacher: [
    {
      path: "/",
      title: "Dashboard",
      icon: <AiFillDashboard />,
    },
    {
      path: "/shedule",
      title: "Schedule",
      icon: <SiGoogleclassroom />,
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
  ],
};

export default SidebarData;

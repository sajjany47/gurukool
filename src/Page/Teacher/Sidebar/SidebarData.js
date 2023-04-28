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

export const teacherSidebar = [
  {
    path: "",
    title: "Home",
    icon: <SiGoogleclassroom />,
  },
  {
    path: "",
    title: "Classrooms",
    icon: <RiLiveLine />,
  },
  {
    path: "",
    title: "Students",
    icon: <MdAddTask />,
  },
  {
    path: "",
    title: "Assignments",
    icon: <MdOutlineMiscellaneousServices />,
  },
  {
    path: "",
    title: "Gradebook",
    icon: <AiOutlineNotification />,
  },
  {
    path: "",
    title: "Attendance",
    icon: <i className="pi pi-user" />,
  },
  {
    path: "",
    title: "Messaging",
    icon: <MdAddTask />,
  },
  {
    path: "",
    title: "Calendar",
    icon: <MdOutlineMiscellaneousServices />,
  },
  {
    path: "",
    title: "Settings",
    icon: <AiOutlineNotification />,
  },
  {
    path: "",
    title: "Help/Support",
    icon: <i className="pi pi-user" />,
  },
];

export const studentSidebar = [
  {
    path: "",
    title: "Home",
    icon: <SiGoogleclassroom />,
  },
  {
    path: "",
    title: "Profile",
    icon: <RiLiveLine />,
  },
  {
    path: "",
    title: "Classes/Courses",
    icon: <MdAddTask />,
  },
  {
    path: "",
    title: "Assignments",
    icon: <MdOutlineMiscellaneousServices />,
  },
  {
    path: "",
    title: "Performance",
    icon: <AiOutlineNotification />,
  },
  {
    path: "",
    title: "Notifications",
    icon: <i className="pi pi-user" />,
  },
  {
    path: "",
    title: "Resources",
    icon: <MdAddTask />,
  },
  {
    path: "",
    title: "Settings",
    icon: <MdOutlineMiscellaneousServices />,
  },

  {
    path: "",
    title: "Support",
    icon: <i className="pi pi-user" />,
  },
];

export const staffSidebar = [
  {
    path: "",
    title: "Home",
    icon: <SiGoogleclassroom />,
  },
  {
    path: "",
    title: "Registration",
    icon: <RiLiveLine />,
  },
  {
    path: "",
    title: "Budget summary",
    icon: <MdAddTask />,
  },
  {
    path: "",
    title: "Cash flow statement",
    icon: <MdOutlineMiscellaneousServices />,
  },
  {
    path: "",
    title: "Expense tracker",
    icon: <AiOutlineNotification />,
  },
  {
    path: "",
    title: "Payroll information",
    icon: <i className="pi pi-user" />,
  },
  {
    path: "",
    title: "Accounts payable and receivable",
    icon: <MdAddTask />,
  },
  {
    path: "",
    title: "Financial reports",
    icon: <MdOutlineMiscellaneousServices />,
  },
  {
    path: "",
    title: "Fundraising tracker",
    icon: <AiOutlineNotification />,
  },
  {
    path: "",
    title: "Profile",
    icon: <AiOutlineNotification />,
  },
  {
    path: "",
    title: "Support",
    icon: <i className="pi pi-user" />,
  },
];

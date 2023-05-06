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
      path: "/taskassign",
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

  teacherSidebar: [
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
  ],

  studentSidebar: [
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
  ],

  staffSidebar: [
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
  ],
};

export default SidebarData;

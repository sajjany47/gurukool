import React from "react";
import { useProSidebar, Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import SidebarData from "../component/SidebarData";
import * as FaIcons from "react-icons/fa";
import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";
import { Image } from "primereact/image";

const SideNav = () => {
  const { collapseSidebar, isCollapsed } = useProSidebar();
  const [isExpanded, setIsExpanded] = React.useState(true);
  function handleToggle() {
    if (isCollapsed) {
      collapseSidebar(false);
      setIsExpanded(true);
    } else {
      collapseSidebar(true);
      setIsExpanded(false);
    }
  }

  const startContent = (
    <React.Fragment>
      <Image
        src="https://gurukoolmamc.in/home/images/title.png"
        alt="Image"
        width="150"
      />
    </React.Fragment>
  );

  const endContent = (
    <React.Fragment>
      <Avatar
        icon="pi pi-user"
        className="mr-2"
        size="large"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
        shape="circle"
      />
    </React.Fragment>
  );

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar
        style={{ height: "100vh" }}
        defaultCollapsed={true}
        collapsed={!isExpanded}
      >
        <Menu className="sidebar">
          <MenuItem>
            <FaIcons.FaBars
              onClick={() => {
                collapseSidebar();
              }}
            />
          </MenuItem>
          {SidebarData.teacher.map((item) => {
            return (
              <>
                <MenuItem icon={item.icon} component={<Link to={item.path} />}>
                  {item.title}
                </MenuItem>
              </>
            );
          })}
        </Menu>
      </Sidebar>
      <main className="w-full">
        <div className="card">
          <Toolbar
            start={startContent}
            end={endContent}
            style={{ backgroundColor: "#e9eefb" }}
          />
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default SideNav;

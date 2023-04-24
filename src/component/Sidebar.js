import React from "react";
import { useProSidebar, Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import SidebarData from "../component/SidebarData";
import * as FaIcons from "react-icons/fa";
import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";

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

  const startContent = <React.Fragment></React.Fragment>;

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
          <MenuItem style={{ marginLeft: "17px" }} className="sidebarMenu">
            <FaIcons.FaBars
              onClick={() => {
                collapseSidebar();
              }}
            />
          </MenuItem>
          {SidebarData.teacher.map((item) => {
            return (
              <>
                <MenuItem
                  icon={item.icon}
                  component={<Link to={item.path} />}
                  style={{ marginLeft: "13px" }}
                  className="sidebarMenu"
                >
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
            style={{ background: "rgb(7, 105, 185)" }}
          />
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default SideNav;

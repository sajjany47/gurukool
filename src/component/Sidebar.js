import React, { useRef } from "react";
import { useProSidebar, Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import SidebarData from "../component/SidebarData";
import * as FaIcons from "react-icons/fa";
import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";
import { SlideMenu } from "primereact/slidemenu";
import { Button } from "primereact/button";

const SideNav = () => {
  const { collapseSidebar, isCollapsed } = useProSidebar();
  const [isExpanded, setIsExpanded] = React.useState(true);
  const menu = useRef(null);

  // function handleToggle() {
  //   if (isCollapsed) {
  //     collapseSidebar(false);
  //     setIsExpanded(true);
  //   } else {
  //     collapseSidebar(true);
  //     setIsExpanded(false);
  //   }
  // }

  const items = [
    {
      label: "Profile",
      icon: "pi pi-fw pi-power-off",
    },
    {
      label: "Notification",
      icon: "pi pi-fw pi-power-off",
    },
    {
      label: "Logout",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  const startContent = <React.Fragment></React.Fragment>;

  const endContent = (
    <React.Fragment>
      <SlideMenu
        ref={menu}
        model={items}
        popup
        viewportHeight={150}
        menuWidth={150}
      ></SlideMenu>
      <Avatar
        icon="pi pi-user"
        className="mr-2"
        size="large"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
        shape="circle"
        onClick={(event) => menu.current.toggle(event)}
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
        <Menu
          className="sidebar"
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  fontSize: "20px",
                  marginTop: "25px",
                  "&:hover": {
                    backgroundColor: "#335B8C !important",
                    color: "white !important",
                    borderRadius: "8px !important",
                    fontWeight: "bold !important",
                  },
                };
            },
          }}
        >
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

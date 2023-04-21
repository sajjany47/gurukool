import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import { Link, Outlet } from "react-router-dom";

const SideNav = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Menu>
          <MenuItem component={<Link to="/" />}> Home </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/shedule" />}>Schedule</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SideNav;

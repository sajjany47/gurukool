import React from "react";
import { useProSidebar, Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import SidebarData from "../component/SidebarData";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";

const SideNav = () => {
  const { toggleSidebar } = useProSidebar();
  const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar breakPoint="always">
        <Menu className="sidebar">
          <MenuItem>
            <h1
              style={{
                marginTop: "60px",
                color: "green",
                fontSize: "40px",
              }}
            >
              GuruKool
            </h1>
          </MenuItem>
          {SidebarData.teacher.map((item) => {
            return (
              <>
                <MenuItem
                  icon={item.icon}
                  component={<Link to={item.path} />}
                  style={{ marginTop: "10px", color: "white" }}
                  className="sideItem"
                >
                  {item.title}
                </MenuItem>
              </>
            );
          })}
        </Menu>
      </Sidebar>
      <main className="w-full">
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={() => toggleSidebar()} />
          </NavIcon>
        </Nav>
        <Outlet />
      </main>
    </div>
  );
};

export default SideNav;

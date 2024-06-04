import React, { useState } from "react";
import manImg from "../../assets/manImg.svg";
import logo from "../../assets/logo.svg";
import hamburgerImg from "../../assets/hamburgerImg.svg";
import logOutImg from "../../assets/logOut.svg";
import homeImg from "../../assets/home.svg";
import create from "../../assets/create.svg";
import manage from "../../assets/manage.svg";

import "./admin.scss";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  let [openSidebar, setSidebar] = useState(true);
  function handleCloseAdmin() {
    localStorage.clear();
  }
  return (
    <div className="dashboard">
      <div className={openSidebar ? "sidebar" : "sidebar short__sidebar"}>
        <div style={{gap:"50px"}} className="sidebar__logo">
          <img width={25} src={logo} alt="" />
          <h1>Dashboard</h1>
        </div>
        <div className="sidebar__items">
          <NavLink to={"createProduct"} className="sidebar__products">
            <img width={25} src={create} alt="" />
            <h3>Create products</h3>
          </NavLink>
          <NavLink to={"manageProduct"} className="sidebar__products">
            <img width={25} src={manage} alt="" />
            <h3>Manage products</h3>
          </NavLink>
        </div>

        <div className="sidebar__btns">
          <NavLink onClick={handleCloseAdmin} to={"/"} className="log__out">
            <img width={25} src={logOutImg} alt="" />
            {openSidebar ? <h3>Log Out</h3> : <></>}
          </NavLink>
          <NavLink to={"/"} className="log__out">
            <img width={25} src={homeImg} alt="" />
            <h3>Home</h3>
          </NavLink>
        </div>
      </div>
      <div
        className={
          openSidebar ? "admin__main" : "admin__main long__admin__main"
        }
      >
        <div className="admin__header">
          <img
            width={30}
            onClick={() => setSidebar(!openSidebar)}
            src={hamburgerImg}
            alt=""
          />
          <div className="profile">
            <h3>Your Profile</h3>
            <img width={25} src={manImg} alt="" />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;

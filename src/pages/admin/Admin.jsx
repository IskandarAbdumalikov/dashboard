import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import productsImg from "../../assets/products.svg";
import postsImg from "../../assets/posts.svg";
import manImg from "../../assets/manImg.svg";
import usersImg from "../../assets/users.svg";
import hamburgerImg from "../../assets/hamburger.svg";
import contactsImg from "../../assets/contacts.svg";
import articlesImg from "../../assets/articles.svg";
import logOutImg from "../../assets/logOut.svg";
import agentsImg from "../../assets/agents.svg";
import homeImg from "../../assets/home.svg";

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
        <div className="sidebar__logo">
          <img src={logo} alt="" />
          <h1>Dashboard</h1>
        </div>
        <div className="sidebar__items">
          <NavLink to={"products"} className="sidebar__products">
            <img src={productsImg} alt="" />
            <h3>Products</h3>
          </NavLink>
          <NavLink to={"users"} className="sidebar__products">
            <img src={usersImg} alt="" />
            <h3>Users</h3>
          </NavLink>
          <NavLink to={"posts"} className="sidebar__products">
            <img src={postsImg} alt="" />
            <h3>Posts</h3>
          </NavLink>
          <NavLink to={"contacts"} className="sidebar__products">
            <img src={contactsImg} alt="" />
            <h3>Contacts</h3>
          </NavLink>
          <NavLink to={"agents"} className="sidebar__products">
            <img src={agentsImg} alt="" />
            <h3>Agents</h3>
          </NavLink>
          <NavLink to={"articles"} className="sidebar__products">
            <img src={articlesImg} alt="" />
            <h3>Articles</h3>
          </NavLink>
        </div>

        <div className="sidebar__btns">
          <NavLink onClick={handleCloseAdmin} to={"/"} className="log__out">
            <img src={logOutImg} alt="" />
            <h3>LogOut</h3>
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
            <h3>Jones Ferdinand</h3>
            <img src={manImg} alt="" />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;

import React from "react";
import {Link, useLocation } from "react-router-dom";
import './Sidebar.css'


const Sidebar = () => {
  const {pathname} = useLocation();
  return (
    <div
      style={{ width: "200px", height: "100vh", backgroundColor: "#fff" }}
      className='px-2 py-4 d-flex flex-column gap-3'>
      <Link
        to="/dashboard"
        className= {pathname === "/dashboard" ? "active-sidebar-link" : ""}
        style={{ color: "#000", fontSize:'15px' }}
      >
        Dashboard
      </Link>
      <Link to="users" style={{ color: "#000", fontSize:'15px' }}
        className={pathname === "/dashboard/users" ? "active-sidebar-link" : ""}>
        Users
      </Link>
      <Link to="messages" style={{ color: "#000", fontSize:'15px' }}
        className={pathname === "/dashboard/messages" ? "active-sidebar-link" : ""}>
        Messages
      </Link>
    </div>
  );
};

export default Sidebar;

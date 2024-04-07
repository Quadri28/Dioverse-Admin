import React,{useState} from "react";
import {Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Nav from "../Components/Nav";
import './Admin.css'

const Admin = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div style={{ height: "100vh" }}>
      <Nav showNavbar={showNavbar} setShowNavbar={setShowNavbar}/>
      <div className="d-flex position-relative">
     <div className={showNavbar ? 'show-sidebar': 'hide-sidebar'}>
      <Sidebar showNavbar={showNavbar}/>
      </div>
        <div
          className="w-100 justify-content-center py-4 px-3"
          style={{ backgroundColor: "#f4f5f7" }}
        >
            <h3 className="text-center">Welcome Admin</h3>
          {<Outlet />}
        </div>
      </div>
    </div>
  );
};

export default Admin;

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = ({showNavbar, setShowNavbar}) => {
    const details = JSON.parse(localStorage.getItem('login-details'))
    const navigate =useNavigate()
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
  
    return (
     <nav style={{backgroundColor:'#fff'}}>
      <div className="d-flex justify-content-between align-items-center px-2 py-4 w-100" 
      >
        <Link to='/' style={{color:'#0452C8', fontWeight:'700', fontSize:'25px'}}>DioVaze</Link>
        <div className='d-flex gap-3 align-items-center'>
        {
           details?.data?.user?.is_confirmed === '1'? <span style={{cursor:'pointer',}}  className="btn btn-danger"
          onClick={()=> {
            navigate('/')
            localStorage.removeItem('login-details')}}>
            Logout</span>: <Link to='/login' className="btn btn-success">Login</Link>
        }
        <div className="menu-icon text-white d-sm-none" onClick={handleShowNavbar}>
          {!showNavbar ? <FaBars /> : <FaTimes />}
        </div>
        </div>
      </div>
      
     </nav>
      )
}

export default Nav

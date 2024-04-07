
import React from "react";
import { Link, useNavigate } from "react-router-dom";


const NavBar = () => {
  const details = JSON.parse(localStorage.getItem('login-details'))
    const navigate =useNavigate()
    
  
    return (
     <nav style={{backgroundColor:'#0452C8'}}>
      <div className="d-flex justify-content-between align-items-center px-2 py-4 w-100 container" 
      >
        <Link to='/' style={{color:'#fff'}}>Deoverse</Link>
        {
           details?.data?.user?.is_confirmed === '1'? <span style={{cursor:'pointer',}}  className="btn btn-danger"
          onClick={()=> {
            navigate('/')
            localStorage.removeItem('login-details')}}>
            Logout</span>: <Link to='/login' className="btn btn-success">Login</Link>
        }
      </div>
      
     </nav>
      )
}
export default NavBar;
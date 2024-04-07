import React from 'react'
import NavBar from '../Components/NavBar'
import dashboard from  '../assets/diovaze.jpg'
const Home = () => {
  return (
    <div>
        <NavBar />
        <div className='container mx-auto'>
            <h2 className='text-center my-3'>Diovaze Technology</h2>
            <img src={dashboard} alt="" className='img-fluid'/>
        </div>
        <span className='d-flex justify-content-center mt-3'>
            © {new Date().getFullYear()} Deovaze Technologies.
            </span>
    </div>
  )
}

export default Home

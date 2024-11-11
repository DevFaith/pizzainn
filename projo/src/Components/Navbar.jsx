import React from 'react'
import Logo from '../assets/logo.jpg'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <img src={Logo} alt="" />
        </div>
        <div className='right'>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contacts'>Contacts</Link>
        </div>
    </div>
  )
}

export default Navbar
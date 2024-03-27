import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/images/logo.svg'
import '../assets/styles/Navbar.css'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <nav>
            <img src={logo} alt='Logo' />
            <ul className={showNav ? 'show' : ''}>
                <li>
                    <a className='active' href='/company'>Company</a>
                </li>
                <li>
                    <a href='/services'>Services</a>
                </li>
                <li>
                    <a href='/business-models'>Business models</a>
                </li>
                <li>
                    <a href='/blogs'>Blogs</a>
                </li>
                <li>
                    <a href='/contact-us'>Contact Us</a>
                </li>
            </ul>
            <div className="menu-icon" onClick={() => setShowNav(prev => !prev)}>
                <FaBars />
            </div>
        </nav>
    )
}

export default Navbar
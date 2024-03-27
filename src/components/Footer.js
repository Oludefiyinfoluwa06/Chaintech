import React from 'react'
import logo from '../assets/images/logo.svg'
import '../assets/styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Logo" />
            <hr style={{ width: '100%', backgroundColor: '#5E5E5E' }} />
            <p>&copy; 2024 All Rights Reserved -  Chaintech Network</p>
        </footer>
    )
}

export default Footer
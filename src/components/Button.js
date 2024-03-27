import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import '../assets/styles/Button.css'

const Button = ({ title, bg }) => {
    return (
        <div className='btn'>
            <p>{title}</p>
            <div className='btn-icon' style={{ background: bg }}>
                <FaArrowRight />
            </div>
        </div>
    )
}

export default Button
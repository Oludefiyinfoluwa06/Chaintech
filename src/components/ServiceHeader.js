import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import '../assets/styles/ServiceHeader.css'

const ServiceHeader = () => {
    return (
        <div className='service-header'>
            <div className='header-text'>
                <h2>Services We Offer</h2>
                <p>Discover the digital possibilities of your brand with our comprehensive suite of services.</p>
            </div>
            <div className='header-icons'>
                <div className='arrow-icon'>
                    <FaArrowLeft />
                </div>
                <div className='arrow-icon'>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    )
}

export default ServiceHeader
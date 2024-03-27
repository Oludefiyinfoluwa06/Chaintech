import React from 'react'
import logo2 from '../assets/images/logo2.svg'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import Button from './Button'
import '../assets/styles/ServiceBoxes.css'

const ServiceBoxes = () => {
    const services = [
        {
            id: 1,
            title: 'Blockchain Development',
            img: image1
        },
        {
            id: 2,
            title: 'Blockchain Development',
            img: image2
        },
        {
            id: 3,
            title: 'Security AAS',
            img: image3
        },
        {
            id: 4,
            title: 'Motion Graphic',
            img: image4
        },
        {
            id: 5,
            title: 'Blockchain Development',
            img: image1
        },
        {
            id: 6,
            title: 'Blockchain Development',
            img: image2
        },
        {
            id: 7,
            title: 'Security AAS',
            img: image3
        },
        {
            id: 8,
            title: 'Motion Graphic',
            img: image4
        },
    ]

    return (
        <div className='s-container'>
            {services.map(service => (
                <div className='s-box'>
                    <div className="s-header">
                        <img src={logo2} alt="Logo" />
                        <p>Join the development</p>
                    </div>
                    <div className="s-content">
                        <p>{service.title}</p>
                        <img src={service.img} alt={service.title} />
                    </div>
                    <div className="s-footer">
                        <div className="button">
                            <Button title='Explore' bg='linear-gradient(to right, #FFFF00, #00FFA7)' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServiceBoxes
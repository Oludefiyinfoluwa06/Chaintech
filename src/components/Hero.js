import React from 'react'
import Button from './Button'
import '../assets/styles/Hero.css'

const Hero = () => {
    return (
        <div className='hero-text'>
            <h1>Welcome <br /> to <span>Chaintech</span></h1>
            <p>From square one to engineering excellence! PixelPlex assists in full-cycle software development, jumps in to take it over, or brings dedicated top-demanded skills.</p>
            <Button title='Get started' bg='black' />
        </div>
    )
}

export default Hero
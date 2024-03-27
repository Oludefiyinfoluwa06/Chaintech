import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceHeader from './components/ServiceHeader'
import ServiceBoxes from './components/ServiceBoxes'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
      <div className="header">
        <Navbar />
        <Hero />
      </div>
      <div className="services">
        <ServiceHeader />
        <ServiceBoxes />
      </div>
      <Footer />
    </div>
  )
}

export default App
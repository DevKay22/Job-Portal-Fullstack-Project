import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Analytics from './components/Analytics'
// import Header from './components/Header'

const LandingPage = () => {
  return (
    <div className='min-h-screen mb-[100vh]'>
        
        <Header />
        <Hero />
        <Feature />
        <Analytics />
    </div>
  )
}

export default LandingPage
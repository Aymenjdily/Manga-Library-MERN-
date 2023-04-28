import React from 'react'
import { About, Header, Navbar, NewArrivals, Services } from '../components'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Services />
        <About />
        {/* <NewArrivals /> */}
    </div>
  )
}

export default LandingPage
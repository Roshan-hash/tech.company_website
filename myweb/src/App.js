import React from 'react'
import Choose from './Components/Choose/Choose'
import Contact from './Components/Contact/Contact'
import Features from './Components/Features/Features'
import Intro from './Components/Intro/Intro'
import Navbar from './Components/Navbar/Navbar'
import OurTeams from './Components/OurTeams/OurTeams'
import Pricecard from './Components/Pricecard/Pricecard'
import Productlist from './Components/Productlist/Productlist'
import Services from './Components/Services/Services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Features/>
      <Services/>
      <Productlist/>
      <OurTeams/>
      <Choose/>
      <Pricecard/>
      <Contact/>
    </div>
  )
}

export default App

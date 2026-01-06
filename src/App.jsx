import { useState } from 'react'

import Shipment_Filtter from './component/homepage/ShipmentFiltter/Shipment_Filtter'
import Services from './component/homepage/Services/Services'
import AiPowerServices from './component/homepage/Services/AiPowerServices'
import AnsnQuestions from './component/homepage/AnsnQuestions/AnsnQuestions'
import Contact from './component/homepage/contact/Contact'
import NavbarWithHero from './component/reusable/NavbarWithHero'
import Footer from './component/homepage/footer/Footer'
import DashboardHome from './component/dashboard/DashboardHome'
import Login from './component/auth/login/Login'

function App() {
  const  image = 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1170&auto=format&fit=crop';
     const   heroTitle = 'Ocean Freight Shipping';
      const  heroSubtitle = 'Reliable, efficient sea transport solutions for your cargo';
  return (
<div>
{/* <NavbarWithHero image={image} title={heroTitle} subtitle={heroSubtitle} />
    <Shipment_Filtter />
    <Services />
    <AiPowerServices />
    <AnsnQuestions />
    <Contact />
    <Footer /> */}
    {/* <DashboardHome /> */}
    <Login />
</div>
  )
}

export default App
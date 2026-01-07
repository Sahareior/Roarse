import { useState } from "react";

import Shipment_Filtter from "./component/homepage/ShipmentFiltter/Shipment_Filtter";
import Services from "./component/homepage/Services/Services";
import AiPowerServices from "./component/homepage/Services/AiPowerServices";
import AnsnQuestions from "./component/homepage/AnsnQuestions/AnsnQuestions";
import Contact from "./component/homepage/contact/Contact";
import NavbarWithHero from "./component/reusable/NavbarWithHero";
import Footer from "./component/homepage/footer/Footer";
import DashboardHome from "./component/dashboard/DashboardHome";
import { IMAGES } from "./assets";
import Testimonials from "./component/homepage/testimonial/Testimonials";

function App() {
  const image = IMAGES.banner;
  const heroTitle = "AI Powered Global Freight Simple Solution";
  const heroSubtitle = "Connect shippers and carriers across the world";
  return (
    <div>
      <NavbarWithHero image={image} title={heroTitle} subtitle={heroSubtitle} />
      <Shipment_Filtter />
      <Services />
      <AiPowerServices />
      <Testimonials />
      <AnsnQuestions />
      <Contact />
      <Footer />
      {/* <DashboardHome /> */}
    </div>
  );
}

export default App;

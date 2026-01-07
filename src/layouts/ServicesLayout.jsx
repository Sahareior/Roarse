import SpecifiicHero from "../component/homepage/HomepageReusableComponent/SpecifiicHero";
import Features from "../component/homepage/HomepageReusableComponent/Features";
import HowItsWork from "../component/homepage/HomepageReusableComponent/HowItsWork";
import WhyDriversLoveRoarse from "../component/homepage/HomepageReusableComponent/WhyDriversLoveRoarse";
import Footer from "../component/homepage/footer/Footer";
import NavbarWithHero from "../component/reusable/NavbarWithHero";
import { useLocation } from "react-router-dom";
import { IoNotificationsOutline, IoSearch } from "react-icons/io5";
import { TbRoute } from "react-icons/tb";
import { BsBox2, BsCurrencyDollar, BsGraphUp } from "react-icons/bs";
import { LuWaves } from "react-icons/lu";
import { PiGasCan } from "react-icons/pi";
import { FaShip } from "react-icons/fa";

const ServicesLayout = () => {
  const location = useLocation();

  // Default values
  let title = "Our Services";
  let subTitle =
    "Comprehensive logistics solutions for all your shipping needs";
  let featrureData = [];
  let featureTitle;
  let featureDes;

  // Set content based on route
  if (location.pathname === "/carrier") {
    title = "Drive More, Earn More";
    subTitle =
      "Find profitable loads, reduce empty miles, and grow your business with AI-powered load matching and route optimization. Join 50,000+ drivers earning more with Roarse.";
    featureTitle = "Core Features For Professional Shippers";
    featureDes = "Everything you need to run a successful trucking business";
    featrureData = [
      {
        icon: <IoSearch />,
        title: "Smart Load Discovery",
        desc: "Find profitable loads that match your truck type, location, and preferred routes using ",
      },
      {
        icon: <TbRoute />,
        title: "Route Optimization",
        desc: "Maximize earnings and minimize empty miles with intelligent route planning. ",
      },
      {
        icon: <BsCurrencyDollar />,
        title: "Instant Payments",
        desc: "Get paid faster with our quick-pay options. Choose same-day, next-day, or standard payment terms with transparent fee structures.",
      },
      {
        icon: <PiGasCan />,
        title: "Fuel Cost Tracker",
        desc: "Monitor fuel expenses and optimize routes for better fuel efficiency. Access real-time fuel price comparisons along your route.",
      },
      {
        icon: <LuWaves />,
        title: "Load Insurance & Safety",
        desc: "All loads come with comprehensive cargo insurance. Verified shippers only, with rating system to ensure quality partnerships.",
      },
      {
        icon: <IoNotificationsOutline />,
        title: "Real-Time Alerts",
        desc: "Never miss an opportunity with instant notifications for new loads, rate changes, and booking confirmations on your preferred routes.",
      },
    ];
  } else if (location.pathname === "/shipper") {
    featureTitle = "Core Features Built for Shippers";
    featureDes =
      "Everything you need to manage your freight operations efficiently";
    title = "Ship Smarter, Save More";
    subTitle =
      "Connect with verified carriers instantly, track shipments in real-time, and reduce freight costs with AI-powered logistics management. Everything you need to streamline your shipping operations.";

    featrureData = [
      {
        icon: <IoSearch />,
        title: "AI- Powered Carrier Matching",
        desc: "Instantly find verified carriers that match your shipment requirements using our intelligent matching algorithm. ",
      },
      {
        icon: <BsBox2 />,
        title: "Competitive Rate Marketplace",
        desc: "Compare real-time quotes from multiple carriers and choose the best rate for your budget. ",
      },
      {
        icon: <FaShip size={20} />,
        title: "Real Time Shipment Tracking",
        desc: "Monitor your cargos location 24/7 with live GPS tracking. Get automated updates at every milestone.",
      },
      {
        icon: <BsGraphUp />,
        title: "Analytics & Reporting",
        desc: "Access comprehensive dashboards with shipment history, cost analysis, carrier performance metrics.",
      },
      {
        icon: <LuWaves />,
        title: "Digital Documentation",
        desc: "Manage all shipping documents digitally including BOLs, PODs, invoices, and customs paperwork. ",
      },
      {
        icon: <IoNotificationsOutline />,
        title: "Smart Notification",
        desc: "Receive instant alerts for shipment status changes, delays, delivery confirmations, and new carrier matches via email, SMS, or in-app.",
      },
    ];
  }
  // You can add more else if conditions for other routes

  return (
    <div>
      <NavbarWithHero subtitle={subTitle} title={title} />
      <SpecifiicHero />
      <Features
        featureData={featrureData}
        title={featureTitle}
        subTitle={featureDes}
      />
      <HowItsWork />
      <WhyDriversLoveRoarse />
      <Footer />
    </div>
  );
};

export default ServicesLayout;

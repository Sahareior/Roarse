import Header from "../../reusable/Header";
import { IMAGES } from "../../../assets";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    path: "/truck",
    title: "Road Transport",
    description:
      "Efficient and reliable road transport solutions for your shipments. Our platform connects shippers with trusted carriers, ensuring timely deliveries across vast road networks.",
    image: IMAGES.semiTruck,
    icon: "FiTruck",
    reverse: false,
  },
  {
    path: "/ship",
    title: "Sea Transport",
    description:
      "Seamless sea transport solutions for global shipping needs. Our platform ensures safe and timely deliveries via trusted carriers across oceans and ports.",
    image: IMAGES.containerShip,
    icon: "GiCargoShip",
    reverse: true,
  },
  {
    path: "/air",
    title: "Air Transport",
    description:
      "Fast and efficient air transport for your time-sensitive shipments. Our platform connects shippers with reliable carriers, ensuring quick and secure deliveries worldwide.",
    image: IMAGES.airplaneFlying,
    icon: "GiCommercialAirplane",
    reverse: false,
  },
];

const Services = () => {
  return (
    <div className="py-10 md:py-16 lg:py-20 bg-white">
      {/* Header Section */}
      <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <Header
          title="Our Services"
          subTitle="Complete freight solutions across all major transport modes"
        />
      </div>

      {/* Services List */}
      <div className="space-y-12 md:space-y-16 lg:space-y-20">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.path} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;

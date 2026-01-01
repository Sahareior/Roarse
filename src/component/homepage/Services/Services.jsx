import { FiTruck } from "react-icons/fi";
import { GiCargoShip, GiAirplane } from "react-icons/gi";
import Header from '../../reusable/Header';
import { Link } from "react-router-dom";

// Define service data separately for better maintainability
const servicesData = [
  {
    path: '/truck',
    title: 'Road Transport',
    description: 'Efficient and reliable road transport solutions for your shipments. Our platform connects shippers with trusted carriers, ensuring timely deliveries across vast road networks.',
    image: 'https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=1089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: FiTruck,
    reverse: false
  },
  {
    path: '/ship',
    title: 'Sea Transport',
    description: 'Seamless sea transport solutions for global shipping needs. Our platform ensures safe and timely deliveries via trusted carriers across oceans and ports.',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1170&auto=format&fit=crop',
    icon: GiCargoShip,
    reverse: true
  },
  {
    path: '/air',
    title: 'Air Transport',
    description: 'Fast and efficient air transport for your time-sensitive shipments. Our platform connects shippers with reliable carriers, ensuring quick and secure deliveries worldwide.',
    image: 'https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?q=80&w=1122&auto=format&fit=crop',
    icon: GiAirplane,
    reverse: false
  }
];

// Optimized ServiceCard with lazy loading and accessibility
const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <div 
      className={`flex justify-between ${service.reverse ? 'flex-row-reverse' : ''} items-center gap-6 py-12 px-8 md:px-12`}
      data-aos={service.reverse ? "fade-left" : "fade-right"}
      data-aos-delay={index * 100}
    >
      {/* Optimized Image with lazy loading */}
      <div className="h-[50vh] w-[50vw] relative overflow-hidden rounded-xl group">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={service.image} 
          alt={`${service.title} service`}
          loading={index === 0 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content Section */}
      <div className="flex gap-6 flex-col max-w-[45%]">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-[#121212] text-white transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
            <Icon size={24} />
          </div>
          <Link 
            to={service.path} 
            className="group/link"
          >
            <p className="text-[20px] font-bold text-[#121212] regMed transition-colors duration-300 group-hover/link:text-blue-600">
              {service.title}
            </p>
          </Link>
        </div>
        
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
        
        {/* Learn More Link */}
        <Link 
          to={service.path}
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 group/learnmore mt-2"
        >
          <span>Learn more</span>
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover/learnmore:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className='py-10 md:py-16'>
      {/* Header Section */}
      <div className="">
        <Header 
          title={'Our Services'} 
          subTitle={'Complete freight solutions across all major transport modes'} 
        />
      </div>

      {/* Services Grid */}
      <div className="space-y-8 md:space-y-12">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={service.path} 
            service={service} 
            index={index}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Services;
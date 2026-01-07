import { Link } from "react-router-dom";
import { FiTruck } from "react-icons/fi";
import { GiCargoShip, GiCommercialAirplane } from "react-icons/gi";

const iconMap = {
  FiTruck,
  GiCargoShip,
  GiCommercialAirplane,
};

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon];

  return (
    <div
      className={`
        flex flex-col 
        ${service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
        items-center justify-between
        gap-8 md:gap-12 lg:gap-16
        py-10 md:py-14 lg:py-16
        px-4 md:px-8 lg:px-12
        roboto
      `}
      data-aos={service.reverse ? "fade-left" : "fade-right"}
      data-aos-delay={index * 100}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-[40vh] md:h-[50vh] lg:h-[60vh] relative overflow-hidden rounded-2xl group">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={service.image}
          alt={`${service.title} service`}
          loading={index === 0 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 max-w-none lg:max-w-[45%] text-left">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-[#121212] text-white transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
            <Icon size={28} />
          </div>
          <Link to={service.path} className="group/link">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] robMed transition-colors duration-300 group-hover/link:text-blue-600">
              {service.title}
            </h3>
          </Link>
        </div>

        <p className="text-base md:text-lg lg:text-xl text-[#121212] leading-relaxed opacity-90">
          {service.description}
        </p>

        {/* Learn More Link */}
        <Link
          to={service.path}
          className="inline-flex items-center gap-3 text-blue-600 font-medium text-lg hover:text-blue-700 transition-all duration-300 group/learnmore w-fit"
        >
          <span>Learn more</span>
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover/learnmore:translate-x-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

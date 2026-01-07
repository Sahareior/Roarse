import { useLocation } from "react-router-dom";
import Navbar from "../homepage/Navbar/Navbar";

const NavbarWithHero = ({ image, subtitle, title }) => {
  const location = useLocation();
  const isServicePage = location.pathname === "/carrier" || location.pathname === "/shipper";

  return (
    <div>
      <div
        style={
          isServicePage
            ? { backgroundColor: "#F4F4F5" }
            : {
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
        }
        className={`relative w-full min-h-[95vh] ${
          isServicePage ? "" : "bg-black/50"
        }`}
      >
        {/* Dark overlay only for non-service pages */}
        {!isServicePage && (
          <div className="absolute inset-0 bg-black/50 z-0"></div>
        )}

        <Navbar />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h1
            className={`text-3xl md:text-[36px] leading-tight roboto ${
              isServicePage
                ? "text-black font-semibold"
                : "text-white font-bold"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-lg md:text-[24px] mt-4 robReg max-w-[800px] ${
              isServicePage ? "text-black" : "text-white"
            }`}
          >
            {subtitle}
          </p>
          <button className={`mt-8 px-8 py-3 ${
              isServicePage ? "text-white bg-black" : "text-black bg-white" 
            } rounded-md text-lg font-medium hover:bg-gray-200 transition`}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarWithHero;
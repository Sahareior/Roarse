// components/reusable/NavbarWithHero.jsx
import Navbar from "../homepage/Navbar/Navbar";

const NavbarWithHero = ({ image, subtitle, title }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "95vh",
        }}
        className="relative"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <Navbar />

        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h1 className="text-3xl md:text-[36px] font-bold text-white leading-tight robMed">
            {title}
          </h1>
          <p className="text-lg md:text-[24px] text-white mt-4 robReg">
            {subtitle}
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-black rounded-md text-lg font-medium hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarWithHero;
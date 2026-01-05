import React from 'react';
import Navbar from '../homepage/Navbar/Navbar';

const NavbarWithHero = ({image,subtitle,title}) => {
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
      
      <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center text-center gap-4 z-10">
        <p className="text-[36px] robMed font-bold text-white">
          {title}
        </p>
        <p className="text-[24px] robReg text-white">
          {subtitle}
        </p>
        <button className="px-6 py-2 bg-white rounded-md">
          Get Started
        </button>
      </div>
    </div>
        </div>
    );
};

export default NavbarWithHero;
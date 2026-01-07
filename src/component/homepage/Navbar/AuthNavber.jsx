import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const AuthNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navButtons = [
    { name: "Home" },
    {
      name: "Service",
      children: [{ childrenName: "Shipper" }, { childrenName: "Carrier" }],
    },
    { name: "FAQ" },
    { name: "Contact" },
  ];

  return (
    <div className="flex px-4 sm:px-8 lg:px-12 bg-[#F0F0F0] w-full py-4 lg:py-6 justify-between items-center roboto relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span
          className="p-2 rounded-xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #767575 0%, #000000 100%)",
          }}
        >
          <BiSolidPlaneAlt className="text-white" size={22} />
        </span>
        <span className="text-lg sm:text-xl font-bold text-black">Roarse</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-8 items-center">
        {navButtons.map((item, idx) => (
          <div key={idx} className="relative group">
            <button className="flex items-center gap-2 text-[16px] robReg text-black hover:text-gray-700 transition">
              {item.name}
              {item.children && (
                <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
              )}
            </button>

            {/* Desktop Dropdown */}
            {item.children && (
              <div
                className="
                absolute left-0 top-full mt-4 w-40
                rounded-xl overflow-hidden
                bg-black/80 backdrop-blur-xl
                border border-white/10
                shadow-xl
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-300 ease-out
                pointer-events-none group-hover:pointer-events-auto
              "
              >
                {item.children.map((child, cidx) => (
                  <Link key={cidx} to={`/${child.childrenName.toLowerCase()}`}>
                    <button className="w-full text-left px-4 py-3 text-sm text-white hover:bg-white/10 transition">
                      {child.childrenName}
                    </button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Login Button */}
      <div className="hidden lg:flex items-center">
        <Link to="/login">
          <button className="px-9 py-2 rounded-lg bg-[#121212] text-white font-medium hover:bg-black transition">
            Login
          </button>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-black text-2xl"
      >
        {mobileMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity lg:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-[#F0F0F0] shadow-2xl z-50 transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-300">
          {/* Logo in mobile menu */}
          <div className="flex items-center gap-2">
            <span
              className="p-2 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #767575 0%, #000000 100%)",
              }}
            >
              <BiSolidPlaneAlt className="text-white" size={22} />
            </span>
            <span className="text-xl font-bold text-black">Roarse</span>
          </div>
          <button onClick={() => setMobileMenuOpen(false)}>
            <HiX className="text-2xl text-black" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {navButtons.map((item, idx) => (
            <div key={idx}>
              <button
                onClick={() =>
                  item.children
                    ? setOpenDropdown(openDropdown === idx ? null : idx)
                    : setMobileMenuOpen(false)
                }
                className="w-full flex justify-between items-center text-lg robReg text-black py-2"
              >
                <span>{item.name}</span>
                {item.children && (
                  <FaChevronDown
                    className={`text-sm transition-transform ${
                      openDropdown === idx ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Mobile Dropdown */}
              {item.children && openDropdown === idx && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-300 pl-4">
                  {item.children.map((child, cidx) => (
                    <Link
                      key={cidx}
                      to={`/${child.childrenName.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <button className="block w-full text-left text-base text-gray-700 hover:text-black py-1">
                        {child.childrenName}
                      </button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-6 border-t border-gray-300 mt-6">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full px-9 py-3 rounded-lg bg-[#121212] text-white font-medium hover:bg-black transition">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthNavbar;

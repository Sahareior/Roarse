// components/homepage/Navbar/Navbar.jsx
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
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
    { name: "Quote" },
    { name: "Agent" },
  ];

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <div
        style={{ backdropFilter: "blur(5px)" }}
        className="hidden lg:flex px-12 bg-[#00000099] w-full py-6 justify-between items-center fixed top-0 left-0 z-50"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            className="p-2 rounded-xl"
            style={{
              background: "linear-gradient(135deg, #767575 0%, #000000 100%)",
            }}
          >
            <BiSolidPlaneAlt size={22} className="text-white" />
          </span>
         <Link to='/'>
          <span className="text-white text-lg font-bold">Roarse</span>
         </Link>
        </div>

        {/* Nav Links */}
        <div className="flex gap-16 items-center">
          {navButtons.map((item, idx) => (
            <div key={idx} className="relative group">
              <button className="flex items-center gap-2 text-[16px] robReg text-white hover:text-gray-300 transition">
                {item.name}
                {item.children && (
                  <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
                )}
              </button>

              {/* Dropdown */}
              {item.children && (
                <div className="absolute left-0 top-full mt-4 w-40 rounded-xl overflow-hidden bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.children.map((child, cidx) => (
                    <Link key={cidx} to={`/${child.childrenName.toLowerCase()}`}>
                      <button className="w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 transition">
                        {child.childrenName}
                      </button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-8 text-white">
          <Link to='/login'>
          <button className="hover:text-gray-300 transition">Login</button>
          </Link>
         <Link to='/signup'>
          <button className="px-4 py-1 rounded-md bg-white text-black hover:bg-gray-200 transition">
            Sign Up
          </button>
         </Link>
        </div>
      </div>

      {/* Mobile Navbar (Fixed Top) */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#00000099] backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span
            className="p-2 rounded-xl"
            style={{
              background: "linear-gradient(135deg, #767575 0%, #000000 100%)",
            }}
          >
            <BiSolidPlaneAlt size={22} className="text-white" />
          </span>
          <span className="text-white font-bold">Roarse</span>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white text-3xl"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#000000f0] backdrop-blur-xl shadow-2xl z-50 transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span
              className="p-2 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #767575 0%, #000000 100%)",
              }}
            >
              <BiSolidPlaneAlt size={22} className="text-white" />
            </span>
            <span className="text-white font-bold text-lg">Roarse</span>
          </div>
          <button onClick={() => setMobileMenuOpen(false)}>
            <HiX className="text-white text-3xl" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {navButtons.map((item, idx) => (
            <div key={idx}>
              <button
                onClick={() => item.children && setOpenDropdown(openDropdown === idx ? null : idx)}
                className="w-full flex justify-between items-center text-white text-lg robReg py-2"
              >
                {item.name}
                {item.children && (
                  <FaChevronDown
                    className={`text-sm transition-transform ${
                      openDropdown === idx ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {item.children && openDropdown === idx && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-white/20 pl-4">
                  {item.children.map((child, cidx) => (
                    <Link
                      key={cidx}
                      to={`/${child.childrenName.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <button className="block text-left text-gray-300 hover:text-white py-1">
                        {child.childrenName}
                      </button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button className="w-full text-white text-center text-lg hover:text-gray-300">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
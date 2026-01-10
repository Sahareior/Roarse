// components/homepage/Navbar/Navbar.jsx
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -100; // navbar height offset
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      scrollToSection(id);
    }
    setMobileMenuOpen(false);
  };

  const navButtons = [
    { name: "Home", link: "/" },
    {
      name: "Service",
      children: [
        { childrenName: "Shipper" },
        { childrenName: "Carrier" },
      ],
    },
    { name: "FAQ", action: () => handleScroll("faq") },
    { name: "Contact", action: () => handleScroll("contact") },
    { name: "Quote", link: "/quote" },
    { name: "Agent", link: "/agent-application" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div
        style={{ backdropFilter: "blur(5px)" }}
        className="hidden lg:flex px-12 bg-[#00000099] w-full py-6 justify-between items-center fixed top-0 left-0 z-50"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span
            className="p-2 rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, #767575 0%, #000000 100%)",
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
            <div key={idx} className="relative flex items-center gap-2 group">
              {item.link ? (
                <Link
                  to={item.link}
                  className="flex items-center gap-2 text-[16px] robReg text-white hover:text-gray-300 transition"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={item.action}
                  className="flex items-center gap-2 text-[16px] robReg text-white hover:text-gray-300 transition"
                >
                  {item.name}
                </button>
              )}

              {item.children && (
                <div className="flex">
                  <FaChevronDown className="text-xs ml-1 transition-transform group-hover:rotate-180 text-white" />

                  <div className="absolute left-0 top-full mt-4 w-40 rounded-xl overflow-hidden bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.children.map((child, cidx) => (
                      <Link
                        key={cidx}
                        to={`/${child.childrenName.toLowerCase()}`}
                        className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                      >
                        {child.childrenName}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Auth */}
        <div className="flex items-center gap-8 text-white">
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
          <Link to="/signup">
            <button className="px-4 py-1 rounded-md bg-white text-black hover:bg-gray-200 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#00000099] backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <BiSolidPlaneAlt size={22} className="text-white" />
          <span className="text-white font-bold">Roarse</span>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white text-3xl"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#000000f0] backdrop-blur-xl shadow-2xl z-50 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          {navButtons.map((item, idx) => (
            <div key={idx}>
              {item.link ? (
                <Link
                  to={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white text-lg py-2"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={item.action}
                  className="block text-left text-white text-lg py-2 w-full"
                >
                  {item.name}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <div
      style={{ backdropFilter: "blur(10px)" }}
      className="flex px-12 bg-black/50 w-full py-6 justify-between items-center"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <p className="text-[16px] robReg flex items-center gap-2 text-white">
          <span
            className="p-2 rounded-xl"
            style={{
              background: "linear-gradient(135deg, #767575 0%, #000000 100%)",
            }}
          >
            <BiSolidPlaneAlt size={22} />
          </span>
          Roarse
        </p>
      </div>

      {/* Nav */}
      <div className="flex gap-16 items-center">
        {navButtons.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Nav item */}
            <button className="flex items-center gap-2 text-[16px] robReg text-white hover:text-gray-300">
              {item.name}
              {item.children && (
                <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
              )}
            </button>

            {/* Dropdown */}
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
                transition-all duration-200
              "
              >
                {item.children.map((child, cidx) => (
                  <Link key={cidx} to={child.childrenName}>
                    <button
                      className="
                      w-full text-left px-4 py-2
                      text-sm text-white
                      hover:bg-white/10
                    "
                    >
                      {child.childrenName}
                    </button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Auth */}
      <div className="flex robReg items-center gap-8 text-white">
        <button className="hover:text-gray-300">Login</button>
        <button className="px-4 py-1 rounded-md bg-white text-black hover:bg-gray-200">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import { BiSolidPlaneAlt } from "react-icons/bi";

const AuthBanner = ({ title, description, features }) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #767575 0%, #121212 100%)",
      }}
      className="max-h-[700px] text-white rounded-3xl p-10 flex flex-col justify-between shadow-2xl w-full md:w-1/2 py-20 roboto"
    >
      <div>
        {/* Fixed Brand Logo & Name */}
        <div className="flex items-center gap-3 mb-8">
          <span
            className="p-2 rounded-xl flex items-center justify-center"
            style={{ background: "#FFFFFF33" }}
          >
            <BiSolidPlaneAlt className="text-white" size={22} />
          </span>
          <h2 className="text-2xl font-bold">Roarse</h2>
        </div>

        <h1 className="text-xl font-medium mb-4">{title}</h1>
        <p className="text-[#DBEAFE] mb-8 text-sm md:text-base">{description}</p>

        {/* Dynamic Features List */}
        <ul className="space-y-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xl font-light"
                style={{ background: "#FFFFFF33" }}
              >
                ✓
              </div>
              <span className="text-white text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AuthBanner;
import React from "react";
import {
  FiCpu,
  FiGitBranch,
  FiTarget,
  FiPackage,
  FiUsers,
  FiTrendingUp,
  FiDollarSign,
} from "react-icons/fi";
import { LuGitCompareArrows } from "react-icons/lu";
import { TbArrowGuide } from "react-icons/tb";

// import {  } from 'react-icons/fi'
const services = [
  {
    icon: <LuGitCompareArrows  size={28} />,
    title: "AI-powered road optimization",
    desc: "AI-powered road optimization streamlines your shipments by analyzing real-time data to choose the best routes.",
  },
  {
    icon: <FiCpu size={28} />,
    title: "AI-driven matching seamlessly",
    desc: "AI-driven matching seamlessly connects shippers with the right carriers based on real time availability, location, and capacity.",
  },
  {
    icon: <FiTarget size={28} />,
    title: "Real time live tracking",
    desc: "Real time live tracking lets you monitor your shipments every step of the way. ",
  },
];

const stats = [
  {
    icon: <FiPackage size={22} />,
    value: "150,000+",
    title: "Total shipments",
    subtitle: "Successfully Delivered",
  },
  {
    icon: <FiUsers size={22} />,
    value: "75,000+",
    title: "Total Users",
    subtitle: "Shippers & Carriers",
  },
  {
    icon: <FiTrendingUp size={22} />,
    value: "3500+",
    title: "Active Shipments",
    subtitle: "Currently Tracking",
  },
  {
    icon: <FiDollarSign size={22} />,
    value: "$500M+",
    title: "Total Transactions",
    subtitle: "Processed",
  },
];

const PlatformStats = () => {
  return (
    <section className="bg-white  py-16">
      <div className="max-w-8xl mx-auto  px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border  rounded-xl p-6 shadow-md transition"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-black text-white mb-4">
                {stat.icon}
              </div>

              {/* Value */}
              <h3 className="text-2xl font-semibold">{stat.value}</h3>

              {/* Title */}
              <p className="font-medium mt-1">{stat.title}</p>

              {/* Subtitle */}
              <p className="text-sm text-gray-500 mt-1">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AiPowerServices = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-black to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="flex items-center robMed justify-center gap-2 text-3xl font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M15.1775 9.07992C16.1742 6.16325 20.2042 6.07492 21.3859 8.81492L21.4859 9.08159L22.8309 13.0149C23.1391 13.917 23.6372 14.7424 24.2916 15.4356C24.946 16.1288 25.7414 16.6736 26.6242 17.0333L26.9859 17.1683L30.9192 18.5116C33.8359 19.5083 33.9242 23.5383 31.1859 24.7199L30.9192 24.8199L26.9859 26.1649C26.0835 26.473 25.2577 26.971 24.5642 27.6254C23.8707 28.2797 23.3257 29.0753 22.9659 29.9583L22.8309 30.3183L21.4875 34.2533C20.4909 37.1699 16.4609 37.2583 15.2809 34.5199L15.1775 34.2533L13.8342 30.3199C13.5262 29.4176 13.0282 28.5918 12.3738 27.8983C11.7194 27.2048 10.9239 26.6597 10.0409 26.2999L9.68086 26.1649L5.74753 24.8216C2.8292 23.8249 2.74086 19.7949 5.48086 18.6149L5.74753 18.5116L9.68086 17.1683C10.5829 16.86 11.4084 16.3619 12.1016 15.7075C12.7948 15.0532 13.3396 14.2577 13.6992 13.3749L13.8342 13.0149L15.1775 9.07992ZM31.6659 3.33325C31.9777 3.33325 32.2832 3.42072 32.5478 3.5857C32.8124 3.75069 33.0253 3.98659 33.1625 4.26659L33.2425 4.46159L33.8259 6.17159L35.5375 6.75492C35.85 6.86108 36.1239 7.05761 36.3246 7.31961C36.5252 7.58161 36.6436 7.89728 36.6647 8.22662C36.6857 8.55596 36.6085 8.88414 36.4429 9.16956C36.2773 9.45499 36.0306 9.68482 35.7342 9.82992L35.5375 9.90992L33.8275 10.4933L33.2442 12.2049C33.1379 12.5173 32.9412 12.7911 32.6791 12.9916C32.417 13.1921 32.1013 13.3102 31.7719 13.3311C31.4426 13.352 31.1145 13.2747 30.8292 13.1089C30.5438 12.9431 30.3142 12.6964 30.1692 12.3999L30.0892 12.2049L29.5059 10.4949L27.7942 9.91159C27.4817 9.80543 27.2078 9.60889 27.0072 9.34689C26.8065 9.08489 26.6881 8.76922 26.6671 8.43988C26.646 8.11055 26.7232 7.78237 26.8888 7.49694C27.0545 7.21151 27.3011 6.98169 27.5975 6.83659L27.7942 6.75659L29.5042 6.17325L30.0875 4.46159C30.1999 4.13229 30.4125 3.84643 30.6956 3.64408C30.9786 3.44173 31.3179 3.33304 31.6659 3.33325Z"
                  fill="white"
                />
              </svg>{" "}
              AI powered services
            </h2>
            <p className="text-[#767575] robMed text-[20px] mt-4">
              Fast and efficient air transport for your time sensitive shipments. Our platform connects shippers with reliable carriers, ensuring quick and secure deliveries worldwide.
            </p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center max-w-sm mx-auto"
              >
                <div className="mb-4 text-white">{service.icon}</div>
                <h3 className="font-medium robReg text-[16px] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PlatformStats />
    </div>
  );
};

export default AiPowerServices;

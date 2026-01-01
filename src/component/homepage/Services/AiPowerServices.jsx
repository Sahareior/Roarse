import React from 'react'
import { FiCpu, FiGitBranch, FiTarget,FiPackage, FiUsers, FiTrendingUp, FiDollarSign } from 'react-icons/fi'

// import {  } from 'react-icons/fi'
const services = [
  {
    icon: <FiGitBranch size={28} />,
    title: 'AI-powered road optimization',
    desc: 'AI-powered road optimization streamlines your shipments by analyzing real-time data to choose the best routes.',
  },
  {
    icon: <FiCpu size={28} />,
    title: 'AI-driven matching seamlessly',
    desc: 'AI-driven matching seamlessly connects shippers with the right carriers based on real time availability, location, and capacity.',
  },
  {
    icon: <FiTarget size={28} />,
    title: 'Real time live tracking',
    desc: 'Real time live tracking lets you monitor your shipments every step of the way.',
  },
]


const stats = [
  {
    icon: <FiPackage size={22} />,
    value: '150,000+',
    title: 'Total shipments',
    subtitle: 'Successfully Delivered',
  },
  {
    icon: <FiUsers size={22} />,
    value: '75,000+',
    title: 'Total Users',
    subtitle: 'Shippers & Carriers',
  },
  {
    icon: <FiTrendingUp size={22} />,
    value: '3500+',
    title: 'Active Shipments',
    subtitle: 'Currently Tracking',
  },
  {
    icon: <FiDollarSign size={22} />,
    value: '$500M+',
    title: 'Total Transactions',
    subtitle: 'Processed',
  },
]

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
              <p className="text-sm text-gray-500 mt-1">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}





const AiPowerServices = () => {
  return (
<div>
        <section className="bg-gradient-to-b from-black to-neutral-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="flex items-center robMed justify-center gap-2 text-3xl font-semibold">
            ✨ AI powered services
          </h2>
          <p className="text-gray-400 robMed text-[20px] mt-4">
            Fast and efficient air transport for your time sensitive shipments.
            Our platform connects shippers with reliable carriers, ensuring quick
            and secure deliveries worldwide.
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
              <h3 className="font-medium robReg text-[16px] mb-3">{service.title}</h3>
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
  )
}

export default AiPowerServices

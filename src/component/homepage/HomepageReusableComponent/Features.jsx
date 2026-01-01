import React from 'react'
import {
  FiSearch,
  FiMap,
  FiDollarSign,
  FiTrendingUp,
  FiShield,
  FiBell,
} from 'react-icons/fi'
import { useLocation } from 'react-router-dom';

const features = [
  {
    icon: <FiSearch />,
    title: 'Smart Load Discovery',
    desc: 'Find profitable loads that match your truck type, location, and preferred routes using smart matching.',
  },
  {
    icon: <FiMap />,
    title: 'Route Optimization',
    desc: 'Maximize earnings and minimize empty miles with intelligent route planning.',
  },
  {
    icon: <FiDollarSign />,
    title: 'Instant Payments',
    desc: 'Get paid faster with our quick-pay options. Choose same-day, next-day, or standard payment terms with transparent fee structures.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Fuel Cost Tracker',
    desc: 'Monitor fuel expenses and optimize routes for better fuel efficiency. Access real-time fuel price comparisons along your route.',
  },
  {
    icon: <FiShield />,
    title: 'Load Insurance & Safety',
    desc: 'All loads come with comprehensive cargo insurance. Verified shippers only, with rating system to ensure quality partnerships.',
  },
  {
    icon: <FiBell />,
    title: 'Real-Time Alerts',
    desc: 'Never miss an opportunity with instant notifications for new loads, rate changes, and booking confirmations on your preferred routes.',
  },
]

const Features = ({title,subTitle,featureData}) => {
 const location = useLocation();




  return (
    <section className="bg-white py-24">
      <div className="max-w-8xl mx-auto px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold">
           {title}
          </h2>
          <p className="text-gray-500 mt-2">
         {subTitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData?.map((feature, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 hover:shadow-md transition bg-white"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-black text-white mb-4">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] text-gray-600 robReg leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

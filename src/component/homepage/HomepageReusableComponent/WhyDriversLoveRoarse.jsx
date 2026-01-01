import React from 'react'
import { FiCheck } from 'react-icons/fi'

const benefits = [
  'No subscription fees for basic plan',
  'Reduce empty miles by up to 40%',
  '24/7 driver support hotline',
  'Digital BOL and POD submission',
  'Fuel card integration',
  'Load board with 10,000+ daily loads',
  'Performance-based priority booking',
]

const WhyDriversLoveRoarse = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl robMed font-semibold mb-4">
              Why Drivers Love Roarse
            </h2>

            <p className="text-gray-600 robReg max-w-md mb-8">
              Join the fastest-growing driver community with access to
              premium freight, transparent pricing, and tools that help
              you maximize every mile. No hidden fees, no games—just
              honest opportunities.
            </p>

            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-black/90 transition">
              Get Started
            </button>
          </div>

          {/* Right Benefits List */}
          <div className="space-y-3">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white border rounded-md px-4 py-3 shadow-sm"
              >
                <div className="w-6 h-6 flex items-center justify-center rounded-full border border-black">
                  <FiCheck className="text-black text-sm" />
                </div>
                <p className="text-sm robReg">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyDriversLoveRoarse

import React from 'react'

const steps = [
  {
    number: '1',
    title: 'Create Your Profile',
  },
  {
    number: '2',
    title: 'Get your match',
  },
  {
    number: '3',
    title: 'Book & Drive',
  },
  {
    number: '4',
    title: 'Deliver & Earn',
  },
]

const HowItsWork = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl robMed font-semibold">How It Works</h2>
          <p className="text-gray-400 robReg mt-2">
            Get your freight moving in four simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Line - horizontal for desktop, vertical for mobile */}
          <div className="absolute top-6 left-1/2 h-full md:h-[2px] md:top-1/2 md:left-0 md:right-0 md:w-full border md:border-t border-white/30 -z-10 -translate-x-1/2 md:translate-x-0" />
<div className='h-[2px] absolute -mt-8 left-14 bg-[#7C7C7C] w-[90%]' />
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              {/* Circle */}
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold text-lg relative z-10">
                {step.number}
              </div>

              {/* Title */}
              <p className="mt-4 text-sm">{step.title}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItsWork
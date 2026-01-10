import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import Header from '../../reusable/Header'

const faqs = [
  {
    question: 'What is Roars?',
    answer:
      'Roars is an advanced transport platform connecting shippers and carriers across 20+ countries. It leverages AI-powered optimization for road, sea, and air transport, offering seamless load matching and real-time live tracking. With efficient route planning and smart shipment management, Roars ensures fast, reliable, and cost-effective deliveries.',
  },
  {
    question: 'How do I started',
    answer:
      'Getting started is simple. Sign up on our platform, create your shipment details, and get matched with reliable carriers instantly.',
  },
  {
    question: 'What countries do we serve?',
    answer:
      'We operate across 20+ countries worldwide, covering major logistics and transport hubs.',
  },
  {
    question: 'Is my shipment insured',
    answer:
      'Yes, all shipments are insured based on selected plans and coverage options.',
  },
  {
    question: 'How do I track my shipment',
    answer:
      'You can track your shipment in real time directly from your dashboard using our live tracking system.',
  },
]

const AnsnQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section  className="bg-white py-2">
      <div className="max-w-8xl mx-auto px-6">
        {/* Header */}
        <Header title={' Frequently Asked Questions'} subTitle={'Find answers to common questions about our platform'} />


        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === activeIndex

            return (
              <div
                key={index}
                className={`border rounded-lg transition ${
                  isOpen ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <FiChevronDown
                    className={`transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AnsnQuestions

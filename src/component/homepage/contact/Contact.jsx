import React from 'react'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from 'react-icons/fi'
import Header from '../../reusable/Header'

const Contact = () => {
  return (
    <section className="bg-white py-10 relative overflow-hidden">
      <div className="max-w-7xl  mx-auto px-6">

        {/* Header */}
        <Header title={'Get In Touch'} subTitle={' Have questions? We’d love to hear from you.'} />

        {/* Content */}
        <div className="grid relative grid-cols-1 lg:grid-cols-2 mt-14 gap-12 items-start">
          {/* Left: Contact Info */}
                  <img  className='absolute right-36 -top-16' src="../../../../public/contact/Vector (3).png" alt="" />
                  <img  className='absolute left-1/3 -top-44' src="../../../../public/contact/Vector (3).png" alt="" />
        <img className='absolute -top-16 -right-24'  src="../../../../public/contact/Vector (4).png" alt="" />
          <div>
            <h3 className="text-2xl regMed font-semibold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-md">
                  <FiMail />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600 text-sm">
                    support@roars.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-md">
                  <FiPhone />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600 text-sm">
                    +123456542021
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-md">
                  <FiMapPin />
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Musterstrre 12 <br />
                    12345 Berlin <br />
                    Germany
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-xl  shadow-lg p-8">
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1 border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full mt-1 border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full mt-1 border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your message..."
                  className="w-full mt-1 border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-black/90 transition"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

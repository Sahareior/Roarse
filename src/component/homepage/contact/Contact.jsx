import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Header from "../../reusable/Header";

const Contact = () => {
  return (
    <section className="bg-white py-6 md:py-8 lg:py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        {/* Header */}
        <Header
          title={"Get In Touch"}
          subTitle={" Have questions? We'd love to hear from you."}
        />

        {/* Content */}
        <div className="grid relative grid-cols-1 lg:grid-cols-2 mt-8 md:mt-10 lg:mt-14 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Decorative Images - Hidden on mobile/tablet, shown on lg+ */}
          <img
            className="hidden lg:block absolute right-36 -top-16"
            src="/public/contact/Vector (3).png"
            alt=""
          />
          <img
            className="hidden lg:block absolute left-1/3 -top-44"
            src="/public/contact/Vector (3).png"
            alt=""
          />
          <img
            className="hidden lg:block absolute -top-16 -right-24"
            src="../../../../public/contact/Vector (4).png"
            alt=""
          />
          
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-xl md:text-2xl regMed font-semibold mb-6 md:mb-8">
              Contact Information
            </h3>

            <div className="space-y-4 md:space-y-6">
              {/* Email */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black text-white rounded-md">
                  <FiMail className="text-sm md:text-base" />
                </div>
                <div>
                  <p className="font-medium text-sm md:text-base">Email</p>
                  <p className="text-gray-600 text-xs md:text-sm">support@roars.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black text-white rounded-md">
                  <FiPhone className="text-sm md:text-base" />
                </div>
                <div>
                  <p className="font-medium text-sm md:text-base">Phone</p>
                  <p className="text-gray-600 text-xs md:text-sm">+123456542021</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black text-white rounded-md">
                  <FiMapPin className="text-sm md:text-base" />
                </div>
                <div>
                  <p className="font-medium text-sm md:text-base">Address</p>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    Musterstrre 12 <br />
                    12345 Berlin <br />
                    Germany
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <form className="space-y-4 md:space-y-5">
              {/* Name */}
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1 border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full mt-1 border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-medium">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full mt-1 border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your message..."
                  className="w-full mt-1 border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black resize-none text-sm md:text-base"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-black/90 transition text-sm md:text-base"
              >
                <FiSend className="text-sm md:text-base" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
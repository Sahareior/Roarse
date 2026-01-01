import React from 'react'
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-neutral-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              ROARS
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Global freight made simple.
              <br />
              Connecting shippers and
              <br />
              carriers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition cursor-pointer">
                <FiFacebook />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition cursor-pointer">
                <FiTwitter />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition cursor-pointer">
                <FiLinkedin />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition cursor-pointer">
                <FiInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} ROARS. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

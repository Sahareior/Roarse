import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BargainingChat = () => {
  const [offerAmount, setOfferAmount] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSendOffer = () => {
    if (offerAmount.trim()) {
      console.log("Sending offer:", offerAmount);
      setOfferAmount("");
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-black text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-white">
            <FaArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-lg font-medium">Maria Garcia</h2>
            <p className="text-sm text-gray-300">Bargaining Chat</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
        {/* Received Message */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
            MG
          </div>
          <div className="bg-white rounded-2xl px-5 py-3 max-w-md shadow-sm">
            <p className="text-sm">
              Hello! I can handle your shipment. My quoted price is $466. Feel free to make a counteroffer.
            </p>
            <p className="text-xs text-gray-500 mt-2 text-right">12:13</p>
          </div>
        </div>

        {/* Sent Price Offer */}
        <div className="flex items-end justify-end gap-3">
          <div className="bg-black text-white rounded-2xl px-5 py-3 shadow-sm">
            <p className="text-sm font-medium">$ Price Offer</p>
            <p className="text-sm">Offered price: $400</p>
            <p className="text-xs text-gray-300 mt-2 text-right">12:14</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
            Y
          </div>
        </div>

        {/* Received Counter + Accept Button */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
            MG
          </div>
          <div className="bg-white rounded-2xl px-5 py-3 max-w-md shadow-sm">
            <p className="text-sm font-medium">$ Price Offer</p>
            <p className="text-sm">
              I appreciate your offer, but that’s a bit low. How about $419?
            </p>
            <button className="mt-3 w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-900 transition">
              Accept Offer
            </button>
            <p className="text-xs text-gray-500 mt-2 text-right">12:14</p>
          </div>
        </div>

        {/* Another Sent Offer */}
        <div className="flex items-end justify-end gap-3">
          <div className="bg-black text-white rounded-2xl px-5 py-3 shadow-sm">
            <p className="text-sm font-medium">$ Price Offer</p>
            <p className="text-sm">Offered price: $400</p>
            <p className="text-xs text-gray-300 mt-2 text-right">12:14</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
            Y
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t bg-white p-4 space-y-4">
        {/* Make a Price Offer */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">$</span>
            <input
              type="text"
              placeholder="Enter amount"
              value={offerAmount}
              onChange={(e) => setOfferAmount(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            onClick={handleSendOffer}
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition"
          >
            Send Offer
          </button>
        </div>

        {/* Type a message */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            onClick={handleSendMessage}
            className="p-3 bg-black text-white rounded-lg hover:bg-gray-900 transition"
          >
            <svg className="w-5 h-5 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BargainingChat;
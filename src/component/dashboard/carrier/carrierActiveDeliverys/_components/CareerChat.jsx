import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CareerChat = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col min-h-[84vh] bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white px-5 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="text-white">
          <FaArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-lg font-medium">Maria Garcia</h2>
          <p className="text-xs text-gray-300">Information Container</p>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {/* Left Message */}
        <div className="flex items-start gap-3 max-w-[80%]">
          <div className="w-9 h-9 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center text-sm font-bold text-gray-700">
            A
          </div>
          <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
            <p className="text-sm">Hello! I can handle shipment.</p>
            <span className="text-xs text-gray-500 mt-1 block text-right">12:13</span>
          </div>
        </div>

        {/* Right Message */}
        <div className="flex items-end justify-end gap-3 max-w-[80%] ml-auto">
          <div className="bg-black text-white rounded-2xl rounded-tr-none px-4 py-3 shadow-sm">
            <p className="text-sm">Hello</p>
            <span className="text-xs text-gray-300 mt-1 block text-right">12:13</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-sm font-bold text-white">
            Y
          </div>
        </div>

        {/* Another Left */}
        <div className="flex items-start gap-3 max-w-[80%]">
          <div className="w-9 h-9 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center text-sm font-bold text-gray-700">
            A
          </div>
          <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
            <p className="text-sm">
              I appreciate your offer, but that's a bit low.
            </p>
            <span className="text-xs text-gray-500 mt-1 block text-right">12:14</span>
          </div>
        </div>

        {/* Another Right */}
        <div className="flex items-end justify-end gap-3 max-w-[80%] ml-auto">
          <div className="bg-black text-white rounded-2xl rounded-tr-none px-4 py-3 shadow-sm">
            <p className="text-sm">Yes</p>
            <span className="text-xs text-gray-300 mt-1 block text-right">12:14</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-sm font-bold text-white">
            Y
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t bg-white p-4">
        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type message..."
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            <svg
              className="w-5 h-5 rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerChat;
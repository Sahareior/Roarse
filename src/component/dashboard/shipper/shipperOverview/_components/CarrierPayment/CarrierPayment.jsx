import React, { useState } from "react";
import { FiArrowLeft, FiCreditCard } from "react-icons/fi";
import { BsBank } from "react-icons/bs";
import { FaLock } from "react-icons/fa";

/* -------------------- Helpers -------------------- */

const MethodCard = ({ icon: Icon, title, active, onClick }) => (
  <div
    onClick={onClick}
    className={`
      cursor-pointer border rounded-xl p-6 py-10
      flex flex-col items-center gap-3 justify-center
      transition
      ${active ? "border-black" : "border-[#E5E7EB] hover:border-gray-400"}
    `}
  >
    <Icon className="text-lg" />
    <span className="text-sm font-medium">{title}</span>
  </div>
);

const SummaryRow = ({ label, value, highlight }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span
      className={`font-medium ${
        highlight ? "text-blue-600 text-lg" : "text-gray-900"
      }`}
    >
      {value}
    </span>
  </div>
);

const TextInput = ({ placeholder }) => (
  <input
    placeholder={placeholder}
    className="
      w-full px-3 py-2 text-sm
      border border-gray-300 rounded-lg
      focus:outline-none focus:ring-2 focus:ring-black
    "
  />
);

/* -------------------- Main Component -------------------- */

const CarrierPayment = () => {
  const [method, setMethod] = useState("card");

  return (
    <div className="max-w-8xl mx-auto p-2 space-y-6">

      {/* Back */}
      <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        <FiArrowLeft />
        Back
      </button>

      {/* Header */}
      <div>
        <p className="text-2xl arReg font-semibold text-gray-900">
          Secure Payment
        </p>
        <p className="text-xl arReg mt-2 text-gray-500">
          Complete your payment to start the shipment
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left - Payment Form */}
        <div className="lg:col-span-2 bg-white border rounded-xl p-6 space-y-6">

          <p className="text-[21px] arReg font-medium text-gray-900">
            Payment Method
          </p>

          {/* Method Selection */}
          <div className="grid grid-cols-2 gap-4">
            <MethodCard
              icon={FiCreditCard}
              title="Credit Card"
              active={method === "card"}
              onClick={() => setMethod("card")}
            />
            <MethodCard
              icon={BsBank}
              title="Bank Transfer"
              active={method === "bank"}
              onClick={() => setMethod("bank")}
            />
          </div>

          {/* Card Form */}
          {method === "card" && (
            <div className="space-y-4">
              <div>
                <p className="text-[16px] arReg text-gray-500 mb-1">Card Number</p>
                <TextInput placeholder="1234 5678 9012 3456" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[16px] arReg text-gray-500 mb-1">
                    Expiry Date
                  </p>
                  <TextInput placeholder="MM/YY" />
                </div>

                <div>
                  <p className="text-[16px] arRegtext-[16px] arReg text-gray-500 mb-1">CVV</p>
                  <TextInput placeholder="123" />
                </div>
              </div>

              <div>
                <p className="text-[16px] arReg text-gray-500 mb-1">
                  Cardholder Name
                </p>
                <TextInput placeholder="John Doe" />
              </div>
            </div>
          )}

          {/* Pay Button */}
          <button
            className="
              w-full py-4 rounded-lg
              bg-black text-white text-sm font-medium
              flex items-center justify-center gap-2 text-[21px]
              hover:bg-gray-800 transition arReg
            "
          >
            <FaLock />
            Pay $
          </button>
        </div>

        {/* Right - Summary */}
        <div className="space-y-6">

          {/* Order Summary */}
          <div className="bg-white border rounded-xl p-6 space-y-4">
            <p className="text-sm font-medium text-gray-900">
              Order Summary
            </p>

            <SummaryRow label="Route" value="INDIA → BANGLADESH" />
            <SummaryRow label="Mode" value="ROAD" />
            <SummaryRow label="Weight" value="1000 kg" />

            <div className="border-t pt-3 space-y-2">
              <SummaryRow label="Subtotal" value="$" />
              <SummaryRow label="Platform Fee" value="$0" />
              <SummaryRow label="Total" value="$" highlight />
            </div>
          </div>

          {/* Secure Info */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex gap-3">
            <FaLock className="text-green-600 mt-1" />
            <div>
              <p className="text-sm font-medium text-green-700">
                Payment held securely
              </p>
              <p className="text-xs text-green-700">
                Funds will be released to the carrier only after you
                confirm successful delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrierPayment;

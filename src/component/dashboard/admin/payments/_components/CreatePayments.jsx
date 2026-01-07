import React, { useState } from "react";
import {
  FaUser,
  FaUniversity,
  FaGooglePay,
  FaPaypal,
  FaCreditCard,
  FaLock,
} from "react-icons/fa";
import { SiVisa } from "react-icons/si";

const PaymentMethod = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`border rounded-lg p-4 w-28 h-20 flex flex-col items-center justify-center gap-1 text-sm transition ${
      active
        ? "bg-black text-white"
        : "bg-white hover:border-black"
    }`}
  >
    <div className="text-2xl">{icon}</div>
    <span className="text-xs">{label}</span>
  </button>
);

const CreatePayments = () => {
  const [method, setMethod] = useState("bank");

  return (
    <div className="p-6 max-w-8xl mx-auto">
      {/* Header */}
      <div className="bg-black text-white rounded-xl p-6 flex justify-between items-center">
        <div>
          <h1 className="text-[24px] robMed  font-semibold">
            Make Payment
          </h1>
          <p className="text-[20px] robMed text-gray-300">
            Shipment ID : SH-123565-21
          </p>
        </div>
        <div className="text-right">
          <p className="text-[16px] robReg text-gray-300">
            Total Amount
          </p>
          <p className="text-3xl robMed font-bold">
            $1224
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Receiver Info */}
          <div className="bg-white border rounded-xl p-5 space-y-4">
            <h3 className="text-[20px] font-semibold flex robMed items-center gap-2">
              <FaUser /> Receiver Information
            </h3>

            <div>
              <label className="text-[16px] robReg text-gray-500">
                Receiver Name
              </label>
              <input
                value="John smith"
                readOnly
                className="mt-1 w-full border rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-[16px] robReg  text-gray-500">
                Receiver Bank Account Number
              </label>
              <input
                value="****4125632"
                readOnly
                className="mt-1 w-full border rounded px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white border rounded-xl p-5 space-y-4">
            <h3 className="text-[20px] font-semibold robMed flex items-center gap-2">
              <FaUniversity /> Payment Method
            </h3>

            <div className="flex gap-4 flex-wrap">
              <PaymentMethod
                label="G Pay"
                icon={<FaGooglePay />}
                active={method === "gpay"}
                onClick={() => setMethod("gpay")}
              />
              <PaymentMethod
                label="PayPal"
                icon={<FaPaypal />}
                active={method === "paypal"}
                onClick={() => setMethod("paypal")}
              />
              <PaymentMethod
                label="Bank Transfer"
                icon={<FaUniversity />}
                active={method === "bank"}
                onClick={() => setMethod("bank")}
              />
              <PaymentMethod
                label="Visa"
                icon={<SiVisa />}
                active={method === "visa"}
                onClick={() => setMethod("visa")}
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white border rounded-xl p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-[20px] robMed font-semibold mb-4">
              Payment Summary
            </h3>

            <div className="space-y-2 text-sm">
              <div className="flex text-[16px] robReg justify-between">
                <span>Shipment Cost</span>
                <span>$1244</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Platform Charge</span>
                <span>- $20</span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>$1224</span>
            </div>
          </div>

          <button className="mt-6 bg-black text-white py-3 rounded-lg flex items-center text-[20px] robMed justify-center gap-2">
            <FaLock />
            Secure Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePayments;

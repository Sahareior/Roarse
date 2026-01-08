import React from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";

const plans = [
  {
    name: "General",
    price: "$0",
    period: "/month",
    shipments: "Up to 10 shipments per month.",
    features: [
      "Access to basic shipment tracking and carrier matching.",
      "Basic support with limited response time.",
      "Standard road transport options.",
      "Limit Real-time shipment tracking.",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$50",
    period: "/month",
    shipments: "Up to 100 shipments per month.",
    features: [
      "Access to basic shipment tracking and carrier matching.",
      "Basic support with unlimited response time.",
      "Standard road transport options.",
      "Real-time shipment tracking.",
      "Real-time shipment tracking.",
      "Real-time shipment tracking.",
    ],
    highlighted: true,
  },
];

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-green-500 mt-1"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const PlanCard = ({ plan }) => {
  return (
    <div
      className={`w-full max-w-[20rem] rounded-lg border bg-white p-6  transition ${
        plan.highlighted
          ? "border-gray-300 shadow-2xl"
          : "border-gray-200"
      }`}
    >
      <div className="flex items-center gap-2 mb-4">
       <BiSolidBadgeCheck size={24} />
        <h3 className="font-semibold text-lg">{plan.name}</h3>
      </div>

      <div className="mb-6">
        <span className="text-3xl font-bold">{plan.price}</span>
        <span className="text-gray-500">{plan.period}</span>
      </div>

      <ul className="space-y-3 text-sm text-gray-700 mb-6">
        <li className="flex gap-2">
          <CheckIcon />
          <span>{plan.shipments}</span>
        </li>
        {plan.features.map((feature, index) => (
          <li key={index} className="flex gap-2">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {plan.highlighted && (
        <button className="w-full rounded-md bg-black py-2 text-white text-sm font-medium hover:bg-gray-800 transition">
          Purchase
        </button>
      )}
    </div>
  );
};

const ShipperSubs = () => {
  return (
    <div className="w-full robReg px-4 py-12">
      <h2 className="text-xl robReg text-[26px] mb-8">
        <strong>Premium,</strong> Subscription plan
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default ShipperSubs;

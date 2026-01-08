import React from "react";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaClock,
  FaDollarSign,
  FaUniversity,
} from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

/* -------------------- Helpers -------------------- */

const StatCard = ({ title, value, subtitle, icon, highlight }) => (
  <div
    className={`rounded-xl robReg p-5 border space-y-2 ${
      highlight ? "bg-green-500 text-white border-green-500" : "bg-white"
    }`}
  >
    <div className="flex justify-between items-center">
        <p className="p-3 bg-[#EFF6FF] text-[#9810FA] rounded-full"> {icon}</p>
        <p className="bg-[#FAF5FF] p-3 text-[#155DFC] rounded-full"> {icon}</p>
    </div>
    <div className="flex justify-between pt-4 items-center">
      <p className="text-sm">{title}</p>
     
    </div>
    <p className="text-2xl font-semibold">{value}</p>
    {subtitle && (
      <p className={`text-xs ${highlight ? "text-green-100" : "text-[#6A7282]"}`}>
        {subtitle}
      </p>
    )}
    {highlight && (
      <button className="mt-2 w-full bg-white text-green-600 text-sm py-1.5 rounded-lg">
        Request Payout
      </button>
    )}
  </div>
);

const StatusBadge = ({ status }) => {
  const map = {
    completed: "bg-green-100 text-green-700",
    processing: "bg-blue-100 text-blue-700",
    pending: "bg-orange-100 text-orange-700",
  };
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full ${map[status]}`}>
      {status}
    </span>
  );
};

const PayoutRow = ({ item }) => (
  <div className="flex justify-between robReg items-center py-4 border-b last:border-b-0">
    <div className="flex gap-3">
      <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
        {item.status === "completed" ? (
          <FaCheckCircle className="text-green-600" />
        ) : (
          <FaClock className="text-blue-600" />
        )}
      </div>

      <div>
        <p className="text-sm gap-2 flex mb-1 font-medium">${item.amount} <StatusBadge status={item.status} /></p>
        <p className="text-[14px] text-gray-500">{item.method}</p>
        <p className="text-xs text-gray-400">
          {item.shipments} shipments • Ref: {item.ref}
        </p>
      </div>
    </div>

    <div className="text-right space-y-1">
      
      <p className="text-xs text-gray-400">{item.date}</p>
      <p className="text-xs text-gray-400">{item.time}</p>
    </div>
  </div>
);

/* -------------------- Main Component -------------------- */

const AgentWallet = () => {
  const payouts = [
    {
      amount: "2,800",
      method: "Bank Transfer",
      shipments: 2,
      ref: "TXN-2025-001234",
      status: "completed",
      date: "Dec 10, 2025",
      time: "10:30 AM",
    },
    {
      amount: "2,050",
      method: "PayPal",
      shipments: 1,
      ref: "TXN-2025-001189",
      status: "completed",
      date: "Dec 5, 2025",
      time: "02:20 PM",
    },
    {
      amount: "3,000",
      method: "Bank Transfer",
      shipments: 2,
      ref: "TXN-2025-001267",
      status: "processing",
      date: "Dec 14, 2025",
      time: "09:15 AM",
    },
    {
      amount: "3,400",
      method: "Stripe",
      shipments: 1,
      ref: "TXN-2025-001289",
      status: "pending",
      date: "Dec 15, 2025",
      time: "04:45 PM",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto p-1 space-y-6">

      {/* Back */}
      <button className="flex items-center gap-2 text-sm text-gray-500">
        <FaArrowLeft /> Back to Payment
      </button>

      {/* Header */}
      <div>
        <p className="text-2xl font-semibold">Payouts & Earnings</p>
        <p className="text-sm text-gray-500">
          Manage your earnings and request payouts
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Available Balance"
          value="$0"
          subtitle="Ready for payout"
          icon={<FiTrendingUp />}
          highlight
        />
        <StatCard
          title="Processing"
          value="$7,800"
          subtitle="In escrow until delivery"
          icon={<FaClock />}
        />
        <StatCard
          title="Total Paid Out"
          value="$0"
          subtitle="2 transactions"
          icon={<FaCheckCircle />}
        />
        <StatCard
          title="Total Earnings"
          value="$7,800"
          subtitle="Lifetime"
          icon={<FiTrendingUp />}
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Payout History */}
        <div className="lg:col-span-2 bg-white border rounded-xl p-5">
          <p className="text-[20px] arReg  font-medium mb-4">Payout History</p>
          {payouts.map((item, idx) => (
            <PayoutRow key={idx} item={item} />
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6">

          {/* Monthly Summary */}
          <div className="bg-white border robReg rounded-xl p-5 space-y-2">
            <p className="text-[16px] font-medium">This Month</p>
            <div className="flex justify-between  text-[#4A5565] text-[15px]">
              <span className="">Deliveries</span>
              <span>3</span>
            </div>
            <div className="flex justify-between text-[#4A5565] text-[15px]">
              <span>Gross Earnings</span>
              <span>$7,800</span>
            </div>
            <div className="flex justify-between text-[#4A5565] text-[15px]">
              <span>Platform Fee (15%)</span>
              <span>- $1,170</span>
            </div>
            <div className="flex justify-between text-sm font-semibold text-green-600 pt-2 border-t">
              <span className="text-[#4A5565] text-[15px]">Net Earnings</span>
              <span className="text-[20px]">$6,630</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white border rounded-xl p-5 robReg space-y-4">
            <p className="text-[16px] font-medium">Payment Methods</p>

            <div className="flex items-center gap-3 border rounded-lg p-3">
              <FaUniversity className="text-blue-600" />
              <div>
                <p className="text-[16px] text-[#1C398E]">Bank Transfer</p>
                <p className="text-xs text-gray-500">****4532</p>
              </div>
            </div>

            <button className="w-full border rounded-lg py-4 robReg  text-sm hover:bg-gray-50">
              + Add Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentWallet;

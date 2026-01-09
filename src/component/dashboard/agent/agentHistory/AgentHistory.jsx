import React from "react";
import { FaCheckCircle } from "react-icons/fa";

/* -------------------- Small Helpers -------------------- */

const StatusBadge = ({ text }) => (
  <span className="bg-green-100 text-green-700 text-sm px-2 py-0.5 rounded-full">
    {text}
  </span>
);

const HistoryRow = ({ item }) => (
  <div className="flex justify-between items-center py-4 border-b last:border-b-0">

    {/* Left */}
    <div className="flex items-start gap-3">
      <FaCheckCircle className="text-green-500 mt-1" />

      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <p className="text-[16px] font-medium text-gray-900">
            {item.route}
          </p>
          <StatusBadge text="delivered" />
        </div>

        <p className="text-sm text-gray-500">
          {item.mode} • {item.weight} • {item.category}
        </p>

        <p className="text-xs text-gray-400">
          Completed on {item.completed}
        </p>
      </div>
    </div>

    {/* Right */}
    <div className="text-right">
      <p className="text-[20px] font-medium text-green-600">
        ${item.amount}
      </p>
      <p className="text-xs text-gray-400">Earned</p>
    </div>
  </div>
);

/* -------------------- Main Component -------------------- */

const AgentHistory = () => {
  const history = [
    {
      route: "Chicago, IL → Houston, TX",
      mode: "ROAD",
      weight: "2000kg",
      category: "Food & Beverage",
      completed: "Dec 12, 2025",
      amount: "2,750",
    },
    {
      route: "Boston, MA → Atlanta, GA",
      mode: "ROAD",
      weight: "1200kg",
      category: "Electronics",
      completed: "Dec 13, 2025",
      amount: "2,050",
    },
    {
      route: "Seattle, WA → Phoenix, AZ",
      mode: "ROAD",
      weight: "1800kg",
      category: "Industrial",
      completed: "Dec 11, 2025",
      amount: "3,000",
    },
  ];

  return (
    <div className="max-w-8xl robReg mx-auto p-1">

      {/* Header */}
      <p className="text-2xl robMed font-semibold text-gray-900 mb-4">
        History
      </p>

      {/* Card */}
      <div className="bg-white border rounded-xl px-5">
        {history.map((item, idx) => (
          <HistoryRow key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AgentHistory;

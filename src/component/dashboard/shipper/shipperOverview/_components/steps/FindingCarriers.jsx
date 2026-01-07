import React from "react";
import { Alert, Button } from "antd";

/* -------------------- Reusable Row -------------------- */

const SummaryRow = ({ label, value, highlight }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-600 robReg">{label}</span>
    <span
      className={`font-medium robReg ${
        highlight ? "text-[#1C398E] text-xl" : "text-gray-900"
      }`}
    >
      {value}
    </span>
  </div>
);

/* -------------------- Main Component -------------------- */

const FindingCarriers = () => {
  return (
    <div className="w-full h-[60vh] mx-auto p-6">
      <div className="bg-white border rounded-xl p-6 space-y-6">

        {/* Title */}
        <h2 className="text-[21px] robReg font-semibold text-gray-900">
          Confirmation
        </h2>

        {/* Summary */}
        <div className="bg-gray-50 rounded-lg p-5 space-y-3">
          <p className="text-[21px] robReg font-medium text-gray-800">
            Shipment Summary
          </p>

          <SummaryRow label="Route" value="India → Bangladesh" />
          <SummaryRow label="Mode" value="ROAD" />
          <SummaryRow label="Weight" value="100 kg" />
          <SummaryRow label="Category" value="Electronics" />

          <div className="pt-2 border-t">
            <SummaryRow
              label="Estimated Price"
              value="$400"
              highlight
            />
          </div>
        </div>

        {/* Info Alert */}
        <Alert
          message="Your shipment will be matched with verified carriers. You'll receive carrier options within 3–5 minutes."
          type="info"
          showIcon
          className="bg-blue-50 border-blue-200 text-blue-700"
        />


      </div>
    </div>
  );
};

export default FindingCarriers;

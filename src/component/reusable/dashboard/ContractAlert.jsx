import React, { useState } from "react";
import { Checkbox, Button } from "antd";
import { FiArrowLeft } from "react-icons/fi";
import { FaCheckCircle, FaFileArchive } from "react-icons/fa";
import { Outlet, useLocation } from "react-router-dom";

/* -------------------- Small Helpers -------------------- */

const SummaryRow = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-600 robReg">{label}</span>
    <span className="font-medium robReg text-gray-900">{value}</span>
  </div>
);

const InfoBlock = ({ label, value }) => (
  <div className="flex flex-col gap-2">
    <p className="text-xs text-[16.5px] robReg text-gray-500">{label}</p>
    <p className="text-sm font-medium text-[18.5px] robReg text-gray-900">
      {value}
    </p>
  </div>
);

/* -------------------- Main Component -------------------- */

const ContractAlert = () => {
  const [accepted, setAccepted] = useState(false);
  const location = useLocation();

  return (
        <div className="w-[60vw]   h-[70vh] overflow-y-auto mx-auto p-1  space-y-6">
          {/* Back */}
          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
            <FiArrowLeft />
            Back
          </button>

          {/* Header */}
          <div>
            <p className="text-[21px] robReg font-semibold text-gray-900">
              Contract Confirmation
            </p>
            <p className="text-[16px] robReg text-gray-500">
              Review and confirm your shipment contract
            </p>
          </div>

          {/* Contract Card */}
          <div className="bg-white border rounded-xl p-6 space-y-6">
            {/* Service Agreement */}
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
              <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center">
                <FaFileArchive size={22} />
              </div>
              <div>
                <p className="text-[18px] robReg  font-medium text-gray-900">
                  Service Agreement
                </p>
                <p className="text-[14px] robReg text-gray-500">
                  Contract ID: #SXOVLXNX66
                </p>
              </div>
            </div>

            {/* Selected Carrier */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-[18px] font-medium robReg text-gray-900 mb-3">
                Selected Carrier
              </p>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
                  JS
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-[18px] robReg font-medium text-gray-900">
                      John Smith
                    </p>
                    <FaCheckCircle className="text-green-500 text-sm" />
                  </div>
                  <p className="text-[14px] robReg text-gray-500">
                    Global Express Logistics
                  </p>
                </div>
              </div>
            </div>

            {/* Shipment Details */}
            <div>
              <p className="text-[18px] robReg font-medium text-gray-900 mb-4">
                Shipment Details
              </p>
              <div className="grid grid-cols-2 mt-6 w-[40vw] ">
                <InfoBlock label="From" value="INDIA" />
                <InfoBlock label="To" value="BANGLADESH" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 mt-12 gap-4">
                <InfoBlock label="Mode" value="ROAD" />
                <InfoBlock label="Weight" value="100 kg" />
                <InfoBlock label="Category" value="Electronics" />
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-3 border-t pt-4">
              <SummaryRow label="Service Fee" value="$400" />
              <SummaryRow label="Platform Fee (10%)" value="$40" />

              <div className="flex justify-between items-center robReg  pt-3 border-t">
                <p className="text-[22px] font-semibold text-gray-900">
                  Total Amount
                </p>
                <p className="text-[22px] font-semibold text-gray-900">$440</p>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="bg-white border robReg rounded-xl p-6 space-y-4">
            <p className="text-xl font-medium text-gray-900">
              Terms & Conditions
            </p>

            <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside bg-gray-50 p-4 rounded-lg">
              <li>
                The carrier agrees to transport the shipment from the origin to
                the destination as specified.
              </li>
              <li>
                Payment will be held in escrow until successful delivery
                confirmation.
              </li>
              <li>
                The carrier is responsible for the safety and timely delivery of
                the shipment.
              </li>
              <li>
                Insurance coverage is included for the declared value of the
                shipment.
              </li>
              <li>
                Both parties agree to provide accurate information and maintain
                professional communication.
              </li>
              <li>
                In case of delays or issues, the carrier must notify the shipper
                immediately.
              </li>
            </ol>

            <Checkbox
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            >
              I have read and agree to the terms and conditions of this service
              agreement
            </Checkbox>
          </div>

          {/* Footer Actions */}
          <div className="flex gap-4">
            <button className="w-full border bg-white py-4 rounded-xl">
              Cancel
            </button>

            <button
              disabled={!accepted}
              className="w-full text-white rounded-xl bg-black hover:bg-black/75 py-4"
            >
              Confirm
            </button>
          </div>
        </div>
  );
};

export default ContractAlert;

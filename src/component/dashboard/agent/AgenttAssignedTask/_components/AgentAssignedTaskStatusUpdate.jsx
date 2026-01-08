import React from "react";
import {
  FaArrowLeft,
  FaBox,
  FaCheckCircle,
  FaTruck,
  FaMapMarkerAlt,
} from "react-icons/fa";

/* -------------------- Small Helpers -------------------- */

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-[14px] robReg text-gray-500">{label}</p>
    <p className="text-[16px] robReg font-medium text-gray-900">{value}</p>
  </div>
);

const StatusStep = ({
  icon: Icon,
  title,
  subtitle,
  active,
  completed,
  actionLabel,
}) => (
  <div
    className={`flex items-center justify-between p-4 rounded-xl border ${
      active
        ? "bg-blue-50 border-black"
        : "bg-white border-gray-200"
    }`}
  >
    <div className="flex items-center gap-3">
      <div
        className={`h-8 w-8 rounded-full flex items-center justify-center ${
          completed
            ? "bg-green-100 text-green-600"
            : active
            ? "bg-black text-white"
            : "bg-gray-100 text-gray-500"
        }`}
      >
        <Icon className="text-sm" />
      </div>

      <div>
        <p className="text-[16px] font-medium text-gray-900">{title}</p>
        <p className="text-[14px] text-gray-500">{subtitle}</p>
      </div>
    </div>

    <button
      className={`px-4 py-3 text-xs rounded-lg ${
        active
          ? "bg-black text-white hover:bg-gray-800"
          : "bg-gray-300 text-white cursor-not-allowed"
      }`}
      disabled={!active}
    >
      {actionLabel}
    </button>
  </div>
);

/* -------------------- Main Component -------------------- */

const AgentAssignedTaskStatusUpdate = () => {
  return (
    <div className="max-w-8xl mx-auto p-6 space-y-6">

      {/* Back */}
      <button className="flex items-center robReg gap-1 text-sm text-gray-500 hover:text-gray-700">
        <FaArrowLeft />
        Back to Active Deliveries
      </button>

      {/* Header */}
      <div>
        <p className="text-[24px] robReg font-semibold text-gray-900">
          Update Delivery Status
        </p>
        <p className="text-[16px] robReg text-gray-500">
          Keep the shipper informed about the shipment progress
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">

          {/* Shipment Summary */}
          <div className="bg-white border rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <FaBox className="text-gray-600" />
              </div>
              <div>
                <p className="text-[16px] font-medium robReg text-gray-900">
                  New York, NY → Los Angeles, CA
                </p>
                <p className="text-[14px] robReg mt-1 text-gray-500">
                  ROAD • 1500kg • Electronics
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t pt-4">
              <InfoItem label="Shipment ID" value="#S1" />
              <InfoItem label="Payment" value="$3200" />
              <InfoItem
                label="Status"
                value={
                  <span className="text-xs robReg bg-[#DBEAFE] text-blue-700 px-2 py-0.5 rounded-full">
                    delivered
                  </span>
                }
              />
            </div>
          </div>

          {/* Update Status */}
          <div className="bg-white border rounded-xl p-5 space-y-4">
            <p className="text-sm font-medium text-gray-900">
              Update Status
            </p>

            <div className="space-y-3">
              <StatusStep
                icon={FaCheckCircle}
                title="Pickup Confirmed"
                subtitle="Cargo collected from origin"
                completed
                actionLabel="Confirm Pickup"
              />

              <StatusStep
                icon={FaTruck}
                title="In Transit"
                subtitle="Shipment is on the way"
                completed
                actionLabel="Mark In Transit"
              />

              <StatusStep
                icon={FaMapMarkerAlt}
                title="Delivered"
                subtitle="Shipment delivered successfully"
                active
                actionLabel="Mark as Delivered"
              />
            </div>
          </div>

          {/* Chat */}
          <button className="px-12 py-3 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
            Chat
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="bg-white border rounded-xl p-5 space-y-4 h-fit">
<div className="p-6">
  <p className="robReg mb-3 text-[16px]">Requirment</p>

<div>
{
  [1,2,3,4,5].map(items => (
      <div className="flex p-2 items-center gap-2">
    <p className="text-green-400">
      <FaCheckCircle />
    </p>
    <p className="text-sm robReg">Valid Licence required</p>
  </div>
  ))
}
</div>

</div>
        </div>
      </div>
    </div>
  );
};

export default AgentAssignedTaskStatusUpdate;

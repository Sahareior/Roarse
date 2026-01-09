import React from "react";
import { GiCardboardBoxClosed } from "react-icons/gi";

const StatusItem = ({ title, time, active }) => (
  <div className="flex items-start gap-3">
    
    <div className="flex flex-col items-center">
      <span
        className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
          active ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-400"
        }`}
      >
        ✓
      </span>
      {title !== "Delivered" && <div className="h-6 w-px bg-gray-300 mt-1" />}
    </div>
    <div>
      <p
        className={`text-sm font-medium ${
          active ? "text-gray-900" : "text-gray-400"
        }`}
      >
        {title}
      </p>
      {time && <p className="text-xs text-gray-500">{time}</p>}
    </div>
  </div>
);

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-sm font-medium">{value}</p>
  </div>
);

const ShipperIndividualLiveTracking = () => {
  return (
    <div className="p-6 max-w-8xl mx-auto space-y-6">
      {/* Back */}
      <a className="text-[21px] robReg text-gray-600 cursor-pointer hover:text-gray-900">
        ← Back
      </a>

      {/* Header */}
      <div>
        <h1 className="text-lg font-semibold">Track Shipment</h1>
        <p className="text-sm text-gray-500">
          Real-time tracking and status updates
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <div className="text-blue-700 text-4xl">📍</div>
          <p className="mt-2 text-sm font-medium">Live map tracking</p>
          <p className="text-xs text-gray-600">
            San Francisco, CA → Denver, CO
          </p>
        </div>

        {/* Status */}
        <div className="bg-white border rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-medium">Shipment Status</h3>

          <StatusItem title="Confirmed" time="Dec 13, 10:30 AM" active />
          <StatusItem title="Picked Up" time="Dec 13, 2:15 PM" active />
          <StatusItem title="In Transit" time="Dec 13, 4:00 PM" active />
          <StatusItem title="Out for Delivery" />
          <StatusItem title="Delivered" />
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border rounded-xl p-5">
          <h3 className="text-sm font-medium mb-4">Shipment Details</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <DetailItem label="Tracking ID" value="#S7" />
            <DetailItem label="Route" value="San Francisco, CA → Denver, CO" />
            <DetailItem label="Mode" value="ROAD" />
            <DetailItem label="Weight" value="2500 kg" />
            <DetailItem label="Category" value="Electronics" />
          </div>
        </div>

        {/* Estimated Delivery + Feedback Section */}
        <div className="space-y-6">
          {/* Estimated Delivery Card */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
            <h3 className="text-sm font-medium text-blue-900 mb-1 flex items-center justify-center gap-2">
              <GiCardboardBoxClosed size={24} /> Estimated Delivery
            </h3>
            <p className="text-sm font-semibold text-blue-800">
              Tomorrow, Dec 14 between 2:00 PM - 6:00 PM
            </p>
          </div>

          {/* Feedback Section */}
          <div className="bg-white border rounded-xl p-5 space-y-4">
            <h3 className="text-sm font-medium">Feedback</h3>

            <textarea
              placeholder="Enter your feedback"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black transition"
            />

            <div className="space-y-2">
              <p className="text-xs text-gray-500">Add Evidence (Optional)</p>
              <p className="text-xs text-gray-500">
                Photos, screenshots, or documents that support your report
              </p>

              <button className="w-full border-2 border-dashed border-blue-300 rounded-lg py-6 text-sm text-blue-600 hover:border-blue-500 hover:bg-blue-50 transition flex items-center justify-center gap-2">
                <span>📎</span>
                Add Photo/Document
              </button>
            </div>

            <div className="flex justify-end">
              <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipperIndividualLiveTracking;

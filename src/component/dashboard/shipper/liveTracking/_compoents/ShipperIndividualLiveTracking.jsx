import React from "react";

const StatusItem = ({ title, time, active }) => (
  <div className="flex items-start gap-3">
    <div className="flex flex-col items-center">
      <span
        className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
          active
            ? "bg-green-100 text-green-600"
            : "bg-gray-200 text-gray-400"
        }`}
      >
        ✓
      </span>
      <div className="h-6 w-px bg-gray-300 mt-1" />
    </div>
    <div>
      <p
        className={`text-sm font-medium ${
          active ? "text-gray-900" : "text-gray-400"
        }`}
      >
        {title}
      </p>
      {time && (
        <p className="text-xs text-gray-500">{time}</p>
      )}
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
      <a className="text-[21px]  robReg text-gray-600 cursor-pointer">
        ← Back
      </a>

      {/* Header */}
      <div>
        <h1 className="text-lg font-semibold">
          Track Shipment
        </h1>
        <p className="text-sm text-gray-500">
          Real-time tracking and status updates
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <div className="text-blue-700 text-4xl">📍</div>
          <p className="mt-2 text-sm font-medium">
            Live map tracking
          </p>
          <p className="text-xs text-gray-600">
            San Francisco, CA → Denver, CO
          </p>

          {/* Mock markers */}
          
        </div>

        {/* Status */}
        <div className="bg-white border rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-medium">
            Shipment Status
          </h3>

          <StatusItem
            title="Confirmed"
            time="Dec 13, 10:30 AM"
            active
          />
          <StatusItem
            title="Picked Up"
            time="Dec 13, 2:15 PM"
            active
          />
          <StatusItem
            title="In Transit"
            time="Dec 13, 4:00 PM"
            active
          />
          <StatusItem title="Out for Delivery" />
          <StatusItem title="Delivered" />
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border rounded-xl p-5">
          <h3 className="text-sm font-medium mb-4">
            Shipment Details
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <DetailItem label="Tracking ID" value="#S7" />
            <DetailItem
              label="Route"
              value="San Francisco, CA → Denver, CO"
            />
            <DetailItem label="Mode" value="ROAD" />
            <DetailItem label="Weight" value="2500 kg" />
            <DetailItem
              label="Category"
              value="Electronics"
            />
          </div>
        </div>

        {/* ETA */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 className="text-sm font-medium text-blue-800 mb-1">
            Estimated Delivery
          </h3>
          <p className="text-xs text-blue-700">
            Tomorrow, Dec 14 between 2:00 PM – 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShipperIndividualLiveTracking;

import { Divider } from "antd";
import React from "react";

/* -------------------- Small Reusable Components -------------------- */

const Card = ({ title, action, children }) => (
  <div className="bg-white border rounded-xl w-full p-5 space-y-4">
    {(title || action) && (
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
      </div>
    )}
    <div className="flex w-full  justify-between bg-[#F9FAFB] p-5 ">
      <div>{children}</div>{" "}
      <div className={`${title === "Quick Actions" ? "w-full" : "w-[10vw]"}`}>
        {action}
      </div>
    </div>
  </div>
);

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-sm font-medium text-gray-900">{value}</p>
  </div>
);

const Button = ({ children, variant = "primary" }) => {
  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      className={`w-full py-2.5 rounded-lg text-sm font-medium transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

const TimelineItem = ({ title, subtitle, completed }) => (
  <div className="flex gap-3 items-start">
    <div
      className={`h-5 w-5 rounded-full flex items-center justify-center ${
        completed ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      {completed && <span className="text-white text-xs">✓</span>}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-900">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  </div>
);

const ShippingDetails = () => {
  return (
    <div className="max-w-8xl mx-auto p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <button className="text-sm text-gray-500 mb-1">← Back</button>
          <h1 className="text-xl font-semibold text-gray-900">
            Shipment Details
          </h1>
          <p className="text-xs text-gray-500">Tracking ID: #511</p>
        </div>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-600">
          confirmed
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Route Info */}
          <Card title="Route Information">
            <div className="">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <InfoItem label="From" value="Dallas, TX" />
                <InfoItem label="To" value="Chicago, IL" />
              </div>
              <Divider />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <InfoItem label="Transport Mode" value="ROAD" />
                <InfoItem label="Weight" value="2200 kg" />
                <InfoItem label="Category" value="Electronics" />
              </div>
            </div>
          </Card>

          {/* Current Status */}
          <Card title="Current Status" action={<Button>Track Shipment</Button>}>
            <p className="text-sm font-medium text-gray-900">Confirmed</p>
            <p className="text-xs text-gray-500">
              Carrier has been assigned and confirmed
            </p>
          </Card>

          {/* Timeline */}
          <Card title="Shipment Timeline">
            <div className="space-y-4">
              <TimelineItem
                title="Shipment Created"
                subtitle="Dec 13, 2025, 09:00 AM"
                completed
              />
              <TimelineItem
                title="Carrier Assigned"
                subtitle="Carrier confirmed and ready"
                completed
              />
            </div>
          </Card>

          {/* Carrier */}
          <Card
            title="Assigned Carrier"
            action={<Button>Track Shipment</Button>}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
                  SJ
                </div>
                <div>
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-xs text-gray-500">
                    Continental Freight • ⭐ 4.6 • 421 deliveries
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Pricing */}
          <Card title="Pricing">
            <div className="space-y-3">
              <InfoItem label="Estimated Price" value="$2,900" />
              <InfoItem label="Final Price" value="$2,850" />
              <Divider />
              <div className="border-t pt-3 w-full flex justify-between font-semibold text-blue-600">
                <span>Total</span>

                <span>$2,850</span>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
    <div className="w-full border rounded-xl p-5 bg-white">
        <p>Quick Actions</p>
        <div className="flex flex-col gap-3 mt-5">
            <button className="px-4 py-2 bg-black text-white rounded-md mr-2">Track Shipment</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Back to Dashboard</button>
        </div>
    </div>

          {/* Help */}
          <Card>
            <p className="text-sm font-medium text-blue-600">Need Help?</p>
            <p className="text-xs text-gray-500 mb-3">
              Contact our support team for assistance with this shipment
            </p>
            <button className="text-sm text-blue-600 font-medium">
              Contact Support
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;

import React from "react";
import { FaTruck, FaPlane, FaCheckCircle } from "react-icons/fa";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { Link, Outlet, useLocation } from "react-router-dom";

/* -------------------- Small Components -------------------- */

const StatusBadge = ({ status }) => (
  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
    <FaCheckCircle className="text-xs" />
    {status}
  </span>
);

const InfoRow = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 text-xs text-gray-500">
    <Icon className="text-sm" />
    <span>{text}</span>
  </div>
);

const ShipmentItem = ({ shipment }) => (
  <div className="flex items-center justify-between p-5 bg-white border rounded-xl hover:shadow-sm transition">
    
    {/* Left */}
    <div className="flex gap-4">
      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-black text-white">
        <shipment.icon className="text-lg" />
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-gray-900">
            #{shipment.id}
          </p>
          <StatusBadge status={shipment.status} />
        </div>

        <InfoRow
          icon={FiMapPin}
          text={`${shipment.from} → ${shipment.to}`}
        />
        <InfoRow icon={FiCalendar} text={shipment.date} />
        <InfoRow
          icon={FaTruck}
          text={`Carrier: ${shipment.carrier}`}
        />
      </div>
    </div>

    {/* Right */}
    <div className="text-right space-y-2">
      <p className="text-sm font-semibold text-gray-900">
        ${shipment.price}
      </p>
      <Link to={`/dashboard/shipper-dashboard/history/${shipment.id}`}>
      <button className="text-xs text-gray-600 hover:text-black font-medium">
        View Details
      </button>
      </Link>
    </div>
  </div>
);

/* -------------------- Main Component -------------------- */

const ShipperHistory = () => {
const location = useLocation();

  const shipments = [
    {
      id: "SH001",
      status: "delivered",
      from: "New York, NY",
      to: "Los Angeles, CA",
      date: "December 10, 2024",
      carrier: "Fast Transit LLC",
      price: 650,
      icon: FaTruck,
    },
    {
      id: "SH002",
      status: "delivered",
      from: "Chicago, IL",
      to: "Miami, FL",
      date: "December 5, 2024",
      carrier: "Express Cargo",
      price: 2200,
      icon: FaPlane,
    },
    {
      id: "SH003",
      status: "delivered",
      from: "Seattle, WA",
      to: "Tokyo, Japan",
      date: "November 28, 2024",
      carrier: "Global Movers",
      price: 1500,
      icon: FaPlane,
    },
    {
      id: "SH004",
      status: "delivered",
      from: "Boston, MA",
      to: "Atlanta, GA",
      date: "November 20, 2024",
      carrier: "Prime Transport",
      price: 580,
      icon: FaTruck,
    },
    {
      id: "SH005",
      status: "delivered",
      from: "San Francisco, CA",
      to: "London, UK",
      date: "November 15, 2024",
      carrier: "Swift Logistics",
      price: 2450,
      icon: FaPlane,
    },
  ];

  return (
 <div>
    {
        location.pathname === '/dashboard/shipper-dashboard/history' ? (   <div className="max-w-8xl mx-auto p-6 bg-gray-50 min-h-screen space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">
          Shipment History
        </h1>
        <p className="text-sm text-gray-500">
          Total: {shipments.length} shipments
        </p>
      </div>

      {/* List */}
      <div className="space-y-4">
        {shipments.map((shipment) => (
          <ShipmentItem key={shipment.id} shipment={shipment} />
        ))}
      </div>
    </div>):(<Outlet />)
    }
 </div>
  );
};

export default ShipperHistory;

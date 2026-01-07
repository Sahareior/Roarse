import React, { useState } from "react";
import {
  FiArrowLeft,
  FiFilter,
  FiTruck,
  FiDollarSign,
  FiCheckCircle,
  FiBox,
  FiStar,
} from "react-icons/fi";

/* -------------------- Helpers -------------------- */

const Tab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-full text-xs font-medium transition ${
      active
        ? "bg-[#1C398E] text-white"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
  >
    {label}
  </button>
);

const IconWrapper = ({ children, active }) => (
  <div
    className={`h-8 w-8 rounded-full flex items-center justify-center ${
      active ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
    }`}
  >
    {children}
  </div>
);

/* -------------------- Notification Item -------------------- */

const NotificationItem = ({ item }) => {
  const iconMap = {
    delivered: <FiCheckCircle />,
    carrier: <FiTruck />,
    payment: <FiDollarSign />,
    transit: <FiBox />,
    rating: <FiStar />,
  };

  return (
    <div
      className={`border  p-4 flex gap-4 justify-between ${
        item.unread
          ? "bg-blue-50 border-l-4 border-blue-300"
          : "bg-white border-gray-200"
      }`}
    >
      {/* Left */}
      <div className="flex gap-4 robReg">
        <IconWrapper active={item.unread}>
          {iconMap[item.type]}
        </IconWrapper>

        <div className="space-y-2">
          <p className={`${item.unread === true? 'text-blue-400':'text-black'} text-sm font-medium `}>
            {item.title}
          </p>
          <p className="text-xs text-gray-600">
            {item.description}
          </p>

          {item.action && (
            <button className="text-xs text-blue-600 font-medium hover:underline">
              {item.action} →
            </button>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center items-end gap-2">
        <p className="text-xs text-gray-500">{item.time}</p>
        {item.unread && (
          <span className="h-2 w-2 rounded-full bg-blue-600" />
        )}
      </div>
    </div>
  );
};

/* -------------------- Main Component -------------------- */

const Notification = () => {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "delivered",
      title: "Shipment Delivered Successfully",
      description:
        "Your shipment from Los Angeles to New York has been delivered. Please rate your carrier experience.",
      time: "15m ago",
      action: "View Details & Rate",
      unread: true,
      category: "shipments",
    },
    {
      id: 2,
      type: "carrier",
      title: "Carrier Assigned",
      description:
        "Global Express Logistics has been assigned to your shipment. Estimated pickup: Dec 20, 2025.",
      time: "2h ago",
      action: "Track Shipment",
      unread: true,
      category: "shipments",
    },
    {
      id: 3,
      type: "payment",
      title: "Payment Successful",
      description:
        "Your payment of $2,850 has been processed successfully. Receipt has been sent to your email.",
      time: "4h ago",
      action: "View Payment History",
      unread: true,
      category: "payments",
    },
    {
      id: 4,
      type: "transit",
      title: "Shipment In Transit",
      description:
        "Your shipment is currently in transit. Current location: Chicago, IL. Expected delivery: Dec 21.",
      time: "6h ago",
      action: "Track Live",
      unread: false,
      category: "shipments",
    },
    {
      id: 5,
      type: "carrier",
      title: "AI Matching Complete",
      description:
        "3 carriers matched for your shipment to Seattle. Review and select your preferred carrier.",
      time: "8h ago",
      unread: false,
      category: "shipments",
    },
    {
      id: 6,
      type: "carrier",
      title: "Profile Verification Complete",
      description:
        "Your shipper profile has been verified. You can now create unlimited shipments.",
      time: "1d ago",
      unread: false,
      category: "account",
    },
    {
      id: 7,
      type: "rating",
      title: "Rate Your Recent Delivery",
      description:
        "How was your experience with Swift Cargo Services? Your feedback helps improve our platform.",
      time: "5d ago",
      unread: false,
      category: "shipments",
    },
  ];

  const filtered =
    activeTab === "all"
      ? notifications
      : activeTab === "unread"
      ? notifications.filter((n) => n.unread)
      : notifications.filter((n) => n.category === activeTab);

  return (
    <div className="max-w-8xl mx-auto p-6 space-y-6">

      {/* Back */}
      <button className="flex items-center robReg gap-1 text-sm text-gray-500 hover:text-gray-700">
        <FiArrowLeft />
        Back to dashboard
      </button>

      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <p className="text-xl robReg font-semibold text-gray-900">
            Notifications
          </p>
          <span className="text-xs bg-[#1C398E] text-white px-2 py-0.5 rounded-full">
            3 new
          </span>
        </div>
        <p className="text-sm robReg text-gray-500">
          Stay updated with your shipments and account activity
        </p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 border rounded-xl p-3 bg-white">
        <FiFilter className="text-gray-500" />
        <Tab
          label="All (7)"
          active={activeTab === "all"}
          onClick={() => setActiveTab("all")}
        />
        <Tab
          label="Unread (3)"
          active={activeTab === "unread"}
          onClick={() => setActiveTab("unread")}
        />
        <Tab
          label="Shipments"
          active={activeTab === "shipments"}
          onClick={() => setActiveTab("shipments")}
        />
        <Tab
          label="Payments"
          active={activeTab === "payments"}
          onClick={() => setActiveTab("payments")}
        />
      </div>

      {/* List */}
      <div className="">
        {filtered.map((item) => (
          <NotificationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Notification;

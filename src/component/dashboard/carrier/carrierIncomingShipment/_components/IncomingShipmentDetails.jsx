import React from "react";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiBox, FiClock, FiDollarSign } from "react-icons/fi";
import { Link, Outlet, useLocation } from "react-router-dom";

/* -------------------- Reusable Blocks -------------------- */

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-2 mb-3">
    <Icon className="text-blue-600" />
    <p className="text-[14px] robReg text-[#101828]">{title}</p>
  </div>
);

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-[14px] text-[#4A5565] robReg">{label}</p>
    <p className="text-[18px] text-[#101828] robReg">{value}</p>
  </div>
);

const Requirement = ({ text }) => (
  <div className="flex items-center gap-2 text-[14px] text-[#101828]">
    <FaCheckCircle className="text-green-500" />
    {text}
  </div>
);

/* -------------------- Main Component -------------------- */

const IncomingShipmentDetails = () => {
    const location = useLocation()
  return (
<div>
    {
location.pathname === '/dashboard/carrier-dashboard/incoming-shipments/:incomingId' ? (
        <div className="max-w-8xl bg-white mx-auto p-6 space-y-6">

      {/* Back */}
      <button className="text-[#4A5565] text-xs robReg flex items-center gap-2">
        <FaArrowLeft /> Back to Incoming Shipment
      </button>

      {/* Header */}
      <div>
        <p className="text-[24px] robReg text-[#101828]">
          Shipment Request
        </p>
        <p className="text-[16px] robReg text-[#4A5565] mt-1">
          Review the details before accepting
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 border p-6 rounded-xl space-y-3">

          {/* Route */}
          <div className="  rounded-xl p-5">
            <SectionHeader icon={FaLocationDot} title="Route" />

            <div className="grid grid-cols-2 gap-6">
              <InfoItem label="From" value="Shanghai" />
              <InfoItem label="To" value="Rotterdam" />
            </div>
          </div>

          {/* Shipment */}
          <div className="  rounded-xl p-5">
            <SectionHeader icon={FiBox} title="Shipment" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <InfoItem label="Transport Mode" value="SEA" />
              <InfoItem label="Weight" value="8000 kg" />
              <InfoItem label="Category" value="Industrial" />
              <InfoItem label="Shipment ID" value="359 Fill x 28 Hug" />
            </div>
          </div>

          {/* Timeline */}
          <div className="  rounded-xl p-5">
            <SectionHeader icon={FiClock} title="Timeline" />

            <div className="grid grid-cols-2 gap-6">
              <InfoItem label="Pickup Date" value="ASAP" />
              <InfoItem
                label="Expected Delivery"
                value="Within 2–3 days"
              />
            </div>
          </div>

          {/* Payment */}
          <div className="bg-[#EFF6FF] border border-blue-200 rounded-xl p-7 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FiDollarSign className="text-blue-600" />
              <div>
                <p className="text-[15px] robReg text-[#1C398E]">
                  Payment
                </p>
                <p className="text-[16px] robReg text-[#4A5565]">
                  Held in escrow until delivery
                </p>
              </div>
            </div>

            <p className="text-[22px] robReg text-[#1C398E]">
              $12,500
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Requirements */}
          <div className="bg-white border rounded-xl p-5 space-y-3">
            <p className="text-[16px] robReg text-[#101828]">
              Requirements
            </p>

            <Requirement text="Valid commercial driver's license required" />
            <Requirement text="Vehicle must match transport mode" />
            <Requirement text="Cargo insurance coverage required" />
            <Requirement text="Real-time tracking updates mandatory" />
          </div>

          {/* Shipper Card */}
          <div className="bg-white border rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-black text-white flex items-center justify-center">
                AD
              </div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[16px] robReg text-[#101828]">
                    David Smith
                  </p>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>
                <p className="text-xs robMed font-bold text-[#4A5565]">
                  ID: 00214 • Since: 2024
                </p>
              </div>
            </div>

            <div className="text-sm text-[#101828]">
              <p className="text-[#4A5565]">Company Name</p>
              <p className="robMed">ABC Trading Ltd</p>
            </div>

            <div className="text-sm text-[#101828]">
              <p className="text-[#4A5565]">Registration Number</p>
              <p className="robMed">REG-123-456-789</p>
            </div>

           <Link to='/dashboard/carrier-dashboard/carrier-profile'>
            <button className="w-full mt-4 py-2 border rounded-lg text-white bg-black text-sm hover:bg-gray-50">
              View Profile
            </button>
           </Link>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex  gap-8 pt-4">
        <button className="px-12 py-2 border rounded-lg text-sm">
          Reject
        </button>

        <div className="flex gap-7">
          <button className="px-12 py-2 bg-black text-white rounded-lg text-sm">
            Chat & Bargain
          </button>
          <button className="px-12 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
            Accept Request
          </button>
        </div>
      </div>
    </div>
):(<Outlet />)
    }
</div>
  );
};

export default IncomingShipmentDetails;

import React from "react";
import { FaArrowLeft, FaCheckCircle, FaFileArchive } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiBox, FiClock, FiDollarSign } from "react-icons/fi";
import { Link, Outlet, useLocation } from "react-router-dom";

/* -------------------- Reusable Blocks -------------------- */

const DocumnentCards = () => {
  return (
      <div className="flex border p-4 justify-between">
  <div className="flex items-center gap-2 ">
    <p className="p-2 rounded-2xl bg-[#6A7282]"><FaFileArchive /></p>
    <div>
      <p className="text-[16px] ">Business Licence</p>
      <p className="text-xs text-[#6A7282]">Uploaded: 10/12/25</p>
    </div>
  </div>
  <button className="bg-black text-white hover:bg-black/35  px-8 py-1 rounded-xl">
    View
  </button>
</div>
  )
}

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

const CarrierShipmentReqDetails = () => {
    const location = useLocation()
  return (
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

<div className="border p-2 md:p-12 lg:p-4 2xl:p-8">
  <p className="text-[16px] py-2 robReg pb-5">Documents</p>
    
    <div className="grid max-h-[50vh] overflow-y-scroll  grid-1 gap-5">
      {
        [1,2,6,7,8,9,0].map(items => (
          <DocumnentCards />
        ))
      }
    </div>

</div>


        </div>
      </div>

      {/* Actions */}
      <div className="flex  gap-8 pt-4">
        <button className="px-12 py-2 border hover:bg-black/30 rounded-lg text-sm">
          Reject
        </button>

        <div className="flex gap-7">
         
          <button className="px-12 py-4 bg-[#027B34] text-white rounded-lg text-sm hover:bg-green-600">
            Accept Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarrierShipmentReqDetails;

import { Divider } from "antd";
import React from "react";
import {
  FaStar,
  FaCheckCircle,
  FaEdit,
  FaUser,
  FaBuilding,
  FaTruck,
  FaFileAlt,
  FaUniversity,
} from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";

/* -------------------- Reusable Blocks -------------------- */

const Card = ({ title, icon: Icon, children }) => (
  <div className="bg-white robReg border rounded-xl p-5 space-y-4">
    <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
      <Icon className="text-gray-500" />
      {title}
    </div>
    {children}
  </div>
);

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-[14px] text-gray-500">{label}</p>
    <p className="text-[16px] font-medium text-gray-900">{value}</p>
  </div>
);

const VerifiedRow = ({ label }) => (
  <div className="flex items-center justify-between text-sm">
    <span>{label}</span>
    <FaCheckCircle className="text-green-500" />
  </div>
);

const DocumentsRow =({label}) => (
      <div className="border popReg p-3">
        <div className="flex  items-center justify-between">
            <div>
                <p className="text-[14px]">Driver's Lincence</p>
                <p className="text-[12px] text-[#4A5565]">Expirece: Mar 15, 2027</p>
            </div>
            <p className="px-5 py-1 text-[#008236] bg-green-100 rounded-2xl">Verified</p>
        </div>
  </div>
)

const Stat = ({ value, label, highlight }) => (
  <div className="text-center">
    <p
      className={`text-lg font-semibold ${
        highlight ? "text-green-500" : "text-white"
      }`}
    >
      {value}
    </p>
    <p className="text-xs text-gray-300">{label}</p>
  </div>
);

/* -------------------- Main Component -------------------- */

const CarrierSettings = () => {
    const location = useLocation()
  return (
<div>
    {
        location.pathname === '/dashboard/carrier-dashboard/settings' ? (
                <div className="max-w-8xl mx-auto p-1 ">

      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900  p-6 text-white border-b flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center font-semibold">
            JS
          </div>
          <div>
            <p className="text-lg font-semibold">John Smith</p>
            <p className="text-sm text-gray-300">
              Global Express Logistics
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-300 mt-1">
              <FaStar className="text-yellow-400" />
              4.9 • 376 reviews • 342 deliveries
            </div>
          </div>
        </div>

       <Link to='/dashboard/carrier-dashboard/settings/carrier-edit'>
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm">
          <FaEdit />
          Edit Profile
        </button>
       </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black  p-4">
        <Stat value="338" label="Completed" />
        <Stat value="98.5%" label="On-Time Rate" highlight />
        <Stat value="4.9" label="Average Rating" />
        <Stat value="Jun 2024" label="Member Since" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-6">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">

          {/* Personal Info */}
          <Card title="Personal Information" icon={FaUser}>
            <div className="grid grid-cols-2 gap-4">
              <InfoItem label="First Name" value="John" />
              <InfoItem label="Last Name" value="Smith" />
              <InfoItem label="Email" value="carrier@demo.com" />
              <InfoItem label="Phone" value="+1 (555) 123-4567" />
              <InfoItem label="Date of Birth" value="March 15, 1985" />
              <InfoItem label="Address" value="123 Main Street" />
              <InfoItem label="City, State" value="Los Angeles, CA" />
              <InfoItem label="ZIP Code" value="90001" />
            </div>
          </Card>

          {/* Company Info */}
          <Card title="Company Information" icon={FaBuilding}>
            <div className="grid grid-cols-2 gap-4">
              <InfoItem label="Company Name" value="Global Express Logistics" />
              <InfoItem label="Business Type" value="LLC" />
              <InfoItem label="Tax ID (EIN)" value="12-3456789" />
              <InfoItem label="DOT License Number" value="DOT-123456" />
              <InfoItem label="Insurance Provider" value="American Transport Insurance" />
              <InfoItem label="Insurance Policy" value="ATT-789456123" />
              <InfoItem label="Insurance Expiry" value="Dec 31, 2026" />
            </div>
          </Card>

          {/* Vehicle Info */}
          <Card title="Vehicle Information" icon={FaTruck}>
            <div className="grid grid-cols-2 gap-4">
              <InfoItem label="Vehicle Type" value="Box Truck" />
              <InfoItem label="Make & Model" value="Ford F-650" />
              <InfoItem label="Year" value="2023" />
              <InfoItem label="License Plate" value="CA-ABC123" />
              <InfoItem label="VIN" value="1FDXG5TNE12345" />
              <InfoItem label="Capacity" value="5000 kg" />
              <InfoItem label="Dimensions" value="24ft × 8ft × 8ft" />
            </div>
          </Card>

          {/* Bank Info */}
          <Card title="Bank Information" icon={FaUniversity}>
            <div className="grid grid-cols-2 gap-4">
              <InfoItem label="Account Holder" value="John Smith" />
              <InfoItem label="Bank Name" value="Chase Bank" />
              <InfoItem label="Account Type" value="Business Checking" />
              <InfoItem label="Account Number" value="****4532" />
            </div>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          {/* Verification */}
          <Card title="Verification Status" icon={FaCheckCircle}>
            <div className="space-y-2">
              <VerifiedRow label="Email Verified" />
              <VerifiedRow label="Phone Verified" />
              <VerifiedRow label="Identity Verified" />
              <VerifiedRow label="Background Check" />
              <VerifiedRow label="Insurance Verified" />
              <VerifiedRow label="License Verified" />
            </div>
<Divider />
            <div className="mt-3  bg-green-50 text-green-700 text-sm px-3 py-4 rounded-lg">
              Fully Verified Carrier
            </div>
          </Card>

          {/* Documents */}
          <Card title="Documents" icon={FaFileAlt}>
            <div className="space-y-2 text-sm">
              <DocumentsRow label="Driver’s License (exp. Mar 15, 2027)" />
              <DocumentsRow label="Commercial Insurance (exp. Dec 31, 2026)" />
              <DocumentsRow label="DOT License (exp. Jun 30, 2028)" />
              <DocumentsRow label="Vehicle Registration (exp. Mar 1, 2026)" />
            </div>

            <button className="w-full mt-3 border rounded-lg py-2 text-sm hover:bg-gray-50">
              + Upload New Document
            </button>
          </Card>

          {/* Account Actions */}
          <Card title="Account Actions" icon={FaUser}>
            <div className="flex flex-col gap-6 text-sm">
              <button className=" bg-stone-400 text-center rounded-xl hover:bg-slate-700 text-white px-7 py-4 hover:underline">
                Change Password
              </button>

              <button className=" bg-black hover:bg-black/75 text-center rounded-xl text-white px-7 py-4 hover:underline">
                Notification Preference
              </button>
 
            </div>
          </Card>
        </div>
      </div>
    </div>
        ) : (<Outlet />)
    }
</div>
  );
};

export default CarrierSettings;

import React, { useState } from "react";
import {
  FaArrowLeft,
  FaUser,
  FaBuilding,
  FaTruck,
  FaCamera,
} from "react-icons/fa";

/* -------------------- Helpers -------------------- */

const TabButton = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 text-sm px-3 py-2 border-b-2 transition ${
      active
        ? "border-blue-600 text-blue-600"
        : "border-transparent text-gray-500 hover:text-gray-700"
    }`}
  >
    <Icon className="text-sm" />
    {label}
  </button>
);

const InputField = ({ label, placeholder, type = "text" }) => (
  <div>
    <p className="text-xs text-gray-500 mb-1">{label}</p>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>
);

const SelectField = ({ label, children }) => (
  <div>
    <p className="text-xs text-gray-500 mb-1">{label}</p>
    <select className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black">
      {children}
    </select>
  </div>
);

/* -------------------- Main Component -------------------- */

const CarrierProfileEdit = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="max-w-8xl robReg mx-auto p-1 space-y-6">
      {/* Back */}
      <button className="flex items-center gap-2 text-sm text-gray-500">
        <FaArrowLeft />
        Back to Settings
      </button>

      {/* Header */}
      <div>
        <p className="text-xl font-semibold text-gray-900">Edit Profile</p>
        <p className="text-sm text-gray-500">
          Update your personal and business information
        </p>
      </div>

      {/* Profile Picture */}
      <div className="bg-white border rounded-xl p-5 flex items-center justify-between">
        <div className="flex items-center gap-7">
          <div className="h-14 w-14 rounded-full bg-black text-white flex items-center justify-center text-lg">
            JS
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Profile Picture</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-black text-white border rounded-lg text-xs flex items-center gap-2">
                <FaCamera />
                Upload New Photo
              </button>
              <button className="px-3 py-2 border rounded-lg text-sm">
                Remove
              </button>
            </div>
            <p className="text-xs text-gray-500">
              JPG, PNG or GIF. Max size 3MB
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border rounded-xl">
        <div className="flex border-b px-4">
          <TabButton
            icon={FaUser}
            label="Personal Info"
            active={activeTab === "personal"}
            onClick={() => setActiveTab("personal")}
          />
          <TabButton
            icon={FaBuilding}
            label="Company Info"
            active={activeTab === "company"}
            onClick={() => setActiveTab("company")}
          />
          <TabButton
            icon={FaTruck}
            label="Vehicle Info"
            active={activeTab === "vehicle"}
            onClick={() => setActiveTab("vehicle")}
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* PERSONAL INFO */}
          {activeTab === "personal" && (
            <>
              <p className="text-sm font-medium">Personal Information</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="First Name" placeholder="John" />
                <InputField label="Last Name" placeholder="Smith" />
                <InputField label="Email" placeholder="carrier@demo.com" />
                <InputField label="Phone" placeholder="+1 (555) 123-4567" />
                <InputField
                  label="Date of Birth"
                  placeholder="12/12/1990"
                  type="date"
                />
                <InputField label="Address" placeholder="123 Main Street" />
                <InputField label="City" placeholder="Los Angeles" />
                <SelectField label="State">
                  <option>California</option>
                  <option>Texas</option>
                  <option>New York</option>
                </SelectField>
                <InputField label="ZIP Code" placeholder="90001" />
              </div>
            </>
          )}

          {/* COMPANY INFO */}
          {activeTab === "company" && (
            <>
              <p className="text-sm font-medium">
                Company Information (Optional)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Company Name"
                  placeholder="Global Express Logistics"
                />
                <SelectField label="Business Type">
                  <option>LLC</option>
                  {/* Add more options as needed */}
                </SelectField>
                <InputField label="Tax ID (EIN)" placeholder="12-3456789" />
                <InputField
                  label="DOT License Number"
                  placeholder="DOT-123456"
                />
                <InputField
                  label="Insurance Provider"
                  placeholder="American Transport Insurance"
                />
                <InputField
                  label="Insurance Policy Number"
                  placeholder="ATI-789456123"
                />
                <InputField
                  label="Insurance Expiry Date"
                  placeholder="12/31/2026"
                  type="date"
                />
              </div>
            </>
          )}

          {/* VEHICLE INFO */}
          {activeTab === "vehicle" && (
            <>
              <p className="text-sm font-medium">Vehicle Information</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Vehicle Type" placeholder="Box Truck" />
                <InputField label="Make" placeholder="Ford" />
                <InputField label="Model" placeholder="F-650" />
                <InputField label="Year" placeholder="2022" />
                <InputField label="License Plate" placeholder="CA ABC123" />
                <InputField label="VIN" placeholder="1FDUF5GT3NED12345" />
                <InputField label="Capacity" placeholder="5000 kg" />
                <InputField label="Dimensions" placeholder="24ft x 8ft x 8ft" />
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t p-4">
          <button className="px-4 py-2 border rounded-lg text-sm">
            Cancel
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarrierProfileEdit;

import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaFileAlt,
  FaTrash,
  FaCheck,
} from "react-icons/fa";

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">

    <div>
      <p className="text-[13px] robReg text-gray-500">{label}</p>
     <div className="flex items-center gap-3">
            <span className="text-gray-500 ">{icon}</span>
         <p className="text-[17px] robReg font-medium">{value}</p>
     </div>
    </div>
  </div>
);

const DocumentItem = ({ title, date }) => (
  <div className="flex justify-between items-center border rounded-lg p-4">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
        <FaFileAlt className="text-gray-500" />
      </div>
      <div>
        <p className="text-sm robReg font-medium">{title}</p>
        <p className="text-xs robReg text-gray-500">
          Uploaded: {date}
        </p>
      </div>
    </div>

    <button className="bg-black text-white px-4 py-1.5 rounded text-xs">
      View
    </button>
  </div>
);

const ApplicationDetails = () => {
  return (
    <div className="p-6 max-w-8xl mx-auto space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Agent Information */}
        <div className="lg:col-span-2 bg-white border rounded-xl p-5">
          <h3 className="text-[18px] robReg font-semibold flex items-center gap-2 mb-4">
            <FaUser />
            Agent Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoItem
              icon={<FaUser />}
              label="Full Name"
              value="Joy"
            />
            <InfoItem
              icon={<FaEnvelope />}
              label="Email Address"
              value="admin@urgenttrades.com"
            />
            <InfoItem
              icon={<FaPhone />}
              label="Contact Number"
              value="+1 (555) 123-4567"
            />
            <InfoItem
              icon={<FaMapMarkerAlt />}
              label="Location"
              value="San Francisco, CA"
            />
            <InfoItem
              icon={<FaMapMarkerAlt />}
              label="Region"
              value="USA"
            />
          </div>
        </div>

        {/* Submission Details */}
        <div className="bg-white border rounded-xl p-5">
          <h3 className="text-sm font-semibold flex items-center gap-2 mb-4">
            <FaCalendarAlt />
            Submission Details
          </h3>

          <div className="space-y-4">
            <InfoItem
              icon={<FaCalendarAlt />}
              label="Submission Date"
              value="January 15, 2023"
            />
            <InfoItem
              icon={<FaClock />}
              label="Submission Time"
              value="10:30 AM"
            />
            <InfoItem
              icon={<FaFileAlt />}
              label="Application ID"
              value="3245"
            />
          </div>
        </div>
      </div>

      {/* Documents */}
      <div className="bg-white border rounded-xl p-5 space-y-4">
        <h3 className="text-sm robReg font-semibold mb-2">
          Documents
        </h3>

        <div className="space-y-3">
          <DocumentItem
            title="Business License"
            date="15/01/2023"
          />
          <DocumentItem
            title="Business License"
            date="15/01/2023"
          />
          <DocumentItem
            title="Business License"
            date="15/01/2023"
          />
          <DocumentItem
            title="Business License"
            date="15/01/2023"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded flex items-center gap-2">
          <FaTrash />
          Delete
        </button>
        <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2">
          <FaCheck />
          Approve
        </button>
      </div>
    </div>
  );
};

export default ApplicationDetails;

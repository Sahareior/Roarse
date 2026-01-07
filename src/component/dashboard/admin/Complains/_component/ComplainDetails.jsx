import React from "react";
import { FaPaperclip } from "react-icons/fa";

const InfoRow = ({ label, value, isLink }) => (
  <div className="flex gap-2 justify-between text-sm">
    <span className="text-gray-500 robReg min-w-[120px]">{label}</span>
    {isLink ? (
      <a className="text-blue-600 robReg font-medium">{value}</a>
    ) : (
      <span className="font-medium robReg">{value}</span>
    )}
  </div>
);

const ComplainDetails = () => {
  return (
    <div className="p-6 max-w-8xl mx-auto space-y-6">
      {/* Back */}
      <a className="text-[#4F39F6] robReg text-sm">← Back to Complaints List</a>

      {/* Complaint Header */}
      <div className="bg-white border rounded-xl p-5 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h2 className="font-semibold robReg text-[17px]">
              Complaint: T-1024
            </h2>
            <span className="inline-block mt-1 px-3 py-0.5 text-xs rounded-full bg-red-100 text-red-600">
              Pending
            </span>
          </div>
          <span className="text-xs text-gray-500">
            2025-12-04 10:30
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Complainer */}
          <div className="space-y-2">
            <h3 className="text-[17px] robReg font-medium">
              Complainer Information
            </h3>
            <InfoRow label="Name:" value="Jane Doe (Shipper)" />
            <InfoRow label="User ID:" value="W-4829" />
            <InfoRow
              label="Related Job:"
              value="J-8472"
              isLink
            />
          </div>

          {/* Accused */}
          <div className="space-y-2">
            <h3 className="text-[17px] robReg font-medium">
              Accused Details
            </h3>
            <InfoRow label="Client:" value="John (Carrier)" />
            <InfoRow label="User ID:" value="W-4829" />
            <InfoRow label="Amount:" value="$176.00" />
          </div>
        </div>
      </div>

      {/* User Message */}
      <div className="bg-white border rounded-xl p-5 space-y-4">
        <h3 className="text-[17px] robReg font-medium">User Message</h3>
        <div className="bg-gray-50 p-3 rounded text-[17px] robReg text-gray-700">
          I sent my products in good condition but I found it broken.
        </div>

        {/* Attachments */}
        <div>
          <p className="text-[17px] flex items-center gap-3 robReg text-[#364153] font-medium mb-2">
            <FaPaperclip /> Attachments
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs cursor-pointer">
              screenshot.jpg
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs cursor-pointer">
              job_confirmation.pdf
            </span>
          </div>
        </div>
      </div>

      {/* Resolution Actions */}
      <div className="bg-white border rounded-xl p-5">
        <h3 className="text-[17px] robReg font-medium mb-3">
          Resolution Actions
        </h3>
        <div className="flex gap-3">
          <button className="px-4 py-1.5 text-sm rounded bg-green-600 text-white">
            Resolved
          </button>
          <button className="px-4 py-1.5 text-sm rounded bg-yellow-200 text-yellow-800">
            Reviewed
          </button>
          <button className="px-4 py-1.5 text-sm rounded bg-red-600 text-white">
            Ban User
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplainDetails;

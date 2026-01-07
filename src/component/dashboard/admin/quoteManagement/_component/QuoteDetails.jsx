import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

const DocumentItem = ({ title }) => (
  <div className="flex justify-between items-center border rounded-lg p-3">
    <div className="flex items-center gap-3">
      <div className="p-4 bg-[#F3F4F6] rounded-xl">
        <FaRegFileAlt size={20} className="text-[#6A7282]" />
      </div>
      <div>
        <span className="text-[16px] text-[#000000] robReg">{title}</span>
        <p className="text-[#6A7282] robReg text-xs">Uploaded</p>
        <p className="text-[#6A7282] robReg text-xs">10/11/2022</p>
      </div>
    </div>

    <button className="text-xs bg-black text-white px-8 py-2 rounded">
      View
    </button>
  </div>
);

const Section = ({ icon, title, children }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
      <span>{icon}</span>
      <span className="text-[16px] robReg">{title}</span>
    </div>
    {children}
  </div>
);

const Item = ({ label, value }) => (
  <div>
    <p className="text-xs robReg text-gray-500">{label}</p>
    <p className="text-sm robReg font-medium">{value}</p>
  </div>
);

const QuoteDetails = () => {
  return (
<div>
        <p className="border-b-2 robReg text-[20px] border-[#E5E7EB] p-7">Quote Details</p>
        <div className="max-w-8xl flex bg-white border mt-8 rounded-xl p-6">

      {/* Left Column - Details */}
      <div className="space-y-9 flex-1  pr-8">
        {/* Route */}
        <Section icon="📍" title="Route">
          <div className="grid grid-cols-2 gap-6">
            <Item label="From" value="India" />
            <Item label="To" value="Bangladesh" />
          </div>
        </Section>

        {/* Shipment Details */}
        <Section icon="📦" title="Shipment Details">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Item label="Transport Mode" value="Road" />
            <Item label="Weight" value="8000 kg" />
            <Item label="Category" value="Industrial" />
          </div>
        </Section>

        {/* Timeline */}
        <Section icon="📅" title="Timeline">
          <div className="grid grid-cols-2 gap-6">
            <Item label="Pickup Date" value="ASAP" />
            <Item label="Expected Delivery" value="Within 2–3 days" />
          </div>
        </Section>
      </div>

      {/* Right Column - Documents */}
      <div className="w-[40vw] space-y-3 border-l pl-8">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Documents</h3>
        <DocumentItem title="Business License" />
        <DocumentItem title="Tax Certificate" />
        <DocumentItem title="Insurance Certificate" />
        <DocumentItem title="ID Verification" />
      </div>
    </div>
    <div className=" flex gap-5 justify-end py-6">
        <button className="py-1 px-6 border ">Back</button>
        <button className="py-1 px-6 border bg-black text-white">Assign a Agent</button>
    </div>
</div>
  );
};

export default QuoteDetails;
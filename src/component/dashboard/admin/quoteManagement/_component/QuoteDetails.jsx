import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { SlCalender, SlLocationPin } from "react-icons/sl";

const DocumentItem = ({ title }) => (
  <div className="flex justify-between items-center border rounded-lg p-3">
    <div className="flex items-center gap-3">
      <div className="p-4 bg-[#e6e6e8] rounded-xl">
        <FaRegFileAlt size={20} className="text-[#6A7282]" />
      </div>
      <div>
        <span className="text-[16px] flex items-center gap-3 text-[#000000] robReg">{title}</span>
 <div className="flex items-center gap-1 mt-1">
         <p className="text-[#6A7282] robReg text-xs">Uploaded:</p>
        <p className="text-[#6A7282] robReg text-xs">10/11/2022</p>
 </div>
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
      <span className="text-[#1C398E]">{icon}</span>
      <span className="text-[16px] robReg">{title}</span>
    </div>
    {children}
  </div>
);

const Item = ({ label, value }) => (
  <div>
    <p className="text-[16px] robReg text-gray-500">{label}</p>
    <p className="text-[20px] robReg font-medium">{value}</p>
  </div>
);

const QuoteDetails = () => {
  return (
<div>
        <p className="border-b-2 robReg text-[20px] border-[#E5E7EB] p-7">Quote Details</p>
        <div className="max-w-8xl flex  border mt-8 rounded-xl p-6">

      {/* Left Column - Details */}
      <div className="space-y-9 border  flex-1  p-8">
        {/* Route */}
        <Section icon=<SlLocationPin size={18} /> title="Route">
          <div className="grid grid-cols-2 gap-6">
            <Item label="From" value="India" />
            <Item label="To" value="Bangladesh" />
          </div>
        </Section>

        {/* Shipment Details */}
        <Section icon=<FiBox size={18} /> title="Shipment Details">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Item label="Transport Mode" value="Road" />
            <Item label="Weight" value="8000 kg" />
            <Item label="Category" value="Industrial" />
          </div>
        </Section>

        {/* Timeline */}
        <Section icon=<SlCalender size={18} /> title="Timeline">
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
        <button className="py-1 px-6 border bg-white rounded-md ">Back</button>
        <button className="py-1 px-6 border bg-black text-white rounded-md">Assign a Agent</button>
    </div>
</div>
  );
};

export default QuoteDetails;
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaMessage, FaPhone } from "react-icons/fa6";
import { GiCardboardBoxClosed } from "react-icons/gi";

const StatusItem = ({ title, time, active }) => (
  <div className="flex items-start w-full gap-3">
    <div className="flex flex-col items-center">
      <span
        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
          active
            ? "bg-green-100 text-green-600"
            : "bg-gray-200 text-gray-400"
        }`}
      >
        ✓
      </span>
      {
        active? (<div className="h-20 w-[2px] bg-green-300 mt-1" />): (<div className="h-20 w-[2px] bg-slate-300 mt-1" />)
      }
    </div>
<div className="flex justify-between w-full ">
      <div>
      <p
        className={`text-sm font-medium ${
          active ? "text-gray-900" : "text-gray-400"
        }`}
      >
        {title}
      </p>
      {time && (
        <p className="text-sm mt-1 text-gray-500">{time}</p>
      )}
    </div>
    {active? ( <button disabled className="px-9 py-2 bg-black/40 text-white rounded-md">Confirm</button>):( <button  className="px-9 py-2 bg-black text-white rounded-md">Confirm</button>)}
   
</div>
  </div>
);

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-[14px] text-gray-500">{label}</p>
    <p className="text-[16px] font-medium">{value}</p>
  </div>
);

const ShipperIndividualLiveTracking = () => {
  return (
    <div className="p-1 max-w-8xl robReg mx-auto flex flex-col gap-7 ">
      {/* Back */}
      <a className="text-[21px] robReg text-gray-600 cursor-pointer hover:text-gray-900">
        ← Back
      </a>

      {/* Header */}
      <div>
        <h1 className="text-[24px] font-normal">
          Track Shipment
        </h1>
        <p className="text-[16px] text-gray-500">
          Real-time tracking and status updates
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <div className="text-blue-700 text-4xl">📍</div>
          <p className="mt-2 text-sm font-medium">Live map tracking</p>
          <p className="text-xs text-gray-600">
            San Francisco, CA → Denver, CO
          </p>
        </div>

        {/* Status */}

              <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3 bg-white border rounded-xl p-5">
          <h3 className="text-sm font-medium mb-4">
            Shipment Details
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <DetailItem label="Tracking ID" value="#S7" />
            <DetailItem
              label="Route"
              value="San Francisco, CA → Denver, CO"
            />
            <DetailItem label="Mode" value="ROAD" />
            <DetailItem label="Weight" value="2500 kg" />
            <DetailItem
              label="Category"
              value="Electronics"
            />
          </div>
        </div>


      </div>

      </div>

      {/* Details */}
<div className="grid grid-cols-3 gap-8">
          <div className="bg-white border col-span-2 rounded-xl p-5 space-y-7">
          <h3 className="text-[16px] ">
            Shipment Status
          </h3>

          <StatusItem title="Confirmed" time="Dec 13, 10:30 AM" active />
          <StatusItem title="Picked Up" time="Dec 13, 2:15 PM" active />
          <StatusItem title="In Transit" time="Dec 13, 4:00 PM" active />
          <StatusItem title="Out for Delivery" />
          <StatusItem title="Delivered" />
        </div>

                
<div className="space-y-5">
<div className="border space-y-4 bg-white border-[#E5E7EB] p-5">
  <p className="text-[16px]">Carrier Contact</p>

  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <img className="h-12 w-12 rounded-full " src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
      <div>
        <p className="robReg text-[16px] text-[#101828]">John Abraham</p>
        <p className="text-sm robReg">Global Export Logistic</p>
      </div>
    </div>
    <button className="w-[99%] bg-white rounded-xl py-3 text-start text-[16px] robReg px-7 flex items-center gap-3 border border-2xl"><FaPhone /> 017526584</button>
    <button className="w-[99%]  bg-white rounded-xl py-3 text-start text-[16px] robReg px-7 flex items-center gap-3 border border-2xl"><FaRegEnvelope /> Send Message</button>
  </div>
</div>

{/* ETA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 className="text-sm font-medium text-blue-800 mb-1">
            Estimated Delivery
          </h3>
          <p className="text-xs text-blue-700">
            Tomorrow, Dec 14 between 2:00 PM – 6:00 PM
          </p>
        </div>


                <div className="bg-white border rounded-xl p-5 space-y-4 h-fit">
          <p className="text-sm font-medium text-gray-900">
            Feedback
          </p>

          <textarea
            rows={4}
            placeholder="Enter your feedback"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />

          <div>
            <p className="text-xs text-gray-500 mb-2">
              Add Evidence (Optional)
            </p>
            <div className="border border-dashed rounded-lg p-4 text-center text-xs text-gray-500 cursor-pointer hover:border-gray-400">
              Add Photo / Document
            </div>
          </div>

          <button className="w-full py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
            Submit
          </button>
        </div>
</div>
</div>
    </div>
  );
};

export default ShipperIndividualLiveTracking;

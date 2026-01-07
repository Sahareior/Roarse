import React, { useState } from "react";
import { Steps, Input, Button } from "antd";
import { FaTruck, FaPlane, FaShip } from "react-icons/fa";

const { Step } = Steps;
const { TextArea } = Input;

/* -------------------- Transport Card -------------------- */

const TransportCard = ({ icon: Icon, title, subtitle, active, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer border rounded-xl p-6 flex flex-col items-center gap-2 transition
      ${
        active
          ? "bg-black text-white border-black"
          : "bg-white text-gray-800 hover:border-gray-400"
      }`}
  >
    <Icon className="text-2xl" />
    <p className="text-xl robReg font-medium">{title}</p>
    <p
      className={`text-sm robReg ${
        active ? "text-gray-300" : "text-gray-500"
      }`}
    >
      {subtitle}
    </p>
  </div>
);

/* -------------------- Main Component -------------------- */

const TransportMode = () => {
  const [selected, setSelected] = useState("road");
  const [notes, setNotes] = useState("");

  return (
    <div className="w-full h-[60vh]">

      {/* Steps */}
      <Steps current={1} className="max-w-3xl">
        <Step title="Shipment Details" />
        <Step title="Transport Mode" />
        <Step title="Documents" />
        <Step title="Confirmation" />
      </Steps>

      {/* Card */}
      <div className="bg-white border rounded-xl p-6 space-y-6">

        {/* Transport Selection */}
        <div>
          <h2 className="text-[21px] robReg font-semibold text-gray-900 mb-4">
            Select Transport Mode
          </h2>

          <div className="grid grid-cols-1 p-4 md:grid-cols-3 gap-4">
            <TransportCard
              icon={FaTruck}
              title="Road"
              subtitle="Fast & flexible"
              active={selected === "road"}
              onClick={() => setSelected("road")}
            />

            <TransportCard
              icon={FaPlane}
              title="Air"
              subtitle="Fastest option"
              active={selected === "air"}
              onClick={() => setSelected("air")}
            />

            <TransportCard
              icon={FaShip}
              title="Sea"
              subtitle="Most economical"
              active={selected === "sea"}
              onClick={() => setSelected("sea")}
            />
          </div>
        </div>

        {/* Special Requirements */}
        <div>
          <p className="text-[18px] robReg font-medium text-gray-700 mb-2">
            Special Requirements (optional)
          </p>
          <TextArea
          className="robReg"
            rows={4}
            placeholder="Temperature control, fragile items, etc."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

 

      </div>
    </div>
  );
};

export default TransportMode;

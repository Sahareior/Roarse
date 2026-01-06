import React, { useState } from "react";
import { Switch } from "antd";

const Shipment = () => {
  const [industries, setIndustries] = useState([
    { id: 1, name: "Pharmaceutical", active: true },
    { id: 2, name: "Garments", active: true },
    { id: 3, name: "Pharmaceutical", active: true },
    { id: 4, name: "Garments", active: true },
  ]);

  const [newIndustry, setNewIndustry] = useState("");

  const toggleIndustry = (id) => {
    setIndustries((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, active: !item.active }
          : item
      )
    );
  };

  const addIndustry = () => {
    if (!newIndustry.trim()) return;

    setIndustries((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newIndustry,
        active: true,
      },
    ]);
    setNewIndustry("");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[22px] robMed font-semibold">
          Shipment Type
        </h2>
        <button className="bg-black robReg text-white text-xs px-6 py-1.5 rounded">
          + Add new
        </button>
      </div>

      {/* Create Industry */}
      <div className="bg-white border rounded-xl p-5 space-y-4">
        <div>
          <label className="text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            placeholder="Industry Name"
            value={newIndustry}
            onChange={(e) =>
              setNewIndustry(e.target.value)
            }
            className="mt-2 w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={addIndustry}
            className="bg-black text-white text-xs px-6 py-2 rounded"
          >
            Create
          </button>
        </div>
      </div>

      {/* Industry List */}
      <div className="space-y-2">
        <h3 className=" text-[22px] robMed font-semibold">
          Shipment List
        </h3>

        <div className="bg-white border rounded-xl">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`flex justify-between items-center py-10 p-4 ${
                index !== industries.length - 1
                  ? "border-b"
                  : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium">
                  {industry.name}
                </p>
                <span className="text-xs px-3 py-0.5 rounded-full bg-green-100 text-green-700">
                  Active
                </span>
              </div>

              <Switch
                checked={industry.active}
                onChange={() =>
                  toggleIndustry(industry.id)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shipment;

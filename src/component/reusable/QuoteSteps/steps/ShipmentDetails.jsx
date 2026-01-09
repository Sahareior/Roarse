import React, { useState } from "react";
import { Input, Select, Button } from "antd";

const { Option } = Select;

/* -------------------- Small Helpers -------------------- */

const Field = ({ label, children }) => (
  <div className="space-y-1 w-full">
    <p className="text-[15px] robReg  text-gray-600">{label}</p>
    {children}
  </div>
);

/* -------------------- Main Component -------------------- */

const ShipmentDetails = ({location}) => {
  const [form, setForm] = useState({
    from: "",
    to: "",
    weight: "",
    category: "",
    dimensions: "",
  });

  const isNextDisabled =
    !form.from || !form.to || !form.weight || !form.category;

  return (
    <div className="bg-white border h-[60vh] rounded-xl p-6 w-full">
      <h2 className="text-[21px] robReg font-semibold text-gray-900 mb-6">
        Shipment Details
      </h2>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Field label="From">
          <Input
          className="py-2 rounded-xl"
            placeholder="Origin city"
            value={form.from}
            onChange={(e) =>
              setForm({ ...form, from: e.target.value })
            }
          />
        </Field>

        <Field label="To">
          <Input
          className="py-2 rounded-xl"
            placeholder="Destination city"
            value={form.to}
            onChange={(e) =>
              setForm({ ...form, to: e.target.value })
            }
          />
        </Field>

        <Field label="Weight (kg)">
          <Input
          className="py-2 rounded-xl"
            type="number"
            placeholder="1000"
            value={form.weight}
            onChange={(e) =>
              setForm({ ...form, weight: e.target.value })
            }
          />
        </Field>

        <Field label="Category">
          <Select
          className="py-2 w-full rounded-xl"
            placeholder="Select Category"
            value={form.category || undefined}
            onChange={(value) =>
              setForm({ ...form, category: value })
            }
          >
            <Option value="electronics">Electronics</Option>
            <Option value="furniture">Furniture</Option>
            <Option value="clothing">Clothing</Option>
            <Option value="general">General Cargo</Option>
          </Select>
        </Field>

    
      </div>
    <div className="flex w-full mt-6 gap-9 justify-between">
          <Field label="Dimensions (optional)">
            <Input
            className="py-2 w-full rounded-xl border border-[#D1D5DC]"
              placeholder="L × W × H (cm)"
              value={form.dimensions}
              onChange={(e) =>
                setForm({ ...form, dimensions: e.target.value })
              }
            />
          </Field>

{
  location.pathname === '/quote' && (
                      <Field label="Phone No">
          <Input
          className="py-2 rounded-xl"
            type="number"
            placeholder="1000"
            value={form.weight}
            onChange={(e) =>
              setForm({ ...form, weight: e.target.value })
            }
          />
        </Field>
  )
}
        </div>

    </div>
  );
};

export default ShipmentDetails;

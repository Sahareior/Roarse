import React from "react";
import { Switch } from "antd";

const accounts = [
  {
    id: 1,
    name: "Bank Account",
    accountNo: "AC No. 112021214552",
    status: "Active",
    enabled: true,
  },
  {
    id: 2,
    name: "Stripe",
    accountNo: "AC No. 112021214552",
    status: "Active",
    enabled: true,
  },
  {
    id: 3,
    name: "Paypal",
    accountNo: "AC No. 112021214552",
    status: "Deactive",
    enabled: false,
  },
  {
    id: 4,
    name: "Bank Account",
    accountNo: "AC No. 112021214552",
    status: "Active",
    enabled: true,
  },
];

const StatusBadge = ({ status }) => {
  const isActive = status === "Active";

  return (
    <span
      className={`text-xs px-3 py-0.5 rounded-full ${
        isActive
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {status}
    </span>
  );
};

const Financial = () => {
  const onChange = (checked, name) => {
    console.log(`${name} switched to ${checked}`);
  };

  return (
    <div className="space-y-4">
      <p className="text-[22px] robMed font-medium">
        Account List
      </p>

      <div className="bg-white rounded-xl border-b-2 ">
        {accounts.map((acc, index) => (
          <div
            key={acc.id}
            className={`flex justify-between shadow-sm items-center p-4 ${
              index !== accounts.length - 1
                ? "border-b"
                : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm robReg font-medium">
                  {acc.name}
                </p>
                <p className="text-sm robReg text-gray-500">
                  {acc.accountNo}
                </p>
              </div>

              <StatusBadge status={acc.status} />
            </div>

            <Switch
              checked={acc.enabled}
              onChange={(checked) =>
                onChange(checked, acc.name)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Financial;

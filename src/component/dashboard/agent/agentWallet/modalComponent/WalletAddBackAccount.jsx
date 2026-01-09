import React from "react";

const WalletAddBackAccount = () => {
  return (
    <div className="bg-white w-full text-[14px] robReg rounded-xl p-6 space-y-4 border">

      {/* Title */}
      <p className="text-[16px] font-semibold text-[#101828]">
        Add New Bank Account
      </p>

      {/* Account Holder */}
      <div>
        <p className="text-[13px] text-[#344054] mb-1">
          Account Holder Name
        </p>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Bank Name */}
      <div>
        <p className="text-[13px] text-[#344054] mb-1">
          Bank Name
        </p>
        <input
          type="text"
          placeholder="Chase Bank"
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Account Number */}
      <div>
        <p className="text-[13px] text-[#344054] mb-1">
          Account Number
        </p>
        <input
          type="text"
          placeholder="Enter account number"
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Routing Number */}
      <div>
        <p className="text-[13px] text-[#344054] mb-1">
          Routing Number
        </p>
        <input
          type="text"
          placeholder="Enter routing number"
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Account Type */}
      <div>
        <p className="text-[13px] text-[#344054] mb-1">
          Account Type
        </p>
        <select className="w-full border rounded-lg px-3 py-2 text-sm text-[#667085] focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Savings</option>
          <option>Checking</option>
        </select>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-3">
        <button className="px-4 py-2 text-sm border rounded-lg text-[#344054] hover:bg-gray-50">
          Cancel
        </button>

        <button className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800">
          Add Account
        </button>
      </div>
    </div>
  );
};

export default WalletAddBackAccount;

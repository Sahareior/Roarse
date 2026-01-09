import { useState } from "react";

const AddBankAccountForm = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    accountType: "Savings",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bank Account Added:", formData);
    onSave(formData); // Pass data to parent
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Account Holder Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 my-1">
          Account Holder Name
        </label>
        <input
          type="text"
          name="accountHolderName"
          value={formData.accountHolderName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
          placeholder="John Doe"
        />
      </div>

      {/* Bank Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Bank Name
        </label>
        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
          placeholder="Chase Bank"
        />
      </div>

      {/* Account Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Account Number
        </label>
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
          placeholder="Enter account number"
        />
      </div>

      {/* Routing Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Routing Number
        </label>
        <input
          type="text"
          name="routingNumber"
          value={formData.routingNumber}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
          placeholder="Enter routing number"
        />
      </div>

      {/* Account Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Account Type
        </label>
        <select
          name="accountType"
          value={formData.accountType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition bg-white"
        >
          <option>Savings</option>
          <option>Checking</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2.5 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-900 transition"
        >
          Save Bank Account
        </button>
      </div>
    </form>
  );
};

export default AddBankAccountForm;

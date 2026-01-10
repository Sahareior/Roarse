import { useState } from "react";
import { FiCreditCard } from "react-icons/fi";

export default function AgentSettingPayoutModal({onClose}) {
  const availableBalance = 7800;
  const [amount, setAmount] = useState(15);

  return (
    <div className="w-full  rounded-2xl bg-white p-6">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900">
        Request Payout
      </h2>

      {/* Balance */}
      <p className="mt-2 text-sm text-gray-500">
        Available balance:{" "}
        <span className="font-medium text-gray-800">
          ${availableBalance.toLocaleString()}
        </span>
      </p>

      {/* Amount */}
      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount
        </label>
        <div className="flex items-center rounded-lg border border-gray-300 px-3">
          <span className="text-gray-500">$</span>
          <input
            type="number"
            min={1}
            max={availableBalance}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border-none px-2 py-2 text-sm focus:outline-none"
          />
        </div>
        <p className="mt-1 text-xs text-gray-400">
          Maximum: ${availableBalance.toLocaleString()}
        </p>
      </div>

      {/* Payment Method */}
      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Payment Method
        </label>

        <div className="flex items-center gap-3 rounded-lg border-2 border-blue-600 bg-blue-50 px-4 py-3">
          <FiCreditCard className="text-blue-600" size={20} />
          <div>
            <p className="text-sm font-medium text-blue-700">
              Bank Transfer
            </p>
            <p className="text-xs text-blue-600">
              ••••4532
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <button
        onClick={onClose}
          type="button"
          className="w-full rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="button"
          className="w-full rounded-lg bg-green-600 py-2 text-sm font-semibold text-white hover:bg-green-700"
        >
          Request ${amount}
        </button>
      </div>
    </div>
  );
}

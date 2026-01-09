import React from "react";
import { FaUniversity } from "react-icons/fa";

const AgentSettingPayoutModal = ({ onClose }) => {
  return (
    <div className="w-[50vw]">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white w-[360px] rounded-xl p-6 space-y-5">

          {/* Title */}
          <div>
            <p className="text-[16px] font-semibold text-[#101828]">
              Request Payout
            </p>
            <p className="text-[13px] text-[#667085] mt-1">
              Available balance: $7,800
            </p>
          </div>

          {/* Amount */}
          <div className="space-y-1">
            <p className="text-[13px] text-[#344054]">Amount</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#667085]">
                $
              </span>
              <input
                type="number"
                placeholder="15"
                className="w-full border rounded-lg pl-7 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <p className="text-[12px] text-[#98A2B3]">
              Maximum: $7,800
            </p>
          </div>

          {/* Payment Method */}
          <div className="space-y-2">
            <p className="text-[13px] text-[#344054]">Payment Method</p>

            <div className="border-2 border-blue-600 rounded-lg p-3 flex items-center gap-3">
              <FaUniversity className="text-blue-600" />
              <div>
                <p className="text-[14px] text-[#101828] font-medium">
                  Bank Transfer
                </p>
                <p className="text-[12px] text-[#667085]">
                  ••••4532
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm border rounded-lg text-[#344054] hover:bg-gray-50"
            >
              Cancel
            </button>

            <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700">
              Request $15
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSettingPayoutModal;

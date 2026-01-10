import React, { useState, useEffect } from "react";
import AgentSettingPayoutModal from "../../dashboard/agent/agentWallet/modalComponent/AgentSettingPayoutModal";
import { FaCodeBranch } from "react-icons/fa";
import WalletAddBackAccount from "../../dashboard/agent/agentWallet/modalComponent/WalletAddBackAccount";
import ContractAlert from "../dashboard/ContractAlert";
import SettingsConditionalPanel from "../../dashboard/carrier/carrierSettings/_components/SettingsConditionalPanel";
import Shipment_Filter from "../../homepage/ShipmentFiltter/Shipment_Filtter";
import { MdOutlineCancel } from "react-icons/md";


const SijanModal = ({
  title,
  location,
  isOpen,
  onClose,
  onSave,
  subTitle,
  submitText = "Save",
  edit,
  data,
  view,
  setIsEmpty,
  compo
}) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  const renderFormFields = () => {
    switch (location) {
       case "wallet":
        return (
          <AgentSettingPayoutModal
          
            onClose={onClose}
          />
        );
       case "addBank":
        return (
          <WalletAddBackAccount
          
            onClose={onClose}
          />
        );
       case "shipmentReq":
        return (
          <ContractAlert
          
            onClose={onClose}
          />
        );
       case "carrierSettings":
        return (
          <SettingsConditionalPanel
          component={compo}
            onClose={onClose}
          />
        );
       case "homepageSearch":
        return (
          <Shipment_Filter
          component={compo}
            onClose={onClose}
            setIsEmpty={setIsEmpty}
          />
        );
      default:
        return null;
    }
  };


  const showButtons = !(
    view &&
    (location === "manageSchool" ||
      location === "manageJob" ||
      location === "portfolio")
  );

  return (
    <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white  rounded-lg   ${
          view || location === "shipmentReq" 
            ? "w-[70vw] h-[90vh] p-8"
            : location === 'homepageSearch'? 'h-[70vh] w-[60vw]': "max-w-2xl w-full p-6 mx-4" 
        }`}
      >
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <p className="text-[#737373] mt-1">{subTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 p-0 rounded-md hover:bg-gray-100 flex items-center justify-center"
            type="button"
          >
           <MdOutlineCancel className="h-7 w-7"  />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {renderFormFields()}

          {/* {showButtons && (
            <div className="flex gap-3 justify-end pt-4">
              <button
                type="button"
                onClick={onClose}
                className="border hover:bg-gray-400 popmed text-gray-800 py-2 px-4 rounded-[20px] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-[20px] bg-[#FFFF00] popmed text-black py-2 px-4 transition-colors"
              >
                {submitText}
              </button>
            </div>
          )} */}
        </form>
      </div>
    </div>
  );
};

export default SijanModal;

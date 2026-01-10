import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaTruck, FaShip, FaPlane } from "react-icons/fa";
import SijanModal from "../../reusable/sijanModal/SijanModal";
import { Link } from "react-router-dom";

/* ---------------- Small Reusable Pieces ---------------- */

const Field = ({ label, value }) => (
  <div className="flex robReg flex-col flex-1">
    <p className="text-[16px] text-gray-500">{label}</p>
    <p className="text-[16px] text-gray-900 mt-2">{value}</p>
  </div>
);

const Divider = () => <div className="h-8 w-px bg-gray-200" />;

/* ---------------- Main Component ---------------- */

const ShipmentSearchBar = ({
  pickup = "Germany",
  dropout = "India",
  weight = "1200 KG",
  goods = "Electronics",
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
    const [openContract,setOpneContract] = useState(false)

  const fields = [
    { label: "Pickup", value: pickup },
    { label: "Dropout", value: dropout },
    { label: "Weight", value: weight },
    { label: "Goods", value: goods },
  ];

  const carriers = [
    { name: "Smith Jonson", id: "0125", mode: "Road", active: true },
    { name: "Smith Jonson", id: "0125", mode: "Sea", active: false },
    { name: "Smith Jonson", id: "0125", mode: "Air", active: true },
    { name: "Smith Jonson", id: "0125", mode: "Air", active: true },
    { name: "Smith Jonson", id: "0125", mode: "Air", active: true },
    { name: "Smith Jonson", id: "0125", mode: "Air", active: true },
    { name: "Smith Jonson", id: "0125", mode: "Road", active: true, selected: true },
  ];

  const transportIcon = {
    Road: <FaTruck />,
    Sea: <FaShip />,
    Air: <FaPlane />,
  };

  return (
    <div className="pt-9">
      {/* Header */}
      <div className="robReg flex items-center font-medium flex-col gap-3">
        <h1 className="text-[30px]">Send Your Shipment</h1>
        <p className="text-[20px] text-[#767575]">
          Provide your information and send your shipment
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-[79vw] mx-auto bg-white border rounded-lg px-12 my-10 py-3 flex items-center gap-4">
        {fields.map((field, index) => (
          <React.Fragment key={field.label}>
            <Field {...field} />
            {index !== fields.length - 1 && <Divider />}
          </React.Fragment>
        ))}

        <Divider />

        <button
          onClick={() => {
            setIsEmpty(false);
            setOpenModal(true);
          }}
          className="text-gray-600 hover:text-black transition"
        >
          <FiSearch size={18} />
        </button>
      </div>

      {/* Carrier List (CONDITIONAL) */}
      {!isEmpty && (
        <div className="w-[79vw] mx-auto space-y-4">
          <p className="text-lg robReg font-medium">Available Carrier List</p>

<div className="h-[40vh] overflow-y-auto">
              {carriers.map((carrier, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 mt-5 border rounded-lg `}
            >
              {/* Left */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-[15px] font-medium">
                    {carrier.name}
                  </p>
                  <span
                    className={`h-3 w-3 rounded-full ${
                      carrier.active
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  />
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span>ID: {carrier.id}</span>
                  <span className="flex items-center gap-1">
                    {transportIcon[carrier.mode]} {carrier.mode}
                  </span>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col items-center gap-4">

                <Link to={`carrier-profile`}>
                                <button className="bg-white text-black border text-sm px-4 py-1 rounded-md">
                  View Profile
                </button>
                </Link>


               <button onClick={()=> setOpneContract(true)} className="bg-black text-white text-sm px-3 py-1 rounded-md">
                  Select Carrier
                </button>
              </div>
            </div>
          ))}
</div>
        </div>
      )}

      {/* Modal */}
      <SijanModal
        setIsEmpty={setIsEmpty}
        onClose={() => setOpenModal(false)}
        location="homepageSearch"
        isOpen={openModal}
      />
            <SijanModal
      onClose={() => setOpneContract(false)}
      location={'shipmentReq'}
      isOpen={openContract}
      
      />
    </div>
  );
};

export default ShipmentSearchBar;

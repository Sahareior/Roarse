import React from 'react';
import CarrierNShipperManagement from '../../../reusable/dashboard/CarrierNShipperManagement';
import { FaPlane, FaShip, FaTruck, FaUser } from 'react-icons/fa';

const AgentManagement = () => {
   const mockCarriers = [
  {
    id: "CR-101",
    name: "Fast Transit LLC",
    type: "Road",
    verified: false,
    icon: <FaTruck className="text-green-600" />,
    active: true,
  },
  {
    id: "CR-102",
    verified: true,
    name: "Sky Cargo",
    type: "Air",
    icon: <FaPlane className="text-blue-500" />,
    active: false,
  },
  {
    id: "CR-103",
    verified: true,
    name: "Oceanic Lines",
    type: "Sea",
    icon: <FaShip className="text-blue-700" />,
    active: true,
  },
];
    return (
        <div>
          <CarrierNShipperManagement data={mockCarriers} />
        </div>
    );
};

export default AgentManagement;
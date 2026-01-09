import CarrierNShipperManagement from '../../../reusable/dashboard/CarrierNShipperManagement';
import { FaUser } from 'react-icons/fa';

const Shippermanagement = () => {
 const mockShippers = [
  {
    id: "SH-001",
    name: "John Abraham",
    verified: true,
    userType: "Premium",
    active: true,
    icon: <FaUser className="text-black" />,
  },
  {
    id: "SH-002",
    name: "Sarah Johnson",
    verified: false,
    userType: "General",
    active: true,
    icon: <FaUser className="text-gray-500" />,
  },
  {
    id: "SH-003",
    name: "Michael Chen",
    verified: true,
    userType: "General",
    active: false,
    icon: <FaUser className="text-black" />,
  },
];

    return (
        <div>
            <CarrierNShipperManagement data={mockShippers} />
        </div>
    );
};

export default Shippermanagement;
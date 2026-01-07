import React, { useState } from 'react';
import { FaPlane, FaShip, FaTruck } from 'react-icons/fa';
import { Link, Outlet, useLocation } from 'react-router-dom';


const RecentShipment = ({ 
    id,
    origin = "San Francisco, SA",
    destination = "New York, NY",
    status = "in-transit",
    method = "Road",
    weight = "2500kg",
    cargoType = "electronics",
    value = "$3000",
    estimatedDelivery = "2024-01-15"
}) => {
    const statusConfig = {
        "in-transit": { color: "bg-[#DBEAFE]", text: "In transit" },
        "delivered": { color: "bg-[#D1FAE5]", text: "Delivered" },
        "pending": { color: "bg-[#FEF3C7]", text: "Pending" },
        "delayed": { color: "bg-[#FEE2E2]", text: "Delayed" }
    };

    const statusInfo = statusConfig[status] || statusConfig["in-transit"];

    const getMethodIcon = () => {
        switch(method.toLowerCase()) {
            case "air": return <FaPlane className="text-blue-500" />;
            case "sea": return <FaShip className="text-green-500" />;
            default: return <FaTruck className="text-orange-500" />;
        }
    };

    return (
        <div className='flex justify-between items-center p-4 border border-[#E5E7EB] rounded-lg hover:bg-gray-50 transition-colors duration-200'>
            <div className='flex-1'>
                <div className='flex items-center gap-3 mb-2'>
                    <div className="flex items-center gap-2">
                        {getMethodIcon()}
                        <p className='font-medium'>{origin} → {destination}</p>
                    </div>
                    <span className={`${statusInfo.color} py-1 px-3 rounded-full text-sm font-medium`}>
                        {statusInfo.text}
                    </span>
                </div>
                <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600'>
                    <span>{method}, {weight}, {cargoType}</span>
                    <span className='text-gray-400'>•</span>
                    <span>Est. delivery: {estimatedDelivery}</span>
                    <span className='text-gray-400'>•</span>
                    <span>ID: #{id}</span>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-end'>
                <p className='text-lg font-bold ml-4'>{value}</p>
                <Link to={`/dashboard/shipper-dashboard/active-shipments/${id}`} className='text-sm text-blue-600 hover:underline'>
                    View Details →
                </Link>
            </div>
        </div>
    );
};

// Mock data for shipments
const mockShipments = [
    {
        id: "SH-7845",
        origin: "San Francisco, SA",
        destination: "New York, NY",
        status: "in-transit",
        method: "Air",
        weight: "1500kg",
        cargoType: "electronics",
        value: "$4200",
        estimatedDelivery: "2024-01-10"
    },
    {
        id: "SH-7844",
        origin: "Los Angeles, CA",
        destination: "Miami, FL",
        status: "delivered",
        method: "Sea",
        weight: "5000kg",
        cargoType: "automotive",
        value: "$8500",
        estimatedDelivery: "2024-01-05"
    },
    {
        id: "SH-7843",
        origin: "Chicago, IL",
        destination: "Seattle, WA",
        status: "in-transit",
        method: "Road",
        weight: "2500kg",
        cargoType: "furniture",
        value: "$3000",
        estimatedDelivery: "2024-01-12"
    },
    {
        id: "SH-7842",
        origin: "Houston, TX",
        destination: "Boston, MA",
        status: "delayed",
        method: "Road",
        weight: "1800kg",
        cargoType: "pharmaceuticals",
        value: "$5200",
        estimatedDelivery: "2024-01-18"
    }
];

const ActiveShipment = () => {
  const [shipments] = useState(mockShipments);
    const [filter, setFilter] = useState("all");
    const location = useLocation()

    const filteredShipments = filter === "all" 
        ? shipments 
        : shipments.filter(shipment => shipment.status === filter);

    return (
<div>
    {
        location.pathname === '/dashboard/shipper-dashboard/active-shipments'? (        <div>
                          <div className='border border-[#E5E7EB] p-4'>
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4'>
                    <h2 className='text-[20px] arReg font-bold'>Active Shipments</h2>
   
                </div>

                <div className='space-y-4'>
                    {filteredShipments.length > 0 ? (
                        filteredShipments.map((shipment) => (
                            <RecentShipment 
                                key={shipment.id}
                                {...shipment}
                            />
                        ))
                    ) : (
                        <div className='text-center py-8 border border-[#E5E7EB] rounded-lg'>
                            <p className='text-gray-500'>No shipments found with the selected filter.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>):(<Outlet />) 
    }
</div>
    );
};

export default ActiveShipment;
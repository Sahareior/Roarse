import React, { useState } from 'react';
import { FaBox, FaPlane, FaPlus, FaShip, FaTruck } from 'react-icons/fa';
import { IoIosTimer } from 'react-icons/io';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { Link, Outlet, useLocation } from 'react-router-dom';


const OverviewStats = ({ type = "total", count = 122, label = "Total Shipments", subLabel = "Currently in transit" }) => {
    const getIcon = () => {
        switch(type) {
            case "air": return <FaPlane size={22} />;
            case "booked": return <IoIosTimer  size={25} />;
            case "total": return <IoCheckmarkDoneCircleSharp size={25} />;
            default: return <FaBox size={20} />;
        }
    };

    const getColor = () => {
        switch(type) {
            case "air": return "text-blue-600";
            case "booked": return "text-yellow-600";
            case "total": return "text-green-600";
            default: return "text-gray-700";
        }
    };

    return (
        <div className='flex justify-between border border-[#E5E7EB] p-6 rounded-xl hover:shadow-md transition-shadow duration-300'>
            <div className='flex flex-col gap-3'>
                <div className={`${getColor()}`}>
                    {getIcon()}
                </div>
                <h2 className='text-[16px] font-medium'>{label}</h2>
                <p className='text-[14px] text-gray-500'>{subLabel}</p>
            </div>
            <p className='text-[30px] font-bold'>{count.toLocaleString()}</p>
        </div>
    );
};

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
            <p className='text-lg font-bold ml-4'>{value}</p>
        </div>
    );
};


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


const ShipperOverview = () => {
    const [shipments] = useState(mockShipments);
    const [filter, setFilter] = useState("all");
    const location = useLocation()

    const filteredShipments = filter === "all" 
        ? shipments 
        : shipments.filter(shipment => shipment.status === filter);


        const stats = [
        { type: "active", count: 122, label: "Active Shipments", subLabel: "Currently in transit" },
        { type: "total", count: 24, label: "Completed", subLabel: "Successfully delivered" },
        { type: "booked", count: 18, label: "Pending Matches", subLabel: "Finding Carriers" },
     
    ];

    return (
<div>
{
    location.pathname === '/dashboard/shipper-dashboard/overview'? (        <div>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {stats.map((stat, index) => (
                    <OverviewStats 
                        key={index}
                        type={stat.type}
                        count={stat.count}
                        label={stat.label}
                        subLabel={stat.subLabel}
                    />
                ))}
            </div>

<div className='flex items-center rounded-xl text-white mt-7 justify-between py-7 px-5'
style={{
    background: 'linear-gradient(90deg, #3D3D3D 0%, #16171B 100%)'
}}
>
   <div className='space-y-3'>
     <p className='text-[20px] robReg'>Ready to Ship</p>
    <p className='text-[16px] robReg'>Create a new shipment and get matched with carriers in minutes.</p>
   </div>
 <Link to="/dashboard/shipper-dashboard/overview/post-shipment">
     <button className='px-6 py-[7px] hover:bg-white/70 bg-white text-black rounded-md gap-3 flex items-center'>
   <FaPlus /> Post New Shipment
   </button>
 </Link>
</div>

               <div className='border mt-10 border-[#E5E7EB] p-4'>
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4'>
                    <h2 className='text-[20px] arReg font-bold'>Recent Shipments</h2>
   
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

        </div>) : (<Outlet />)
}
</div>
    );
};

export default ShipperOverview;
import React, { useState } from 'react';
import { FaArrowRight, FaBox, FaPlane, FaShip, FaTruck } from 'react-icons/fa';

import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { IoIosTimer } from 'react-icons/io';
import { FaLocationPin } from 'react-icons/fa6';

// Enhanced OverviewStats component with different icons and types
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
        <div className='flex  justify-between border border-[#E5E7EB] p-6 rounded-xl hover:shadow-md transition-shadow duration-300'>
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



const OverViewCard = ({title}) => {
    return(
        <div className='border border-[#E5E7EB] py-4'>
            <p className='robReg text-[20px] px-5'>{title}</p>

{
    [1,2,3,4,5].map(items => (
                    <div className='flex gap-2 border mt-6 p-5 border-[#E5E7EB] justify-between'>
                <div className='flex items-center gap-3'>
                    <FaLocationPin size={22} />
                    <div >
                        <div className='flex text-[16.5px] robReg items-center gap-3'>
                            <p className='flex items-center gap-2'>India <FaArrowRight /> Bangladesh</p>
                            <p className='text-[#1447E6] p-1 px-3 rounded-2xl bg-[#DBEAFE]'>Road</p>
                        </div>
                        <p className='text-[#4A5565] text-[14.1px] robReg'>800kg | Industrial</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <p className='text-[#1C398E] text-[24px] robReg'>$200</p>
                        <p className='text-[14px] robReg'>Estimated</p>
                    </div>
                    <button className='py-2 px-6 rounded-md bg-black text-white'>View Details</button>
                </div>
            </div>
    ))
}
        </div>
    )
} 



// Enhanced CarrierOverview component
const CarrierOverview = () => {



    const stats = [
        { type: "active", count: 122, label: "Active Shipments", subLabel: "Currently in transit" },
        { type: "total", count: 24, label: "Total Shipments", subLabel: "Successfully delivered" },
        { type: "booked", count: 18, label: "Upcoming Shipments", subLabel: "Booked Shipments" },
     
    ];

    return (
        <div className='space-y-24 p-1'>
            {/* Stats Overview */}
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

         <OverViewCard title={'Incoming Shipment Requests'} />
         <OverViewCard title={'My Deliveries'} />
 


        </div>
    );
};

export default CarrierOverview;
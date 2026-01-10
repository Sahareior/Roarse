import React, { useState } from 'react';
import { FaArrowRight, FaBox, FaChevronRight, FaDollarSign, FaPlane, FaShip, FaTruck } from 'react-icons/fa';

import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { IoIosTimer } from 'react-icons/io';
import { FaLocationPin } from 'react-icons/fa6';
import { BiChevronsRight } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

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
                    <div className='flex gap-2 border  p-5 border-[#E5E7EB] justify-between'>
                <div className='flex items-center gap-3'>
                   <p className='p-2 bg-[#FFEDD4] text-[#F54900] rounded-full'> <FaDollarSign size={17} /></p>
                    <div >
                        <div className='flex text-[16.5px] robReg items-center gap-3'>
                            <p className='flex items-center gap-2'>India <FaArrowRight /> Bangladesh</p>
                       
                        </div>
                        <p className='text-[#4A5565] text-[14.1px] robReg'>Road | Shipment Id: #23</p>
                    </div>
                </div>
                <div className='flex items-center gap-9'>
                    <div className='flex flex-col  items-end'>
                        <p className='text-[#1C398E] text-[24px] robReg'>$200</p>
                        <div className='flex items-center gap-5'>
                            <p className='text-[14px] bg-[#FFEDD4] px-2 py-1 text-[#CA3500] rounded-2xl robReg'>Processing</p>
                            <p className='text-sm text-[#6A7282] robReg'>Dec 12</p>
                        </div>
                    </div>
                   <Link to='/dashboard/carrier-dashboard/payments/:paymentId'>
                    <button className='text-slate-400'><FaChevronRight size={22} /> </button>
                   </Link>
                </div>
            </div>
    ))
}
        </div>
    )
} 



// Enhanced CarrierDashPayment component
const CarrierDashPayment = () => {
const location = useLocation()


    const stats = [
        { type: "active", count: 122, label: "Active Shipments", subLabel: "Currently in transit" },
        { type: "total", count: 24, label: "Total Shipments", subLabel: "Successfully delivered" },
        { type: "booked", count: 18, label: "Upcoming Shipments", subLabel: "Booked Shipments" },
     
    ];

    return (
<div>
    {
        location.pathname === '/dashboard/carrier-dashboard/payments'? (
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

         <OverViewCard  />
     
 


        </div>
        ): (<Outlet />)
    }
</div>
    );
};

export default CarrierDashPayment;
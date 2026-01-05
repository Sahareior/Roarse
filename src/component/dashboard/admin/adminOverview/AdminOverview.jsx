import React from 'react';
import { FaBox } from 'react-icons/fa';
import YearWiseShipment from './_components/YearWiseShipment';
import MonthWiseShipment from './_components/MonthWiseShipment';

const OverviewStats = () => {
    return (
        <div className=' flex justify-between p-4 px-5'>
            <div className='flex flex-col gap-3'>
                <FaBox size={22} />
                <h2 className='text-[16px]'>Total Shipments</h2>
                <p  className='text-[14px]'>Currently in transit</p>
            </div>
            <p className='text-[30px]'>122</p>
            </div>
    );
};

const AdminOverview = () => {
    return (
        <div>
           <div className='grid grid-cols-4 gap-7'>
             {
                [1,2,3,4].map((item)=>(
                    <OverviewStats key={item} />
                ))
            }
           </div>
           <div className='grid grid-cols-2'>
            <YearWiseShipment />
            <MonthWiseShipment />
           </div>
        </div>
    );
};

export default AdminOverview;
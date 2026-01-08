import { Avatar } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { IoDiamondOutline } from 'react-icons/io5';
import { FaRegBell } from 'react-icons/fa';
import { UserOutlined } from '../../../tools/dashboardNavigation';

const DashboardHeader = () => {

    const user = 'shipper'; // This can be 'admin' or 'shipper'

    return (
        <div>
                    <div className='flex justify-between py-4 px-9 bg-[#E2E2E2]'>
          <div className='flex items-center gap-2'>
            <p className='text-[32px] arBold'>WelCome</p>
            <p className='text-2xl'>,</p>
            <p className='text-[20px] arReg text-gray-600 mt-1'>{user === 'admin' ? 'Admin' : 'Shipper'} Dashboard</p>
          </div>

          <div className='flex items-center gap-3'>
{/* shipper-dashboard/subscription */}
  <>
   {
    user === 'shipper' && (
      <Link to='/dashboard/shipper-dashboard/subscription'>
       <p className="text-[14px] p-[10px] bg-[#79797980] text-white rounded-full robReg">
      <IoDiamondOutline size={20} />
    </p>
      </Link>
    )
   }

  <Link to='notifications'>
    <p className="text-[14px] p-[10px] bg-[#79797980] text-white rounded-full robReg">
      <FaRegBell size={20} />
    </p>
  </Link>
  </>


           <Link to="/dashboard/profile">
            <Avatar size={40} icon={<UserOutlined />} />
           </Link>
          </div>
        </div>
        </div>
    );
};

export default DashboardHeader;
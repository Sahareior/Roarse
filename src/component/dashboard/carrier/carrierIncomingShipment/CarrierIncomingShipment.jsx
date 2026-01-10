import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { GrLocation } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const OverViewCard = ({ title }) => {
  return (
    <div className="border border-[#E5E7EB] py-4">
      <p className="robReg text-[20px] px-5">{title}</p>

{
    [1,2,3,4,5].map(items => (
                    <div className='flex gap-2 border mt-6 p-5 border-[#E5E7EB] justify-between'>
                <div className='flex items-center gap-3'>
                    <GrLocation  size={22} />
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
                   <Link to='/dashboard/carrier-dashboard/incoming-shipments/:incomingId'>
                    <button className='py-2 px-6 rounded-md bg-black text-white'>View Details</button>
                   </Link>
                </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-[#1C398E] text-[24px] robReg">$200</p>
              <p className="text-[14px] robReg">Estimated</p>
            </div>
            <Link to="/dashboard/carrier-dashboard/incoming-shipments/:incomingId">
              <button className="py-2 px-6 rounded-md bg-black text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const CarrierIncomingShipment = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname ===
      "/dashboard/carrier-dashboard/incoming-shipments" ? (
        <div>
          <OverViewCard title={"Incoming Shipment Request"} />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default CarrierIncomingShipment;

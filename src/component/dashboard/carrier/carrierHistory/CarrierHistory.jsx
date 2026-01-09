import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';


const OverViewCard = ({title}) => {
    return(
        <div className='border border-[#E5E7EB] py-4'>
            <p className='robReg text-[20px] px-5'>{title}</p>

{
    [1,2,3,4,5].map(items => (
                    <div className='flex gap-2 border mt-6 p-5 border-[#E5E7EB] justify-between'>
                <div className='flex gap-3'>
                   <IoCheckmarkDoneCircle className='text-green-500 mt-2' size={22} />
                    <div >
                        <div className='flex text-[16.5px] robReg items-center gap-3'>
                            <p className='flex items-center gap-2'>India <HiOutlineArrowNarrowRight  /> Bangladesh</p>
                            <p className='text-[#008236] p-1 px-3 rounded-2xl bg-[#DCFCE7]'>Deliveried</p>
                        </div>
                        <p className='text-[#4A5565] text-[14.1px] robReg'>Road | 800kg | Industrial</p>
                        <p className='robReg text-[#6A7282] mt-1'>Completed on December 25, 2026</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <p className='text-[#1C398E] text-[24px] robReg'>$200</p>
                        <p className='text-[14px] robReg'>Estimated</p>
                    </div>
                   <Link to='/dashboard/carrier-dashboard/active-deliveries/:deliveryId'>
                    <button className='py-2 px-6 rounded-md bg-black text-white'>Updated Status</button>
                   </Link>
                </div>
            </div>
    ))
}
        </div>
    )
} 


const CarrierHistory = () => {
    return (
        <div>
        <OverViewCard />
        </div>
    );
};

export default CarrierHistory;
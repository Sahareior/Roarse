import React from 'react';
import Quote from './../../../homepage/Quote/Quote';
import { Link, Outlet, useLocation } from 'react-router-dom';

const QuoteCard =() => {
    return (
        <div className="border border-gray-300 flex justify-between items-center rounded-lg p-4">
          <div>
              <h3 className="text-[16px] font-semibold robReg mb-2">Route: India-Bangladesh (Road)</h3>
            <div className='flex gap-12 text-[16px] robReg'>
                <p>Weight : 100kg</p>
                <p>Category : Electromic</p>
            </div>
          </div>
           <Link to="/dashboard/quotes/:quoteId">
            <button className="bg-black 0 text-white px-7 h-8 py-1 rounded hover:bg-blue-600 transition-colors">View </button>
           </Link>
        </div>
    );
}

const QuoteManagement = () => {
    const location = useLocation()
    return (
<div>
    {
location.pathname === '/dashboard/quotes' ? (
            <div>
            <p className='text-[20px] robMed border-b-2 border-[#E5E7EB] p-6'>Quote List</p>

          <div className='mt-9'>
            {
            [1,2,3,4,5,6,7,8,9,10].map((item) => (
              <div key={item} className='mb-4'>
                <QuoteCard />
              </div>
            ))
            }
          </div>
        </div>
):(
    <Outlet />
)
    }
</div>
    );
};

export default QuoteManagement;
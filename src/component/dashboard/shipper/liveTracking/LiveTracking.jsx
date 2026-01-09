import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const TrackingRow = ({ route, status, details, price }) => {
  return (
    <div className="flex justify-between items-center py-4 border-b last:border-b-0">
      <div className="space-y-2">
        <div className="flex items-center robReg gap-2 text-[16px] font-medium">
          <span>{route}</span>
          <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-600">
            {status}
          </span>
        </div>
        <p className="text-[14px] mt-2 font-semibold text-[#4A5565]">{details}</p>
      </div>

      <div className="text-right space-y-1">
        <p className="text-[18px] robReg font-medium">{price}</p>
     <Link to="/dashboard/shipper-dashboard/live-tracking/12345">
        <button className="text-[16px] mt-1 text-[#1C398E] robReg hover:underline">
          Track
        </button>
     </Link>
      </div>
    </div>
  );
};

const LiveTracking = () => {
    const location = useLocation()
  const trackingData = Array.from({ length: 6 }).map(() => ({
    route: "San Francisco, CA → Denver, CO",
    status: "in-transit",
    details: "ROAD • 2500kg • Electronics",
    price: "$3,400",
  }));

    return (
<div>
    {
        location.pathname === '/dashboard/shipper-dashboard/live-tracking' ? (
                <div className="p-1 max-w-8xl mx-auto">
      <div className="bg-white border rounded-xl p-5">
        <h2 className="text-[20px] border-b-2 border-slate-300 pb-3 arMed font-medium mb-4">
          Live Tracking
        </h2>

        <div className="divide-y">
          {trackingData.map((item, index) => (
            <TrackingRow key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
        ): (<Outlet />)
    }
</div>
    );
};

export default LiveTracking;
import { Popover } from "antd";
import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaPlane, FaShip, FaTruck } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";

const mockShippers = Array.from({ length: 8 }).map((_, i) => {
  // Define 3 types
  const types = ['air', 'road', 'sea'];
  const type = types[i % 3];
  
  // Get appropriate icon for each type
  const getIconForType = (type) => {
    switch(type) {
      case 'air':
        return <FaPlane className="text-blue-500" />;
      case 'sea':
        return <FaShip className="text-blue-700" />;
      case 'road':
        return <FaTruck className="text-green-600" />;
      default:
        return <FaTruck className="text-gray-500" />;
    }
  };

  // Different names for variety
  const names = [
    "John Abraham", 
    "Sarah Johnson", 
    "Michael Chen", 
    "Emma Wilson", 
    "David Brown", 
    "Lisa Rodriguez", 
    "Robert Taylor", 
    "Maria Garcia"
  ];



  return {
    id: `SH-0${i + 1}${i}`,
    name: names[i],

    type: type,
    typeLabel: type.charAt(0).toUpperCase() + type.slice(1), // 'air' -> 'Air'
    icon: getIconForType(type),
    active: i % 4 !== 0, // Make some inactive for variety
   
  };
});

const CarrierNShipperManagement = () => {
  const [search, setSearch] = useState("");
  const [shippers, setShippers] = useState(mockShippers);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = newOpen => {
    setOpen(newOpen);
  };


  const isMainPage = location.pathname === '/dashboard/shipper' || location.pathname === '/dashboard/carriers' || location.pathname === '/dashboard/carrier-management' || location.pathname === '/dashboard/agents';

  const toggleStatus = (index) => {
    setShippers((prev) =>
      prev.map((shipper, i) =>
        i === index ? { ...shipper, active: !shipper.active } : shipper
      )
    );
  };

  const filteredShippers = shippers.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {isMainPage ? (
        <div className="p-6 max-w-8xl mx-auto">
          <h1 className="text-xl robMed font-semibold">Shipper Management</h1>
          
          <div className="flex py-8 justify-between">
            {/* Search */}
            <input
              type="text"
              placeholder="Search Shipper"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-1/4 py-2 px-7 border rounded-2xl text-sm"
            />

<Popover
  trigger="click"
  placement="bottomRight"
  content={
    <div
      onClick={(e) => e.stopPropagation()}
      className="space-y-2 w-24"
    >
      {['Road', 'Air', 'Sea'].map((type) => (
        <label
          key={type}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            value={type}
            className="cursor-pointer"
          />
          <span>{type}</span>
        </label>
      ))}
    </div>
  }
>
  <button className="border border-black px-5 py-1 rounded text-sm flex items-center gap-1">
    <CiFilter /> Filter
  </button>
</Popover>



          </div>

          <p className="arReg text-[20px] py-4 pb-7">Shipper Lists</p>

          {/* List */}
          <div className="space-y-3">
            {filteredShippers.map((shipper, index) => (
              <div
                key={shipper.id}
                className="flex justify-between items-center border rounded-lg px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium robReg text-[16px]">{shipper.name}</span>
   
                  </div>
                  <p className="text-xs robReg flex items-center gap-3 text-gray-500 mt-1">
                    ID: {shipper.id}
                    <p className="flex items-center gap-2">
                                      {shipper.icon}   {shipper.type}
                    </p>
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Link to={`/dashboard/carriers/${shipper.id}`}>
                    <button className="bg-black text-white px-4 py-2 text-xs rounded hover:bg-gray-800 transition-colors">
                      View Profile
                    </button>
                  </Link>

                  {/* Toggle Switch */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600">
                      {shipper.active ? "Active" : "Inactive"}
                    </span>
                    <button
                      onClick={() => toggleStatus(index)}
                      className={`w-10 h-5 rounded-full relative transition ${
                        shipper.active ? "bg-green-500" : "bg-gray-300"
                      }`}
                      aria-label={`Toggle shipper status for ${shipper.name}`}
                    >
                      <span
                        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition ${
                          shipper.active ? "right-0.5" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          {filteredShippers.length > 0 && (
            <div className="flex justify-center mt-6">
              <button className="border px-4 py-2 text-sm rounded hover:bg-gray-50 transition-colors">
                See More
              </button>
            </div>
          )}
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default CarrierNShipperManagement;
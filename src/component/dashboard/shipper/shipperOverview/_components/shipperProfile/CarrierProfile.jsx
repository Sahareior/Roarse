import React, { useState } from "react";
import { FaBuilding, FaDiceD6, FaEdit, FaMailBulk, FaPhone, FaPlane, FaRegFileAlt, FaShip, FaStar, FaTruck } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline, IoLocationSharp, IoTimeOutline } from "react-icons/io5";


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

const ProfileSection = ({ shipper, onToggleStatus }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: "John Abraham",
        email: "john.abraham@example.com",
        phone: "123-456-7890",
        address: "123 Main Street, City, Country",
        memberSince: "2025"
    });

    const handleSave = () => {
        setIsEditing(false);
        // Here you would typically save to an API
    };

    return (
        <div className='bg-black text-white p-8 rounded-xl mb-6'>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6'>
                {/* Profile Image */}
                <div className='flex flex-col items-center'>
                    <img 
                        className='w-[150px] h-[150px] rounded-full object-cover border-4 border-white mb-4'
                        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" 
                        alt="John Abraham" 
                    />
                    <button className='flex items-center gap-2 text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors'>
                        <FaEdit /> Change Photo
                    </button>
                </div>

                {/* Profile Info */}
                <div className='flex-1'>
                    <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-4'>
                        <div>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={profileData.name}
                                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                                    className="text-[24px] robMed bg-gray-800 text-white p-2 rounded w-full"
                                />
                            ) : (
                                <p className='text-[24px] robMed'>{profileData.name}</p>
                            )}
                            
                            <div className='flex flex-wrap items-center gap-2 my-3'>
                                <p className='px-4 py-1 bg-[#333333] rounded-2xl text-sm'>Premium</p>
                                <p className='px-4 py-1 bg-[#00A63E] rounded-2xl text-sm'>Verified</p>
                              
                            </div>
                        </div>
                            
                        <div className='flex flex-col justify-center items-center gap-7 mt-4 lg:mt-0'>
                            <button
                                onClick={onToggleStatus}
                                className={`w-12 h-6 rounded-full relative transition ${
                                    shipper?.active ? "bg-green-500" : "bg-gray-600"
                                }`}
                                aria-label={`Toggle account status`}
                            >
                                <span
                                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition ${
                                        shipper?.active ? "right-0.5" : "left-0.5"
                                    }`}
                                />
                            </button>
                            <button 
                                onClick={onToggleStatus}
                                className='px-4 py-2 bg-[#00A63E] hover:bg-green-700 rounded-lg flex items-center gap-2 transition-colors'
                            >
                                Verify Now
                            </button>
                        </div>
                    </div>
                                      <p className='text-gray-300 mb-4 text-sm'>Member Since {profileData.memberSince}</p>
                    {/* Contact Information */}
                    <div className='space-y-3'>
                        {isEditing ? (
                            <>
                                <div className='flex items-center gap-3'>
                                    <FaMailBulk className='text-gray-400' />
                                    <input
                                        type="email"
                                        value={profileData.email}
                                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                                        className="bg-gray-800 text-white p-2 rounded flex-1"
                                    />
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FaPhone className='text-gray-400' />
                                    <input
                                        type="tel"
                                        value={profileData.phone}
                                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                                        className="bg-gray-800 text-white p-2 rounded flex-1"
                                    />
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FaBuilding className='text-gray-400' />
                                    <input
                                        type="text"
                                        value={profileData.address}
                                        onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                                        className="bg-gray-800 text-white p-2 rounded flex-1"
                                    />
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center gap-4">
                                <p className='flex items-center gap-2 text-gray-300'>
                                    <FaMailBulk className='text-gray-400' /> 
                                    {profileData.email}
                                </p>
                                <p className='flex items-center gap-2 text-gray-300'>
                                    <FaPhone className='text-gray-400' /> 
                                    {profileData.phone}
                                </p>
                                <p className='flex items-center gap-2 text-gray-300'>
                                    <FaBuilding className='text-gray-400' /> 
                                    {profileData.address}
                                </p>
                            </div>
                        )}
                    </div>


                    {/* Save Button for Edit Mode */}
                    {isEditing && (
                        <div className='flex justify-end mt-6'>
                            <button 
                                onClick={handleSave}
                                className='px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors'
                            >
                                Save Changes
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ label, value }) => (
  <div className="flex flex-col gap-1 bg-white border rounded-lg p-4">
    <p className=""><FaDiceD6 size={24} className="" /></p>
    <span className="text-[24px] robMed font-semibold">{value}</span>
    <span className="text-[16px] robMed text-gray-500">{label}</span>
  </div>
);

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-[16px] robReg text-gray-500">{label}</p>
    <p className="text-[20px] font-medium">{value}</p>
  </div>
);

const DocumentItem = ({ title }) => (
  <div className="flex justify-between items-center border rounded-lg p-3">
<div className="flex items-center gap-3">
    <p className="p-4 bg-[#F3F4F6] rounded-xl"><FaRegFileAlt size={20} className="text-[#6A7282]" /></p>
        <div>
        <span className="text-[16px] text-[#000000] robReg">{title}</span>
        <p className="text-[#6A7282] robReg text-xs">Uploaded</p>
        <p className="text-[#6A7282] robReg text-xs">10/11/2022</p>
    </div>
</div>

    <button className="text-xs bg-black text-white px-8 py-2 rounded">
      View
    </button>
  </div>
);

const CarrierProfile = () => {
  return (
    <div className="p-6 max-w-8xl mx-auto space-y-6">
      {/* Header */}
    <ProfileSection />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="Total Shipment Request" value="142" />
        <StatCard label="Total Spent" value="$21,452" />
        <StatCard label="On-Time Delivery" value="96%" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Company Info */}
        <div className="lg:col-span-2 bg-white border rounded-xl p-5">
          <h3 className="font-semibold robReg text-[24px] mb-4">Company Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem label="Company Name" value="ABC Trading Ltd" />
            <InfoItem label="Industry" value="Import / Export" />
            <InfoItem label="Registration Number" value="REG-123-456-789" />
            <InfoItem label="TAX ID" value="TAX-123-154" />
            <InfoItem label="Address" value="123 Business Road, New York, NY 1200" />
            <InfoItem label="Website" value="www.abctrade.com" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white border rounded-xl p-5">
          <h3 className="font-semibold robReg text-[24px] mb-4">Quick Stats</h3>

          <ul className="space-y-7 text-sm">
            <li className="flex border-b-2 border-[#767575] pb-3 justify-between">
              <span className="text-[16px] text-[#767575] flex items-center gap-2"> <p><IoTimeOutline  /> </p> Active Shipments</span>
              <span className="font-medium text-[24px]">3</span>
            </li>
            <li className="flex border-b-2 border-[#767575] pb-3 justify-between">
              <span className="text-[16px] text-[#767575] flex items-center gap-2"><IoCheckmarkDoneCircleOutline /> Completed</span>
              <span className="font-medium text-[24px]">126</span>
            </li>
            <li className="flex border-b-2 border-[#767575] pb-3 justify-between">
              <span className="text-[16px] text-[#767575] flex items-center gap-2"><IoLocationSharp /> Saved Address</span>
              <span className="font-medium text-[24px]">8</span>
            </li>
            <li className="flex border-b-2 border-[#767575] pb-3 justify-between">
              <span className="text-[16px] text-[#767575] flex items-center gap-2"><FaStar /> Preferred Carrier</span>
              <span className="font-medium text-[24px]">8</span>
            </li>
          </ul>
        </div>
      </div>



                  <div className='border border-[#E5E7EB] p-4'>
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4'>
                    <h2 className='text-[20px] arReg font-bold'>Recent Shipments</h2>
   
                </div>

                <div className='space-y-4'>
                    {mockShipments.length > 0 ? (
                        mockShipments.map((shipment) => (
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
    </div>
  );
};

export default CarrierProfile;

import { Switch } from "antd";
import React, { useState } from "react";
import { BiCheckDouble } from "react-icons/bi";
import { FaBuilding, FaCreditCard, FaDiceD6, FaEdit, FaMailBulk, FaPhone, FaPlane, FaPlusCircle, FaRegFileAlt, FaShip, FaStar, FaTruck } from "react-icons/fa";
import { FaC, FaShield } from "react-icons/fa6";
import { IoCheckmarkDoneCircleOutline, IoLocationSharp, IoTimeOutline } from "react-icons/io5";


const PreferenceRow = ({ title, description, checked, onChange }) => (
  <div className="flex items-center justify-between py-4">
    <div>
      <p className="text-[16px] arReg font-semibold text-gray-900">{title}</p>
      <p className="text-[14px] arReg text-gray-500">{description}</p>
    </div>
    <Switch checked={checked} onChange={onChange} />
  </div>
);


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
                               
                                <p className='px-5 py-1 bg-[#00C95033] rounded-2xl text-sm'>Verified</p>
                              
                            </div>
                        </div>
                            
                        <div className='flex flex-col justify-center items-center gap-7 mt-4 lg:mt-0'>
      
                            <button 
                                onClick={onToggleStatus}
                                className='px-4 py-2 bg-white hover:bg-white/60 text-black rounded-lg flex items-center gap-2 transition-colors'
                            >
                               <FaEdit /> Edit Profile
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

const ShipperSettings = () => {
  const [preferences, setPreferences] = useState({
    email: true,
    sms: false,
    shipment: true,
    price: true,
  });

  const handleToggle = (key) => (value) =>
    setPreferences((prev) => ({ ...prev, [key]: value }));

  const handleSave = () => {
    console.log("Saved preferences:", preferences);
    // API call goes here
  };


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

          </ul>
        </div>
      </div>

{/* Verification Status */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border rounded-xl p-5">
<div className="flex justify-between items-center">
    <p className="text-[20px] robReg">Verification Status</p>
    <FaShield className="text-green-300" />
</div>

<div className="mt-8 grid gap-5 grid-cols-2">
    {
[1,2,3,4,5].map(items => (
            <div className="flex bg-[#F9FAFB] px-5 py-4 justify-between ">
            <p className="flex items-center gap-2">
                <span className="p-1 bg-green-100 rounded-full"><BiCheckDouble className="text-green-400" size={22} /></span> Email
            </p>
            <p className="text-green-500 p-1 rounded-lg bg-green-100 w-16 text-center"> Verified</p>
        </div>
))
    }
</div>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <div className="flex items-center justify-between">
            <p className="text-[20px] robReg">Payment Methods</p>
            <FaCreditCard size={28} className="text-[#6A7282]" />
        </div>

        <div className="mt-5 border flex items-center justify-between  p-5">
            <div className="flex items-center gap-4">
                <p className="p-3 bg-[#F3F4F6] rounded-3xl"><FaCreditCard /></p>
                <div>
                    <p>*********8132</p>
                    <p>Expires 12/24</p>
                </div>
            </div>
            <p className="text-green-500 p-1 px-2 bg-green-100 rounded-2xl">Primary</p>
        </div>

        <button className="mt-4 border-4 flex items-center gap-2 justify-center w-full text-center px-6 py-3 text-gray-500 hover:text-blue-700"><FaPlusCircle /> Add Payment Method</button>
      </div>
</div>

      {/* Documents */}
      <div className="bg-white border rounded-xl p-5">
       <div className="flex justify-between pb-8 pt-4 items-center">
         <h3 className="font-semibold text-[20px] robReg ">Documents</h3>
         <FaRegFileAlt size={28} className="text-[#6A7282]" />
       </div>

        <div className="space-y-3">
          <DocumentItem title="Business License" />
          <DocumentItem title="Tax Certificate" />
          <DocumentItem title="Insurance Certificate" />
          <DocumentItem title="ID Verification" />
        </div>
      </div>

<div>
 <div className="bg-white border rounded-xl p-6 ">
      <h2 className="text-[20px] font-semibold arReg  text-gray-900 mb-4">
        Notification Preferences
      </h2>

      <div className="divide-y">
        <PreferenceRow
          title="Email Notifications"
          description="Receive notifications about email notifications"
          checked={preferences.email}
          onChange={handleToggle("email")}
        />

        <PreferenceRow
          title="SMS Notifications"
          description="Receive notifications about sms notifications"
          checked={preferences.sms}
          onChange={handleToggle("sms")}
        />

        <PreferenceRow
          title="Shipment Updates"
          description="Receive notifications about shipment updates"
          checked={preferences.shipment}
          onChange={handleToggle("shipment")}
        />

        <PreferenceRow
          title="Price Alerts"
          description="Receive notifications about price alerts"
          checked={preferences.price}
          onChange={handleToggle("price")}
        />
      </div>

      <div className="mt-6">
     
      </div>
    </div>
</div>
    </div>
  );
};

export default ShipperSettings;

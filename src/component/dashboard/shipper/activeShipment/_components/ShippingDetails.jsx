import { Divider } from "antd";
import React from "react";
import { BsPersonCheck } from "react-icons/bs";
import { CgChevronRight } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { MdArrowRightAlt, MdOutlineAttachMoney } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";



const Card = ({ title, action, children, icon }) => (
  <div className="bg-white border rounded-xl w-full p-5 space-y-4">
    {(title || action) && (
      <div className="flex items-center w-full justify-between">
        <h3 className="text-[17px] font-semibold flex gap-3 items-center text-gray-700">
          <p className="p-3 bg-[#EFEFEF] text-2xl rounded-xl">{icon || <FaBox />}</p> 
          {title}
        </h3>
      </div>
    )}
    {action ? (
      <div className="flex w-full justify-between bg-[#F9FAFB] p-5">
        <div>{children}</div>
        <div className={`${title === "Quick Actions" ? "w-full" : "w-[10vw]"}`}>
          {action}
        </div>
      </div>
    ) : (
      <div className="bg-[#F9FAFB] p-5">{children}</div>
    )}
  </div>
);

const InfoItem = ({ label, value }) => (
  <div className="robReg ">
    <p className="text-[14px] text-gray-500">{label}</p>
    <p className="text-[20px] font-medium text-[#101828]">{value}</p>
  </div>
);
const Price = ({ label, value }) => (
  <div className="robReg flex  w-full justify-between ">
    <p className="text-[14px] text-gray-500">{label}</p>
    <p className="text-[20px] font-medium text-[#101828]">{value}</p>
  </div>
);

// Updated Button component with onClick support
const Button = ({ children, variant = "primary", onClick, type = "button" }) => {
  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-2.5 rounded-lg text-sm font-medium transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

const MiniTimelineItem = ({ title, subtitle, isLast }) => {
  return (
    <div className="flex gap-3">
     
      <div className="flex flex-col items-center">
        <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
          <FaCheck className="text-white text-[10px]" />
        </div>

        {!isLast && (
          <div className="w-[2px] h-12 bg-[#E5E7EB] mt-1" />
        )}
      </div>

    
      <div className="pb-4">
        <p className="text-[14px] text-[#101828] font-medium">
          {title}
        </p>
        <p className="text-[12.5px] mt-1 text-[#667085]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};


const MiniTimeline = ({ data }) => {
  return (
    <div className="space-y-5">
      {data.map((item, index) => (
        <MiniTimelineItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  );
};




const ShippingDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
const statusTimeline = [
  {
    title: "Shipment Created",
    subtitle: "Dec 13, 2025, 09:00 AM",
  },
  {
    title: "Carrier Assigned",
    subtitle: "Carrier confirmed and ready",
  },
];

// Navigation handlers
const handleTrackShipment = () => {
  navigate('/dashboard/shipper-dashboard/active-shipments/SH-7845/trackingId');
};

const handleBackToDashboard = () => {
  // Navigate to dashboard - update the path as needed
  navigate('/dashboard/shipper-dashboard');
};

const handleChatWithCarrier = () => {
  // Implement chat functionality
  console.log("Chat with carrier clicked");
  // You can add navigation or modal opening logic here
};

const handleContactSupport = () => {
  // Implement contact support functionality
  console.log("Contact support clicked");
  // You can add navigation or modal opening logic here
};

const handleBack = () => {
  navigate(-1); // Go back to previous page
};




  return (
<div>
  {
    location.pathname === '/dashboard/shipper-dashboard/active-shipments/SH-7845'? (    <div className="max-w-8xl mx-auto p-1 space-y-6 bg-gray-50 min-h-screen">

      <div className="flex robReg items-center justify-between">
        <div>
          <button 
            onClick={handleBack}
            className="text-xl text-gray-500 mb-9 hover:text-gray-700 transition-colors"
          >
            ← Back
          </button>
          <h1 className="text-[24px] font-semibold text-gray-900">
            Shipment Details
          </h1>
          <p className="text-[16px] text-[#4A5565]">Tracking ID: #511</p>
        </div>
        <span className="px-6 py-2 text-xs font-medium rounded-full bg-orange-100 text-orange-600">
          confirmed
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    
        <div className="lg:col-span-2 space-y-6">
    
          <Card icon={<SlLocationPin />} title="Route Information">
            
            <div className="">
              <div className="grid grid-cols-2 items-center md:grid-cols-3 gap-4">
                <InfoItem label="From" value="Dallas, TX" />
                <MdArrowRightAlt size={35} />
                <InfoItem label="To" value="Chicago, IL" />
              </div>
              <Divider />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <InfoItem label="Transport Mode" value="ROAD" />
                <InfoItem label="Weight" value="2200 kg" />
                <InfoItem label="Category" value="Electronics" />
              </div>
            </div>
          </Card>

          
          <Card 
            icon={<FiBox />} 
            title="Current Status" 
            action={
              <Button onClick={handleTrackShipment}>
                Track Shipment
              </Button>
            }
          >
            <p className="text-[16px] font-medium text-gray-900">Confirmed</p>
            <p className="text-[14px] text-gray-500">
              Carrier has been assigned and confirmed
            </p>
          </Card>

         
          <Card icon={<CiCalendarDate />} title="Shipment Timeline">
            <div className="space-y-1">
              <MiniTimeline data={statusTimeline} />
            </div>
          </Card>

          <Card
            icon={<BsPersonCheck />}
            title="Assigned Carrier"
            action={
              <Button onClick={handleChatWithCarrier}>
                Chat
              </Button>
            }
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
                  SJ
                </div>
                <div>
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-xs text-gray-500">
                    Continental Freight • ⭐ 4.6 • 421 deliveries
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Pricing */}
        <Card icon={<MdOutlineAttachMoney />} title="Pricing">
  <div className="space-y-3">
    <Price label="Estimated Price" value="$2,900" />
    <Price label="Final Price" value="$2,850" />
    <Divider />
    <div className="flex justify-between items-center font-semibold text-blue-600 pt-3">
      <span>Total</span>
      <span className="text-[24px]">$2,850</span>
    </div>
  </div>
</Card>

    <div className="w-full border rounded-xl p-5 bg-white">
        <p className="text-[16px] font-normal">Quick Actions</p>
        <div className="flex flex-col gap-3 mt-5">
           
            <button 
              onClick={handleTrackShipment} 
              className="px-4 py-3 bg-black font-medium text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Track Shipment
            </button>
           
            <button 
              onClick={handleBackToDashboard}
              className="px-4 py-3 bg-white border font-medium text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Back to Dashboard
            </button>
        </div>
    </div>

     
          <Card>
            <p className="text-sm font-medium text-blue-600">Need Help?</p>
            <p className="text-xs text-gray-500 mb-3">
              Contact our support team for assistance with this shipment
            </p>
            <button 
              onClick={handleContactSupport}
              className="text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Contact Support
            </button>
          </Card>
        </div>
      </div>
    </div>):(<Outlet />)
  }
</div>
  );
};

export default ShippingDetails;
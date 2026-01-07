import React, { useMemo } from 'react';
import { Divider, Timeline } from 'antd';
import { FaCheck, FaDollarSign, FaDownload, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaStar, FaTruck, FaUser } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

// Extract reusable components for better maintainability
const TransportInfoCard = ({ icon: Icon, title, value, className = '' }) => (
  <div className={` ${className}`}>
    <p className='text-[#4A5565] text-[15px] robReg'>{title}</p>
    <p className='text-[16px] robReg'>{value}</p>
  </div>
);

const TransportIconWithLabel = ({ icon: Icon, label, value }) => (
  <div className='flex items-center gap-4'>
    <div className='bg-black p-4 rounded-xl text-white'>
      <Icon />
    </div>
    <div>
      <p className='text-[#4A5565] text-[16px] robReg'>{label}</p>
      <p className='text-[18px] robReg'>{value}</p>
    </div>
  </div>
);

const RouteInfo = ({ type, location, date }) => (
  <div>
    <p className='text-[15px] text-[#4A5565] robReg'>{type}</p>
    <p className='text-[18px] robReg'>{location}</p>
    <p className='text-[13px] text-[#6A7282] robReg'>{date}</p>
  </div>
);

const PriceRow = ({ label, value, isTotal = false }) => {
  const textClass = isTotal 
    ? 'text-[15px] robReg' 
    : 'text-[#4A5565] text-[15px] robReg';
  
  return (
    <div className='flex justify-between items-center'>
      <p className={textClass}>{label}</p>
      <p className='text-[15px] robReg'>{value}</p>
    </div>
  );
};

const Card = ({ title, icon: Icon, children, extra }) => (
  <div className="bg-white border rounded-xl p-6 space-y-4">
    <div className="flex items-center justify-between">
      <div className="flex  items-center gap-2 text-[20px] robReg font-semibold text-gray-900">
        <Icon className="text-gray-600 " />
        {title}
      </div>
      {extra}
    </div>
    {children}
  </div>
);

const InfoBlock = ({ label, value }) => (
  <div>
    <p className="text-sm robReg text-gray-500">{label}</p>
    <p className="text-[18px] robReg font-medium text-gray-900">{value}</p>
  </div>
);

const ContactRow = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 text-sm ">
    <Icon className="text-gray-400" />
    <span className='text-[15px] robReg'>{text}</span>
  </div>
);


const TimelineDot = () => (
  <div className="h-4 rounded-full bg-black flex items-center justify-center">
    <FaCheck  className="text-white  text-xs" />
  </div>
);

/* -------------------- Timeline Item Content -------------------- */

const TimelineContent = ({ title, location, date, description }) => (
  <div className="space-y-1">
    <p className="text-[16px] font-medium text-gray-900">{title}</p>
    <p className="text-[14px] text-gray-600">{location}</p>
    <p className="text-[13px] text-gray-500">{date}</p>
    <p className="text-[14px] text-gray-700">{description}</p>
  </div>
);



const TransportDetails = () => {
  // Memoize transport data to prevent unnecessary re-renders
  const transportInfo = useMemo(() => [
    { title: 'Tracking Number', value: 'TRK-789456' },
    { title: 'Weight', value: '44Kg' },
    { title: 'Dimensions', value: '20*50*34' },
    { title: 'Package Standard', value: 'Standard Cargo' }
  ], []);

  const pricingInfo = useMemo(() => [
    { label: 'Final Price', value: '18.52' },
    { label: 'Total Amount', value: '18.52', isTotal: true }
  ], []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center'>
      {/* Left Column - Transport Info */}
      <div className='space-y-2 w-full bg-white p-7 rounded-xl'>
        <TransportIconWithLabel 
          icon={FaTruck}
          label="Transport Type"
          value="Road"
        />
        
        <div className='space-y-3'>
          {transportInfo.map((info, index) => (
            <TransportInfoCard
              key={index}
              title={info.title}
              value={info.value}
            />
          ))}
        </div>
      </div>

      {/* Middle Column - Route Info */}
      <div className='space-y-2 bg-white p-7 w-full rounded-xl'>
        <div className='flex gap-2 items-center text-[18px] robReg'>
          <FaLocationDot />
          <span>Route Information</span>
        </div>

        <div className='space-y-4'>
          <RouteInfo
            type="From"
            location="NewYork"
            date="Picked up: 10/12/2024"
          />
          
          <div className='h-6 w-[0.5px] bg-gray-300 mx-2' />
          
          <RouteInfo
            type="To"
            location="NewYork"
            date="Delivered: 10/12/2024"
          />
        </div>
      </div>

      {/* Right Column - Pricing */}
      <div className='w-full bg-white p-7 rounded-xl'>
        <div className='flex items-center gap-2 mb-4 text-[18px] robReg'>
          <FaDollarSign />
          <span>Pricing Breakdown</span>
        </div>

        <div className='space-y-2'>
          {pricingInfo.map((price, index) => (
            <React.Fragment key={index}>
              <PriceRow
                label={price.label}
                value={price.value}
                isTotal={price.isTotal}
              />
              {!price.isTotal && <Divider className='my-2' />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const ShippingHistoryDetails = () => {
  // Moved timelineData here to make it accessible in the ShippingHistoryDetails component
  const timelineData = [
    {
      title: "Shipment Created",
      location: "New York, NY",
      date: "Dec 8, 2024, 06:00 AM",
      description: "Booking confirmed and shipment created",
    },
    {
      title: "Picked Up",
      location: "New York, NY",
      date: "Dec 9, 2024, 06:00 AM",
      description: "Package picked up from sender",
    },
    {
      title: "In Transit",
      location: "En route",
      date: "Dec 10, 2024, 06:00 AM",
      description: "Package is on the way to destination",
    },
    {
      title: "Out for Delivery",
      location: "Los Angeles, CA",
      date: "Dec 12, 2024, 06:00 AM",
      description: "Package out for final delivery",
    },
    {
      title: "Delivered",
      location: "Los Angeles, CA",
      date: "Dec 13, 2024, 06:00 AM",
      description: "Successfully delivered to recipient",
    },
  ];

  return (
    <div className=''>
      {/* Success Banner */}
      <div className='p-5 bg-[#F0FDF4] border-2 border-[#BBF7D0] rounded-lg mb-6'>
        <p className='text-[#0D542B] text-[18px] robReg mb-1'>
          Shipment Delivered Successfully
        </p>
        <p className='text-[#0D542B] text-[15px] robReg'>
          Delivered on December 13, 2024
        </p>
      </div>

      {/* Transport Details */}
      <TransportDetails />


      <div className="space-y-6 mt-8">

        {/* Shipper & Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Shipper */}
          <Card title="Shipper Information" icon={FaUser}>
            <div className="space-y-3">
              <InfoBlock label="Name" value="John Doe" />
              <InfoBlock label="Company" value="ABC Trading Inc." />

              <ContactRow icon={FaPhoneAlt} text="+1 (555) 123-4567" />
              <ContactRow icon={FaEnvelope} text="john.doe@abctrading.com" />
              <ContactRow
                icon={FaMapMarkerAlt}
                text="123 Business St, New York, NY 10001"
              />
            </div>
          </Card>

          {/* Receiver */}
          <Card title="Receiver Information" icon={FaUser}>
            <div className="space-y-3">
              <InfoBlock label="Name" value="Jane Smith" />
              <InfoBlock label="Company" value="XYZ Logistics Co." />

              <ContactRow icon={FaPhoneAlt} text="+1 (555) 987-6543" />
              <ContactRow icon={FaEnvelope} text="jane.smith@xyzlogistics.com" />
              <ContactRow
                icon={FaMapMarkerAlt}
                text="456 Commerce Ave, Los Angeles, CA 90001"
              />
            </div>
          </Card>
        </div>

        {/* Carrier */}
        <Card
          title="Carrier Information"
          icon={FaUser}
          extra={
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <FaStar className="text-black text-xl" />
              <FaStar className="text-black text-xl" />
              <FaStar className="text-black text-xl" />
              <FaStar className="text-black text-xl" />
              <FaStar className="text-gray-300 text-xl" />
              <span className="ml-1 text-xs">4.8</span>
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <InfoBlock label="Company Name" value="Fast Transit LLC" />
            <InfoBlock label="Vehicle Number" value="TRK-8472" />
            <InfoBlock label="Phone" value="+1 (555) 246-8135" />
            <InfoBlock label="Email" value="contact@fasttransitllc.com" />
          </div>
        </Card>

        {/* Timeline Section */}
        <Timeline
        className="bg-white border rounded-xl p-6"
          mode="left"
          items={timelineData.map((item) => ({
            dot: <TimelineDot />,
            children: (
              <TimelineContent
                title={item.title}
                location={item.location}
                date={item.date}
                description={item.description}
              />
            ),
          }))}
        />
      </div>
<button className='px-8 py-2 bg-black text-white flex items-center gap-2 rounded-xl mt-4'>
  <FaDownload />  Download Invoice
</button>
    </div>
  );
};

export default React.memo(ShippingHistoryDetails);
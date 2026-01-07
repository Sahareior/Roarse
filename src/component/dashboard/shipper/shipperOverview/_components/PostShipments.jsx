import React, { useState } from 'react';
import TransportMode from './steps/TransportMode';
import ShipmentDetails from './steps/ShipmentDetails';
import UploadDocuments from './steps/UploadDocuments';
import FindingCarriers from './steps/FindingCarriers';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const PostShipments = () => {

  const [currentStep, setCurrentStep] = useState(1);

  const location = useLocation()

  const steps = [
    { id: 1, label: 'Shipment Detail' },
    { id: 2, label: 'Transport Mode' },
    { id: 3, label: 'Documents' },
    { id: 4, label: 'Confirmation' },
  ];

  // Placeholder form data state - you can expand this with useState for each field
  const [formData, setFormData] = useState({
    originCity: '',
    weight: '',
    destinationCity: '',
    category: '',
    dimensions: '',
    transportMode: '',
    documents: [],
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle submission logic here
      console.log('Form submitted:', formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
   <ShipmentDetails />
        );
      case 2:
        return (
<div>
<TransportMode />
</div>
        );
      case 3:
        return (
 <div>
<UploadDocuments />
 </div>
        );
      case 4:
        return (
    <div>
<FindingCarriers />
    </div>
        );
      default:
        return null;
    }
  };

  return (
<div>
{
    location.pathname === '/dashboard/shipper-dashboard/overview/post-shipment' ? (    <div className="w-full mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                  step.id === currentStep ? 'bg-black' : 'bg-gray-300'
                }`}
              >
                {step.id}
              </div>
              <span className="text-xs mt-1">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-gray-300 mt-4" />
            )}
          </React.Fragment>
        ))}
      </div>
      {renderStepContent()}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100"
          disabled={currentStep === 1}
        >
          Back
        </button>
        <div className="space-x-2">

          <div
            onClick={handleNext}
           
          >
            {currentStep === steps.length ? (<div><Link to="/dashboard/shipper-dashboard/overview/post-shipment/:shipmentId"> <button  className="px-4 py-2 bg-black flex items-center gap-2 justify-center text-white rounded hover:bg-black/75">Find Carriers <FaChevronRight size={13} className='mt-1' /></button> </Link></div>) : (<div>
                <button  className="px-4 py-2 bg-black text-white rounded flex items-center gap-2 hover:bg-black/75">Next <FaChevronRight size={13} className='mt-1' /> </button>
            </div>)}
          </div> 

        </div>
      </div>
    </div>):(<Outlet />)
}
</div>
  );
};

export default PostShipments;
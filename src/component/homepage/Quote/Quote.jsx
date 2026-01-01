import React, { useState } from 'react';
import { Steps } from 'antd';

const Input = ({ label }) => {
    return (
        <div>
            <label className='block mb-1 text-[#364153] robReg text-sm font-medium'>{label}</label>
            <input className='w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>
    );
}

const ShipmentDetails = () => {

    const inputFields = [

        { label: 'Level' },
        
        { label: 'Weight' },
        { label: 'Dimensions' },
        { label: 'Origin' },
        { label: 'Destination' },
        { label: 'Shipment Type' }
    ];

    return (
        <div className='p-4'>
            <h3 className='text-lg font-semibold mb-4'>Shipment Details</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {inputFields.map((field, index) => (
                    <Input key={index} label={field.label} />
                ))}
            </div>
        </div>
    );
}

const StepContent = ({ stepIndex }) => {
    const stepContents = {
        0: <ShipmentDetails />,
        1: (
            <div className='p-4'>
                <h3 className='text-lg font-semibold mb-4'>Step 2: Shipping Options</h3>
                <p>Configure your shipping preferences and service levels.</p>
            </div>
        ),
        2: (
            <div className='p-4'>
                <h3 className='text-lg font-semibold mb-4'>Step 3: Review & Quote</h3>
                <p>Review your shipment details and get an instant quote.</p>
            </div>
        ),
        3: (
            <div className='p-4'>
                <h3 className='text-lg font-semibold mb-4'>Step 4: Confirmation</h3>
                <p>Confirm and book your shipment.</p>
            </div>
        )
    };

    return stepContents[stepIndex] || <div>Content not found</div>;
}

const Quote = () => {
    const [current, setCurrent] = useState(0);

    const onChange = value => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    const stepItems = [
        {
            title: 'Shipment Details',
            description: 'Enter shipment information'
        },
        {
            title: 'Shipping Options',
            description: 'Choose service level'
        },
        {
            title: 'Review & Quote',
            description: 'Get instant pricing'
        },
        {
            title: 'Confirmation',
            description: 'Book shipment'
        }
    ];

    return (
        <div className='max-w-7xl mx-auto p-6'>
            <Steps
                current={current}
                onChange={onChange}
                items={stepItems}
                className='mb-8'
            />
            
            <div className=' bg-white p-6 rounded-lg border border-gray-200'>
                <StepContent stepIndex={current} />
            </div>

            <div className='flex justify-between mt-8'>
                <button
                    className={`px-6 py-2 rounded-md ${current === 0 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => setCurrent(prev => Math.max(0, prev - 1))}
                    disabled={current === 0}
                >
                    Previous
                </button>
                <button
                    className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
                    onClick={() => setCurrent(prev => Math.min(stepItems.length - 1, prev + 1))}
                >
                    {current === stepItems.length - 1 ? 'Finish' : 'Next'}
                </button>
            </div>
        </div>
    );
};

export default Quote;
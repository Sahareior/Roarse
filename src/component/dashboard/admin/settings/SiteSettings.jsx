import React, { useState } from 'react';
import Financial from './_components/Financial';
import Industry from './_components/Industry';
import Shipment from './_components/Shipment';
import Subscriptions from './_components/Subscriptions';
import Terms from './Terms';
import Privacy from './_components/Privacy';

const SiteSettings = () => {
    const [activeTab, setActiveTab] = useState('financial');
const tabs = ['financial', 'Industry', 'Shipment', 'Subscription', 'Terms & Conditions', 'Privacy Policy'];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'financial':
                return <Financial />;
            case 'Industry':
                return <Industry />;
            case 'Shipment':
                return <Shipment />;
            case 'Subscription':
                return <Subscriptions />;
            case 'Terms & Conditions':
                return <Terms />;
            case 'Privacy Policy':
                return <Privacy />;
            default:
                return <div>Default Settings Content</div>;
        }
    };

    return (
        <div>
            <div className="flex space-x-6 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-9 py-2 text-[20px] rounded-md ${
                            activeTab === tab ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {renderTabContent()}
        </div>
    );
};

export default SiteSettings;
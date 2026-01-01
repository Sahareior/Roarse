import React from 'react';
import { InfoCards } from './InfoCards';


const SpecifiicHero = () => {

    const infoCardData = [
        {
            value: '50K+',
            title: 'Daily Loads'
        },
        {
            value: '30%',
            title: 'Less Empty Miles'
        },
        {
            value: '24/7',
            title: 'Carrier Support'
        },
        {
            value: '96%',
            title: 'Successful Shipment'
        },
    ]

    return (
<div>


<div className='bg-[#EEEEEE] py-9 p-5 grid grid-cols-4'>
    {
        infoCardData.map(items => (
            <InfoCards value={items.value} title={items.title} />
        ))
    }
</div>
</div>
    );
};

export default SpecifiicHero;
import React from 'react';
import ViewProfile from '../../../reusable/dashboard/ViewProfile';
import { useLocation } from 'react-router-dom';

const Carrierprofile = () => {
    const location = useLocation()
    console.log('location',location.pathname)
    return (
        <div>
           <ViewProfile from={location.pathname} />
        </div>
    );
};

export default Carrierprofile;
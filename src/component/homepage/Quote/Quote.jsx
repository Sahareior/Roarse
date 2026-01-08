import React from 'react';
import PostShipments from '../../reusable/QuoteSteps/PostShipments';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

const Quote = () => {
  return (
    <div className=''>
        <Navbar />
     <div className='mx-64 py-28'>
       <PostShipments />
     </div>
        <Footer />
    </div>
  );
};

export default Quote;
import React from 'react';

const Header = ({title,subTitle}) => {
    return (
        <div className='flex justify-center items-center'>
                  <div className='text-center mb-10'>
        <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>
          {title}
        </h3>
        <p className='text-lg text-gray-600'>
         {subTitle}
        </p>
      </div>
        </div>
    );
};

export default Header;
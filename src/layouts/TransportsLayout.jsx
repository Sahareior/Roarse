import React from 'react';
import NavbarWithHero from '../component/reusable/NavbarWithHero';
import Features from '../component/homepage/HomepageReusableComponent/Features';
import WhyDriversLoveRoarse from '../component/homepage/HomepageReusableComponent/WhyDriversLoveRoarse';
import Footer from '../component/homepage/footer/Footer';

import { useLocation } from 'react-router-dom';
import { InfoCards } from '../component/homepage/HomepageReusableComponent/InfoCards';
import { FiTrendingUp } from 'react-icons/fi';


const TransportsLayout = () => {
    const location = useLocation();
    
    // Image URLs based on route
    let image = '';
    let heroTitle = '';
    let heroSubtitle = '';
    
    if (location.pathname === '/ship') {
        image = 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1170&auto=format&fit=crop';
        heroTitle = 'Ocean Freight Shipping';
        heroSubtitle = 'Reliable, efficient sea transport solutions for your cargo';
    } else if (location.pathname === '/air') {
        image = 'https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?q=80&w=1122&auto=format&fit=crop';
        heroTitle = 'Air Freight Services';
        heroSubtitle = 'Fast, secure air cargo solutions worldwide';
    } else if (location.pathname === '/truck') {
        image = 'https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=1089&auto=format&fit=crop';
        heroTitle = 'Trucking & Logistics';
        heroSubtitle = 'Nationwide ground transportation services';
    }

    let infoCardData = [];
    let featrureData = []
    let title 
    let subTitle

    if (location.pathname === '/ship') {
        title = 'Comprehensive Ocean Freight Services'
        subTitle ='From single pallets to full containers, we offer flexible sea freight solutions for your business'
        infoCardData = [
            {
                value: '200+',
                title: 'Global Ports'
            },
            {
                value: '14-35 days',
                title: 'Days Transit'
            },
            {
                value: '100+',
                title: 'Shipping Lines'
            },
            {
                value: '96%',
                title: 'On Time Transit'
            },
        ];

        featrureData = [
 {
    icon: <FiTrendingUp />,
    title: 'Full Container Load (FCL)',
    desc: 'Dedicated 20ft or 40ft containers for your exclusive use, ideal for large volume shipments.',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Less Container Load (LCL)',
    desc: 'Share container space with other shippers for cost-effective smaller volume shipments.',
  },
 {
    icon: <FiTrendingUp />,
    title: 'International Shipping',
    desc: 'Global sea freight coverage to major ports worldwide with reliable transit times.',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Refrigerated Containers',
    desc: 'Temperature-controlled reefer containers for perishable goods and sensitive products.',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Port-to-Port & Door-to-Door',
    desc: 'Flexible delivery options from port-to-port or complete door-to-door logistics solutions.',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Dedicated Fleet',
    desc: 'Exclusive vehicle allocation for regular shipments with consistent service and driver familiarity.',
  },
        ]
    } else if (location.pathname === '/air') {
    title ='Air Freight Service Built for Speed'
    subTitle ='Whether you need express delivery or cost-effective air cargo, we have the perfect solution'
        infoCardData = [
            {
                value: '200+',
                title: 'Countries Served'
            },
            {
                value: '48 hr',
                title: 'Average Delivery'
            },
            {
                value: '500+',
                title: 'Partner Airlines'
            },
            {
                value: '1M+',
                title: 'Loads Delivered'
            },
        ];
              featrureData = [
 {
    icon: <FiTrendingUp />,
    title: 'Express Air Freight',
    desc: 'Next-flight-out service for urgent shipments with door-to-door delivery in 24-48 hours globally.',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Standard Air Cargo',
    desc: 'Cost-effective air freight for time-sensitive shipments with 3-5 day delivery windows.',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Express Delivery',
    desc: 'Time-critical shipments with guaranteed delivery windows and priority handling throughout the journey.',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Temperature Controlled',
    desc: 'Refrigerated and climate-controlled transport for perishable goods and sensitive materials',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Road Optimization',
    desc: 'AI-powered route planning to minimize fuel costs, reduce empty miles, and maximize efficiency.',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Dedicated Fleet',
    desc: 'Exclusive vehicle allocation for regular shipments with consistent service and driver familiarity.',
  },
        ]
    } else if (location.pathname === '/truck') {
          title ='Comprehensive Road Transport Service'
    subTitle ='From single pallets to full truckloads, we have the perfect solution for your shipping needs.'
        infoCardData = [
            {
                value: '50,000+',
                title: 'Active Drivers'
            },
            {
                value: '98.5%',
                title: 'On-time delivery'
            },
            {
                value: '24/7',
                title: 'Available Support'
            },
            {
                value: '1M+',
                title: 'Loads Delivered'
            },
        ];

                      featrureData = [
 {
    icon: <FiTrendingUp />,
    title: 'Full Truck Load (FTL)',
    desc: 'Dedicated trucks for large shipments, direct delivery from origin to destination with no intermediate stops',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Less Than Truckload (LTT)',
    desc: 'Cost-effective solution for smaller shipments, sharing truck space with other loads on similar routes.',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Express Delivery',
    desc: 'Time-critical shipments with guaranteed delivery windows and priority handling throughout the journey.',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Temperature Controlled',
    desc: 'Refrigerated and climate-controlled transport for perishable goods and sensitive materials',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Road Optimization',
    desc: 'AI-powered route planning to minimize fuel costs, reduce empty miles, and maximize efficiency.',
  },
 {
    icon: <FiTrendingUp />,
    title: 'Dedicated Fleet',
    desc: 'Exclusive vehicle allocation for regular shipments with consistent service and driver familiarity.',
  },
        ]
    }



    return (
        <div>
            {/* NavbarWithHero should handle the navbar internally */}
            <NavbarWithHero 
                image={image} 
                title={heroTitle}
                subtitle={heroSubtitle}
            />
            
            {/* Info Cards Section */}
            <div className='bg-[#EEEEEE] py-9 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {infoCardData.map((item, index) => (
                    <InfoCards 
                        key={index} 
                        value={item.value} 
                        title={item.title} 
                    />
                ))}
            </div>
            
            {/* Other Components */}
            <Features title={title} subTitle={subTitle} featureData={featrureData} />
            <WhyDriversLoveRoarse />
            <Footer />
        </div>
    );
};

export default TransportsLayout;
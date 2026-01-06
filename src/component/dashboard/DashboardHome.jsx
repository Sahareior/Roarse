import React, { useState } from 'react';
import { Layout, Menu, theme, Dropdown, Avatar } from 'antd';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';


const { Header, Content, Sider } = Layout;

import {
  AppstoreOutlined,
  UserOutlined,
  CarOutlined,
  DollarOutlined,
  ExclamationCircleOutlined,
  EnvironmentOutlined,
  CreditCardOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { LuMessageSquare } from 'react-icons/lu';
import { IoIosPaper } from 'react-icons/io';
import { SlPlane } from 'react-icons/sl';
import { IoExitOutline } from 'react-icons/io5';

const DashboardHome = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  const sidebarItems = [
    {
      key: '/dashboard/overview',
      icon: <AppstoreOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/dashboard/shipper',
      icon: <UserOutlined />,
      label: 'Shipper Management',
    },
    {
      key: '/dashboard/carriers',
      icon: <CarOutlined />,
      label: 'Carrier Management',
    },
    {
      key: '/dashboard/quotes',
      icon: <DollarOutlined />,
      label: 'Quote Management',
    },
    {
      key: '/dashboard/complaints',
      icon: <ExclamationCircleOutlined />,
      label: 'Complaints',
    },
    {
      key: '/dashboard/applications',
      icon: <IoIosPaper  />,
      label: 'Application Lists',
    },
    {
      key: '/dashboard/tracking',
      icon: <EnvironmentOutlined />,
      label: 'Tracking',
    },
    {
      key: '/dashboard/agents',
      icon: <EnvironmentOutlined />,
      label: 'Agent Management',
    },
    {
      key: '/dashboard/payments',
      icon: <CreditCardOutlined />,
      label: 'Payment',
    },
    {
      key: '/dashboard/messages',
      icon: <LuMessageSquare size={18} />,
      label: 'Messages',
    },
 {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
    children: [
      {
        key: '/dashboard/settings/site',
        icon: <SettingOutlined />,
        label: 'Site Settings',
      },
      {
        key: '/dashboard/settings/account',
        icon: <UserOutlined />,
        label: 'Account Settings',
      },
    ],
  },
  ];

  // background: linear-gradient(90deg, #3D3D3D 0%, #16171B 100%);


  return (
    <Layout className='relative' style={{ minHeight: '100vh' }}>
      <Sider  width={250} breakpoint="lg" collapsedWidth="0"
        style={{
          background: 'linear-gradient(90deg, #3D3D3D 0%, #16171B 100%)',
        }}
      >

<div className='flex items-center mt-6 justify-center gap-4'>
         <p className='p-4 text-white rounded-full' style={{
        background: 'linear-gradient(135deg, #767575 0%, #474747 100%)'

       }}><SlPlane size={24} /></p> 
       <p className='robReg text-[29px] text-white'>Roarse</p>
</div>
        <Menu
        className='mt-14 '
        style={{
          background: 'linear-gradient(90deg, #3D3D3D 0%, #16171B 100%)'
        }}
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={sidebarItems}
          onClick={({ key }) => {
            if (key !== 'settings') {
              navigate(key);
            }
          }}
        />
      </Sider>
          <div className='bottom-4 translate-x-1/2 absolute'>
          
            <p className='flex text-white text-[18px] items-center gap-2'><IoExitOutline /> Logout</p>
          </div>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <div className='flex justify-between py-4 px-9 bg-[#E2E2E2]'>
          <div className='flex items-center gap-2'>
            <p className='text-[32px] arBold'>WelCome</p>
            <p className='text-2xl'>,</p>
            <p className='text-[20px] arReg text-gray-600 mt-1'>Admin Dashboard</p>
          </div>

          <div className='flex items-center gap-3'>
            <p className='text-[14px] robReg'>Admin</p>
           <Link to="/dashboard/profile">
            <Avatar size={40} icon={<UserOutlined />} />
           </Link>
          </div>
        </div>
        <Content style={{ margin: '6px' }}>
          <div
            className="h-[87vh] overflow-auto"
            style={{
              padding: 12,
            
             
              overflowY: 'auto',
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardHome;
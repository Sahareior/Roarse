// sidebars.js
import React from 'react';
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

// Export icons individually if needed
export {
  AppstoreOutlined,
  UserOutlined,
  CarOutlined,
  DollarOutlined,
  ExclamationCircleOutlined,
  EnvironmentOutlined,
  CreditCardOutlined,
  SettingOutlined,
  LuMessageSquare,
  IoIosPaper,
};

export const adminSidebarItems = [
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
    icon: <IoIosPaper />,
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
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
import { FiCheckSquare, FiClock, FiDollarSign, FiFileText, FiGrid, FiInbox, FiMessageSquare, FiSettings, FiTruck } from 'react-icons/fi';
import { AiFillWallet } from 'react-icons/ai';
import { FaHackerNews, FaWallet } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

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
    icon: <MdSupportAgent size={18}/>,
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



export const shipperSidebarItems = [
  {
    key: '/dashboard/shipper-dashboard/overview',
    icon: <AppstoreOutlined />,
    label: 'Dashboard',
  },
  {
    key: '/dashboard/shipper-dashboard/active-shipments',
    icon: <UserOutlined />,
    label: 'Active Shipments',
  },
  {
    key: '/dashboard/shipper-dashboard/history',
    icon: <UserOutlined />,
    label: 'History',
  },
  {
    key: '/dashboard/shipper-dashboard/live-tracking',
    icon: <CarOutlined />,
    label: 'Live Tracking',
  },
  {
    key: '/dashboard/shipper-dashboard/payments',
    icon: <DollarOutlined />,
    label: 'Payment History',
  },
 
  {
    key: '/dashboard/shipper-dashboard/settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
];



export const carrierSidebarItems = [
  {
    key: "/dashboard/carrier-dashboard/overview",
    icon: <FiGrid />,
    label: "Dashboard",
  },
  {
    key: "/dashboard/carrier-dashboard/active-deliveries",
    icon: <FiTruck />,
    label: "Active Deliveries",
  },
  {
    key: "/dashboard/carrier-dashboard/incoming-shipments",
    icon: <FiInbox />,
    label: "Incoming Shipments",
  },
  {
    key: "/dashboard/carrier-dashboard/history",
    icon: <FiClock />,
    label: "Delivery History",
  },
  {
    key: "/dashboard/carrier-dashboard/payments",
    icon: <FiDollarSign />,
    label: "Payments",
  },

  {
    key: "/dashboard/carrier-dashboard/settings",
    icon: <FiSettings />,
    label: "Settings",
  },
];


export const agentSidebarItems = [
  {
    key: "/dashboard/agent-dashboard/agent-overview",
    icon: <FiGrid />,
    label: "Dashboard",
  },
  {
    key: "/dashboard/agent-dashboard/agent-messages",
    icon: <FiMessageSquare />,
    label: "Messages",
  },
  {
    key: "/dashboard/agent-dashboard/shipment-req",
    icon: <FiFileText />,
    label: "Shipment Requests",
  },
  {
    key: "/dashboard/agent-dashboard/assinged-tasks",
    icon: <FiCheckSquare />,
    label: "Assigned Tasks",
  },
  {
    key: "/dashboard/agent-dashboard/agent-wallet",
    icon: <FaWallet />,
    label: "Wallet",
  },
  {
    key: "/dashboard/agent-dashboard/agent-history",
    icon: <FiClock />,
    label: "History",
  },
  {
    key: "/dashboard/agent-dashboard/agent-settings",
    icon: <FiSettings />,
    label: "Settings",
  },
];




import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


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

 const sidebarItems = [
  {
    key: '/dashboard/overview',
    icon: <AppstoreOutlined />,
    label: 'Dashboard',
  },
  {
    key: '/dashboard/shippers',
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
    key: '/dashboard/tracking',
    icon: <EnvironmentOutlined />,
    label: 'Tracking',
  },
  {
    key: '/dashboard/payment',
    icon: <CreditCardOutlined />,
    label: 'Payment',
  },
  {
    key: '/dashboard/settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
];


const DashboardHome = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={sidebarItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '6px' }}>
          <div
            style={{
              padding: 6,
              minHeight: '90vh',
              background: colorBgContainer,
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

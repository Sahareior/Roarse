import React, { useEffect, useState } from "react";
import { Layout, Menu, theme, Dropdown, Avatar } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

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
} from "@ant-design/icons";
import { LuMessageSquare } from "react-icons/lu";
import { IoIosPaper } from "react-icons/io";
import { SlPlane } from "react-icons/sl";
import { IoExitOutline } from "react-icons/io5";
import {
  adminSidebarItems,
  agentSidebarItems,
  carrierSidebarItems,
  shipperSidebarItems,
} from "../../tools/dashboardNavigation";
import DashboardHeader from "../reusable/dashboard/DashboardHeader";

const DashboardHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState("");
  const getRole = localStorage.getItem("roarseRole");
  useEffect(() => {
    setRole(getRole);
  }, [getRole]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const getRoleBasedSidebar = () => {
    if (role === "admin") {
      return adminSidebarItems;
    }
    if (role === "shipper") {
      return shipperSidebarItems;
    }
    if (role === "carrier") {
      return carrierSidebarItems;
    }
    if (role === "agent") {
      return agentSidebarItems;
    }
  };

  const handelLogout = () => {
    localStorage.removeItem("roarseRole");
    navigate("/");
  };

  return (
    <Layout className="relative" style={{ minHeight: "100vh" }}>
      <Sider
        width={250}
        breakpoint="lg"
        collapsedWidth="0"
        
        style={{
          background: "linear-gradient(90deg, #3D3D3D 0%, #16171B 100%)",
        }}
      >
       <Link to='/'>
        <div className="flex items-center mt-6 justify-center gap-3">
          <p
            className="p-4 text-white rounded-full"
            style={{
              background: "linear-gradient(135deg, #767575 0%, #474747 100%)",
            }}
          >
            <SlPlane size={24} />
          </p>
          <p className="robReg text-[29px] text-white">Roarse</p>
        </div>
       </Link>
        <Menu
          className="mt-14 robReg text-[16px]"
          style={{
            background: "linear-gradient(90deg, #3D3D3D 0%, #16171B 100%)",
          }}
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={getRoleBasedSidebar()}
          onClick={({ key }) => {
            if (key !== "settings") {
              navigate(key);
            }
          }}
        />
      </Sider>
      <div className="bottom-4 translate-x-1/2 absolute">
        <button
          onClick={() => handelLogout()}
          className="flex text-white text-[18px] items-center gap-2"
        >
          <IoExitOutline /> Logout
        </button>
      </div>
      <Layout>
        <DashboardHeader />

        <Content style={{ margin: "6px" }}>
          <div
            className="h-[87vh] overflow-auto"
            style={{
              padding: 12,
              overflowY: "auto",
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

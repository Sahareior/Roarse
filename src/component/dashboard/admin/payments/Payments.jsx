import React, { useState } from "react";
import { Tag, Button, Dropdown, Space } from "antd";
import ReusableTable from "../../../reusable/dashboard/ReusableTable";
import { FaArrowDown, FaChevronDown } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { Link, Outlet, useLocation } from "react-router-dom";

const Payments = () => {
  const [activeTab, setActiveTab] = useState("history");

  const location = useLocation()

  const dataSource = [
    {
      key: "PAY001",
      transaction: "PAY001",
      shipment: "SH001",
      carrier: "Fast Transit LLC",
      method: "Credit Card",
      date: "Dec 10, 2024",
      amount: "$650",
      status: "credited",
    },
    {
      key: "PAY002",
      transaction: "PAY002",
      shipment: "SH002",
      carrier: "Express Cargo",
      method: "PayPal",
      date: "Dec 5, 2024",
      amount: "$2200",
      status: "credited",
    },
    {
      key: "PAY003",
      transaction: "PAY003",
      shipment: "AS001",
      carrier: "Fast Transit LLC",
      method: "Credit Card",
      date: "Dec 13, 2024",
      amount: "$750",
      status: "debited",
    },
    {
      key: "PAY004",
      transaction: "PAY004",
      shipment: "SH003",
      carrier: "Global Movers",
      method: "Bank Transfer",
      date: "Nov 28, 2024",
      amount: "$1500",
      status: "credited",
    },
    {
      key: "PAY005",
      transaction: "PAY005",
      shipment: "AS002",
      carrier: "Express Cargo",
      method: "Credit Card",
      date: "Dec 14, 2024",
      amount: "$2300",
      status: "pending",
    },
  ];

  const statusColor = {
    credited: "green",
    debited: "gold",
    pending: "blue",
  };

  const columns = [
    {
      title: "TRANSACTION",
      dataIndex: "transaction",
    },
    {
      title: "SHIPMENT",
      dataIndex: "shipment",
    },
    {
      title: "CARRIER",
      dataIndex: "carrier",
    },
    {
      title: "METHOD",
      dataIndex: "method",
    },
    {
      title: "DATE",
      dataIndex: "date",
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (status) => (
        <Tag color={statusColor[status]} className="capitalize">
          {status}
        </Tag>
      ),
    },
    {
      title: "ACTIONS",
      render: (_, record) =>
        activeTab === "pay" ? (
         <Link to={`/dashboard/payments/${record.key}`}>
          <Button type="primary" size="small">
            Pay
          </Button>
         </Link>
        ) : (
          <Button type="text"><FaArrowDown /></Button>
        ),
    },
  ];


  const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        Credited
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        Debited
      </a>
    ),

  },

];

  const filteredData =
    activeTab === "pay"
      ? dataSource.filter((item) => item.status === "pending")
      : dataSource;

  return (
<div>
{
location.pathname === '/dashboard/payments' ? (
        <div className="space-y-12">
      {/* Tabs */}
      <div className="flex justify-center">
        <button
          onClick={() => setActiveTab("history")}
          className={`py-4 text-sm px-14 w-[40vw] rounded-l-2xl ${
            activeTab === "history"
              ? "bg-black text-white"
              : "bg-gray-200"
          }`}
        >
          History
        </button>
        <button
          onClick={() => setActiveTab("pay")}
          className={`py-4 text-sm px-14 w-[40vw] rounded-r-2xl ${
            activeTab === "pay"
              ? "bg-black text-white"
              : "bg-gray-200"
          }`}
        >
          Pay
        </button>
      </div>

      <div className="flex justify-between px-6 items-center">
        <p className="robReg text-[24px]">Payment History</p>

         <Dropdown menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
               <div className="border flex items-center gap-3 px-6 py-1 border-[#121212]">
            <FaFilter />
            <p>Filter</p>
            <FaChevronDown />
        </div>
      </Space>
    </a>
  </Dropdown>

      </div>

      {/* Table */}
      <ReusableTable
        columns={columns}
        dataSource={filteredData}
      />
    </div>
) : (<Outlet />)
}
</div>
  );
};

export default Payments;

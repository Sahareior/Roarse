import React, { useState } from "react";
import { Tag, Button, Dropdown, Space } from "antd";
import ReusableTable from "../../../reusable/dashboard/ReusableTable";
import { FaArrowDown, FaChevronDown, FaPlane } from "react-icons/fa";
import { FaBox, FaFilter } from "react-icons/fa6";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";


const OverviewStats = ({ type = "total", count = 122, label = "Total Shipments", subLabel = "Currently in transit" }) => {
    const getIcon = () => {
        switch(type) {
            case "air": return <FaPlane size={22} />;
            case "booked": return <IoIosTimer  size={25} />;
            case "total": return <IoCheckmarkDoneCircleSharp size={25} />;
            default: return <FaBox size={20} />;
        }
    };

    const getColor = () => {
        switch(type) {
            case "air": return "text-blue-600";
            case "booked": return "text-yellow-600";
            case "total": return "text-green-600";
            default: return "text-gray-700";
        }
    };

    return (
        <div className='flex justify-between border border-[#E5E7EB] p-6 rounded-xl hover:shadow-md transition-shadow duration-300'>
            <div className='flex flex-col gap-3'>
                <div className={`${getColor()}`}>
                    {getIcon()}
                </div>
                <h2 className='text-[16px] font-medium'>{label}</h2>
                <p className='text-[14px] text-gray-500'>{subLabel}</p>
            </div>
            <p className='text-[30px] font-bold'>{count.toLocaleString()}</p>
        </div>
    );
};


const ShipperPayment = () => {


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
      render: (_, record) => (
          <Button type="text"><FaArrowDown /></Button>
        ),
    },
  ];


        const stats = [
        { type: "active", count: 122, label: "Active Shipments", subLabel: "Currently in transit" },
        { type: "total", count: 24, label: "Completed", subLabel: "Successfully delivered" },
        { type: "booked", count: 18, label: "Pending Matches", subLabel: "Finding Carriers" },
     
    ];



  return (
<div>
{
location.pathname === '/dashboard/shipper-dashboard/payments' ? (
        <div className="space-y-9">
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {stats.map((stat, index) => (
                    <OverviewStats 
                        key={index}
                        type={stat.type}
                        count={stat.count}
                        label={stat.label}
                        subLabel={stat.subLabel}
                    />
                ))}
            </div>



      <div className="flex justify-between px-6 items-center">
        <p className="robReg text-[24px]">Payment History</p>



      </div>

      {/* Table */}
      <ReusableTable
        columns={columns}
        dataSource={dataSource}
      />
    </div>
) : (<Outlet />)
}
</div>
  );
};

export default ShipperPayment;

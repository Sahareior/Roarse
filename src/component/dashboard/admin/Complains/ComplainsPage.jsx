import React from 'react';
import ReusableTable from '../../../reusable/dashboard/ReusableTable';
import { Tag } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Link, useLocation, Outlet } from 'react-router-dom';

const dataSource = [
  {
    key: "1024",
    complaintId: "1024",
    complainer: "Jane Doe (Shipper)",
    shipmentId: "J-8472",
    timestamp: "2025-12-04 10:30",
    status: "Pending",
  },
  {
    key: "1023",
    complaintId: "1023",
    complainer: "Mike Johnson (Carrier)",
    shipmentId: "J-8461",
    timestamp: "2025-12-04 09:15",
    status: "Reviewed",
  },
  {
    key: "1022",
    complaintId: "1022",
    complainer: "Sarah Williams (Shipper)",
    shipmentId: "J-8455",
    timestamp: "2025-12-03 16:45",
    status: "Reviewed",
  },
  {
    key: "1021",
    complaintId: "1021",
    complainer: "Robert Lee (Carrier)",
    shipmentId: "J-8440",
    timestamp: "2025-12-03 14:20",
    status: "Resolved",
  },
  {
    key: "1020",
    complaintId: "1020",
    complainer: "Emma Davis (Shipper)",
    shipmentId: "J-8432",
    timestamp: "2025-12-02 19:30",
    status: "Resolved",
  },
];

const statusColor = {
  Pending: "red",
  Reviewed: "gold",
  Resolved: "green",
};

const columns = [
  {
    title: "Complaint ID",
    dataIndex: "complaintId",
    key: "complaintId",
  },
  {
    title: "Complainer",
    dataIndex: "complainer",
    key: "complainer",
  },
  {
    title: "Shipment ID",
    dataIndex: "shipmentId",
    key: "shipmentId",
    render: (text) => (
      <a className="text-[#4F39F6] font-medium">{text}</a>
    ),
  },
  {
    title: "Timestamp",
    dataIndex: "timestamp",
    key: "timestamp",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={statusColor[status]}>{status}</Tag>
    ),
  },
  {
    title: "Actions",
    key: "actions",
    render: () => (
      <Link to="/dashboard/complaints/:complaintId" className="flex items-center gap-1 text-[#4F39F6]">
        <EyeOutlined />
        View
      </Link>
    ),
  },
];

const ComplainsPage = () => {
    const location = useLocation();

    return (
        <div>
           {
location.pathname === '/dashboard/complaints' ? (
     <ReusableTable columns={columns} dataSource={dataSource} />
):(<Outlet />)
           }
        </div>
    );
};

export default ComplainsPage;
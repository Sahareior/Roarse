import React from "react";
import ReusableTable from "../../../reusable/dashboard/ReusableTable";
import { Link, Outlet, useLocation } from "react-router-dom";

const Applications = () => {
    const location = useLocation()

  const dataSource = [
    {
      key: "3202",
      applicationId: "3202",
      firstName: "Simanta",
      lastName: "Roy",
      address: "123 sefali lane, canada",
      region: "Canada",
      email: "abc@gmail.com",
      contact: "+32325621",
    },
    {
      key: "3021",
      applicationId: "3021",
      firstName: "Anon",
      lastName: "Hossain",
      address: "Miami beach, Australia",
      region: "Australia",
      email: "abc@gmail.com",
      contact: "+32325621",
    },
    {
      key: "1456",
      applicationId: "1456",
      firstName: "Joy",
      lastName: "Mollik",
      address: "abc, Newyork, USA",
      region: "USA",
      email: "abc@gmail.com",
      contact: "+32325621",
    },
    {
      key: "9658",
      applicationId: "9658",
      firstName: "Rafa",
      lastName: "Apa",
      address: "Mohammadpur, Dhaka",
      region: "Bangladesh",
      email: "abc@gmail.com",
      contact: "+32325621",
    },
    {
      key: "3568",
      applicationId: "3568",
      firstName: "Mir",
      lastName: "Bro",
      address: "USA",
      region: "USA",
      email: "abc@gmail.com",
      contact: "+32325621",
    },
  ];

  const columns = [
    {
      title: "APPLICATION ID",
      dataIndex: "applicationId",
      key: "applicationId",
    },
    {
      title: "FIRST NAME",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "LAST NAME",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "ADDRESS",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "REGION",
      dataIndex: "region",
      key: "region",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "CONTACT",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "DOCUMENT",
      key: "document",
      render: () => (
       <Link to="/dashboard/applications/:applicationId">
        <button className="text-blue-600 hover:underline">
          View
        </button>
       </Link>
      ),
    },
  ];

  return (
<div>
    {
location.pathname === '/dashboard/applications' ? (    <div className="space-y-4">
      <h2 className="text-lg font-semibold">
        Agent Application List
      </h2>

      <ReusableTable
        dataSource={dataSource}
        columns={columns}
      />
    </div>):(
    <Outlet />
)
    }
</div>
  );
};

export default Applications;

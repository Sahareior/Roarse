import React from "react";
import { Table, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";



const ReusableTable = ({columns,dataSource}) => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default ReusableTable;

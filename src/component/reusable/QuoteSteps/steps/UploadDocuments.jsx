import React, { useState } from "react";
import { Upload } from "antd";
import {
  InboxOutlined,
  DeleteOutlined,
  FileOutlined,
} from "@ant-design/icons";

const UploadDocuments = () => {
  const [fileList, setFileList] = useState([]);

  const handleRemove = (uid) => {
    setFileList((prev) => prev.filter((file) => file.uid !== uid));
  };

  return (
    <div className="w-full h-[60vh] mx-auto">
      <div className="bg-white border rounded-xl p-6 space-y-6">

        {/* Title */}
        <h2 className="text-[21px] robReg font-semibold text-gray-900">
          Upload Documents
        </h2>

        {/* Upload Box */}
        <div className="flex justify-center">
          <Upload
            multiple
            beforeUpload={() => false}
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
            showUploadList={false}
          >
            <div
              className="
                border-2 border-dashed border-gray-300
                rounded-2xl
                py-16
                cursor-pointer
                transition
                hover:border-gray-400
                flex flex-col items-center justify-center
                bg-white
                mx-auto p-32
              "
            >
              <InboxOutlined className="text-[42px] text-gray-400 mb-3" />

              <p className="text-[18px] font-medium text-gray-900">
                Click to upload or drag and drop
              </p>

              <p className="text-[14px] text-gray-500 mt-1">
                Invoice, packing list, certificates (optional)
              </p>
            </div>
          </Upload>
        </div>

        {/* File Preview List */}
        {fileList.length > 0 && (
          <div className="space-y-3">
            <p className="text-[15px] font-medium text-gray-800">
              Uploaded Files
            </p>

            <div className="space-y-2">
              {fileList.map((file) => (
                <div
                  key={file.uid}
                  className="
                    flex items-center justify-between
                    border rounded-lg px-4 py-3
                    hover:bg-gray-50 transition
                  "
                >
                  {/* File Info */}
                  <div className="flex items-center gap-3">
                    <FileOutlined className="text-gray-500 text-lg" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => handleRemove(file.uid)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <DeleteOutlined />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadDocuments;

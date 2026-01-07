import { useForm } from "react-hook-form";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const AgentApplicationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Agent Application Data:", data);
    // You can handle file uploads separately when backend is ready
  };

  const uploadProps = {
    name: "file",
    multiple: true,
    beforeUpload: () => false, // Prevent actual upload for now
    onChange: (info) => {
      console.log("Uploaded files:", info.fileList);
    },
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-14 lg:px-[108px] roboto">
      <div>
        {/* Header */}
        <div className="text-center mb-10 text-black">
          <h1 className="text-3xl font-bold">Apply as an Agent</h1>
          <p className="mt-2 max-w-lg mx-auto">
            Fill this form, provide your original document to get an opportunity to earn
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-5">
          {/* Agent Details Title */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Agent details</h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                {...register("firstName", { required: "First name is required" })}
                placeholder="Your First Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Your Present Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                {...register("address", { required: "Address is required" })}
                placeholder="Your Present address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
              )}
            </div>

            {/* Region */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Region
              </label>
              <input
                {...register("region", { required: "Region is required" })}
                placeholder="Your region"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.region && (
                <p className="text-red-500 text-xs mt-1">{errors.region.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                {...register("contactNumber", { required: "Contact number is required" })}
                placeholder="Your Contact Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.contactNumber.message}</p>
              )}
            </div>
          </div>

          {/* Describe Yourself */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Describe Yourself
            </label>
            <textarea
              {...register("description", { required: "Description is required" })}
              rows={5}
              placeholder="Describe your capability here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black resize-none"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
            )}
          </div>

          {/* Upload Documents */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Upload Documents</h3>
            <Upload.Dragger {...uploadProps} className="bg-gray-50">
              <p className="ant-upload-drag-icon pt-10">
                <UploadOutlined style={{ fontSize: "48px", color: "#999" }} />
              </p>
              <p className="ant-upload-text text-lg">Click to upload or drag and drop</p>
              <p className="ant-upload-hint text-gray-500 pb-10">
                Invoice, packing list, certificates (optional)
              </p>
            </Upload.Dragger>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <Button size="large" className="border-gray-400 text-gray-700">
              Cancel
            </Button>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="bg-black hover:bg-gray-800 text-white font-medium"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgentApplicationForm;
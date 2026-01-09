import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCamera } from "react-icons/fa";

const EditProfileForm = ({ defaultValues, onSave, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const [fileName, setFileName] = useState("No File Chosen");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("No File Chosen");
    }
  };

  const onSubmit = (data) => {
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Full Name
        </label>
        <input
          {...register("fullName", { required: "Full Name is required" })}
          type="text"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
          placeholder="Enter full name"
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
          placeholder="Enter email address"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Number & Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            {...register("phoneNumber")}
            type="tel"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
            placeholder="Enter phone number"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Location
          </label>
          <input
            {...register("location")}
            type="text"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
            placeholder="Enter location"
          />
        </div>
      </div>

      {/* Profile Photo Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Profile Photo
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <label
            htmlFor="profile-photo-upload"
            className="px-5 py-2.5 bg-black text-white text-sm font-medium cursor-pointer hover:bg-gray-900 transition flex items-center gap-2"
          >
            <FaCamera size={16} />
            Choose File
            <input
              id="profile-photo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          <span className="px-4 py-2.5 text-sm text-gray-600 truncate flex-1">
            {fileName}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-5 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-900 transition flex items-center gap-2"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;

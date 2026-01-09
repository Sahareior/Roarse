import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdSave } from "react-icons/md";

const EditShipperProfileForm = ({ defaultValues, onSave, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log("Shipper Profile Updated:", data);
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Personal Information Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <FaUser className="text-gray-500 text-lg" />
          <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                {...register("fullName", { required: "Full Name is required" })}
                type="text"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                placeholder="John Doe"
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                placeholder="john.doe@abctrading.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone - Full width on mobile */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Phone
            </label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                {...register("phone")}
                type="tel"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Company Information Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <HiOutlineOfficeBuilding className="text-gray-500 text-xl" />
          <h3 className="text-lg font-medium text-gray-900">Company Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Company Name
            </label>
            <input
              {...register("companyName", { required: "Company Name is required" })}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="ABC Trading Inc."
            />
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Industry
            </label>
            <div className="relative">
              <select
                {...register("industry")}
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black appearance-none bg-white transition"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: "right 0.75rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1em",
                }}
              >
                <option>Import/Export</option>
                <option>Manufacturing</option>
                <option>Retail</option>
                <option>Logistics</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Company Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Company Size
            </label>
            <div className="relative">
              <select
                {...register("companySize")}
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black appearance-none bg-white transition"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: "right 0.75rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1em",
                }}
              >
                <option>1-50 employees</option>
                <option>51-200 employees</option>
                <option>201-500 employees</option>
                <option>501-1000 employees</option>
                <option>1000-5000 employees</option>
                <option>5000+ employees</option>
              </select>
            </div>
          </div>

          {/* Address - Multi-line Description Field */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Address
            </label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-400" />
              <textarea
                {...register("address")}
                rows={4}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
                placeholder="123 Business Street, New York, NY 10001"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-900 transition flex items-center gap-2"
        >
          <MdSave size={18} />
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditShipperProfileForm;
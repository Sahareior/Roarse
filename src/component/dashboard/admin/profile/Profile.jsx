import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaUserShield,
  FaEdit,
  FaCamera,
} from "react-icons/fa";
import ReusableModal from "../../../reusable/modal/ReusableModal";
import EditProfileForm from "./EditProfileForm";

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div>
      <p className="text-[14px] robReg text-gray-500">{label}</p>
      <div className="flex gap-2 mt-1 items-center">
        <span className="text-gray-500">{icon}</span>
        <p className="text-sm robReg text-[#101828] font-medium">{value}</p>
      </div>
    </div>
  </div>
);

const Profile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Default profile data
  const [profileData, setProfileData] = useState({
    fullName: "Admin User",
    email: "admin@urgenttrodes.com",
    phoneNumber: "+1 (555) 123-4567",
    location: "San Francisco, CA",
  });

  const handleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = (formData) => {
    // formData is now a FormData object containing all fields + file

    // Example: Send to backend
    // axios.post("/api/profile/update", formData, {
    //   headers: { "Content-Type": "multipart/form-data" }
    // })

    console.log("Ready to upload with FormData:");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    // Update local state (optional - only text fields, since File can't be stored long-term)
    // You'd typically get updated profile + photo URL from backend after upload
    setIsEditModalOpen(false);
  };

  // const handleSaveProfile = (data) => {
  //   console.log("Profile saved:", data);
  //   // Update profile data (in real app, you would send to API)
  //   setProfileData(data);
  //   setIsEditModalOpen(false);
  // };

  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="max-w-8xl mx-auto space-y-6">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-black to-gray-600 rounded-xl h-28">
        <div className="absolute -bottom-10 left-6 flex items-center gap-4">
          <div className="w-20 h-20 rounded-full shadow-md bg-black text-white flex items-center justify-center text-xl border-4 border-white">
            {profileData.fullName
              ?.split(" ")
              .map((n) => n[0])
              .join("") || "AU"}
          </div>
          <div className="mt-11">
            <h2 className="font-semibold arReg text-lg">
              {profileData.fullName}
            </h2>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <FaUserShield className="text-gray-400" />
              Admin
            </p>
          </div>
        </div>

        <button
          onClick={handleEditProfile}
          className="absolute top-4 right-4 bg-black text-white px-4 py-1.5 rounded text-xs flex items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <FaEdit />
          Edit Profile
        </button>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information */}
        <div className="lg:col-span-2 bg-white border rounded-xl p-5">
          <h3 className="text-[18px] arReg font-semibold flex items-center gap-2 mb-4">
            <FaUser />
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoItem
              icon={<FaUser />}
              label="Full Name"
              value={profileData.fullName}
            />
            <InfoItem
              icon={<FaEnvelope />}
              label="Email Address"
              value={profileData.email}
            />
            <InfoItem
              icon={<FaPhone />}
              label="Phone Number"
              value={profileData.phoneNumber}
            />
            <InfoItem
              icon={<FaMapMarkerAlt />}
              label="Location"
              value={profileData.location}
            />
            <div className="flex flex-col gap-3">
              <span className="text-xs text-gray-500">Status</span>
              <span className="text-xs px-3 w-16 py-0.5 rounded-full bg-green-100 text-green-700">
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Account Activity */}
        <div className="bg-white border rounded-xl p-5">
          <h3 className="text-[18px] arReg font-semibold flex items-center gap-2 mb-4">
            <FaCalendarAlt />
            Account Activity
          </h3>

          <div className="space-y-4">
            <InfoItem
              icon={<FaCalendarAlt />}
              label="Join Date"
              value="January 15, 2023"
            />
            <InfoItem
              icon={<FaClock />}
              label="Last Login"
              value="2025-12-09 10:30 AM"
            />
            <InfoItem
              icon={<FaUserShield />}
              label="Account Type"
              value="Admin"
            />
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <ReusableModal
        open={isEditModalOpen}
        onClose={handleCancelEdit}
        title="Edit Profile"
        footer={null}
      >
        <EditProfileForm
          defaultValues={profileData}
          onSave={handleSaveProfile}
          onCancel={handleCancelEdit}
        />
      </ReusableModal>
    </div>
  );
};

export default Profile;

import { Switch } from "antd";
import { useState } from "react";
import { BiCheckDouble } from "react-icons/bi";
import {
  FaBuilding,
  FaCreditCard,
  FaDiceD6,
  FaEdit,
  FaMailBulk,
  FaPhone,
  FaPlusCircle,
  FaRegFileAlt,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { IoCheckmarkDoneCircleOutline, IoTimeOutline } from "react-icons/io5";
import ReusableModal from "../../../reusable/modal/ReusableModal";
import AddBankAccountForm from "./AddBankAccountForm";
import EditShipperProfileForm from "./EditShipperProfileForm";

const PreferenceRow = ({ title, description, checked, onChange }) => (
  <div className="flex items-center justify-between py-4">
    <div>
      <p className="text-[16px] arReg font-semibold text-gray-900">{title}</p>
      <p className="text-[14px] arReg text-gray-500">{description}</p>
    </div>
    <Switch checked={checked} onChange={onChange} />
  </div>
);

const ProfileSection = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const profileData = {
    fullName: "John Abraham",
    email: "john.abraham@example.com",
    phone: "+1 (555) 123-4567",
    companyName: "ABC Trading Inc.",
    industry: "Import/Export",
    companySize: "1000-5000 employees",
    address: "123 Business Street, New York, NY 10001",
    memberSince: "2025",
  };

  const handleOpenEdit = () => setIsEditModalOpen(true);
  const handleCloseEdit = () => setIsEditModalOpen(false);

  const handleSaveProfile = (updatedData) => {
    console.log("Profile updated:", updatedData);
    // Update state or send to API here
    handleCloseEdit();
  };

  return (
    <>
      <div className="bg-black text-white p-8 rounded-xl mb-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col items-center">
            <img
              className="w-[150px] h-[150px] rounded-full object-cover border-4 border-white mb-4"
              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="John Abraham"
            />
            <button className="flex items-center gap-2 text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
              <FaEdit /> Change Photo
            </button>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[24px] font-medium">
                  {profileData.fullName}
                </p>
                <div className="flex flex-wrap items-center gap-2 my-3">
                  <p className="px-5 py-1 bg-[#00C95033] rounded-2xl text-sm">
                    Verified
                  </p>
                </div>
              </div>

              <button
                onClick={handleOpenEdit}
                className="px-4 py-2 bg-white text-black rounded-lg flex items-center gap-2 hover:bg-white/90 transition"
              >
                <FaEdit /> Edit Profile
              </button>
            </div>

            <p className="text-gray-300 mb-4 text-sm">
              Member Since {profileData.memberSince}
            </p>

            <div className="flex flex-wrap gap-6 text-gray-300">
              <p className="flex items-center gap-2">
                <FaMailBulk /> {profileData.email}
              </p>
              <p className="flex items-center gap-2">
                <FaPhone /> {profileData.phone}
              </p>
              <p className="flex items-center gap-2">
                <FaBuilding /> {profileData.companyName}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <ReusableModal
        open={isEditModalOpen}
        onClose={handleCloseEdit}
        title="Edit Profile"
        footer={null}
      >
        <EditShipperProfileForm
          defaultValues={profileData}
          onSave={handleSaveProfile}
          onCancel={handleCloseEdit}
        />
      </ReusableModal>
    </>
  );
};

const StatCard = ({ label, value }) => (
  <div className="flex flex-col gap-1 bg-white border rounded-lg p-4">
    <p className="">
      <FaDiceD6 size={24} className="" />
    </p>
    <span className="text-[24px] robMed font-semibold">{value}</span>
    <span className="text-[16px] robMed text-gray-500">{label}</span>
  </div>
);

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-[16px] robReg text-gray-500">{label}</p>
    <p className="text-[20px] font-medium">{value}</p>
  </div>
);

const DocumentItem = ({ title }) => (
  <div className="flex justify-between items-center border rounded-lg p-3">
    <div className="flex items-center gap-3">
      <p className="p-4 bg-[#F3F4F6] rounded-xl">
        <FaRegFileAlt size={20} className="text-[#6A7282]" />
      </p>
      <div>
        <span className="text-[16px] text-[#000000] robReg">{title}</span>
        <p className="text-[#6A7282] robReg text-xs">Uploaded</p>
        <p className="text-[#6A7282] robReg text-xs">10/11/2022</p>
      </div>
    </div>

    <div className="flex flex-wrap items-center gap-2 my-3">
      <p className="text-green-500 text-sm font-medium px-3 py-1 bg-green-100 rounded-2xl">
        Verified
      </p>
    </div>
  </div>
);

const ShipperSettings = () => {
  const [preferences, setPreferences] = useState({
    email: true,
    sms: false,
    shipment: true,
    price: true,
  });
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);

  const handleToggle = (key) => (value) =>
    setPreferences((prev) => ({ ...prev, [key]: value }));

  const handleOpenBankModal = () => setIsBankModalOpen(true);
  const handleCloseBankModal = () => setIsBankModalOpen(false);

  const handleSave = () => {
    console.log("Saved preferences:", preferences);
    // API call goes here
  };

  const handleSaveBankAccount = (bankData) => {
    console.log("New Bank Account Saved:", bankData);
    // Here you would typically send to API
    handleCloseBankModal();
    // Optionally show success toast
  };

  return (
    <div className="p-6 max-w-8xl mx-auto space-y-6">
      {/* Header */}
      <ProfileSection />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="Total Shipment Request" value="142" />
        <StatCard label="Total Spent" value="$21,452" />
        <StatCard label="On-Time Delivery" value="96%" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Company Info */}
        <div className="lg:col-span-2 bg-white border rounded-xl p-5">
          <h3 className="font-semibold robReg text-[24px] mb-4">
            Company Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem label="Company Name" value="ABC Trading Ltd" />
            <InfoItem label="Industry" value="Import / Export" />
            <InfoItem label="Registration Number" value="REG-123-456-789" />
            <InfoItem label="TAX ID" value="TAX-123-154" />
            <InfoItem
              label="Address"
              value="123 Business Road, New York, NY 1200"
            />
            <InfoItem label="Website" value="www.abctrade.com" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white border rounded-xl p-5">
          <h3 className="font-semibold robReg text-[24px] mb-4">Quick Stats</h3>

          <ul className="space-y-7 text-sm">
            <li className="flex border-b-2 border-[#767575] pb-3 justify-between">
              <span className="text-[16px] text-[#767575] flex items-center gap-2">
                {" "}
                <p>
                  <IoTimeOutline />{" "}
                </p>{" "}
                Active Shipments
              </span>
              <span className="font-medium text-[24px]">3</span>
            </li>
            <li className="flex border-b-2 border-[#767575] pb-3 justify-between">
              <span className="text-[16px] text-[#767575] flex items-center gap-2">
                <IoCheckmarkDoneCircleOutline /> Completed
              </span>
              <span className="font-medium text-[24px]">126</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Verification Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border rounded-xl p-5">
          <div className="flex justify-between items-center">
            <p className="text-[20px] robReg">Verification Status</p>
            <FaShield className="text-green-300" />
          </div>

          <div className="mt-8 grid gap-5 grid-cols-2">
            {[1, 2, 3, 4, 5].map((items) => (
              <div className="flex bg-[#F9FAFB] px-5 py-4 justify-between ">
                <p className="flex items-center gap-2">
                  <span className="p-1 bg-green-100 rounded-full">
                    <BiCheckDouble className="text-green-400" size={22} />
                  </span>{" "}
                  Email
                </p>
                <p className="text-green-500 p-1 rounded-lg bg-green-100 w-16 text-center">
                  {" "}
                  Verified
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <div className="flex items-center justify-between">
            <p className="text-[20px] robReg">Payment Methods</p>
            <FaCreditCard size={28} className="text-[#6A7282]" />
          </div>

          <div className="mt-5 border flex items-center justify-between p-5 rounded-lg">
            <div className="flex items-center gap-4">
              <p className="p-3 bg-[#F3F4F6] rounded-3xl">
                <FaCreditCard size={20} />
              </p>
              <div>
                <p className="font-medium">*********8132</p>
                <p className="text-sm text-gray-500">Expires 12/24</p>
              </div>
            </div>
            <p className="text-green-500 text-sm font-medium px-3 py-1 bg-green-100 rounded-2xl">
              Primary
            </p>
          </div>

          <button
            onClick={handleOpenBankModal}
            className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 border border-dashed border-gray-400 rounded-lg text-gray-600 hover:text-black hover:border-black transition"
          >
            <FaPlusCircle size={20} />
            Add Bank Account
          </button>
        </div>
      </div>

      {/* Documents */}
      <div className="bg-white border rounded-xl p-5">
        <div className="flex justify-between pb-8 pt-4 items-center">
          <h3 className="font-semibold text-[20px] robReg ">Documents</h3>
          <FaRegFileAlt size={28} className="text-[#6A7282]" />
        </div>

        <div className="space-y-3">
          <DocumentItem title="Business License" />
          <DocumentItem title="Tax Certificate" />
          <DocumentItem title="Insurance Certificate" />
          <DocumentItem title="ID Verification" />
        </div>
      </div>

      <div>
        <div className="bg-white border rounded-xl p-6 ">
          <h2 className="text-[20px] font-semibold arReg  text-gray-900 mb-4">
            Notification Preferences
          </h2>

          <div className="divide-y">
            <PreferenceRow
              title="Email Notifications"
              description="Receive notifications about email notifications"
              checked={preferences.email}
              onChange={handleToggle("email")}
            />

            <PreferenceRow
              title="SMS Notifications"
              description="Receive notifications about sms notifications"
              checked={preferences.sms}
              onChange={handleToggle("sms")}
            />

            <PreferenceRow
              title="Shipment Updates"
              description="Receive notifications about shipment updates"
              checked={preferences.shipment}
              onChange={handleToggle("shipment")}
            />

            <PreferenceRow
              title="Price Alerts"
              description="Receive notifications about price alerts"
              checked={preferences.price}
              onChange={handleToggle("price")}
            />
          </div>

          <div className="mt-6"></div>
        </div>
      </div>

      {/* Add Bank Account Modal */}
      <ReusableModal
        open={isBankModalOpen}
        onClose={handleCloseBankModal}
        title="Add New Bank Account"
        footer={null}
      >
        <AddBankAccountForm
          onSave={handleSaveBankAccount}
          onCancel={handleCloseBankModal}
        />
      </ReusableModal>
    </div>
  );
};

export default ShipperSettings;

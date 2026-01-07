import React, { useState } from "react";
import { Switch } from "antd";
import { FaSave } from "react-icons/fa";

const AccountSettings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    shipment: true,
    price: true,
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Notification configuration
  const notificationConfig = [
    {
      key: "email",
      title: "Email Notifications",
      description: "Receive notifications about email notifications",
    },
    {
      key: "sms",
      title: "Sms Notifications",
      description: "Receive notifications about sms notifications",
    },
    {
      key: "shipment",
      title: "Shipment Updates",
      description: "Receive notifications about shipment updates",
    },
    {
      key: "price",
      title: "Price Alerts",
      description: "Receive notifications about price alerts",
    },
  ];

  const handleToggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // API call here
    console.log("Password updated:", passwordForm);
  };

  const handleSavePreferences = () => {
    console.log("Saved preferences:", notifications);
  };

  // Reusable password input component
  const PasswordInput = ({ label, name, placeholder }) => (
    <div>
      <label className="text-[20px] robReg text-black">{label}</label>
      <input
        type="password"
        name={name}
        value={passwordForm[name]}
        onChange={handlePasswordChange}
        placeholder={placeholder}
        className="mt-1 w-full border rounded px-3 py-2 text-sm"
      />
    </div>
  );

  // Reusable notification toggle item
  const NotificationItem = ({ config }) => (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-[16px] arReg font-medium">{config.title}</p>
        <p className="text-xs arReg text-gray-500">{config.description}</p>
      </div>
      <Switch
        checked={notifications[config.key]}
        onChange={() => handleToggle(config.key)}
      />
    </div>
  );

  return (
    <div className="max-w-8xl space-y-8">
      {/* Change Password Section */}
      <div className="bg-white border rounded-xl p-6">
     
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <PasswordInput
            label="Current Password"
            name="currentPassword"
            placeholder="Enter current password"
          />
          <PasswordInput
            label="New Password"
            name="newPassword"
            placeholder="Enter New Password"
          />
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm Your Password"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded text-xs"
            >
              Create
            </button>
          </div>
        </form>
      </div>

      {/* Notification Preferences Section */}
      <div className="bg-white border rounded-xl p-6 space-y-6">
        <h3 className="text-[20px] robMed font-semibold">
          Notification Preferences
        </h3>

        <div className="space-y-5">
          {notificationConfig.map((config) => (
            <NotificationItem key={config.key} config={config} />
          ))}
        </div>

        <button
          onClick={handleSavePreferences}
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded text-xs w-fit"
        >
          <FaSave />
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
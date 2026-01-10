import React from "react";

/* ---------------- Preference ---------------- */

const PreferenceSettings = () => (
  <div className="bg-white border rounded-xl p-6 space-y-4 w-full">

    <p className="text-[16px] font-semibold text-[#101828]">
      Notification Preferences
    </p>

    {[
      {
        title: "Email Notifications",
        desc: "Receive notifications about email notifications",
        active: true,
      },
      {
        title: "Sms Notifications",
        desc: "Receive notifications about sms notifications",
        active: false,
      },
      {
        title: "Shipment Updates",
        desc: "Receive notifications about shipment updates",
        active: true,
      },
      {
        title: "Price Alerts",
        desc: "Receive notifications about price alerts",
        active: true,
      },
    ].map((item, i) => (
      <div
        key={i}
        className="flex justify-between items-center border-b last:border-b-0 pb-3"
      >
        <div>
          <p className="text-sm font-medium text-[#101828]">
            {item.title}
          </p>
          <p className="text-xs text-[#667085]">
            {item.desc}
          </p>
        </div>

        <div
          className={`w-10 h-5 rounded-full flex items-center px-1 ${
            item.active ? "bg-black" : "bg-gray-300"
          }`}
        >
          <div
            className={`h-4 w-4 bg-white rounded-full transition ${
              item.active ? "ml-auto" : ""
            }`}
          />
        </div>
      </div>
    ))}

    <button className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
      Save Preferences
    </button>
  </div>
);

/* ---------------- Password ---------------- */

const PasswordSettings = () => (
  <div className="bg-white border rounded-xl p-6 space-y-4 w-full">

    <p className="text-[16px] font-semibold text-[#101828]">
      Change Password
    </p>

    {[
      { label: "Current Password", placeholder: "Enter your current password" },
      { label: "New Password", placeholder: "Enter new password" },
      { label: "Confirm Password", placeholder: "Re-enter your password" },
    ].map((field, i) => (
      <div key={i}>
        <p className="text-xs text-[#344054] mb-1">
          {field.label}
        </p>
        <input
          type="password"
          placeholder={field.placeholder}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    ))}

    <div className="flex justify-end">
      <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
        Save Changes
      </button>
    </div>
  </div>
);

/* ---------------- Document ---------------- */

const DocumentUpload = () => (
  <div className="bg-white border rounded-xl p-6 space-y-4 w-full">

    <p className="text-[16px] font-semibold text-[#101828]">
      Upload Document
    </p>

    <div>
      <p className="text-xs text-[#344054] mb-1">Title</p>
      <input
        placeholder="Your document name"
        className="w-full border rounded-lg px-3 py-2 text-sm"
      />
    </div>

    <div className="border rounded-xl p-6 text-center space-y-2">
      <p className="text-sm text-[#667085]">
        Drag & Drop your file
      </p>
      <p className="text-xs text-[#98A2B3]">Or</p>
      <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
        Browse File
      </button>
    </div>
  </div>
);

/* ---------------- Main Wrapper ---------------- */

const SettingsConditionalPanel = ({ component }) => {
  if (component === "preference") return <PreferenceSettings />;
  if (component === "password") return <PasswordSettings />;
  if (component === "document") return <DocumentUpload />;

  return null;
};

export default SettingsConditionalPanel;

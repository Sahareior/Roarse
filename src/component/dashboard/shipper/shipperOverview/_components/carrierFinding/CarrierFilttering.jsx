import { Divider } from "antd";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { FiArrowLeft } from "react-icons/fi";
import { IoMdCloudDone } from "react-icons/io";
import FindingCarriersLoader from "./FindingCarriersLoader";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

/* -------------------- Small Helpers -------------------- */

const Badge = ({ text, variant = "default" }) => {
  const styles = {
    default: "bg-gray-100 text-gray-600",
    success: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-2 py-0.5 text-center rounded-full w-24 text-xs font-medium ${styles[variant]}`}
    >
      {text}
    </span>
  );
};

const ModeTag = ({ text }) => (
  <span className="px-2 py-0.5 bg-gray-100 rounded-md text-xs text-gray-600">
    {text}
  </span>
);

/* -------------------- Carrier Card -------------------- */

const CarrierCard = ({ carrier, shipmentId }) => (
  <div className="border rounded-xl p-5 space-y-4 bg-white">
    {/* Top */}
    <div className="flex justify-between items-start">
      <div className="flex gap-4">
        {/* Avatar */}
        <Link to="/dashboard/shipper-dashboard/overview/post-shipment/carrier-profile">
          <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
            {carrier.initials}
          </div>
        </Link>

        {/* Info */}
        <div className="space-y-1">
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold text-gray-900">
              {carrier.name}
            </p>
            <p className="text-green-400">
              <IoMdCloudDone size={20} />
            </p>
            <Badge text="available" variant="success" />
          </div>

          <p className="text-xs text-gray-500">{carrier.company}</p>

          <div className="flex items-center gap-2 text-xs text-gray-600">
            <FaStar className="text-yellow-500" />
            <span>{carrier.rating}</span>
            <span>•</span>
            <span>{carrier.deliveries} deliveries</span>
          </div>
        </div>
      </div>

      {/* Match */}
      <div className="flex flex-col gap-3 justify-between  h-full">
        <Badge text={`${carrier.match}% Match`} variant="success" />
        <div className=" flex gap-4 flex-col ">
          <Link to={`/dashboard/shipper-dashboard/overview/post-shipment/${shipmentId}/chat`}>
            <button className="w-[10vw] py-2 text-sm border rounded-lg hover:bg-gray-50">
              Chat & Bargain
            </button>
          </Link>
        </div>
      </div>
    </div>

    {/* Modes */}
    <Divider />

    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-500">Transport modes:</p>
        {carrier.modes.map((mode) => (
          <ModeTag key={mode} text={mode} />
        ))}
      </div>

      <div className="">
        <Link to="/dashboard/shipper-dashboard/overview/post-shipment/:shipmentId/carrier-contact">
          <button className="w-[10vw] py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800">
            Select Carrier
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const CarrierFilttering = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const { shipmentId } = useParams();

  useEffect(() => {
    // ⏳ 5 minutes = 300000 ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const carriers = [
    {
      name: "Maria Garcia",
      initials: "MG",
      company: "Swift Sea Transport",
      rating: 4.8,
      deliveries: 287,
      match: 94,
      modes: ["sea", "road"],
    },
    {
      name: "John Smith",
      initials: "JS",
      company: "Global Express Logistics",
      rating: 4.9,
      deliveries: 342,
      match: 93,
      modes: ["road", "air"],
    },
    {
      name: "Sarah Johnson",
      initials: "SJ",
      company: "Continental Freight",
      rating: 4.6,
      deliveries: 421,
      match: 85,
      modes: ["road", "sea"],
    },
  ];

  return (
    <div>
      {location.pathname ===
      "/dashboard/shipper-dashboard/overview/post-shipment/:shipmentId" ? (
        <div className="max-w-8xl bg-white mx-auto p-6 space-y-6">
          {/* Back */}
          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
            <FiArrowLeft />
            Back
          </button>

          {/* Header */}
          <div className="bg-white border rounded-xl p-5 flex justify-between items-center">
            <div>
              <p className="text-[22px] robReg font-semibold text-gray-900">
                Finding Carriers
              </p>
              <p className="text-sm robReg mt-2 text-gray-500">
                India → Bangladesh • ROAD • 100kg
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs robReg text-gray-500">Estimated Price</p>
              <p className="text-[22px] robReg font-semibold mt-2 text-gray-900">
                $400
              </p>
            </div>
          </div>

          {/* 🔄 Conditional Rendering */}
          {isLoading ? (
            <FindingCarriersLoader />
          ) : (
            <>
              {/* Subheader */}
              <div>
                <p className="text-[19px] robReg font-semibold text-gray-900">
                  Matched Carriers
                </p>
                <p className="text-[15px] robReg text-gray-500">
                  Sorted by best match • All carriers are verified
                </p>
              </div>

              {/* List */}
              <div className="space-y-4">
                {carriers.map((carrier, idx) => (
                  <CarrierCard shipmentId={shipmentId} key={idx} carrier={carrier} />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default CarrierFilttering;

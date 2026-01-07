import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import TransportsLayout from "./layouts/TransportsLayout.jsx";
import ServicesLayout from "./layouts/ServicesLayout.jsx";
import Quote from "./component/homepage/Quote/Quote.jsx";
import DashboardHome from "./component/dashboard/DashboardHome.jsx";
import AdminOverview from "./component/dashboard/admin/adminOverview/AdminOverview.jsx";
import Shippermanagement from "./component/dashboard/admin/shipper_management/Shippermanagement.jsx";
import ShipperProfile from "./component/dashboard/admin/shipper_management/ShipperProfile.jsx";
import CarrierManagement from "./component/dashboard/admin/CarrierManagement/CarrierManagement.jsx";
import QuoteManagement from "./component/dashboard/admin/quoteManagement/QuoteManagement.jsx";
import QuoteDetails from "./component/dashboard/admin/quoteManagement/_component/QuoteDetails.jsx";
import ComplainsPage from "./component/dashboard/admin/Complains/ComplainsPage";
import ComplainDetails from "./component/dashboard/admin/Complains/_component/ComplainDetails.jsx";
import Tracking from "./component/dashboard/admin/Tracking/Tracking.jsx";
import IndividualTracking from "./component/dashboard/admin/Tracking/_component/IndividualTracking.jsx";
import Payments from "./component/dashboard/admin/payments/Payments.jsx";
import CreatePayments from "./component/dashboard/admin/payments/_components/CreatePayments.jsx";
import AdminMessages from "./component/dashboard/admin/messages/AdminMessages.jsx";
import Applications from "./component/dashboard/admin/applications/Applications.jsx";
import ApplicationDetails from "./component/dashboard/admin/applications/_components/ApplicationDetails.jsx";
import AgentManagement from "./component/dashboard/admin/agentManagement/AgentManagement.jsx";
import SiteSettings from "./component/dashboard/admin/settings/SiteSettings.jsx";
import AccountSettings from "./component/dashboard/admin/settings/AccountSettings.jsx";
import Profile from "./component/dashboard/admin/profile/Profile.jsx";
import ShipperOverview from "./component/dashboard/shipper/shipperOverview/ShipperOverview.jsx";
import ActiveShipment from "./component/dashboard/shipper/activeShipment/ActiveShipment.jsx";
import ShipperHistory from "./component/dashboard/shipper/history/ShipperHistory.jsx";
import LiveTracking from "./component/dashboard/shipper/liveTracking/LiveTracking.jsx";
import ShipperPayment from "./component/dashboard/shipper/shipperPayment/ShipperPayment.jsx";
import ShipperSettings from "./component/dashboard/shipper/Settings/ShipperSettings.jsx";
import PostShipments from "./component/dashboard/shipper/shipperOverview/_components/PostShipments.jsx";
import ShippingDetails from "./component/dashboard/shipper/activeShipment/_components/ShippingDetails.jsx";
import ShipperIndividualLiveTracking from "./component/dashboard/shipper/liveTracking/_compoents/ShipperIndividualLiveTracking.jsx";
import ShippingHistoryDetails from "./component/dashboard/shipper/history/_components/ShippingHistoryDetails.jsx";
import CarrierFilttering from "./component/dashboard/shipper/shipperOverview/_components/carrierFinding/CarrierFilttering.jsx";
import CarrierProfile from "./component/dashboard/shipper/shipperOverview/_components/shipperProfile/CarrierProfile.jsx";
import CarrierContact from "./component/dashboard/shipper/shipperOverview/_components/carrierContact/CarrierContact.jsx";
import CarrierPayment from "./component/dashboard/shipper/shipperOverview/_components/CarrierPayment/CarrierPayment.jsx";
import Notification from "./component/reusable/notification/Notification.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "ship",
    element: <TransportsLayout />,
  },
  {
    path: "truck",
    element: <TransportsLayout />,
  },
  {
    path: "air",
    element: <TransportsLayout />,
  },
  {
    path: "Shipper",
    element: <ServicesLayout />,
  },
  {
    path: "Quote",
    element: <Quote />,
  },
  {
    path: "Carrier",
    element: <ServicesLayout />,
  },
  // admin dashboard

  {
    path: "dashboard",
    element: <DashboardHome />,
    children: [
      {
        index: true, // 👈 default page (/dashboard)
        element: <AdminOverview />,
      },
      {
        path: "overview", // 👈 relative
        element: <AdminOverview />,
      },
      {
        path: "shipper",
        element: <Shippermanagement />,
        children: [
          {
            path: ":shipperId",
            element: <ShipperProfile />,
          },
        ],
      },
      {
        path: "carriers",
        element: <CarrierManagement />,
        children: [
          {
            path: ":carrierId",
            element: <ShipperProfile />,
          },
        ],
      },
      {
        path: "quotes",
        element: <QuoteManagement />,
        children: [
          {
            path: ":quoteId",
            element: <QuoteDetails />,
          },
        ],
      },
      {
        path: "complaints",
        element: <ComplainsPage />,
        children: [
          {
            path: ":complaintId",
            element: <ComplainDetails />,
          },
        ],
      },
      {
        path: "tracking",
        element: <Tracking />,
        children: [
          {
            path: ":trackingId",
            element: <IndividualTracking />,
          },
        ],
      },
      {
        path: "payments",
        element: <Payments />,
        children: [
          {
            path: ":paymentId",
            element: <CreatePayments />,
          },
        ],
      },
      {
        path: "messages",
        element: <AdminMessages />,
      },
      {
        path: "applications",
        element: <Applications />,
        children: [
          {
            path: ":applicationId",
            element: <ApplicationDetails />,
          },
        ],
      },
      {
        path: "agents",
        element: <AgentManagement />,
      },
      {
        path: "settings/site",
        element: <SiteSettings />,
      },
      {
        path: "settings/account",
        element: <AccountSettings />,
      },
      {
        path: "profile",
        element: <Profile />,
      },

      // shipper management routes (dashboard/shipper-management)

      {
        path: "shipper-dashboard/overview",
        element: <ShipperOverview />,
        children: [
          {
            path: "post-shipment",
            element: <PostShipments />,
            children: [
              {
                path: ":shipmentId",
                element: <CarrierFilttering />,
                children: [
                  {
                    path:'carrier-contact',
                    element: <CarrierContact />,
                    children: [
                      {
                        path:'carrier-payment',
                        element: <CarrierPayment />
                      }
                    ]
                  }
                ]
              },
              {
                path: "carrier-profile",
                element: <CarrierProfile />,
              },
            ],
          },
        ],
      },
      {
        path: "shipper-dashboard/active-shipments",
        element: <ActiveShipment />,
        children: [
          {
            path: ":shipment-details",
            element: <ShippingDetails />,
          },
        ],
      },
      {
        path: "shipper-dashboard/history",
        element: <ShipperHistory />,
        children: [
          {
            path: ":shipmentId",
            element: <ShippingHistoryDetails />,
          },
        ],
      },
      {
        path: "shipper-dashboard/live-tracking",
        element: <LiveTracking />,
        children: [
          {
            path: ":trackingId",
            element: <ShipperIndividualLiveTracking />,
          },
        ],
      },
      {
        path: "shipper-dashboard/payments",
        element: <ShipperPayment />,
      },
      {
        path:"shipper-dashboard/notifications",
        element: <Notification />
      },
      {
        path: "shipper-dashboard/settings",
        element: <ShipperSettings />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

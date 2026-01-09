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
import Login from "./component/auth/login/Login.jsx";
import Signup from "./component/auth/signup/Signup.jsx";
import ForgotPassword from "./component/auth/forgotPassword/ForgotPassword.jsx";
import AgentApplication from "./component/homepage/AgentApplication/AgentApplication.jsx";
import "./index.css";
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
import PostShipments from "./component/reusable/QuoteSteps/PostShipments.jsx";
import ShippingDetails from "./component/dashboard/shipper/activeShipment/_components/ShippingDetails.jsx";
import ShipperIndividualLiveTracking from "./component/dashboard/shipper/liveTracking/_compoents/ShipperIndividualLiveTracking.jsx";
import ShippingHistoryDetails from "./component/dashboard/shipper/history/_components/ShippingHistoryDetails.jsx";
import CarrierFilttering from "./component/dashboard/shipper/shipperOverview/_components/carrierFinding/CarrierFilttering.jsx";
import CarrierProfile from "./component/dashboard/shipper/shipperOverview/_components/shipperProfile/CarrierProfile.jsx";
import CarrierContact from "./component/dashboard/shipper/shipperOverview/_components/carrierContact/CarrierContact.jsx";
import CarrierPayment from "./component/dashboard/shipper/shipperOverview/_components/CarrierPayment/CarrierPayment.jsx";
import Notification from "./component/reusable/notification/Notification.jsx";
import CarrierOverview from "./component/dashboard/carrier/CarrierOverView/CarrierOverview.jsx";
import CarrierActiveDeliverys from "./component/dashboard/carrier/carrierActiveDeliverys/CarrierActiveDeliveries.jsx";
import CarrierIncomingShipment from "./component/dashboard/carrier/carrierIncomingShipment/CarrierIncomingShipment.jsx";
import CarrierHistory from "./component/dashboard/carrier/carrierHistory/CarrierHistory.jsx";
import CarrierDashPayment from "./component/dashboard/carrier/carrierPayment/CarrierDashPayment.jsx";
import CarrierSettings from "./component/dashboard/carrier/carrierSettings/CarrierSettings.jsx";
import CarrierMessage from "./component/dashboard/carrier/carrierMessage/CarrierMessage.jsx";
import CarrierShipmentReq from "./component/dashboard/agent/agentShipmentReq/AgentShipmentReq.jsx";
import CarrierAssignedTask from "./component/dashboard/agent/AgenttAssignedTask/AgentAssignedTask.jsx";
import IncomingShipmentDetails from "./component/dashboard/carrier/carrierIncomingShipment/_components/IncomingShipmentDetails.jsx";
import Carrierprofile from "./component/dashboard/carrier/carrierProfile/Carrierprofile.jsx";
import CareerUpdateDeliveriStatus from "./component/dashboard/carrier/carrierActiveDeliverys/_components/CareerUpdateDeliveriStatus.jsx";
import CarrierPaymentDetailsHistory from "./component/dashboard/carrier/carrierPayment/_components/CarrierPaymentDetailsHistory.jsx";
import CarrierProfileEdit from "./component/dashboard/carrier/carrierSettings/_components/CarrierProfileEdit.jsx";
import CarrierShipmentReqDetails from "./component/dashboard/agent/agentShipmentReq/_component/AgentShipmentReqDetails.jsx";
import AssignedTaskStatusUpdate from "./component/dashboard/agent/AgenttAssignedTask/_components/AgentAssignedTaskStatusUpdate.jsx";
import AgentAssignedTaskStatusUpdate from "./component/dashboard/agent/AgenttAssignedTask/_components/AgentAssignedTaskStatusUpdate.jsx";
import AgentHistory from "./component/dashboard/agent/agentHistory/AgentHistory.jsx";
import AgentOverview from "./component/dashboard/agent/agentOverview/AgentOverview.jsx";
import AgentMessages from "./component/dashboard/agent/agentMessages/AgentMessages.jsx";
import AgentSettings from "./component/dashboard/agent/agentSettings/AgentSettings.jsx";
import AgentWallet from "./component/dashboard/agent/agentWallet/AgentWallet.jsx";
import AgentEditProfile from "./component/dashboard/agent/agentSettings/_components/AgentEditProfile.jsx";
import ShipperSubs from "./component/dashboard/shipper/shipperSubs/ShipperSubs.jsx";
import BargainingChat from "./component/dashboard/carrier/carrierIncomingShipment/_components/BargainingChat.jsx";

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
    path: "shipper",
    element: <ServicesLayout />,
  },
  {
    path: "Quote",
    element: <Quote />,
  },

  {
    path: "carrier",
    element: <ServicesLayout />,
  },
  {
    path: "agent-application",
    element: <AgentApplication />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "dashboard",
    element: <DashboardHome />,
    children: [
      {
        index: true, // 👈 default page (/dashboard)
        element: <AdminOverview />,
      },

      {
        path: "notifications",
        element: <Notification />,
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
                    path: "carrier-contact",
                    element: <CarrierContact />,
                    children: [
                      {
                        path: "carrier-payment",
                        element: <CarrierPayment />,
                      },
                    ],
                  },
                ],
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
            children: [
              {
                path: ":trackingId",
                element: <ShipperIndividualLiveTracking />,
              },
            ],
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
        path: "shipper-dashboard/subscription",
        element: <ShipperSubs />,
      },

      {
        path: "shipper-dashboard/settings",
        element: <ShipperSettings />,
      },

      // carrier dashboards routes

      {
        path: "carrier-dashboard/overview",
        element: <CarrierOverview />,
      },
      {
        path: "carrier-dashboard/active-deliveries",
        element: <CarrierActiveDeliverys />,
        children: [
          {
            path: ":deliveryId",
            element: <CareerUpdateDeliveriStatus />,
          },
        ],
      },
      {
        path: "carrier-dashboard/incoming-shipments",
        element: <CarrierIncomingShipment />,
        children: [
          {
            path: ":incomingId",
            element: <IncomingShipmentDetails />,
            children: [
              {
                path: "chat",
                element: <BargainingChat />,
              },
            ],
          },
        ],
      },
      {
        path: "carrier-dashboard/history",
        element: <CarrierHistory />,
      },
      {
        path: "carrier-dashboard/payments",
        element: <CarrierDashPayment />,
        children: [
          {
            path: ":paymentId",
            element: <CarrierPaymentDetailsHistory />,
          },
        ],
      },
      {
        path: "carrier-dashboard/messages",
        element: <CarrierMessage />,
      },
      {
        path: "carrier-dashboard/carrier-profile",
        element: <Carrierprofile />,
      },

      {
        path: "carrier-dashboard/settings",
        element: <CarrierSettings />,
        children: [
          {
            path: "carrier-edit",
            element: <CarrierProfileEdit />,
          },
        ],
      },

      // agent dashboard.................

      {
        path: "agent-dashboard/agent-overview",
        element: <AgentOverview />,
        children: [
          {
            path: ":shipmentReqId",
            element: <CarrierShipmentReqDetails />,
          },
        ],
      },
      {
        path: "agent-dashboard/agent-messages",
        element: <AgentMessages />,
      },

      {
        path: "agent-dashboard/agent-settings",
        element: <AgentSettings />,
        children: [
          {
            path: "agent-profile-edit",
            element: <AgentEditProfile />,
          },
        ],
      },

      {
        path: "agent-dashboard/assinged-tasks",
        element: <CarrierAssignedTask />,
        children: [
          {
            path: ":agentAssignedTask",
            element: <AgentAssignedTaskStatusUpdate />,
          },
        ],
      },

      {
        path: "agent-dashboard/shipment-req",
        element: <CarrierShipmentReq />,
        children: [
          {
            path: ":shipmentReqId",
            element: <CarrierShipmentReqDetails />,
          },
        ],
      },

      {
        path: "agent-dashboard/agent-history",
        element: <AgentHistory />,
      },
      {
        path: "agent-dashboard/agent-wallet",
        element: <AgentWallet />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

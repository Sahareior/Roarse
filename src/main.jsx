import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import TransportsLayout from './layouts/TransportsLayout.jsx';
import ServicesLayout from './layouts/ServicesLayout.jsx';
import Quote from './component/homepage/Quote/Quote.jsx';
import DashboardHome from './component/dashboard/DashboardHome.jsx';
import AdminOverview from './component/dashboard/admin/adminOverview/AdminOverview.jsx';
import Shippermanagement from './component/dashboard/admin/shipper_management/Shippermanagement.jsx';
import ShipperProfile from './component/dashboard/admin/shipper_management/ShipperProfile.jsx';
import CarrierManagement from './component/dashboard/admin/CarrierManagement/CarrierManagement.jsx';
import QuoteManagement from './component/dashboard/admin/quoteManagement/QuoteManagement.jsx';
import QuoteDetails from './component/dashboard/admin/quoteManagement/_component/QuoteDetails.jsx';
import ComplainsPage from './component/dashboard/admin/Complains/ComplainsPage';
import ComplainDetails from './component/dashboard/admin/Complains/_component/ComplainDetails.jsx';
import Tracking from './component/dashboard/admin/Tracking/Tracking.jsx';
import IndividualTracking from './component/dashboard/admin/Tracking/_component/IndividualTracking.jsx';
import Payments from './component/dashboard/admin/payments/Payments.jsx';
import CreatePayments from './component/dashboard/admin/payments/_components/CreatePayments.jsx';
import AdminMessages from './component/dashboard/admin/messages/AdminMessages.jsx';
import Applications from './component/dashboard/admin/applications/Applications.jsx';
import ApplicationDetails from './component/dashboard/admin/applications/_components/ApplicationDetails.jsx';
import AgentManagement from './component/dashboard/admin/agentManagement/AgentManagement.jsx';
import SiteSettings from './component/dashboard/admin/settings/SiteSettings.jsx';
import AccountSettings from './component/dashboard/admin/settings/AccountSettings.jsx';
import Profile from './component/dashboard/admin/profile/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
     element: <App />,
  }, 
  {
    path: 'ship',
    element: <TransportsLayout />
  },
  {
    path: 'truck',
    element: <TransportsLayout />
  },
  {
    path: 'air',
    element: <TransportsLayout />
  },
  {
    path:'Shipper',
    element: <ServicesLayout />
  },
  {
    path:'Quote',
    element: <Quote />
  },
  {
    path:'Carrier',
    element: <ServicesLayout />
  },
  // admin dashboard    

{
  path: 'dashboard',
  element: <DashboardHome />,
  children: [
    {
      index: true,               // 👈 default page (/dashboard)
      element: <AdminOverview />
    },
    {
      path: 'overview',          // 👈 relative
      element: <AdminOverview />
    },
    {
      path: 'shipper',
      element: <Shippermanagement />,
      children: [
        {
          path: ':shipperId',
          element: <ShipperProfile />
        }
      ]
    },
    {
      path: 'carriers',
      element: <CarrierManagement />,
        children: [
        {
          path: ':carrierId',
          element: <ShipperProfile />
        }
      ]
    },
    {
      path: 'quotes',
      element: <QuoteManagement />,
      children: [
        {
          path: ':quoteId',
          element: <QuoteDetails />
        }
      ]
    },
    {
      path: 'complaints',
      element: <ComplainsPage />,
      children:[
        {
          path: ':complaintId',
          element: <ComplainDetails />
        }
      ]
    },
    {
      path: 'tracking',
      element: <Tracking />,
      children: [
        {
          path: ':trackingId',
          element: <IndividualTracking />
        }
      ]
    },
    {
      path: 'payments',
      element: <Payments />,
      children:[
        {
          path: ':paymentId',
          element: <CreatePayments />
        }
      ]
    },
    {
      path: 'messages',
      element: <AdminMessages />
    },
    {
      path: 'applications',
      element: <Applications />,
      children: [
        {
          path: ':applicationId',
          element: <ApplicationDetails />
        }
      ]
    },
    {
      path:'agents',
      element: <AgentManagement />
    },
    {
      path:'settings/site',
      element: <SiteSettings />
    },
    {
      path:'settings/account',
      element: <AccountSettings />
    },
    {
      path:'profile',
      element: <Profile />
    }

  ]
}


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    

        <RouterProvider router={router} />
   
  </StrictMode>,
)

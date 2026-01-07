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
import Login from './component/auth/login/Login.jsx';
import Signup from './component/auth/signup/Signup.jsx';
import ForgotPassword from './component/auth/forgotPassword/ForgotPassword.jsx';
import AgentApplication from './component/homepage/AgentApplication/AgentApplication.jsx';


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
    path:'shipper',
    element: <ServicesLayout />
  },
  {
    path:'Quote',
    element: <Quote />
  },
  {
    path:'carrier',
    element: <ServicesLayout />
  },
  {
    path:'agent-application',
    element: <AgentApplication />
  },
  {
    path:'login',
    element: <Login />
  },
  {
    path:'signup',
    element: <Signup />
  },
  {
    path:'forgot-password',
    element: <ForgotPassword />
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
    }
  ]
}


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    

        <RouterProvider router={router} />
   
  </StrictMode>,
)

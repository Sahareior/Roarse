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
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className='w-[95vw] mx-auto'>

        <RouterProvider router={router} />
      </div>
  </StrictMode>,
)

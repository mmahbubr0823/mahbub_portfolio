import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import MyCreatedRoutes from './AllRoutes/MyCreatedRoutes';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={MyCreatedRoutes} />
    </HelmetProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import ErrorPage from "./components/error";

import Router from './Router'
// import {Checkout} from './components/checkout'

import Products from './components/products'
import Checkout from './components/checkout'


import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  
    children: [
      // {
      //   path: '/',
      //   element: <Products 
      //     // products = { inventory }
      //   />
      // },
      {
        path: '/checkout',
        element: <Checkout 
          // purchases= { purchases }
        />,
        
      }]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
    {/* <RouterProvider router = { router } /> */}
      {/* router = { router }
    </RouterProvider>  */}
 {/* <RouterProvider>
    <App />
 </RouterProvider> */}
  </React.StrictMode>,
)

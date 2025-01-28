import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import MediaPage from './pages/MediaPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error, page not found</h1>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/media',
        element: <MediaPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/signup',
        element: <SignupPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

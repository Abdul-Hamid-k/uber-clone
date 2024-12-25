import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, {
    path: '/login',
    element: <UserLogin />
  }, {
    path: '/signup',
    element: <UserSignup />
  }, {
    path: '/captain-login',
    element: <CaptainLogin />
  }, {
    path: '/captain-signup',
    element: <CaptainSignup />
  }
])

const App = () => {
  return (
    <RouterProvider router={BrowserRouter} />
  )
}

export default App
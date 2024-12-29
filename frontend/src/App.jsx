import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Start from './pages/Start'

import Home from './pages/User/Home'
import UserLogin from './pages/User/UserLogin'
import UserSignup from './pages/User/UserSignup'
import UserProtectedWrapper from './pages/User/UserProtectedWrapper'
import UserLogout from './pages/User/UserLogout'

import CaptainHome from './pages/Captain/CaptainHome'
import CaptainLogin from './pages/Captain/CaptainLogin'
import CaptainSignup from './pages/Captain/CaptainSignup'
import CaptainProtectedWrapper from './pages/Captain/CaptainProtectedWrapper'
import CaptainLogout from './pages/Captain/CaptionLogout'

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Start />
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
  }, {
    path: '/home',
    element: <UserProtectedWrapper> <Home /> </UserProtectedWrapper>
  }, {
    path: '/captain-home',
    element: <CaptainProtectedWrapper> <CaptainHome /> </CaptainProtectedWrapper>
  }, {
    path: '/user/logout',
    element: <UserProtectedWrapper> <UserLogout /> </UserProtectedWrapper>
  }, {
    path: '/captain/logout',
    element: <CaptainProtectedWrapper> <CaptainLogout /> </CaptainProtectedWrapper>
  }
])

const App = () => {
  return (
    <RouterProvider router={BrowserRouter} />
  )
}

export default App
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/ReactToastify.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { NotFound, RootLayout, HomeLayout, DashboardLayout } from './layouts'
import { Home, About, Authenticate, Contact, Dashboard, Finance, Login, Logout, Messages, Users, Settings, Signup, ForgotPass, ResetPass } from '.'

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path='/dashboard' element={<DashboardLayout />} >
        <Route element={<Dashboard />} />     
        <Route path="users" element={<Users />} />
        <Route path="messages" element={<Messages />} />
        <Route path="finance" element={<Finance />} />
        <Route path="settings" element={<Settings />} />
        <Route path="logout" element={<Logout />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/authenticate" element={<Authenticate />} />
      <Route path="/forgotpassword" element={ <ForgotPass/> } />
      <Route path="/resetpassword" element={ <ResetPass/> } />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

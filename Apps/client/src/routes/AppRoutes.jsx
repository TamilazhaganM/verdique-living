import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import React from 'react'
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import VerifyEmail from "../pages/auth/VerifyEmail"
import Forgotpassword from "../pages/auth/Forgotpassword"
import Resetpassword from "../pages/auth/Resetpassword"
import ProtectedRoute from "./ProtectedRoute"
import Dashboard from "../pages/dashboard/Dashboard"
import CheckEmail from "../pages/auth/CheckEmail"

const AppRoutes = () => {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/check-email" element={<CheckEmail/>}/>
                <Route path="/verify-email" element={<VerifyEmail/>}/>
                <Route path="/forgot-password" element={<Forgotpassword/>}/>
                <Route path="/reset-password" element={<Resetpassword/>}/>
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <Dashboard/>
                    </ProtectedRoute>}/>
            </Routes>
        </Router>
  )
}

export default AppRoutes
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ForgetPassword from '../pages/Auth/ForgetPassword';
import TermsAndConditions from '../pages/Info/TermsAndConditions';
import PrivacyPolicy from '../pages/Info/PrivacyPolicy';
import Classical from '../pages/Dances/Classical';
import Western from '../pages/Dances/Western';
import Zumba from '../pages/Dances/Zumba';
import Folk from '../pages/Dances/Folk';
import HipHop from '../pages/Dances/HipHop';
import Contemporary from '../pages/Dances/Contemporary';
import Dashboard from '../pages/Admin/Dashboard';
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminRegister from '../pages/Admin/AdminRegister';

const AppRoutes = () => {
    const { user } = useAuth();

    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            {/* Protected Routes */}
            <Route path="/" element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            } />

            {/* Dance Categories - Protected */}
            <Route path="/dance/classical" element={<ProtectedRoute><Classical /></ProtectedRoute>} />
            <Route path="/dance/western" element={<ProtectedRoute><Western /></ProtectedRoute>} />
            <Route path="/dance/zumba" element={<ProtectedRoute><Zumba /></ProtectedRoute>} />
            <Route path="/dance/folk" element={<ProtectedRoute><Folk /></ProtectedRoute>} />
            <Route path="/dance/hiphop" element={<ProtectedRoute><HipHop /></ProtectedRoute>} />
            <Route path="/dance/contemporary" element={<ProtectedRoute><Contemporary /></ProtectedRoute>} />

            {/* Admin Route */}
            <Route path="/admin/login" element={user && user.role === 'admin' ? <Navigate to="/admin" replace /> : <AdminLogin />} />
            <Route path="/admin/register" element={user && user.role === 'admin' ? <Navigate to="/admin" replace /> : <AdminRegister />} />
            <Route path="/admin" element={
                <ProtectedRoute adminOnly={true}>
                    <Dashboard />
                </ProtectedRoute>
            } />

            {/* Catch all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;

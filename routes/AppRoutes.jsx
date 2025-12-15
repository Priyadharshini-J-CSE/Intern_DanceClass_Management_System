import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

const AppRoutes = () => {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register />} />
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;

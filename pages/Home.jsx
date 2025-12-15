import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Welcome!</h2>
                <p>You are logged in as {user?.email}</p>
                <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
            </div>
        </div>
    );
};

export default Home;
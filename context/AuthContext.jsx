import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for logged in user on mount
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    // Mock Backend: Register
    const register = (userData) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const existingUser = users.find(u => u.email === userData.email);

        if (existingUser) {
            throw new Error('Email already exists');
        }

        const newUser = {
            ...userData,
            id: Date.now().toString(),
            role: userData.role || 'user', // Default to user if not specified
            isApproved: true, // Auto-approve mock admins for simplicity, or false if checking
            createdAt: new Date().toISOString()
        };

        // If admin, auto-approve for this demo flow unless specified otherwise
        if (newUser.role === 'admin') {
            newUser.isApproved = true;
        } else {
            newUser.isApproved = false;
        }

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        return newUser;
    };

    // Mock Backend: Login
    const login = (email, password) => {
        // Super Admin (Hardcoded fallback)
        if (email === 'admin@gmail.com' && password === 'admin123') {
            const adminUser = {
                id: 'super-admin',
                name: 'Super Admin',
                email: 'admin@gmail.com',
                role: 'admin',
                isApproved: true
            };
            localStorage.setItem('currentUser', JSON.stringify(adminUser));
            setUser(adminUser);
            return adminUser;
        }

        // Check Local Storage Users
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const foundUser = users.find(u => u.email === email && u.password === password);

        if (!foundUser) {
            throw new Error('Invalid email or password');
        }

        localStorage.setItem('currentUser', JSON.stringify(foundUser));
        setUser(foundUser);
        return foundUser;
    };

    const logout = () => {
        localStorage.removeItem('currentUser');
        setUser(null);
    };

    // Admin: Get all users
    const getAllUsers = () => {
        return JSON.parse(localStorage.getItem('users') || '[]');
    };

    // Admin: Approve user
    const approveUser = (userId) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const updatedUsers = users.map(u =>
            u.id === userId ? { ...u, isApproved: true } : u
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    // Admin: Delete user
    const deleteUser = (userId) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const updatedUsers = users.filter(u => u.id !== userId);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            register,
            logout,
            getAllUsers,
            approveUser,
            deleteUser
        }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music, User, LogOut } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { user, logout } = useAuth();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Classical', path: '/dance/classical' },
        { name: 'Western', path: '/dance/western' },
        { name: 'Zumba', path: '/dance/zumba' },
        { name: 'Folk', path: '/dance/folk' },
        { name: 'Hip Hop', path: '/dance/hiphop' },
        { name: 'Contemporary', path: '/dance/contemporary' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            
                            <span className="ml-2 text-xl font-bold text-gray-900">DanceStudio</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        {user && user.role !== 'admin' && navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                                    ? 'text-primary-600 bg-primary-50'
                                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                    } `}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="flex items-center space-x-2 ml-4 border-l pl-4 border-gray-200">
                            {user ? (
                                <>
                                    <div className="flex items-center text-sm font-medium text-gray-700 mr-2">
                                        <User className="h-4 w-4 mr-1" />
                                        {user.name}
                                    </div>
                                    {user.role === 'admin' && (
                                        <Link
                                            to="/admin"
                                            className="text-primary-600 hover:text-primary-700 px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Dashboard
                                        </Link>
                                    )}
                                    <button
                                        onClick={logout}
                                        className="flex items-center text-gray-500 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        <LogOut className="h-4 w-4 mr-1" />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-white border-t"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {user && navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                        ? 'text-primary-600 bg-primary-50'
                                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                        } `}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-200">
                                {user ? (
                                    <>
                                        <div className="px-3 py-2 text-base font-medium text-gray-500">
                                            Signed in as {user.name}
                                        </div>
                                        {user.role === 'admin' && (
                                            <Link
                                                to="/admin"
                                                onClick={() => setIsOpen(false)}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-primary-50"
                                            >
                                                Admin Dashboard
                                            </Link>
                                        )}
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsOpen(false);
                                            }}
                                            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-50"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to="/login"
                                            onClick={() => setIsOpen(false)}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to="/register"
                                            onClick={() => setIsOpen(false)}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-primary-50"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

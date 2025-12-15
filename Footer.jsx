import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">DanceStudio</h3>
                        <p className="text-gray-400">
                            Discover the rhythm within you. Join our professional dance classes today.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/dance/classical" className="text-gray-400 hover:text-white transition-colors">
                                    Classes
                                </Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-gray-400 hover:text-white transition-colors">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/login" className="text-gray-400 hover:text-white transition-colors">
                                    Admin Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} DanceStudio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

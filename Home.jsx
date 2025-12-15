import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Music, Users, Calendar } from 'lucide-react';
import DanceCard from '../components/Common/DanceCard';
import { danceData } from '../data/danceData';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Premium Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80"
                        alt="Dance Hero"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 drop-shadow-lg">
                            DANCE TO THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">RHYTHM</span> OF LIFE
                        </h1>
                        <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                            Experience the elegance of movement. Join our world-class academy and master the art of dance.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Link
                            to="/register"
                            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
                        >
                            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            to="/dance/contemporary"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-lg font-bold transition-all flex items-center justify-center"
                        >
                            Explore Classes
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Strip */}
            <div className="bg-primary-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <div className="p-4">
                            <Star className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">World-Class Instructors</h3>
                        </div>
                        <div className="p-4">
                            <Music className="h-10 w-10 text-pink-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">Premium Facilities</h3>
                        </div>
                        <div className="p-4">
                            <Users className="h-10 w-10 text-blue-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">Vibrant Community</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Classes Header */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Discover Your Style</h2>
                    <h3 className="text-4xl font-extrabold text-gray-900">Featured Dance Classes</h3>
                    <div className="w-24 h-1 bg-primary-600 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {danceData.map((dance, index) => (
                        <motion.div
                            key={dance.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <DanceCard dance={dance} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-900 py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
                    <div className="w-96 h-96 rounded-full bg-primary-500 blur-3xl"></div>
                </div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 opacity-10">
                    <div className="w-96 h-96 rounded-full bg-purple-500 blur-3xl"></div>
                </div>

                <div className="relative max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to move with us?</h2>
                    <p className="text-xl text-gray-300 mb-10">
                        Join hundreds of students who have found their passion and rhythm at DanceStudio.
                    </p>
                    <Link
                        to="/register"
                        className="inline-block px-10 py-4 bg-white text-primary-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg transform hover:-translate-y-1"
                    >
                        Register Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;


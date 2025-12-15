import React from 'react';
import { motion } from 'framer-motion';
import ScheduleTable from '../../components/Common/ScheduleTable';
import RegisterForm from '../../components/Common/RegisterForm';
import { danceData } from '../../data/danceData';

const DancePageTemplate = ({ danceId }) => {
    const data = danceData.find(d => d.id === danceId);

    if (!data) {
        return <div className="text-center py-20">Dance category not found!</div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <div className="relative h-64 sm:h-96">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <div className="p-8">
                                <h1 className="text-4xl font-extrabold text-white text-shadow">{data.title}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Class</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {data.description}
                                    <br /><br />
                                    Join us to explore the rhythm and energy of {data.title}.
                                    Our course is designed to take you from basics to advanced techniques,
                                    improving your fitness, coordination, and confidence.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Class Schedule</h2>
                                <ScheduleTable schedule={data.schedule} />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Fees</h2>
                                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 inline-block">
                                    <span className="text-3xl font-bold text-purple-700">₹{data.fee}</span>
                                    <span className="text-gray-600 ml-2">/ month</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-24">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Register Individually</h2>
                                <RegisterForm danceName={data.title} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DancePageTemplate;

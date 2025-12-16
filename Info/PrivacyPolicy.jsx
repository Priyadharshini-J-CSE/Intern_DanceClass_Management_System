import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-purple max-w-none text-gray-600 space-y-4">
                <p>Your privacy is important to us. This policy outlines how we handle your data.</p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6">Data Collection</h3>
                <p>We collect your name, email, and phone number solely for registration and communication purposes.</p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6">Data Usage</h3>
                <p>Your data is used to manage class schedules and inform you about updates. We do not sell your data to third parties.</p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6">Security</h3>
                <p>We implement standard security measures to protect your personal information.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
            <div className="prose prose-purple max-w-none text-gray-600 space-y-4">
                <p>Welcome to DanceStudio. By accessing our classes, you agree to these terms.</p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6">1. Registration</h3>
                <p>Registration is mandatory for all students. Fees must be paid in advance.</p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6">2. Conduct</h3>
                <p>Students are expected to maintain discipline and respect instructors and fellow dancers.</p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6">3. Cancellations & Refunds</h3>
                <p>Fees once paid are non-refundable unless the class is cancelled by the institute.</p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6">4. Media Rights</h3>
                <p>We reserve the right to use photos/videos from classes for promotional purposes unless explicitly objected to.</p>
            </div>
        </div>
    );
};

export default TermsAndConditions;

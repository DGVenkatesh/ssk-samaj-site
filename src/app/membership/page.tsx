'use client'
import { redirect } from 'next/navigation'
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg flex flex-col lg:flex-row p-6">
                <div className="flex-1 pr-0 lg:pr-8 mb-6 lg:mb-0">
                    <h1 className="text-3xl font-semibold text-cyan-500 mb-4">Membership</h1>
                    <p className="text-lg text-gray-700 mb-6">
                     Become a Member of Kanchipuram SSK Samaj Seva Samiti at just ₹ 100.
                    </p>
                    <address className="font-medium text-lg text-gray-800">
                        Nadu street<br />
                        Kanchipuram, TamilNadu<br />
                        Phone: +123 456 7890<br />
                        Email: ssksamaj@gmail.com
                    </address>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
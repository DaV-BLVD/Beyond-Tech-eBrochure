import React from 'react';
import beyondtechnepallogo from '../../assets/beyondtechnepallogoBrightened.png';

const Navbar = ({ onDownloadPDF }) => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-2 px-6 md:px-20 lg:px-32">
                {/* Logo */}
                <img
                    src={beyondtechnepallogo}
                    alt="Beyond Tech Nepal Logo"
                    className="w-40 md:w-48 lg:w-52"
                />

                {/* Buttons */}
                <div>
                    {/* Primary Button */}
                    <button className="text-gray-800 hover:text-blue-600 transition-colors font-semibold uppercase px-4 py-2 rounded-2xl border border-gray-200 shadow-sm">
                        Visit Site
                    </button>
                </div>
                <div>
                    {/* Secondary Button */}
                    <button className="text-gray-800 hover:text-blue-600 transition-colors font-semibold uppercase px-4 py-2 rounded-2xl border border-gray-200 shadow-sm"
                    onClick={onDownloadPDF}
                    >
                        PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import React from 'react';
import innovation from '../../assets/1/innovation.png';

const Header2 = () => {
    return (
        <div className="flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 pt-15">
            <div
                className="
                w-full max-w-[1430px] min-h-[550px]
                rounded-2xl grid grid-cols-1 md:grid-cols-[45%_55%]
                p-6 sm:p-8 lg:p-10
                shadow-lg flex-col justify-center bg-[#ffffff]
                transition-all duration-500 ease-in-out
            "
            >
                {/* Left Section — Text Content */}
                <div className="pl-2 sm:pl-5 text-center md:text-left mr-2 flex flex-col justify-center h-full">
                    <h5
                        className="
                        text-[18px] sm:text-[22px] uppercase tracking-[1px] text-blue-600 font-semibold
                    "
                    >
                        2. About <span className="text-red-500"> Beyond</span>{' '}
                        Tech Nepal
                    </h5>

                    <h2
                        className="
                        text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-snug mt-2
                    "
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                    >
                        Building secure, scalable, and future-ready digital
                        solutions.
                    </h2>

                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 mt-3 leading-snug">
                        We are a Nepal-based technology partner delivering
                        secure infrastructure, customized software, and reliable
                        managed services for organizations of all sizes — from
                        startups to large enterprises.
                    </p>

                    <p className="text-[15px] sm:text-[17px] md:text-[18px] text-gray-700 mt-3 font-medium leading-snug">
                        Our approach is{' '}
                        <span className="font-semibold text-blue-600">
                            security-first
                        </span>
                        ,{' '}
                        <span className="font-semibold text-blue-600">
                            vendor-agnostic
                        </span>
                        , and{' '}
                        <span className="font-semibold text-blue-600">
                            integration-ready
                        </span>
                        , ensuring every solution drives measurable business
                        outcomes.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mt-2">
                        <span className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                            🔒 Security-first
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                            🔗 Vendor-agnostic
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                            ⚙️ Integration-ready
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                            🎯 Outcome-driven
                        </span>
                    </div>
                </div>

                {/* Right Section — Image / Visual */}
                <div className="relative mt-2 md:mt-0 ml-2 rounded-xl overflow-hidden flex justify-center items-center h-[250px] sm:h-[300px] md:h-auto">
                    <img
                        src={innovation}
                        alt="Beyond Tech Nepal team working"
                        className="w-full h-full object-cover rounded-xl shadow-md"
                    />

                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white z-10">
                        <h3 className="text-lg sm:text-xl font-bold">
                            Driven by Innovation
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-100 mt-1">
                            Empowering Nepal’s digital future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header2;

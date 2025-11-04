import React from 'react';
import innovation from '../../assets/1/innovation.png';

const Header2 = () => {
    return (
        <div className="flex justify-center items-center px-4 mt-17 sm:mt-5 sm:px-8 md:px-12 lg:px-20 lg:h-auto">
            <div
                className="
                w-full max-w-[1430px] min-h-[400px]
                rounded-2xl grid grid-cols-1 md:grid-cols-[45%_55%]
                p-6 pt-2 pb-2 lg:p-5 lg:px-12
                shadow-xl flex-col justify-center 
                bg-linear-to-r from-white via-blue-50 to-white
                overflow-hidden relative

                sm:p-4 sm:h-[520px] lg:w-full lg:h-[500px]
                xl:h-[580px]
            "
            >
                {/* Floating accent circles */}
                <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-200 rounded-full opacity-20 -translate-x-12 -translate-y-12 animate-float-slow"></div>
                <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-red-200 rounded-full opacity-20 translate-x-12 sm:translate-x-24 translate-y-12 sm:translate-y-24 animate-float-reverse"></div>

                {/* Left Section — Text Content */}
                <div className="relative mt-2 md:mt-0 mx-2 rounded-xl overflow-hidden flex items-center sm:h-full md:h-auto">
                    <img
                        src={innovation}
                        alt="Beyond Tech Nepal team working"
                        className="w-full sm:h-full object-cover rounded-xl shadow-md"
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

                {/* Right Section — Image / Visual */}
                <div className="pl-2 sm:pl-5 text-center md:text-left mr-2 flex flex-col justify-center h-full">
                    <h5
                        className="
                        text-[18px] sm:text-[22px] uppercase tracking-[1px] text-blue-600 font-semibold
                    "
                    >
                        About <span className="text-red-500"> Us</span>
                    </h5>

                    <h2
                        className="
                        text-[20px] sm:text-[24px] lg:text-[38px] font-bold leading-snug mt-2
                    "
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                    >
                        Building secure, scalable, and future-ready digital
                        solutions.
                    </h2>

                    <p className="text-[16px] sm:text-[16px] md:text-[20px] text-gray-600 mt-3 leading-snug">
                        We are a Nepal-based tech partner providing secure
                        infrastructure, custom software, and reliable managed
                        services for businesses of all sizes.
                    </p>

                    <p className="text-[15px] sm:text-[17px] md:text-[18px] text-gray-700 mt-3 font-medium leading-snug">
                        Our approaches:
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-1 mt-2">
                        <span className="bg-blue-100 text-blue-700 px-3 sm:px-2 py-1.5 sm:py-1 rounded-full text-xs sm:text-[13px] font-semibold shadow-sm">
                            🔒 Security-first
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 sm:px-2 py-1.5 sm:py-1 rounded-full text-xs sm:text-[13px] font-semibold shadow-sm">
                            🔗 Vendor-agnostic
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 sm:px-2 py-1.5 sm:py-1 rounded-full text-xs sm:text-[13px] font-semibold shadow-sm">
                            ⚙️ Integration-ready
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 sm:px-2 py-1.5 sm:py-1 rounded-full text-xs sm:text-[13px] font-semibold shadow-sm">
                            🎯 Outcome-driven
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header2;

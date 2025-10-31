import React from 'react';
import secure from '../../assets/1/secure.png';
import build from '../../assets/1/build.png';
import manage from '../../assets/1/manage.png';

const Header1 = () => {
    return (
        <div className="flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20">
            <div
                className="
                w-full max-w-[1430px] min-h-[550px]
                rounded-2xl grid grid-cols-1 md:grid-cols-[45%_55%]
                p-6 sm:p-8 lg:p-12
                shadow-xl flex-col justify-center 
                bg-linear-to-r from-white via-blue-50 to-white
                overflow-hidden relative
            "
            >
                {/* Background motion */}
                <div className="absolute inset-0 animate-pulse-slow bg-linear-to-r from-blue-50 via-white to-blue-100 opacity-40 z-0"></div>

                {/* Floating accent circles */}
                <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-200 rounded-full opacity-20 -translate-x-12 -translate-y-12 animate-float-slow"></div>
                <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-red-200 rounded-full opacity-20 translate-x-12 sm:translate-x-24 translate-y-12 sm:translate-y-24 animate-float-reverse"></div>

                {/* Left Section */}
                <div className="pt-12 sm:pt-16 pl-2 sm:pl-5 text-center md:text-left mr-2 relative z-10">
                    <h5 className="text-[18px] sm:text-[22px] md:text-[25px] uppercase tracking-[1px] text-blue-600 font-semibold">
                        1. Welcome To
                    </h5>

                    <span
                        className="text-[32px] sm:text-[45px] md:text-[55px] uppercase font-bold block"
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
                    >
                        <span className="text-red-500">beyond</span>{' '}
                        <span className="text-blue-600">tech nepal</span>
                    </span>

                    <p className="text-[20px] sm:text-[28px] md:text-[36px] font-semibold leading-tight mt-2 text-gray-800">
                        Your Complete Business Management Suite
                    </p>

                    <p className="text-[16px] sm:text-[18px] md:text-[22px] text-gray-500 py-5">
                        Our POS system integrates all aspects of your business
                        operations into one seamless platform.
                    </p>

                    <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-500 font-medium">
                        End-to-end IT, Security & Software Partner
                    </p>

                    {/* Animated floating badges */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                        <span className="bg-blue-100 text-red-500 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg transform animate-bounce-slow">
                            🔒 Secure
                        </span>
                        <span className="bg-blue-100 text-red-500 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg transform animate-bounce-delay">
                            ⚙️ Build
                        </span>
                        <span className="bg-blue-100 text-red-500 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg transform animate-bounce-slow">
                            🚀 Manage
                        </span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 md:mt-0 ml-0 md:ml-2 relative z-10">
                    {[secure, build, manage].map((img, idx) => (
                        <div
                            key={idx}
                            className={`
                                flex items-center justify-center text-white font-semibold text-lg sm:text-xl md:text-2xl 
                                p-6 sm:p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500
                                drop-shadow-lg bg-red-${500 + idx * 100}
                            `}
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {['Secure', 'Build', 'Manage'][idx]}
                        </div>
                    ))}
                </div>
            </div>

            {/* Tailwind Animations */}
            <style>
                {`
                    @keyframes float-slow { 0%,100%{transform:translateY(0);}50%{transform:translateY(-15px);} }
                    @keyframes float-reverse { 0%,100%{transform:translateY(0);}50%{transform:translateY(15px);} }
                    @keyframes pulse-slow { 0%,100%{opacity:0.4;}50%{opacity:0.6;} }
                    @keyframes bounce-slow { 0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);} }
                    @keyframes bounce-delay { 0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);} }

                    .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
                    .animate-float-reverse { animation: float-reverse 6s ease-in-out infinite; }
                    .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
                    .animate-bounce-slow { animation: bounce-slow 2.5s ease-in-out infinite; }
                    .animate-bounce-delay { animation: bounce-delay 3s ease-in-out infinite; }
                `}
            </style>
        </div>
    );
};

export default Header1;

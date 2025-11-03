import React from 'react';
import secure from '../../assets/1/secure.png';
import build from '../../assets/1/build.png';
import manage from '../../assets/1/manage.png';

const Header1 = () => {
    return (
        <div className="flex justify-center items-center px-4 mt-17 sm:mt-5 sm:px-8 md:px-12 lg:px-20 lg:h-full">
            <div
                className="
                w-full max-w-[1430px] min-h-[400px]
                rounded-2xl grid grid-cols-1 md:grid-cols-[45%_55%]
                p-6 pt-2 pb-2 lg:p-5 lg:px-12
                shadow-xl flex-col justify-center 
                bg-linear-to-r from-white via-blue-50 to-white
                overflow-hidden relative

                sm:p-4 sm:h-[520px] lg:w-full lg:h-[590px]
            "
            >
                {/* Floating accent circles */}
                <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-200 rounded-full opacity-20 -translate-x-12 -translate-y-12 animate-float-slow"></div>
                <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-red-200 rounded-full opacity-20 translate-x-12 sm:translate-x-24 translate-y-12 sm:translate-y-24 animate-float-reverse"></div>

                {/* Left Section */}
                <div className="sm:pt-0 sm:pl-0 pl-2 text-center md:text-left relative z-10 sm:flex sm:flex-col sm:items-center md:justify-center lg:items-start">
                    <h5 className="text-[16px] sm:text-[22px] md:text-[25px] uppercase tracking-[1px] text-blue-600 font-semibold lg:text-[18px] lg:justify-start">
                        Welcome To
                    </h5>

                    <span
                        className="text-[27px] sm:text-[35px] md:text-[40px] md:text-center uppercase font-bold block lg:text-[50px]"
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
                    >
                        <span className="text-red-500">beyond</span>{' '}
                        <span className="text-blue-600">tech nepal</span>
                    </span>

                    <p className="text-[18px] sm:text-[23px] md:text-[25px] font-semibold leading-tight mt-1 text-gray-800 lg:text-[36px]">
                        Your Complete Business Management Suite
                    </p>

                    <p className="text-[16px] sm:text-[17px] sm:w-[95%] md:text-[16px] text-gray-500 py-2 lg:text-[20px] lg:py-5">
                        Our POS system integrates all aspects of your business
                        operations into one seamless platform.
                    </p>

                    <p className="text-[14px] sm:text-[16px] md:text-[15px] lg:text-[17px] text-gray-500 font-medium">
                        End-to-end IT, Security & Software Partner
                    </p>

                    {/* Animated floating badges */}
                    <div className="flex flex-wrap justify-center md:justify-start py-2 gap-2 mt-3 md:gap-1 md:mt-5 md:items-center lg:text-[16px] ">
                        <span className="text-[13px] sm:text-[14px] bg-blue-100 text-red-500 px-2 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg transform animate-bounce-slow">
                            🔒 Secure
                        </span>
                        <span className="text-[13px] sm:text-[14px] bg-blue-100 text-red-500 px-2 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg transform animate-bounce-delay">
                            ⚙️ Build
                        </span>
                        <span className="text-[13px] sm:text-[14px] bg-blue-100 text-red-500 px-2 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg transform animate-bounce-slow">
                            🚀 Manage
                        </span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-1 md:mt-0 ml-0 md:ml-2 relative z-100">
                    {[secure, build, manage].map((img, idx) => (
                        <div
                            key={idx}
                            className={`
                                flex items-center justify-center text-white font-semibold text-lg sm:text-xl md:text-2xl 
                                p-3 sm:p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500
                                drop-shadow-lg bg-red-${500 + idx * 100} 
                                sm:h-44 md:h-full lg:h-auto
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

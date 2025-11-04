import React from 'react';
import four from '../../assets/1/4.png';

const Header4 = () => {
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


                {/* LEFT — Visual Side */}
                <div className="relative flex md:items-center h-33 p-3 pb-0 pt-1 sm:h-[150px] md:h-full md:w-full lg:h-full">
                    <img
                        src={four}
                        alt="Tailored software development"
                        className="rounded-xl shadow-md w-full h-full md:h-full object-cover"
                    />
                    <div className="absolute bottom-5 left-6 text-white z-10">
                        <h3 className="text-xl sm:text-2xl font-bold drop-shadow-md">
                            Crafted for You
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-200 mt-1 w-65 sm:w-auto md:w-55">
                            Software that fits your goals — not the other way
                            around.
                        </p>
                    </div>
                </div>

                {/* RIGHT — Text + Cards */}
                <div className="flex flex-col justify-start text-center md:text-left pl-0 md:pl-6 md:mt-0 md:justify-center">
                    <h5 className="text-[18px] sm:text-[22px] uppercase tracking-[1px] text-blue-600 font-semibold px-5 py-2">
                        Tailored <span className="text-red-500">Software</span>
                    </h5>

                    <h2
                        className="text-[19px] sm:text-[25px] md:text-[26px] lg:text-[33px] font-bold leading-snug px-5"
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                    >
                        Build exactly what your business needs — with delightful
                        UX and seamless integrations.
                    </h2>

                    <p className="text-[14px] sm:text-[16px] text-gray-600 mt-3 leading-snug px-5">
                        Whether you’re streamlining operations or crafting
                        customer experiences, our software adapts to your
                        workflow and grows with your business.
                    </p>

                    {/* Feature List */}
                    <div className="grid grid-cols-2 gap-3 mt-4 px-3">
                        {[
                            { name: 'CRM', color: 'bg-red-100' },
                            { name: 'HRM', color: 'bg-red-200' },
                            { name: 'Accounting', color: 'bg-red-100' },
                            { name: 'Inventory', color: 'bg-red-200' },
                            { name: 'Web & Social', color: 'bg-red-100' },
                            { name: 'Custom Apps', color: 'bg-red-200' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`${item.color} text-red-600 font-semibold text-center rounded-xl py-2 sm:py-3 lg:py-1 shadow-sm hover:shadow-md transition text-sm sm:text-base`}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header4;

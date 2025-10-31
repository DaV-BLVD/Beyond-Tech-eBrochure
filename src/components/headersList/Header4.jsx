import React from 'react';
import four from '../../assets/1/4.png';

const Header4 = () => {
    return (
        <div className="flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 mt-7">
            <div
                className="
                w-full max-w-[1430px] min-h-[450px] sm:min-h-[500px]
                rounded-2xl grid grid-cols-1 md:grid-cols-[55%_45%]
                p-4 sm:p-6 md:p-8 lg:p-10
                shadow-lg flex-col justify-center
                bg-linear-to-r from-white to-blue-50
                transition-all duration-500 ease-in-out
            "
            >
                {/* LEFT — Visual Side */}
                <div className="relative flex justify-center items-center h-60 sm:h-[300px] md:h-[350px] lg:h-[450px]">
                    <img
                        src={four}
                        alt="Tailored software development"
                        className="rounded-xl shadow-md w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white z-10">
                        <h3 className="text-xl sm:text-2xl font-bold drop-shadow-md">
                            4. Crafted for You
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-200 mt-1">
                            Software that fits your goals — not the other way
                            around.
                        </p>
                    </div>
                </div>

                {/* RIGHT — Text + Cards */}
                <div className="flex flex-col justify-center text-center md:text-left pl-0 md:pl-6 mt-3 md:mt-0">
                    <h5 className="text-[18px] sm:text-[22px] uppercase tracking-[1px] text-red-600 font-semibold">
                        Tailored Software
                    </h5>

                    <h2
                        className="text-[24px] sm:text-[30px] md:text-[36px] font-bold leading-snug mt-1"
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                    >
                        Build exactly what your business needs — with delightful
                        UX and seamless integrations.
                    </h2>

                    <p className="text-[14px] sm:text-[16px] text-gray-600 mt-3 leading-snug">
                        Whether you’re streamlining operations or crafting
                        customer experiences, our software adapts to your
                        workflow and grows with your business.
                    </p>

                    {/* Feature List */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
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
                                className={`${item.color} text-red-700 font-semibold text-center rounded-xl py-2 sm:py-3 shadow-sm hover:shadow-md transition text-sm sm:text-base`}
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

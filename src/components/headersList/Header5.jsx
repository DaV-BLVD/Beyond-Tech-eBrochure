import React from 'react';

const Header5 = () => {
    const cards = [
        {
            icon: '🧑‍💻',
            title: 'On-call & Full-time',
            desc: 'Flexible engagement models designed for your operational needs.',
            color: 'text-red-500',
        },
        {
            icon: '📊',
            title: 'Proactive Monitoring',
            desc: 'Continuous health checks, system updates, and actionable reporting.',
            color: 'text-red-600',
        },
        {
            icon: '🧰',
            title: 'Planned AMC',
            desc: 'Preventive maintenance for all IT products and digital services.',
            color: 'text-red-600',
        },
    ];

    return (
        <div className="flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 mt-5">
            <div
                className="
                w-full max-w-[1430px] min-h-[380px] sm:min-h-[420px]
                rounded-2xl flex flex-col justify-center items-center
                p-4 sm:p-6 lg:py-6
                shadow-lg bg-linear-to-b from-white to-red-50
                transition-all duration-500 ease-in-out
            "
            >
                {/* Title Section */}
                <div className="text-center max-w-3xl">
                    <h5 className="text-[16px] sm:text-[20px] uppercase tracking-[1px] text-red-500 font-semibold">
                        5. AMC & Managed Services
                    </h5>

                    <h2
                        className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold mt-1 leading-snug"
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                    >
                        Keeping Your IT Ecosystem Healthy and Reliable.
                    </h2>

                    <p className="text-[13px] sm:text-[15px] text-gray-600 mt-2 leading-snug">
                        Proactive monitoring, planned AMC, and flexible support
                        engagements ensure your systems stay secure, efficient,
                        and always available.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 w-full max-w-6xl">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-3 sm:p-4 flex flex-col items-center text-center border border-gray-100"
                        >
                            <div
                                className={`bg-blue-100 ${card.color} text-2xl sm:text-2xl w-10 h-10 flex items-center justify-center rounded-full mb-2 sm:mb-3`}
                            >
                                {card.icon}
                            </div>
                            <h3 className="text-lg sm:text-lg font-semibold text-gray-800 mb-1">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 text-[12px] sm:text-[14px] leading-snug">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="mt-4 sm:mt-6 text-center text-gray-700 text-[13px] sm:text-[15px] font-medium">
                    <span className="text-red-600 font-semibold">
                        24/7 availability
                    </span>{' '}
                    •{' '}
                    <span className="text-red-600 font-semibold">
                        SLA-backed response
                    </span>{' '}
                    •{' '}
                    <span className="text-red-600 font-semibold">
                        Certified experts
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header5;

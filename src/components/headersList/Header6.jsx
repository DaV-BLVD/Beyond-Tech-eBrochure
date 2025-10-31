import React from 'react';
import {
    FaNetworkWired,
    FaShieldAlt,
    FaChartLine,
    FaCogs,
} from 'react-icons/fa';

const Header6 = () => {
    const layers = [
        {
            icon: (
                <FaNetworkWired className="absolute -left-5 top-1 text-red-500 text-lg sm:text-xl" />
            ),
            title: 'Enterprise Network',
            desc: 'SD-WAN, segmented architecture, minimal CapEx',
            bg: 'bg-red-50',
            border: 'border-red-500',
            rotate: '-rotate-1',
            width: 'w-[180px] sm:w-[200px]',
        },
        {
            icon: (
                <FaShieldAlt className="absolute -left-5 top-1 text-red-600 text-lg sm:text-xl" />
            ),
            title: 'System Security',
            desc: 'Firewalls, IDS/IPS, endpoint protection',
            bg: 'bg-red-100',
            border: 'border-red-600',
            rotate: 'rotate-1',
            width: 'w-[160px] sm:w-[180px]',
        },
        {
            icon: (
                <FaChartLine className="absolute -left-5 top-1 text-red-700 text-lg sm:text-xl" />
            ),
            title: 'Observability',
            desc: 'Monitoring, alerts, incident readiness',
            bg: 'bg-red-200',
            border: 'border-red-700',
            rotate: '-rotate-1',
            width: 'w-[140px] sm:w-[160px]',
        },
        {
            icon: (
                <FaCogs className="absolute -left-5 top-1 text-red-800 text-lg sm:text-xl" />
            ),
            title: 'Automation',
            desc: 'Containerization & smart operations',
            bg: 'bg-red-300',
            border: 'border-red-800',
            rotate: 'rotate-1',
            width: 'w-[120px] sm:w-[140px]',
        },
    ];

    return (
        <div className="flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 mt-5">
            <div
                className="
                w-full max-w-[1430px] min-h-[380px] sm:min-h-[420px]
                rounded-2xl grid grid-cols-1 md:grid-cols-[50%_50%]
                p-3 sm:p-4 md:p-6 lg:p-8
                shadow-lg bg-linear-to-r from-gray-50 to-white
                transition-all duration-500 ease-in-out
            "
            >
                {/* Left: Text & Intro */}
                <div className="flex flex-col justify-center pr-2 sm:pr-4 md:pr-6">
                    <h5 className="text-red-600 uppercase font-semibold tracking-[1px] text-[16px] sm:text-[20px]">
                        6. Network & System Solutions
                    </h5>

                    <h2 className="text-gray-900 font-bold text-[26px] sm:text-[32px] md:text-[36px] mt-1 leading-snug">
                        Enterprise Architecture for Modern Businesses
                    </h2>

                    <p className="text-gray-600 text-[14px] sm:text-[16px] mt-2 leading-snug">
                        Build a resilient, scalable, and secure IT backbone that
                        supports SD-WAN, automation, and layered network
                        security, minimizing CapEx while maximizing performance.
                    </p>

                    <p className="text-gray-700 text-[13px] mt-2 font-medium">
                        Additional benefits:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1 text-xs sm:text-[13px]">
                        <li>Optimized bandwidth usage</li>
                        <li>24/7 monitoring & proactive alerts</li>
                        <li>Cloud integration ready</li>
                        <li>Audit-friendly compliance & reporting</li>
                    </ul>
                </div>

                {/* Right: Layered Stack Visualization */}
                <div className="relative flex flex-col justify-center items-center mt-4 md:mt-0 space-y-2">
                    {layers.map((layer, idx) => (
                        <div
                            key={idx}
                            className={`${layer.width} ${layer.bg} border-l-4 ${layer.border} rounded-r-xl shadow-md p-2 sm:p-3 transform ${layer.rotate} relative`}
                        >
                            {layer.icon}
                            <h4 className="font-semibold text-red-700 text-[13px] sm:text-sm">
                                {layer.title}
                            </h4>
                            <p className="text-gray-700 text-[11px] sm:text-xs mt-1 leading-snug">
                                {layer.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header6;

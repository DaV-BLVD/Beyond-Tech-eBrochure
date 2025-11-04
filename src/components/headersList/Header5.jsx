import React from 'react';
import {
    FaNetworkWired,
    FaShieldAlt,
    FaChartLine,
    FaCogs,
} from 'react-icons/fa';

const Header5 = () => {
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

                {/* Left: Text & Intro */}
                <div className="flex flex-col justify-center px-4 sm:pr-4 md:pr-1 md:ml-5">
                    <h5 className="text-blue-600 uppercase font-semibold tracking-[1px] text-[16px] text-center  sm:text-[20px] xl:text-start">
                        Network &{' '}
                        <span className="text-red-500">System Solutions</span>
                    </h5>

                    <h2 className="text-gray-900 font-bold text-[19px] text-center sm:text-[32px] md:text-[30px] lg:text-[33px] mt-1 leading-snug xl:text-start">
                        Enterprise Architecture for Modern Businesses
                    </h2>

                    <p className="text-gray-600 text-[14px] sm:text-[16px] mt-2 leading-snug text-justify lg:text-[17px] xl:text-[19px]">
                        Build a resilient, scalable, and secure IT backbone that
                        supports SD-WAN, automation, and layered network
                        security, minimizing CapEx while maximizing performance.
                    </p>

                    <p className="text-gray-700 text-[13px] mt-2 font-medium md:text-[16px] lg:text-[19px]">
                        Additional benefits:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1 text-xs sm:text-[13px] md:text-[15px] lg:text-[16px]">
                        <li>Optimized bandwidth usage</li>
                        <li>24/7 monitoring & proactive alerts</li>
                        <li>Cloud integration ready</li>
                        <li>Audit-friendly compliance & reporting</li>
                    </ul>
                </div>

                {/* Right: Layered Stack Visualization */}
                <div className="relative grid grid-cols-2 place-items-center ml-8 md:flex md:flex-col justify-center mt-0 md:mt-0 space-y-2 p-5 pt-0 items-center">
                    {layers.map((layer, idx) => (
                        <div
                            key={idx}
                            className={`${layer.width} ${layer.bg} border-l-4 ${layer.border} rounded-r-xl shadow-md p-2 sm:p-3 transform ${layer.rotate} relative`}
                        >
                            {layer.icon}
                            <h4 className="font-semibold text-red-700 text-[13px] sm:text-sm md:text-[20px]">
                                {layer.title}
                            </h4>
                            <p className="text-gray-700 text-[11px] sm:text-xs mt-1 leading-snug md:text-[15px]">
                                {layer.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header5;

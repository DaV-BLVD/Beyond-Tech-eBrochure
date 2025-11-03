import React from 'react';
import endpoint from '../../assets/1/3.png';
import network from '../../assets/1/3.1.png';
import cctv from '../../assets/1/3.2.png';
import servers from '../../assets/1/3.3.png';

const Header3 = () => {
    return (
        <div className="flex justify-center items-center px-4 mt-19 sm:mt-5 sm:px-8 md:px-12 lg:px-20 lg:h-full">
            <div
                className="
                w-full max-w-[1430px] h-[490px]
                rounded-2xl grid grid-cols-1 md:grid-cols-[45%_55%]
                shadow-xl flex-col 
                bg-linear-to-r from-white via-blue-50 to-white
                overflow-hidden relative py-2

                sm:p-4 sm:h-[520px] lg:w-full lg:min-h-[550px]
            "
            >
                {/* Floating accent circles */}
                <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-200 rounded-full opacity-20 -translate-x-12 -translate-y-12 animate-float-slow"></div>
                <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-red-200 rounded-full opacity-20 translate-x-12 sm:translate-x-24 translate-y-12 sm:translate-y-24 animate-float-reverse"></div>

                {/* LEFT SECTION — Text Overview */}
                <div className="flex flex-col justify-center text-center items-center md:text-left lg:items-start md:ml-3 pr-0 md:pr-6">
                    <h5 className="text-[20px] sm:text-[25px] md:text-center uppercase tracking-[1px] text-red-500 font-semibold">
                        Security{' '}
                        <span className="text-blue-600">Solutions</span>
                    </h5>

                    <h2
                        className="text-[20px] sm:text-[40px] md:text-[30px] lg:text-[40px] lg:text-left md:text-center font-bold leading-snug mt-1  "
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                    >
                        Protecting your business from endpoint to datacenter.
                    </h2>

                    <p className="text-[14px] sm:text-[18px] text-gray-600 mt-1 leading-snug w-[90%] ">
                        Our comprehensive security stack defends your
                        organization across all layers — devices, networks, and
                        critical infrastructure.
                    </p>
                </div>

                {/* RIGHT SECTION — Security Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 mt-2 md:mt-0 px-2 z-100">
                    {/* Endpoint & System */}
                    <div
                        className="bg-red-50 rounded-xl p-5 py-2 shadow-sm hover:shadow-md transition"
                        style={{
                            backgroundImage: `url(${endpoint})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-lg font-bold text-white mb-2 sm:text-1xl md:text-2xl lg:text-3xl drop-shadow-lg">
                            Endpoint & System
                        </h3>
                        <p className="text-white text-sm sm:text-lg leading-relaxed">
                            EDR/AV, hardening, policy & patching.
                        </p>
                    </div>

                    {/* Network Security */}
                    <div
                        className="bg-red-50 rounded-xl p-5 py-2 shadow-sm hover:shadow-md transition"
                        style={{
                            backgroundImage: `url(${network})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-lg font-bold text-white mb-2 sm:text-1xl md:text-2xl lg:text-3xl drop-shadow-lg">
                            Network Security
                        </h3>
                        <p className="text-white text-sm sm:text-lg leading-relaxed">
                            NGFW, IPS/IDS, VPN, segmentation.
                        </p>
                    </div>

                    {/* CCTV & Access */}
                    <div
                        className="bg-red-50 rounded-xl p-5 py-2 shadow-sm hover:shadow-md transition"
                        style={{
                            backgroundImage: `url(${cctv})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-lg font-bold text-white mb-2 sm:text-1xl md:text-2xl lg:text-3xl drop-shadow-lg">
                            CCTV & Access
                        </h3>
                        <p className="text-white text-sm sm:text-lg leading-relaxed">
                            AI surveillance, access & attendance.
                        </p>
                    </div>

                    {/* Enterprise & DC */}
                    <div
                        className="bg-red-50 rounded-xl p-5 py-2 shadow-sm hover:shadow-md transition"
                        style={{
                            backgroundImage: `url(${servers})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-lg font-bold text-white mb-2 sm:text-1xl md:text-2xl lg:text-3xl drop-shadow-lg">
                            Enterprise & DC
                        </h3>
                        <p className="text-white text-sm sm:text-lg leading-relaxed">
                            DC integration, SIEM, audits.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header3;

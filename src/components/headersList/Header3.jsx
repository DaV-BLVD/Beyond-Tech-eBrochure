import React from 'react';
import endpoint from '../../assets/1/3.png';
import network from '../../assets/1/3.1.png';
import cctv from '../../assets/1/3.2.png';
import servers from '../../assets/1/3.3.png';

const Header3 = () => {
    return (
        <div className="flex justify-center items-center mt-4 px-4 sm:px-8 md:px-12 lg:px-20">
            <div
                className="
                w-full max-w-[1430px] min-h-[550px]
                rounded-2xl grid grid-cols-1 md:grid-cols-[45%_55%]
                p-3 sm:p-8 lg:p-10
                shadow-lg flex-col justify-center bg-[#ffffff]
                transition-all duration-500 ease-in-out
            "
            >
                {/* LEFT SECTION — Text Overview */}
                <div className="flex flex-col justify-center text-center md:text-left pr-0 md:pr-6">
                    <h5 className="text-[20px] sm:text-[25px] uppercase tracking-[1px] text-red-600 font-semibold">
                        3. Security Solutions
                    </h5>

                    <h2
                        className="text-[30px] sm:text-[40px] font-bold leading-snug mt-2"
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                    >
                        Protecting your business from endpoint to datacenter.
                    </h2>

                    <p className="text-[16px] sm:text-[18px] text-gray-600 mt-4 leading-snug">
                        Our comprehensive security stack defends your
                        organization across all layers — devices, networks, and
                        critical infrastructure.
                    </p>
                </div>

                {/* RIGHT SECTION — Security Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 md:mt-0">
                    {/* Endpoint & System */}
                    <div
                        className="bg-red-50 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                        style={{
                            backgroundImage: `url(${endpoint})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-2sm:text-5xl drop-shadow-lg">
                            Endpoint & System
                        </h3>
                        <p className="text-white text-sm sm:text-lg leading-relaxed">
                            EDR/AV, hardening, policy & patching.
                        </p>
                    </div>

                    {/* Network Security */}
                    <div
                        className="bg-red-50 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                        style={{
                            backgroundImage: `url(${network})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-2sm:text-5xl drop-shadow-lg">
                            Network Security
                        </h3>
                        <p className="text-white text-sm sm:text-lg leading-relaxed">
                            NGFW, IPS/IDS, VPN, segmentation.
                        </p>
                    </div>

                    {/* CCTV & Access */}
                    <div
                        className="bg-red-50 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                        style={{
                            backgroundImage: `url(${cctv})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-2sm:text-5xl drop-shadow-lg">
                            CCTV & Access
                        </h3>
                        <p className="text-white text-sm sm:text-lg leading-relaxed">
                            AI surveillance, access & attendance.
                        </p>
                    </div>

                    {/* Enterprise & DC */}
                    <div
                        className="bg-red-50 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                        style={{
                            backgroundImage: `url(${servers})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-2sm:text-5xl drop-shadow-lg">
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

import React from 'react';
import gurukul from '../../assets/1/gurukul.png';
import inf from '../../assets/1/inf.png';
import utopia from '../../assets/1/utopia.png';
import bandipur from '../../assets/1/bandipur.png';
import island from '../../assets/1/island.png';
import inova from '../../assets/1/inova.png';
import himalayan from '../../assets/1/himalayan.jpg';
import fiberworld from '../../assets/1/fiberworld.png';
import nepalRastraBank from '../../assets/1/Nepal_Rastra_Bank_Logo.jpeg';

const companies = [
    { name: 'Gurukul', logo: gurukul },
    { name: 'INF', logo: inf },
    { name: 'Utopia', logo: utopia },
    { name: 'Bandipur', logo: bandipur },
    { name: 'Island', logo: island },
    { name: 'Inova', logo: inova },
    { name: 'Himalayan', logo: himalayan },
    { name: 'Fiberworld', logo: fiberworld },
    { name: 'Nepal Rastra Bank', logo: nepalRastraBank },
];

const Header6 = () => {
    return (
        <div className="flex justify-center items-center px-4 mt-17 sm:mt-4 sm:px-8 md:px-12 md:mt-5 lg:mt-3 lg:px-20 lg:h-full">
            <div
                className="
                w-full max-w-[1430px] h-[500px]
                rounded-2xl grid grid-cols-1
                shadow-xl flex-col 
                bg-linear-to-r from-white via-blue-50 to-white
                overflow-hidden relative py-2

                sm:p-4 sm:h-[520px] lg:w-full lg:min-h-[530px]
            "
            >
                {/* Floating accent circles */}
                <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-200 rounded-full opacity-20 -translate-x-12 -translate-y-12 animate-float-slow"></div>
                <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-red-200 rounded-full opacity-20 translate-x-12 sm:translate-x-24 translate-y-12 sm:translate-y-24 animate-float-reverse"></div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-1 sm:mb-2 md:pt-2 text-red-600">
                    Trusted <span className="text-blue-500">By</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1 px-8 sm:gap-2 items-center justify-items-center z-100">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-0 sm:p-2 w-[110px] sm:w-[155px] md:w-[180px] lg:w-[250px]"
                        >
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="w-16 h-14 sm:w-25 sm:h-20 md:w-30 md:h-20 object-contain mb-1 sm:mb-2"
                            />
                            <span className="text-gray-700 text-center text-[12px] sm:text-base font-semibold">
                                {company.name}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center z-100">
                    <p className="text-center text-gray-500 mt-1 w-[90%] sm:mt-4 text-xs sm:text-sm md:mt-0 md:pt-5 lg:text-lg">
                        We proudly work with companies across Nepal & beyond.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header6;

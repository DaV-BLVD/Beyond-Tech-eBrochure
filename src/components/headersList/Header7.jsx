import React from 'react';
import gurukul from '../../assets/1/gurukul.png';
import inf from '../../assets/1/inf.png';
import utopia from '../../assets/1/utopia.png';
import bandipur from '../../assets/1/bandipur.png';
import island from '../../assets/1/island.png';
import inova from '../../assets/1/inova.png';
import himalayan from '../../assets/1/himalayan.jpg';
import fiberworld from '../../assets/1/fiberworld.png';

const companies = [
    { name: 'Gurukul', logo: gurukul },
    { name: 'INF', logo: inf },
    { name: 'Utopia', logo: utopia },
    { name: 'Bandipur', logo: bandipur },
    { name: 'Island', logo: island },
    { name: 'Inova', logo: inova },
    { name: 'Himalayan', logo: himalayan },
    { name: 'Fiberworld', logo: fiberworld },
];

const Header7 = () => {
    return (
        <div className="flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 mt-5">
            <div
                className="
                w-[400px] max-w-[1430px] sm:w-full
                rounded-2xl p-4 sm:p-6 md:p-8
                shadow-lg bg-linear-to-r from-gray-50 to-white
                flex flex-col justify-center
                transition-all duration-500 ease-in-out
            "
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
                    7. Trusted By
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-3 sm:p-4 w-full max-w-[180px] sm:max-w-[200px]"
                        >
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-1 sm:mb-2"
                            />
                            <span className="text-gray-700 text-center text-sm sm:text-base font-semibold">
                                {company.name}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-500 mt-4 sm:mt-6 text-xs sm:text-sm">
                    We proudly work with companies across Nepal & beyond.
                </p>
            </div>
        </div>
    );
};

export default Header7;

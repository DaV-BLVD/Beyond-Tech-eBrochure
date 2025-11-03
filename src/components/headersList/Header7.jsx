import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import address from '../../assets/1/address.png';
import phone from '../../assets/1/phone.png';
import email from '../../assets/1/email.png';

const Header7 = () => {
    const contactCards = [
        {
            icon: (
                <FaMapMarkerAlt className="text-red-600 text-xl sm:text-2xl" />
            ),
            title: 'Address',
            info: 'Baluwatar-04, Kathmandu, Nepal',
            bg: address,
        },
        {
            icon: <FaPhoneAlt className="text-red-600 text-xl sm:text-2xl" />,
            title: 'Phone',
            info: '+977-1-4500062',
            bg: phone,
        },
        {
            icon: <FaEnvelope className="text-red-600 text-xl sm:text-2xl" />,
            title: 'Email',
            info: 'info@beyondtechnepal.com',
            bg: email,
        },
    ];

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

                {/* Left Side - Text & CTA */}
                <div className="flex flex-col justify-center pr-2 sm:px-3 md:pr-8 md:ml-4 text-center md:text-left">
                    <h5 className="text-red-500 uppercase font-semibold tracking-[1px] text-[16px] sm:text-[22px] lg:text-[26px]">
                        Let's <span className="text-blue-600">Talk</span>
                    </h5>

                    <h2 className="text-gray-900 font-bold text-[23px] sm:text-[30px] md:text-[35px] mt-0 leading-snug lg:text-[40px]">
                        Ready to modernize your infrastructure and apps?
                    </h2>

                    <p className="text-gray-600 text-[14px] px-2 sm:text-[17px] mt-1 leading-snug lg:text-[20px] lg:my-2">
                        We'll help you plan, build and run — securely. Get in
                        touch with us and let's transform your business
                        together.
                    </p>

                    <button className="mt-2 sm:mt-2 bg-red-600 text-white px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 w-fit mx-auto md:mx-0 font-semibold text-sm sm:text-base">
                        Contact Us
                    </button>
                </div>

                {/* Right Side - Contact Info Cards */}
                <div className="mt-3 md:mt-0 grid grid-cols-1 gap-2 md:gap-4 z-100">
                    {contactCards.map((card, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 bg-blue-50 rounded-lg p-3 mx-4 sm:p-4 shadow hover:shadow-md transition-all duration-300"
                            style={{
                                backgroundImage: `url(${card.bg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {card.icon}
                            <div>
                                <h4 className="text-white text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-lg">
                                    {card.title}
                                </h4>
                                <p className="text-white text-sm sm:text-md md:text-lg drop-shadow-lg">
                                    {card.info}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header7;

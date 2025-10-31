import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import address from '../../assets/1/address.png';
import phone from '../../assets/1/phone.png';
import email from '../../assets/1/email.png';

const Header8 = () => {
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
        <div className="flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20">
            <div
                className="
                w-full max-w-[1430px] min-h-[400px] sm:min-h-[450px]
                rounded-2xl grid grid-cols-1 md:grid-cols-[50%_50%]
                p-4 sm:p-6 md:p-8 lg:p-10
                shadow-lg bg-linear-to-r from-gray-50 to-white
                transition-all duration-500 ease-in-out
            "
            >
                {/* Left Side - Text & CTA */}
                <div className="flex flex-col justify-center pr-2 sm:pr-6 md:pr-8 text-center md:text-left">
                    <h5 className="text-red-500 uppercase font-semibold tracking-[1px] text-[18px] sm:text-[22px]">
                        8. Let's Talk
                    </h5>

                    <h2 className="text-gray-900 font-bold text-[28px] sm:text-[36px] md:text-[44px] mt-2 leading-snug">
                        Ready to modernize your infrastructure and apps?
                    </h2>

                    <p className="text-gray-600 text-[15px] sm:text-[17px] mt-3 leading-snug">
                        We'll help you plan, build and run — securely. Get in
                        touch with us and let's transform your business
                        together.
                    </p>

                    <button className="mt-4 sm:mt-6 bg-red-600 text-white px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 w-fit mx-auto md:mx-0 font-semibold text-sm sm:text-base">
                        Contact Us
                    </button>
                </div>

                {/* Right Side - Contact Info Cards */}
                <div className="mt-6 md:mt-0 grid grid-cols-1 gap-3">
                    {contactCards.map((card, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 bg-blue-50 rounded-lg p-3 sm:p-4 shadow hover:shadow-md transition-all duration-300"
                            style={{
                                backgroundImage: `url(${card.bg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {card.icon}
                            <div>
                                <h4 className="text-white text-lg sm:text-xl font-semibold drop-shadow-lg">
                                    {card.title}
                                </h4>
                                <p className="text-white text-sm sm:text-md drop-shadow-lg">
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

export default Header8;

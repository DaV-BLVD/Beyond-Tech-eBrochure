import React, { useState, forwardRef } from 'react';
import pages from '../../data/data.jsx';
import { useSwipeable } from 'react-swipeable';

const Pages = forwardRef((props, ref) => {
    const [current, setCurrent] = useState(0);

    const nextPage = () => setCurrent((prev) => (prev + 1) % pages.length);
    const prevPage = () =>
        setCurrent((prev) => (prev - 1 + pages.length) % pages.length);

    // Swipe handlers for mobile and desktop drag
    const handlers = useSwipeable({
        onSwipedLeft: nextPage,
        onSwipedRight: prevPage,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    // Page titles
    const titles = [
        'Welcome',
        'About Us',
        'Security Solutions',
        'Tailored Software',
        'AMC & Managed Services',
        'Network & Systems Solution',
        'Trusted By',
        "Let's talk",
    ];

    return (
        <div
            ref={ref}
            className="relative w-full overflow-hidden mt-7 sm:mt-20 lg:mb-4 lg:mt-15"
        >
            {/* Carousel Wrapper with swipe support */}
            <div
                {...handlers}
                className="flex transition-transform duration-700 ease-in-out "
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {pages.map((page) => (
                    <div
                        key={page.id}
                        className="shrink-0 w-full flex items-center justify-center 
                   min-h-[400px] sm:min-h-[500px] md:min-h-[500px] mb-35 lg:mb-10"
                    >
                        <page.Component />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevPage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 
                           bg-red-500 text-white font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full 
                           shadow-lg hover:bg-red-600 hover:scale-110 transition duration-300 ease-in-out z-20"
            >
                {`<`}
            </button>

            <button
                onClick={nextPage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 
                           bg-red-500 text-white font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full 
                           shadow-lg hover:bg-red-600 hover:scale-110 transition duration-300 ease-in-out z-20"
            >
                {`>`}
            </button>

            {/* Bottom Navigator */}
            <div
                className="
                absolute bottom-2 sm:bottom-0 left-1/2 transform -translate-x-1/2 w-full flex flex-wrap justify-center gap-2 sm:gap-4 px-2 sm:px-0"
            >
                {titles.map((title, index) => (
                    <span
                        key={index}
                        className={`flex cursor-pointer whitespace-nowrap px-3 sm:px-4 py-1 rounded-full text-[13px] sm:text-[15px] transition-colors duration-300 shrink-0
                        ${
                            index === current
                                ? 'bg-red-500 text-white font-bold'
                                : 'bg-gray-200 text-gray-700 font-semibold'
                        }
                    `}
                        onClick={() => setCurrent(index)}
                    >
                        {title}
                    </span>
                ))}
            </div>
        </div>
    );
});

export default Pages;

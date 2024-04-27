import React, { useState } from 'react';
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Testimonial = ({ reviews }) => {
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) setIndex(reviews.length - 1);
        else setIndex(index - 1);
    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) setIndex(0);
        else setIndex(index + 1);
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <section id="testinomial-section">
        <h1 className='text-4xl pt-10 font-bold text-center text-white'>Our Testimonials</h1>    

        <div className="w-full md:w-[700px] bg-secondary flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <div>
                <Card review={reviews[index]} />
            </div>
            <div className="flex text-3xl mt-10 gap-3 text-accent font-bold text-center justify-center">
                <button
                    className="cursor-pointer hover:text-accent"
                    onClick={leftShiftHandler}
                >
                    <FiChevronLeft />
                </button>
                <button
                    onClick={rightShiftHandler}
                    className="cursor-pointer hover:text-accent"
                >
                    <FiChevronRight />
                </button>
            </div>
            <div className="mt-6">
                <button
                    onClick={surpriseHandler}
                    className="bg-accent hover:bg-accent transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
                >
                    Surprise Me
                </button>
            </div>
        </div>
        </section>
    );
};

export default Testimonial;

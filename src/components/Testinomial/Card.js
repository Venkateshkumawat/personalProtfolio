import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export const Card = ({ review }) => {
    return (
        <div className="flex flex-col md:relative w-full">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img
                    className="aspect-square rounded-full w-[140px] h-[140px] z-25"
                    src={review.image}
                    alt=""
                />
                <div className="w-[140px] h-[140px] bg-accent rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>
            <div className="text-center mt-7">
                <p className="font-bold tracking-wider text-2xl capitalize">{review.name}</p>
                <p className="text-accent uppercase text-sm">{review.job}</p>
            </div>
            <div className="text-accent mx-auto mt-5">
                <FaQuoteLeft />
            </div>
            <div className="text-center mt-4 text-primary-700">
                {review.text}
            </div>
            <div className="text-accent mx-auto mt-5">
                <FaQuoteRight />
            </div>
        </div>
    );
};

export default Card;

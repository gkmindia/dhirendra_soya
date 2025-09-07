// components/TestimonialSlider.js
'use client';

import React, { useEffect, useState } from 'react';

const testimonials = [
    {
        name: 'Soybean Traders',
        role: 'Neemuch',
        message: 'Dhirendra Soya Agro Private Limited has provided us with top quality Crude Soybean Oil for our processing plant. The company has a sound understanding of the soybean market and produces products that are of the highest quality and purity. They have a highly skilled and motivated team that is always willing to go the extra mile to satisfy their customers. I would highly recommend their products and services too.',
    },
    {
        name: 'Soya Industry Private Limited',
        role: 'Delhi',
        message: 'The company has installed a cutting-edge soybean processing plant that can produce high-quality soybean products.The plant is operated by skilled and experienced personnel who have in-depth knowledge of the soybean processing technology. The plant has a robust quality control system in place to ensure that only the best quality soybean products are produced. The company’s products are well',
    },
    {
        name: 'Agro Goods',
        role: 'Haryana',
        message: 'The plant is run by a team of highly skilled workers and staff members who ensure that only the best quality Crude and Refined soybean oil is produced. The plant is spacious and well-equipped with the latest machinery. The quality control measures adopted by the company are world-class. I am highly impressed with the products of Dhirendra Soya Agro Private Limited.',
    },
];

const TestimonialSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // change every 4 seconds

        return () => clearInterval(timer);
    }, []);

    const current = testimonials[index];

    return (
        <>
            <h5 className='text-uppercase fw-bold text-primary text-center'>What they say about us</h5>
            <h4 className="title_one text-center mb-2">The words that make us <span className='text-primary'>blush</span></h4>
            <p className="text-center fs-5 mb-5">Here’s What Our Client Say about Us</p>
            <div className="text-center">
                <i className="bi bi-chat-square-quote-fill title_one text-primary"></i>
            </div>
            <div className="text-center">
                <p className="fs-5">{current.message}</p>
                <h4 className="mt-4 fw-bold text-primary">{current.name}</h4>
                <p className="text-muted">{current.role}</p>

                {/* Navigation Dots */}
                <div className="d-flex justify-content-center mt-5 gap-1">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`dots_carousel ${
                            i === index ? 'active' : ''
                            }`}
                            onClick={() => setIndex(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TestimonialSlider;

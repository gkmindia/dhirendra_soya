'use client';
import React, { useEffect, useState } from 'react';

const CharAnim = () => {
    const words = [
        { text: 'passionate', color: '#3B82F6' },
        { text: 'purpose-driven', color: '#10B981' },
        { text: 'innovative', color: '#F59E0B' },
        { text: 'grounded', color: '#8B5CF6' },
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex(prev => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <h2 className="fs-1 fw-bold mb-4 mt-2">We’re <span style={{color: words[index].color}}>{words[index].text}</span></h2>

    )
}

export default CharAnim

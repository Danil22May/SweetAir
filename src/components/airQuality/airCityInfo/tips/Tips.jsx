import React from "react";
import { useState, useEffect } from "react";

const Tips = ({ items, interval = 9000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState("fade-in");

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
            setFadeClass("fade-in"); 
        }, interval);

        return () => clearInterval(timer);
    }, [items, interval]);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeClass("");
        }, 1000); 

        return () => clearTimeout(fadeTimer);
    }, [currentIndex]);

    return (
        <div className="flex justify-center items-center h-16 text-[color:var(--col-dark)] mb-4">
            <p className={`font-serif-main text-center text-[xx-large] font-light w-[80%] leading-8 ${fadeClass}`}>
                {items[currentIndex].text}
            </p>
        </div>
    );
};

export default Tips;

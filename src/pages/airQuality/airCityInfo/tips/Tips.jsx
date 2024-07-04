import { useState, useEffect } from "react";

const Tips = ({items, interval = 3000}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, interval);

        return () => clearInterval(timer);
    }, [items, interval]);

    return (
        <div className="flex justify-center items-center h-16 text-[color:var(--col-dark)] mb-4">
            <p className="font-serif-main text-center text-[xx-large] font-light w-[80%] leading-8">{items[currentIndex].text}</p>
        </div>
    )
}

export default Tips;
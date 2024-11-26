import React, { useState } from 'react';
import './Slider.css'; // Importing CSS file for the component styling

const Slider = () => {
    const items = [
        {
            title: "Item 1",
            description: "This is the description for item 1.",
            imageUrl: "/images/two.png",
        },
        {
            title: "Item 2",
            description: "This is the description for item 2.",
            imageUrl: "/images/three.png",
        },
        {
            title: "Item 3",
            description: "This is the description for item 3.",
            imageUrl: "/images/four.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevItem = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + items.length) % items.length
        );
    };

    return (
        <div className="slider-container">
            <div className="slider-item">
                <div className="slider-column left">
                    <h2>{items[currentIndex].title}</h2>
                    <p>{items[currentIndex].description}</p>
                    <button className="see-more-btn">See More</button>
                </div>

                <div className="slider-column center">
                    <div className="carousel-container">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${
                                    index === currentIndex ? "active" : ""
                                }`}
                                style={{
                                    transform: `rotate(${(index - currentIndex) * 120}deg)`,
                                    opacity: index === currentIndex ? 1 : 0.5,
                                    filter:
                                        index === currentIndex
                                            ? "none"
                                            : index === (currentIndex + 1) % items.length
                                            ? "blur(3px)"
                                            : "blur(8px)",
                                }}
                            >
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="carousel-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="slider-column right">
                    <img
                        src={items[(currentIndex + 1) % items.length].imageUrl}
                        alt="next"
                        className="blurry-image"
                    />
                    <img
                        src={items[(currentIndex - 1 + items.length) % items.length].imageUrl}
                        alt="previous"
                        className="blurry-image"
                    />
                </div>
            </div>

            {/* Navigation buttons */}
            <div className="slider-nav">
                <button className="nav-btn prev-btn" onClick={prevItem}>
                    &lt;
                </button>
                <button className="nav-btn next-btn" onClick={nextItem}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Slider;

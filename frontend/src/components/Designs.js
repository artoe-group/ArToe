import React, { useState } from 'react';
import './Designs.css';

const Designs = () => {
    const [isCustomized, setIsCustomized] = useState(false);

    const handleViewMore = () => {
        setIsCustomized(true);
    };

    return (
        <section className="designs">
            <h2 className="designs-title">Pick A Design</h2>
            <p className="designs-description">
                Customize your sneakers to match your style! Select a plain sneaker and transform it into your unique creation.
            </p>
            <div className="designs-container">
                {/* Left Column */}
                <div className="designs-left">
                    <div className="designs-card">
                        <img
                            src="/images/white.jpg"
                            alt="White Sneaker"
                            className={`designs-image ${isCustomized ? 'slide-out' : 'slide-in'}`}
                        />
                        <img
                            src="/images/custom.png"
                            alt="Customized Sneaker"
                            className={`designs-image ${isCustomized ? 'slide-in' : 'hidden'}`}
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="designs-right">
                    {!isCustomized ? (
                        <>
                            <h3 className="designs-right-title">Your Custom Design</h3>
                            <button onClick={handleViewMore} className="designs-button">
                                View More
                            </button>
                            <img
                                src="/images/custom.png"
                                alt="Customized Sneaker"
                                className="designs-right-image"
                            />
                        </>
                    ) : (
                        <>
                            <h3 className="designs-right-title">Congratulations on Your Design!</h3>
                            <p className="designs-right-description">
                                Your sneaker has been transformed into a custom piece of art. Place your order now to make it yours!
                            </p>
                            <button className="designs-button">Place Your Order</button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Designs;

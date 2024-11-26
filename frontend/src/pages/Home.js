import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Designs';  
import './Home.css'; 
import Designs from '../components/Designs';

const Home = () => {
    return (
        <div className="home">
            <header className="header-container">
                <div className="header-info">
                    <h1>ArToe</h1>
                    <p>Lorem Ipsum. How may I help you? Suspendisse varius enim in eros elementum tristique.</p>
                    <Link to="/sneakers" className="store-button">Cop One</Link>
                </div>
                <div className="header-image">
                    <video src="/images/Comercial.mp4" autoPlay loop muted className="header-video" />
                </div>
            </header>

            {/* Add the Slider component below the header */}
            <Designs />
        </div>
    );
};

export default Home;

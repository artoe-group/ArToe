import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    return (
        <div className="home">
            <header className="header-container">
                <div className="header-info">
                    <h1>ArToe</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <Link to="/sneakers" className="store-button">Cop One</Link>
                </div>
                <div className="header-image">
                    <video src="/images/Comercial.mp4" autoPlay loop muted className="header-video" />
                </div>
            </header>
        </div>
    );
};

export default Home;



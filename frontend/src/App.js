import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<h1>Welcome to ArToe!</h1>} />
                        <Route path="/sneakers" element={<h1>Sneakers Page</h1>} />
                        <Route path="/about" element={<h1>About Us</h1>} />
                        <Route path="/contact" element={<h1>Contact Page</h1>} />
                        <Route path="/bag" element={<h1>Your Bag</h1>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;

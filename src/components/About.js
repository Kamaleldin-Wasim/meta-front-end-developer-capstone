import React from 'react';
import pic from '../images/restauranfood.jpg'
const About = () => {
    return (
        <div className="about-container" id='about'>
            <div className="about-content">
                <h2>About Us</h2>
                <p>We are a team of passionate food lovers...</p>
                <p>Our mission is to bring the best culinary experiences to your doorstep.</p>
                <p>Join us on this delicious journey!</p>
                <div className="about-values">
                    <h3>Our Values</h3>
                    <ul>
                        <li>Quality Ingredients</li>
                        <li>Exceptional Service</li>
                        <li>Community Engagement</li>
                    </ul>
                </div>
                <div className="about-story">
                    <h3>Our Story</h3>
                    <p>Founded in 2020, we started as a small food truck...</p>
                </div>
            </div>
            <div className="about-image">
                <img src={pic} alt="About Us" />
            </div>
        </div>
    );
}

export default About;
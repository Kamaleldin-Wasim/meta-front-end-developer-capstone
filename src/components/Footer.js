import React from 'react';
import logo from '../images/small_logo.png';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="Company Logo" />
                    <p>
                        Little Lemon is a charming neighborhood bistro that serves simple food 
                        and classic cocktails in a lively but casual environment. 
                        We would love to hear from you!
                    </p>
                </div>
                <div className="social-media">
                    <h4>Important Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <h4>Contact</h4>
                    <p>1234 Lemon St.</p>
                    <p>Chicago, IL 60601</p>
                    <p>(123) 456-7890</p>
                    <p>
                        <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
                    </p>
                </div>
                <div className="working-hours">
                    <h4>Not Available Hours</h4>
                    <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 11:00 AM - 11:00 PM</p>
                </div>
                <div>
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href="https://www.facebook.com/littlelemon">Facebook</a></li>
                        <li><a href="https://www.instagram.com/littlelemon">Instagram</a></li>
                        <li><a href="https://www.twitter.com/littlelemon">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;

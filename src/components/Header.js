import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg';

const Header = () => {
    return (
    <header className='header'>
        <section className="header-section"> {/* Updated class name */}
            <div className="header-image">
                <img src={bannerImg} alt="Restaurant Food" />
            </div>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p> we are a family-owned Mediterranean restaurant, focused on traditional recipes and fresh ingredients. </p>
                <Link to='/booking'>
                    <button aria-label='on Click'>Reserve Table</button>
                </Link>
            </div>
        </section>
    </header>
    );
}
export default Header;
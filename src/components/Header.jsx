import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Golf Mapper 2</h1>
            <nav>
                <Link to="/">Home</Link>
                ||
                <Link to="/add-course">Add Course</Link>
            </nav>
        </header>
    );
}

export default Header;
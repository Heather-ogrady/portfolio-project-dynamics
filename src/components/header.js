// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="App-header">
            <h1>Heather O'Grady</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/certifications">Certifications</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cv">CV</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/tutorials">Tutorials</Link>
            </nav>
        </header>
    );
}

export default Header;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Blog from './pages/Blog';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Projects from './pages/Projects';
import Tutorials from './pages/Tutorials';
import Header from './components/header';
import Footer from './components/footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cv" element={<CV />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/tutorials" element={<Tutorials />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

// Add a basic Home component if you want a homepage
function Home() {
    return (
        <div>
            <h2>Welcome to My Portfolio</h2>
            <p>Home page content goes here.</p>
        </div>
    );
}

export default App;


import React from 'react';
import './App.css';
import './header';
import Header from "./header";

function App() {
    return (
        <div className="App">
                <Header/>
                <h1>Your Name</h1>
                <nav>
                    <a href="#projects">Projects</a>
                    <a href="#certifications">Certifications</a>
                    <a href="#cv">CV</a>
                </nav>
            <main>
                <section id="projects">
                    <h2>Projects</h2>
                </section>
                <section id="certifications">
                    <h2>Certifications</h2>
                </section>
                <section id="cv">
                    <h2>CV</h2>
                </section>
            </main>
            <footer>
                <p>© Your Name</p>
            </footer>
        </div>
    );
}

export default App;

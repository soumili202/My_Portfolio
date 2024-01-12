
// App.js
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Education from './components/pages/Education';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Acheivements from './components/pages/Acheivements';

function App() {
    return (
        <React.Fragment>
            <div className="App">
                <Navbar />
                <div id="home">
                    <Home />
                </div>
                <div id="about">
                    <About />
                </div>
                <div id="skills">
                    <Skills />
                    </div>
                    <div id="acheivements">
                    <Acheivements />
                    </div>
                    <div id="projects">
                    <Projects />
                    </div>
                    <div id="contact">
                    <Contact />
                    </div>
            </div>
        </React.Fragment>
    );
}

export default App;


// Navbar.js
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="p-4 h-fit">
            <div className="flex items-center justify-between">
                <div className="text-6xl font-semibold font-serif text-red-700 items-center" onClick={scrollToTop}>
                    <h1>Self Musing!</h1>
                </div>
                <div className="flex space-x-7 text-3xl font-mono font-bold text-white">
                    <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-red-700 hover:underline focus:text-red-700">
                        Home
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-red-700 hover:underline focus:text-red-700">
                        About
                    </Link>
                    <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-red-700 hover:underline focus:text-red-700">
                        Skills
                    </Link>
                    <Link to="achievements" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-red-700 hover:underline focus:text-red-700">
                        Achievements
                    </Link>
                    <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-red-700 hover:underline focus:text-red-700">
                        Projects
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-red-700 hover:underline focus:text-red-700">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

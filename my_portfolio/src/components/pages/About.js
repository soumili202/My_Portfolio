// About.js

import React from 'react';
import EducationTimeline from './Education'; // Assuming Education.js is in the same directory

function About() {
    return (
        <div className="p-20 h-screen ">
            
            <div className="mt-30 text-4xl text-center mb-8 text-green-700 font-mono">
                Welcome to my personal space! I am passionate about [Your Interests/Hobbies]. 
                This is the place where I share my journey, experiences, and learning.
            </div>

            <div className="text-3xl font-bold text-center mb-4">
                Education
            </div>
            <EducationTimeline />
        </div>
    );
}

export default About;

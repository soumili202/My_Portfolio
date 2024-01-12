// Education.js

import React from 'react';

const educationData = [
    {
        year: '2015-2019',
        degree: 'Bachelor of Science in Computer Science',
        institution: 'Your University',
        details: 'Some details about your Bachelor\'s degree.',
    },
    // Add more education entries as needed
    {
        year: '2015-2019',
        degree: 'Bachelor of Science in Computer Science',
        institution: 'Your University',
        details: 'Some details about your Bachelor\'s degree.',
    },
    {
        year: '2015-2019',
        degree: 'Bachelor of Science in Computer Science',
        institution: 'Your University',
        details: 'Some details about your Bachelor\'s degree.',
    },
    {
        year: '2015-2019',
        degree: 'Bachelor of Science in Computer Science',
        institution: 'Your University',
        details: 'Some details about your Bachelor\'s degree.',
    },
];

function EducationTimeline() {
    return (
        <div className="flex flex-col items-center">
            {educationData.map((edu, index) => (
                <div key={index} className="relative">
                    <div className="bg-gray-300 w-2 h-8 absolute left-4"></div>
                    <div className="bg-gray-300 w-8 h-8 rounded-full"></div>
                    <div className="bg-gray-300 w-2 h-full absolute left-7"></div>
                    <div className="ml-20 p-4 rounded-lg border border-gray-300 bg-white max-w-sm">
                        <div className="text-xl font-bold mb-2">{edu.year}</div>
                        <div className="text-lg font-bold mb-2">{edu.degree}</div>
                        <div className="text-sm">{edu.institution}</div>
                        <div className="text-sm mt-2">{edu.details}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EducationTimeline;

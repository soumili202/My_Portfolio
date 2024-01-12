// HomePage.js

import React from 'react';
import profile from './profile_pic.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const history = useNavigate();

  const handleContactClick = () => {
    // Replace '/contact' with the actual path to your contact page
    history('/contact');
  };
  return (
    <div className="flex justify-center  items-center h-screen">
      <div className=" flex items-center space-x-40">
        <div className="flex-shrink-0 text-white">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEszDXcj_eItw/profile-displayphoto-shrink_400_400/0/1696972909511?e=1710374400&v=beta&t=0qYsioekFqsjoDsfLPBjjpTfLXLz6ruucH740Hug4kY"
            alt="Profile"
            className="rounded-full h-300 w-300 object-cover"
          />
        </div>
        <div className="ml-4">
          <h1 className="text-white text-mono text-5xl font-bold mb-2">Hi, my name is Soumili Mukherjee</h1>
          <p className="text-white font-mono text-3xl">I am an aspiring Data Scientist and Web Developer</p>
          <button onClick={handleContactClick} className="mt-10 bg-red-500 text-white py-2 px-4 rounded-full text-4xl">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

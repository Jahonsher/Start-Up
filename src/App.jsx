import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import content from './content.json';

const App = () => {
  const [language, setLanguage] = useState('uz');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[rgb(21,21,73)]">
      <nav className="bg-black bg-opacity-5 backdrop-blur-md fixed w-full top-0 z-10 p-8 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-red-600">AqsoTour</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-300 text-xl hover:text-white hidden md:block">{content[language].home}</a>
              <a href="#" className="text-gray-300 text-xl hover:text-white hidden md:block">{content[language].about}</a>
              <a href="#" className="text-gray-300 text-xl hover:text-white hidden md:block">{content[language].services}</a>
              <a href="#" className="text-gray-300 text-xl hover:text-white hidden md:block">{content[language].contact}</a>
              <a
                href="#"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                {content[language].login}
              </a>
            </div>
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
            <select
                className="bg-transparent text-white border border-gray-400 rounded p-1 focus:outline-none"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="uz" className="text-black">O'zbek</option>
                <option value="en" className="text-black">English</option>
              </select>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-60 backdrop-blur-md p-4 transform transition-transform ease-in-out duration-300"
            style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}>
            <button
              className="text-white focus:outline-none absolute top-4 right-4"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col space-y-4 mt-12">
              <a href="#" className="text-gray-300 hover:text-white">{content[language].home}</a>
              <a href="#" className="text-gray-300 hover:text-white">{content[language].about}</a>
              <a href="#" className="text-gray-300 hover:text-white">{content[language].services}</a>
              <a href="#" className="text-gray-300 hover:text-white">{content[language].contact}</a>
              <select
                className="bg-transparent text-white border border-gray-400 rounded p-1 focus:outline-none"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="uz" className="text-black">O'zbek</option>
                <option value="en" className="text-black">English</option>
              </select>
            </div>
          </div>
        )}
      </nav>
      <div className="p-4">
        <div className="flex flex-col pt-20 md:flex-row">
          <div className="w-full md:w-3/5 p-4">
            <h1 className="text-5xl font-bold text-white">{content[language].info}</h1>
            <h1 className="text-6xl pt-4 font-bold text-red-600">AqsoTour</h1>
            <p className="text-white text-lg mt-14">
              {content[language].welcome}
            </p>
          </div>
          <div className="w-full md:w-2/5 p-4 bg-gray-300 rounded-lg mt-8 ">
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
import React, { useState, useEffect, useRef } from 'react';
import content from './content.json';
// import Card from './asistes/Card';
// import Footer from './asistes/Footer/Footer';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border rounded-lg mb-2 shadow-md">
      <button
        className="w-full text-left p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        <span className="float-right">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-600">{answer}</div>
      )}
    </div>
  );
};

const App = () => {
  const [language, setLanguage] = useState('uz');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-[rgb(21,21,73)]">
      <nav className="bg-black bg-opacity-5 backdrop-blur-md fixed w-full top-0 z-10 p-8 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold text-red-600">AqsoTour</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white text-xl hover:text-red-600 hidden md:block">
                {content[language].home}
              </a>
              <a href="#" className="text-white text-xl hover:text-red-600 hidden md:block">
                {content[language].about}
              </a>
              <a href="#" className="text-white text-xl hover:text-red-600 hidden md:block">
                {content[language].services}
              </a>
              <a href="#" className="text-white text-xl hover:text-red-600 hidden md:block">
                {content[language].contact}
              </a>
              <a
                href="#"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                {content[language].login}
              </a>
            </div>
            <select
              className="bg-transparent text-white border border-gray-400 rounded p-1 focus:outline-none hidden md:block"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="uz" className="text-black">O'zbek</option>
              <option value="en" className="text-black">English</option>
            </select>
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
          </div>
        </div>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-70 backdrop-blur-md p-4 transform transition-transform ease-in-out duration-300"
            style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
          >
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
              <a href="#" className="text-gray-300 hover:text-white">
                {content[language].home}
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                {content[language].about}
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                {content[language].services}
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                {content[language].contact}
              </a>
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
            <p className="text-white text-lg mt-14">{content[language].welcome}</p>
          </div>
          <div className="w-full md:w-2/5 p-4 bg-gray-300 rounded-lg mt-8"></div>
        </div>
      </div>

      <div className="container mt-24 mb-16 mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg shadow-md w-full ">
            <h3 className="text-4xl font-semibold mb-2 text-red-600">{content[language].Our}</h3>
            <p className="text-xl pt-4 text-white">"{content[language].travel}"</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M80 352c0 19.198 13.864 24.531 26.667 36.271v38.396c0 11.729 9.599 21.334 21.333 21.334h21.333c11.734 0 21.334-9.604 21.334-21.334v-21.333h170.666v21.333c0 11.729 9.604 21.334 21.334 21.334H384c11.729 0 21.333-9.604 21.333-21.334v-38.396C418.136 376.531 432 370.136 432 352V148.334C432 73.667 349.864 64 256 64S80 73.667 80 148.334V352zm80 15.989c-18.136 0-32-13.864-32-32 0-18.135 13.864-32 32-32s32 13.865 32 32c0 18.136-13.864 32-32 32zm192 0c-18.136 0-32-13.864-32-32 0-18.135 13.864-32 32-32s32 13.865 32 32c0 18.136-13.864 32-32 32zm32-122.656H128V138.667h256v106.666z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{content[language].Adventure}</h3>
            <p className="text-gray-600">{content[language].explore}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <svg stroke="currentColor" fill="#ffffffff" stroke-width="0" viewBox="0 0 640 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{content[language].Plan}</h3>
            <p className="text-gray-600">{content[language].handle}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 md:w-4/5">{content[language].high}</h3>
            <p className="text-gray-600">{content[language].Experience}</p>
          </div>
        </div>
      </div>

      <section className='mb-8'>
        <div className="text-center">
          <h2 className='text-red-600 text-4xl mb-2'>{content[language].Gallery}</h2>
          <p className='text-white text-xl'>"{content[language].GalleryInfo}"</p>
        </div>
      </section>

      <section>
        <div className='text-center'>
          <h2 className='text-4xl mb-2 text-red-600'>{content[language].Reviews}</h2>
          <p className='text-white md:text-xl max-w-[500px] mx-auto'>"{content[language].ReviewsInfo}"</p>
        </div>
      </section>

      <div className="bg-white mx-auto p-4 min-h-screen">
        <div className="md:flex">
          <div className="md:w-1/2 pr-4 mb-4 md:mb-0">
            <img src="https://trips-travel.vercel.app/assets/experience-iAr2OqVB.png" alt="Travel Image" className="w-full h-auto rounded-lg object-cover" />
          </div>
          <div className="md:w-1/2 pl-4">
            <h1 className="text-2xl font-bold text-red-600 mb-10">{content[language].Frequently}</h1>
            <FAQItem
              question={content[language].Book}
              answer={content[language].BookAsk}
            /><br />
            <FAQItem
              question={content[language].Experiences}
              answer={content[language].ExperiencesAsk}
            /><br />
            <FAQItem
              question={content[language].Suitable}
              answer={content[language].SuitableAsk}
            /><br />
            <FAQItem
              question={content[language].Customize}
              answer={content[language].CustomizeAsk}
            /><br />
            <FAQItem
              question={content[language].Safety}
              answer={content[language].SafetyAsk}
            />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
import React, { useState, useEffect, useRef } from 'react';
import content from './content.json';
import { Instagram , Send, MapPin, Phone, Mail, Youtube } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { Link } from 'react-router-dom';
import Galery from '../asistes/Galery/Galery';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border rounded-lg mb-2 shadow-md w-full">
      <button
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-600 text-left">{answer}</div>
      )}
    </div>
  );
};

const Home = () => {
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
              <a href="#Home" className="text-white text-xl hover:text-red-600 hidden md:block">
                {content[language].Home}
              </a>
              <a href="#About" className="text-white text-xl hover:text-red-600 hidden md:block">
                {content[language].About}
              </a>
              <a href="#Services" className="text-white text-xl hover:text-red-600 hidden md:block">
                {content[language].Services}
              </a>
              <a href="#Contact" className="text-white text-xl hover:text-red-600 hidden md:block">
                {content[language].Contact}
              </a>
              <Link to="/Login"
                href="#"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                {content[language].Login}
              </Link>
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

        {/* Mobile menu – to'g'rilandi */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-90 p-4"
          >
            <button
              className="text-white focus:outline-none absolute top-4 right-4"
              onClick={toggleMenu}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col space-y-6 mt-16 text-xl">
              <a href="#Home" onClick={toggleMenu}>{content[language].Home}</a>
              <a href="#About" onClick={toggleMenu}>{content[language].About}</a>
              <a href="#Services" onClick={toggleMenu}>{content[language].Services}</a>
              <a href="#Galery" onClick={toggleMenu}>Galereya</a>
              <a href="#Question" onClick={toggleMenu}>{content[language].Question}</a>
              <a href="#Contact" onClick={toggleMenu}>{content[language].Contact}</a>
              <select
                className="bg-white text-black p-2 rounded"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="uz">O'zbek</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        )}
      </nav>

      <Analytics />

      {/* Hero – rasm to'g'rilandi */}
      <section id="Home" className="container mx-auto md:flex p-4">
        <div id="About" className="md:flex flex-col pt-20 md:flex-row">
          <div className="w-full md:w-3/5 p-4">
            <h1 className="text-5xl font-bold text-white">{content[language].Info}</h1>
            <h1 className="text-6xl pt-4 font-bold text-red-600">AqsoTour</h1>
            <p className="text-white text-lg mt-14">{content[language].Welcome}</p>
          </div>
          <img 
            className="w-full md:w-1/5 p-4 mx-auto rounded-lg mt-8" 
            src="/Aqso.png" 
            alt="Al-Aqso masjidi" 
          />
        </div>
      </section>

      {/* Services, Gallery, FAQ, Footer – hammasi o‘zgarmadi, faqat Galery ishlaydi */}
      <br id="Services" />
      {/* ... (oldingi services qismi o'zgarmadi) */}

      <section className="mb-8">
        <div className="text-center">
          <h2 className="text-red-600 text-4xl mb-2">{content[language].Gallery}</h2>
          <p className="text-white text-xl">"{content[language].GalleryInfo}"</p>
        </div>
      </section>
 <Galery  />
<br  id="Question"/>
      <br /><br />
      <section className='bg-white'>
        <div className="container mx-auto md:flex p-4">
          <div className="md:flex w-full">
            <div className="pr-4 mb-4 md:mb-0 md:w-1/2">
              <img
                src="https://trips-travel.vercel.app/assets/experience-iAr2OqVB.png"
                alt="Travel Image"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="md:w-1/2 pl-4">
              <h1 className="text-4xl font-bold text-red-600 mb-10 text-center">
                {content[language].Frequently}
              </h1>
              <div className="max-w-full">
                <FAQItem question={content[language].Book} answer={content[language].BookAsk} />
                <FAQItem question={content[language].Experiences} answer={content[language].ExperiencesAsk} />
                <FAQItem question={content[language].Suitable} answer={content[language].SuitableAsk} />
                <FAQItem question={content[language].Customize} answer={content[language].CustomizeAsk} />
                <FAQItem question={content[language].Safety} answer={content[language].SafetyAsk} />
              </div>
            </div>
          </div>
        </div><br id="Contact" />
      </section>

      {/* <Footer /> */}
      <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* 1. Brend va ma'lumot */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Aqso Tour</h2>
          <p className="text-gray-400">
            {content[language].Introdaction}
          </p>

          {/* Ijtimoiy tarmoqlar */}
          <div className="flex space-x-4 mt-4">
           
            <a href="https://instagram.com/aqsotour" target='_blank' className="hover:text-purple-400 transition">
              <Instagram size={25} />
            </a>
            <a href="https://youtube.com/@aqsotourtraveling?si=DhMofHV2bvC6nL6K" target='_blank' className="hover:text-red-500 transition">
              <Youtube size={25} />
            </a>
            <a href="https://t.me/Tour_paket1" target='_blank' className="hover:text-sky-400 transition">
              <Send size={25} />
            </a>
            <a href="mailto:aqsotourtraveling">
              {/* <Gmail/> */}
            </a>
          </div>
        </div>

        {/* 2. Tezkor havolalar */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">{content[language].Quick}</h3>
          <ul className="space-y-2">
            <li><a href="#Home" className="hover:text-white transition">{content[language].Home}</a></li>
            <li><a href="#About" className="hover:text-white transition">{content[language].About}</a></li>
            <li><a href="#Services" className="hover:text-white transition">{content[language].Services}</a></li>
            <li><a href="#Contact" className="hover:text-white transition">{content[language].Contact}</a></li>
          </ul>
        </div>

        {/* 3. Biz bilan bog‘laning */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">{content[language].Contactus}</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> <a target='_blank' href="http://aqso-tour-visitka.vercel.app"> Andijon, O‘zbekiston</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> <a href="tel:+998770074909"></a> +998 (77) 007-49-09
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> <a target='_blank' href="http://aqsotourtraveling@gmail.com">aqsotourtraveling@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Pastki chiziq */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {content[language].Reserved}
      </div>
    </footer>
 
    </div>
  );
};

export default Home;
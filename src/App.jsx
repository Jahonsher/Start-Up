import React, { useState } from 'react';

const App = () => {
  const [language, setLanguage] = useState('uz');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    uz: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      services: "Xizmatlar",
      contact: "Aloqa",
      login: "Kirish",
      info: "Agar kod hali siz uchun mantiqiy bo'lmasa yoki kod sintaksisi bilan tanish bo'lmasangiz, tashvishlanmang! Ushbu qo'llanmaning maqsadi React va uning sintaksisini tushunishga yordam berishdir. Qo'llanmani davom ettirishdan oldin yuqoridagi tic-tac-toe o'yinini ko'rib chiqishingizni tavsiya qilamiz. Siz ko'rgan xususiyatlardan biri shundaki, o'yin taxtasining o'ng tomonida raqamlangan ro'yxat mavjud. Ushbu ro'yxat sizga o'yinda sodir bo'lgan barcha harakatlar tarixini beradi va o'yin davom etar ekan, u yangilanadi. Yakunlangan tic-tac-toe o'yinini o'ynaganingizdan so'ng, aylantirishni davom eting. Ushbu qo'llanmada siz oddiyroq shablondan boshlaysiz. Bizning keyingi qadamimiz sizni o'yinni yaratishni boshlashingiz uchun sozlashdir."
    },
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      login: "Login",
      info: "If the code doesn’t make sense to you yet, or if you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you understand React and its syntax. We recommend that you check out the tic-tac-toe game above before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses. Once you’ve played around with the finished tic-tac-toe game, keep scrolling. You’ll start with a simpler template in this tutorial. Our next step is to set you up so that you can start building the game."
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[rgb(21,21,73)]">
      <nav className="bg-black bg-opacity-5 backdrop-blur-md fixed w-full top-0 z-10 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">Logo</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a href="#" className="text-gray-300 hover:text-white hidden md:block">{content[language].home}</a>
              <a href="#" className="text-gray-300 hover:text-white hidden md:block">{content[language].about}</a>
              <a href="#" className="text-gray-300 hover:text-white hidden md:block">{content[language].services}</a>
              <a href="#" className="text-gray-300 hover:text-white hidden md:block">{content[language].contact}</a>
              <select
                className="bg-transparent text-white border border-gray-400 rounded p-1 focus:outline-none"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="uz" className="text-black">O'zbek</option>
                <option value="en" className="text-black">English</option>
              </select>
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
            </div>
          </div>
        )}
      </nav>
      <div className="pt-20 p-4">
      </div>
        <p className="text-white">
          {content[language].info} 
          <h1>Hello</h1>
        </p>
        
    </div>
  );
};

export default App;
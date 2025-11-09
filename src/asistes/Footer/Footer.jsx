import React from "react";
import { Facebook, Instagram , Send, MapPin, Phone, Mail, Youtube } from "lucide-react";
import content from '../../content.json'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* 1. Brend va ma'lumot */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Aqso Tour</h2>
          <p className="text-gray-400">
            Aqso Tour – sizning orzudagi sayohatlaringizni amalga oshirish uchun ishonchli hamkoringiz. 
            Eng yaxshi yo‘nalishlar, qulay narxlar va unutilmas tajribalar sizni kutmoqda!
          </p>

          {/* Ijtimoiy tarmoqlar */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-300 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <Send size={20} />
            </a>
          </div>
        </div>

        {/* 2. Tezkor havolalar */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Tezkor havolalar</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Bosh sahifa</a></li>
            <li><a href="#" className="hover:text-white transition">Turlar</a></li>
            <li><a href="#" className="hover:text-white transition">Biz haqimizda</a></li>
            <li><a href="#" className="hover:text-white transition">Aloqa</a></li>
          </ul>
        </div>

        {/* 3. Biz bilan bog‘laning */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Biz bilan bog‘laning</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Toshkent, O‘zbekiston
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +998 (90) 123-45-67
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> info@aqsotour.uz
            </li>
          </ul>
        </div>
      </div>

      {/* Pastki chiziq */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Aqso Tour. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;

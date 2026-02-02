import { Instagram , Send, MapPin, Phone, Mail, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 py-10">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            {/* 1. Brend va ma'lumot */}
            <div>
              <img
            src="/AqsoLogo.png"
            alt="AqsoTour Logo"
            class="h-14 w-auto cursor-pointer
           transition-all duration-300
           hover:scale-105 hover:opacity-90
           drop-shadow-md"
          />
              <p className="text-gray-400 pt-6">
                Aqso Tour – sizning orzudagi sayohatlaringizni amalga oshirish uchun ishonchli hamkoringiz. Eng yaxshi yo‘nalishlar, qulay narxlar va unutilmas tajribalar sizni kutmoqda!
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
              <h3 className="text-xl font-semibold text-white mb-3">Tezkor havola</h3>
              <ul className="space-y-2">
                <li><a href="#Home" className="hover:text-white transition">Bosh sahifa</a></li>
                <li><a href="#About" className="hover:text-white transition">Biz haqimizda</a></li>
                <li><a href="#Services" className="hover:text-white transition">Xizmatlar</a></li>
                <li><a href="#Contact" className="hover:text-white transition">Aloqa</a></li>
              </ul>
            </div>
    
            {/* 3. Biz bilan bog‘laning */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Biz bilan bog'laning</h3>
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
            © {new Date().getFullYear()} <p> Aqso Tour. Barcha huquqlar himoyalangan.</p>
          </div>
          </footer>
  );
}

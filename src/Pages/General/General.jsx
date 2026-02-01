import React from 'react';

const tours = [
  // Oldingi ma'lumotlar o'zgarmadi, qisqartirdim
  {
    
    id: 1,
    title: "Toshkent Shahar Turi",
    description: "Toshkent – O'zbekistonning zamonaviy poytaxti. Turda Amir Temur maydoni, Chorsu bozori, Mustaqillik maydoni va metro safari. 3 kunlik, 3* mehmonxona, nonushta, professional gid. Narx: 500 000 so'mdan. Oilalar uchun ideal!",
    image: "https://waywardwayfarer.com/wp-content/uploads/2024/07/uzbekistan-travel-guide-registan-square.jpg",  // Real rasm (Samarqand misol, lekin Toshkent uchun o'zgartirishingiz mumkin)
    // Real rasm (Samarqand misol, lekin Toshkent uchun o'zgartirishingiz mumkin)
    price: "500 000 so'mdan"
  },
  {
    id: 2,
    title: "Samarqand Tarixiy Sayohati",
    description: "Ipak yo'li marvaridi – Registon maydoni, Gur-Amir, Ulug'bek rasadxonasi. 4 kunlik tur: Toshkentdan tezyurar poezd, 4* mehmonxona, nonushta + kechki ovqat, gid. Narx: 1 200 000 so'm. UNESCO joylari + plov master-klassi!",
    image: "https://thumbs.dreamstime.com/b/registan-square-sunset-samarkand-s-majestic-islamic-architecture-golden-hour-glory-uzbekistan-registan-square-sunset-365911326.jpg",
    price: "1 200 000 so'mdan"
  },
  {
    id: 3,
    title: "Istanbul Romantik Sayohati",
    description: "Sharq va G'arb uchrashuvi: Ayasofiya, Topkapi, Bosfor kruizTizimga kirishi. 5 kunlik: aviachipta (Toshkentdan), 4* mehmonxona, nonushta, transferlar. Narx: 3 500 000 so'm. Juftliklar uchun romantik kechki sayr + turk taomlari!",
    image: "https://thumbs.dreamstime.com/b/panoramic-view-istanbul-turkey-sunset-featuring-hagia-sophia-bosphorus-strait-stunning-aerial-showcasing-historic-402548805.jpg",
    price: "3 500 000 so'mdan"
  },
  {
    id: 4,
    title: "Dubay Lux Turi",
    description: "Zamonaviy mo'jizalar: Burj Xalifa, Palm orollari, cho'l safari. 7 kunlik: aviachipta, 5* mehmonxona, to'liq ovqat, VIP transfer. Narx: 5 000 000 so'mdan. Lux dam olish + Ferrari World va cho'l BBQ!",
    image: "https://img.andrewprokos.com/BURJ-KHALIFA-DUBAI-CITY-VIEW-NIGHT-1991-1100PX.jpg",
    price: "5 000 000 so'mdan"
  },
  {
    id: 5,
    title: "Buxoro Qadimiy Sayohati",
    description: "Ming yillik tarix: Ark qal'asi, Poi-Kalon, Lyabi Hovuz. 3 kunlik tur: poezd/avto, 4* mehmonxona, ovqatlanish, gid. Narx: 900 000 so'mdan. Tarix ixlosmandlari uchun eng yaxshi tanlov!",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/2012_Bukhara_7515821196_cropped.jpg",
    price: "900 000 so'mdan"
  },
  {
    id: 6,
    title: "Parij Romantik Turi",
    description: "Sevgi shahri: Eyfel minorasi, Luvr, Sena daryosi bo'yida sayr. 6 kunlik: aviachipta, 4* mehmonxona markazda, nonushta. Narx: 6 000 000 so'mdan. Romantik fotosessiya va fransuz oshxonasi!",
    image: "https://www.theparisphotographer.com/wp-content/uploads/2013/12/Romantic-Paris-ideas-Sunset-Eiffel-Tower.jpg",
    price: "6 000 000 so'mdan"
  },
  // Qolgan turlarni ham shu tarzda qo'shing (oldindagi kabi)
];

const TravelCards = () => {
  return (
    <section className="py-16 bg-[#151549] min-h-screen">  {/* Asosiy background #151549 */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Bizning Eng Mashhur Turlarimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div 
              key={tour.id} 
              className="bg-[#2a1a5e] rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 border border-purple-800/30" 
              // Card background: #2a1a5e (quyuqdan sal ochroq), hoverda yorqinroq effekt
            >
              <div className="relative">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-64 object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151549]/80 to-transparent"></div>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-2xl font-semibold mb-3">{tour.title}</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">{tour.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-300">{tour.price}</span>
                  <button className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-500 transition shadow-lg">
                    Bron qilish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCards;
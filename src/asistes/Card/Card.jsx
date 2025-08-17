import React, { useState, useEffect } from 'react';

// Statik JSON ma'lumotlari (test uchun)
const initialTours = [
  {
    id: 1,
    title: "Istanbul Sayohati",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Historical_peninsula_and_modern_skyline_of_Istanbul.jpg/330px-Historical_peninsula_and_modern_skyline_of_Istanbul.jpg",
      "https://rodinistanbul.com/wp-content/uploads/2023/04/day-trips-from-istanbul-copy-1024x576.jpg",
      "https://i.natgeofe.com/n/661c389f-b322-4b7a-90c2-81cb83fcd64b/24470.jpg"
    ],
    destination: "Turkiya",
    duration: "5 kun",
    price: 150,
    category: "Oila"
  },
  {
    id: 2,
    title: "Dubay Lukss Turi",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0ns8IczhdFloXEihR5NV0SpEp9a656UhbQ&s",
      "https://www.gazeta.uz/media/img/2022/10/kzQT5V16658293812462_b.jpg"
    ],
    destination: "BAA",
    duration: "7 kun",
    price: 1200,
    category: "Lukss"
  },
  {
    id: 3,
    title: "Misr Piramidalari",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Egypt.Giza.Sphinx.02_%28cropped%29.jpg",
      "https://xabar.uz/static/crop/2/2/920__95_225118504.jpg",
      "https://storage.otpusk.uz/source/1/TsVW3HyKcnXjxsHBJBpCq9f40yhP6AMK.webp",
      "https://storage.otpusk.uz/source/1/kMvqu497ze0OSDe6xPLu-zlGMBA5gnrP.webp"
    ],
    destination: "Misr",
    duration: "10 kun",
    price: 800,
    category: "Tarixiy"
  }
];

const Cards = () => {
  const [tours, setTours] = useState(initialTours);
  const [filteredTours, setFilteredTours] = useState(initialTours);
  const [activeDestination, setActiveDestination] = useState('Barchasi');
  const [activePriceRange, setActivePriceRange] = useState(null);
  const [activeDuration, setActiveDuration] = useState(null);

  // Filterlash logikasi
  useEffect(() => {
    let result = tours;
    if (activeDestination !== 'Barchasi') {
      result = result.filter(tour => tour.destination === activeDestination);
    }
    if (activePriceRange) {
      const [min, max] = activePriceRange.split('-').map(Number);
      result = result.filter(tour => tour.price >= min && tour.price <= max);
    }
    if (activeDuration) {
      result = result.filter(tour => tour.duration === activeDuration);
    }
    setFilteredTours(result);
  }, [activeDestination, activePriceRange, activeDuration, tours]);

  // Dinamik knopkalar uchun unikal qiymatlar
  const destinations = ['Barchasi', ...new Set(tours.map(tour => tour.destination))];
  const priceRanges = ['100-200', '200-300', '300-500', '500-700', '700-1000'];
  const durations = ['5 kun', '7 kun', '10 kun', '15 kun', '1 oy'];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Tepadagi horizontal scrollable knopkalar (Davlatlar) */}
      <div className="mb-6">
        <h2 className="text-xl text-white font-bold mb-3 text-gray-800">Destinatsiyalar</h2>
        <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-thin scrollbar-thumb-gray-300">
          {destinations.map(dest => (
            <button
              key={dest}
              onClick={() => setActiveDestination(dest)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-200 ${
                activeDestination === dest
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {dest}
            </button>
          ))}
        </div>
      </div>

      {/* Narx oralig'i knopkalari */}
      <div className="mb-6">
        <h2 className="text-xl text-white font-bold mb-3 text-gray-800">Narx oralig'i ($)</h2>
        <div className="flex flex-wrap gap-3">
          {priceRanges.map(range => (
            <button
              key={range}
              onClick={() => setActivePriceRange(range === activePriceRange ? null : range)}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                activePriceRange === range
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {range}$
            </button>
          ))}
        </div>
      </div>

      {/* Davomiylik knopkalari */}
      <div className="mb-6">
        <h2 className="text-xl text-white font-bold mb-3 text-gray-800">Davomiyligi</h2>
        <div className="flex flex-wrap gap-3">
          {durations.map(dur => (
            <button
              key={dur}
              onClick={() => setActiveDuration(dur === activeDuration ? null : dur)}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                activeDuration === dur
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {dur}
            </button>
          ))}
        </div>
      </div>

      {/* Kartalar grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredTours.length > 0 ? (
          filteredTours.map(tour => <CardItem key={tour.id} tour={tour} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">Hech qanday tur topilmadi</p>
        )}
      </div>
    </div>
  );
};

// Har bir kart komponenti (Slider bilan)
const CardItem = ({ tour }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto slide har 3 sekundda
  useEffect(() => {
    const images = tour.images.length > 0 ? tour.images : ['https://via.placeholder.com/300x200?text=No+Image'];
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [tour.images]);

  const images = tour.images.length > 0 ? tour.images : ['https://via.placeholder.com/300x200?text=No+Image'];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Slider */}
      <div className="relative h-48">
        <img
          src={images[currentImageIndex]}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        {/* Slider navigatsiya nuqtalari */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === currentImageIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Ma'lumotlar */}
      <div className="p-4">
        <h3 className="text-md font-bold text-gray-800 truncate">{tour.title}</h3>
        <p className="text-sm text-gray-600">Destinatsiya: {tour.destination}</p>
        <p className="text-sm text-gray-600">Davomiyligi: {tour.duration}</p>
        <p className="text-lg font-bold text-green-600">{tour.price} $</p>
      </div>
    </div>
  );
};

export default Cards;
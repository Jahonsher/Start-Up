// src/Pages/General/TourCard.jsx
import React from 'react';

const TourCard = ({ tour, language, onCardClick }) => {
  const finalPrice = tour.discount > 0 
    ? tour.price - (tour.price * tour.discount / 100) 
    : tour.price;

  return (
    <div 
      onClick={() => onCardClick(tour)}
      className="relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {tour.isPromotion && tour.discount > 0 && (
        <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
          -{tour.discount}%
        </div>
      )}
      
      <div className="relative h-52 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.name[language]} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm">
          ⏱ {tour.duration}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
          {tour.name[language]}
        </h3>
        
        <p className="text-purple-400 text-sm mb-3 flex items-center">
          <span className="mr-1">📍</span> {tour.country[language]}
        </p>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {tour.description[language]}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {tour.discount > 0 && (
              <span className="text-gray-500 line-through text-sm">
                ${tour.price}
              </span>
            )}
            <span className="text-2xl font-bold text-purple-500">
              ${finalPrice}
            </span>
          </div>
          
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg transition-colors duration-200">
            {language === 'uz' && 'Batafsil'}
            {language === 'ru' && 'Подробнее'}
            {language === 'en' && 'Details'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
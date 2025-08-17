import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet marker ikonini sozlash (default ikon muammosini hal qilish uchun)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const Footer = ({ currentLang }) => {
  // Xarita markazi (Toshkent koordinatalari)
  const position = [41.2995, 69.2401]; // O'zgartirish mumkin

  return (
    <footer className="bg-gray-800 mt-12 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Matnli qism */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              {currentLang === 'uz' ? 'Bizning manzilimiz' : currentLang === 'en' ? 'Our Address' : 'Наш адрес'}
            </h2>
            <p className="text-gray-300 mb-4">
              {currentLang === 'uz'
                ? 'Toshkent sh., Chilanzar tumani, 45-uy'
                : currentLang === 'en'
                ? 'Tashkent city, Chilanzar district, 45-house'
                : 'г. Ташкент, Чиланзарский район, дом 45'}
            </p>
            <p className="text-gray-300">
              {currentLang === 'uz'
                ? 'Telefon: +998 71 123 45 67'
                : currentLang === 'en'
                ? 'Phone: +998 71 123 45 67'
                : 'Телефон: +998 71 123 45 67'}
            </p>
            <p className="text-gray-300">
              {currentLang === 'uz'
                ? 'Email: info@travel.uz'
                : currentLang === 'en'
                ? 'Email: info@travel.uz'
                : 'Эл. почта: info@travel.uz'}
            </p>
          </div>

          {/* Xarita */}
          <div className="h-64">
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              className="rounded-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  {currentLang === 'uz'
                    ? 'Bizning ofis'
                    : currentLang === 'en'
                    ? 'Our Office'
                    : 'Наш офис'}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
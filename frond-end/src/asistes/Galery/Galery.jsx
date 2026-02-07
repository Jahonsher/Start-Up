import React from "react";

const GallerySection = () => {
  const images = [
    "https://trips-travel.vercel.app/assets/gallery-04-E4EnFGK4.jpg",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://trips-travel.vercel.app/assets/gallery-08-CG3Wqvup.jpg",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    "https://trips-travel.vercel.app/assets/gallery-03-4cl-Rdd2.jpg",
    "https://trips-travel.vercel.app/assets/gallery-02-8YPn_Tvq.jpg",
    "https://trips-travel.vercel.app/assets/hero-img02-tUaAJdg1.jpg",
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 text-center">

        {/* Masonry style layout */}
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`travel-${index}`}
              className="w-full rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
import { useRef, useState } from "react";

export default function TourModal({ tour, onClose }) {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);

  const next = () =>
    setIndex((prev) => (prev + 1) % tour.images.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? tour.images.length - 1 : prev - 1
    );

  // 🖱️ MOUSE (PC / noutbuk)
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (startX.current === null) return;

    const diff = startX.current - e.clientX;
    if (diff > 50) next();
    if (diff < -50) prev();

    startX.current = null;
  };

  // 📱 TOUCH (telefon)
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) next();
    if (diff < -50) prev();

    startX.current = null;
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center px-4
                 bg-black/40 backdrop-blur-xl"
    >
      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white/10 backdrop-blur-2xl
                   border border-white/20
                   rounded-2xl p-6 max-w-md w-full text-white"
      >
        {/* SLIDER */}
        <div
          className="relative overflow-hidden rounded-xl touch-pan-y"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={tour.images[index]}
            alt=""
            className="h-56 w-full object-cover select-none"
            draggable={false}
          />

          {/* DOTS */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {tour.images.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition ${
                  i === index ? "bg-sky-400" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-4">{tour.title}</h2>
        <p className="text-white/70 mt-2">{tour.description}</p>
        <p className="text-white/70 mt-2 whitespace-pre-line">
          {tour.descriptions}
        </p>
        <p className="mt-3 font-bold text-sky-400">{tour.price}</p>

        <button
          onClick={onClose}
          className="mt-5 w-full bg-sky-400 text-black py-2 rounded-lg font-semibold"
        >
          Yopish
        </button>
      </div>
    </div>
  );
}

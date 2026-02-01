export default function TourCard({ tour, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#0f163d] rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
    >
      <img
        src={tour.images[0]}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold">{tour.title}</h3>
        <p className="text-sm text-white/60 mt-2">
          {tour.description}
        </p>
        <div className="mt-3 font-bold text-sky-400">
          {tour.price}
        </div>
      </div>
    </div>
  );
}

import TourCard from "./TourCard";

export default function TourGrid({ tours, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          tour={tour}
          onClick={() => onSelect(tour)}
        />
      ))}
    </div>
  );
}

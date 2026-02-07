export default function FilterBar({ active, setActive, t }) {
  const filters = [
    { key: "all", value: "Barchasi" },
    { key: "cheap", value: "Arzon" },
    { key: "umra", value: "Umra" },
    { key: "luxury", value: "Luxury" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mt-12">
      <div className="flex gap-3 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`px-5 py-2 rounded-full border ${
              active === f.value
                ? "bg-sky-400 text-black border-sky-400"
                : "border-white/30 text-white"
            }`}
          >
            {t.filter[f.key]}
          </button>
        ))}
      </div>
    </div>
  );
}

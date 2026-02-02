import { useMemo, useState, useEffect } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import FilterBar from "./FilterBar";
import TourGrid from "./TourGrid";
import TourModal from "./TourModal";
import Footer from "./Footer";

// tours data is loaded dynamically to keep the initial bundle smaller
import translations from "./translations";

export default function General() {
  const [lang, setLang] = useState("uz");
  const [activeCategory, setActiveCategory] = useState("Barchasi");
  const [selectedTour, setSelectedTour] = useState(null);

  const t = translations[lang];

  // load tours data asynchronously (code-split) to reduce initial bundle size
  const [tours, setTours] = useState([]);
  useEffect(() => {
    let mounted = true;
    import("./tours.data.json")
      .then((mod) => {
        const data = mod?.default ?? mod;
        if (mounted) setTours(data);
      })
      .catch((err) => {
        // keep silent in UI, but log for debugging
        console.error("Failed to load tours data:", err);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const filteredTours = useMemo(() => {
    if (activeCategory === "Barchasi") return tours;
    return tours.filter((t) => t.category === activeCategory);
  }, [activeCategory, tours]);

  return (
    <div className="min-h-screen bg-[rgb(21,21,73)] text-white">

      <Navbar lang={lang} setLang={setLang} t={t} />

      {/* HERO */}
      <Hero t={t} />

      {/* FILTER */}
      <div id="tours">
        <FilterBar
          active={activeCategory}
          setActive={setActiveCategory}
          t={t}
        />
      </div>

      {/* CARDLAR */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <TourGrid tours={filteredTours} onSelect={setSelectedTour} />
      </section>

      {/* MODAL */}
      {selectedTour && (
        <TourModal
          tour={selectedTour}
          onClose={() => setSelectedTour(null)}
        />
      )}

      {/* FOOTER */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

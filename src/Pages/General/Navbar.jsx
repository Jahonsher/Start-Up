export default function Navbar({ lang, setLang, t }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-[rgb(21,21,73)] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => scrollTo("tours")}
          className="text-2xl font-bold cursor-pointer"
        >
          Aqso<span className="text-sky-400">Tour</span>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-sm text-white/70">
          <button onClick={() => scrollTo("tours")}>{t.menu.tours}</button>
          <button onClick={() => scrollTo("tours")}>{t.menu.umra}</button>
          <button onClick={() => scrollTo("tours")}>{t.menu.promo}</button>
          <button onClick={() => scrollTo("contact")}>{t.menu.contact}</button>
        </nav>

        {/* LANGUAGE */}
        <div className="flex gap-2">
          {["uz", "ru", "en"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 rounded text-xs border ${
                lang === l
                  ? "bg-sky-400 text-black border-sky-400"
                  : "border-white/30 text-white"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

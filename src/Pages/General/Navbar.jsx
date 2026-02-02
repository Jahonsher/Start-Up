// import LogoNav from '/Aqsologo';

export default function Navbar({ lang, setLang, t }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-black bg-opacity-5 backdrop-blur-md fixed w-full top-0 z-10 p-4 text-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}

        <img
            onClick={() => scrollTo("tours")}
            src="/AqsoLogo.png"
            alt="AqsoTour Logo"
            class="h-14 w-auto cursor-pointer
           transition-all duration-300
           hover:scale-105 hover:opacity-90
           drop-shadow-md"
          />

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-sm text-white/70">
          <button className="text-white text-xl hover:text-red-600 hidden md:block" onClick={() => scrollTo("tours")}>{t.menu.tours}</button>
          <button className="text-white text-xl hover:text-red-600 hidden md:block" onClick={() => scrollTo("tours")}>{t.menu.umra}</button>
          <button className="text-white text-xl hover:text-red-600 hidden md:block" onClick={() => scrollTo("tours")}>{t.menu.promo}</button>
          <button className="text-white text-xl hover:text-red-600 hidden md:block" onClick={() => scrollTo("contact")}>{t.menu.contact}</button>
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

export default function Hero({ t }) {
  return (
    <section className="relative h-[65vh] flex items-center">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold max-w-2xl">
          {t.hero.title}
        </h1>
        <p className="mt-4 text-white/70 max-w-xl">
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  );
}

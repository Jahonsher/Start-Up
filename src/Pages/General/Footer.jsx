export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-white/60">
        
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Aqso Tour
          </h3>
          <p className="text-sm">
            Premium sayohatlar, ishonchli xizmat va qulay narxlar.
          </p>
        </div>

        <div>
          <h4 className="text-white mb-3 font-medium">Xizmatlar</h4>
          <ul className="text-sm space-y-2">
            <li>Umra safarlari</li>
            <li>Luxury turlar</li>
            <li>Oilaviy sayohatlar</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3 font-medium">Aloqa</h4>
          <p className="text-sm">📞 +998 90 123 45 67</p>
          <p className="text-sm">✉️ info@aqsotour.uz</p>
        </div>
      </div>

      <div className="text-center text-xs text-white/40 pb-6">
        © {new Date().getFullYear()} Aqso Tour. All rights reserved.
      </div>
    </footer>
  );
}

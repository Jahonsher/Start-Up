import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

const provider = new GoogleAuthProvider();

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/general");
    } catch {
      setError("Google orqali kirishda xatolik yuz berdi");
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/general");
    } catch {
      setError("Email yoki parol noto‘g‘ri");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* 🌍 Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* ✨ Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 text-white animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-wide">
            Aqso <span className="text-sky-400">Tour</span>
          </h1>
          <p className="text-white/70 mt-2">
            Dunyo bo‘ylab unutilmas sayohatlar ✈️
          </p>
        </div>

        {error && (
          <div className="mb-4 text-sm bg-red-500/20 text-red-200 p-3 rounded-xl border border-red-500/30">
            {error}
          </div>
        )}

        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 rounded-xl bg-white text-gray-800 py-3 font-medium hover:scale-[1.02] transition-transform"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Google bilan davom etish
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-sm text-white/50">yoki</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Email */}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email manzilingiz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 py-3 font-semibold tracking-wide hover:scale-[1.02] transition-transform"
          >
            Kirish
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-white/40 mt-6">
          © {new Date().getFullYear()} Aqso Tour · Travel with confidence
        </p>
      </div>
    </div>
  );
}

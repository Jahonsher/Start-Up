import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

const provider = new GoogleAuthProvider();

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔵 Google
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      navigate("/general");
    } catch (err) {
      setError("Google orqali kirishda xatolik");
    } finally {
      setLoading(false);
    }
  };

  // ✉️ Email
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/general");
    } catch (err) {
      setError(firebaseErrorToText(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* 🌍 Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* 🧊 Glass Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 text-white">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-wide">
            Aqso <span className="text-sky-400">Tour</span>
          </h1>
          <p className="text-white/70 mt-2">
            {isRegister
              ? "Yangi sayohatchi bo‘ling 🌍"
              : "Sayohatingni davom ettiring ✈️"}
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
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 rounded-xl bg-white text-gray-800 py-3 font-medium hover:scale-[1.02] transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
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

        {/* Email Form */}
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email manzilingiz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <input
            type="password"
            placeholder="Parol (kamida 6 belgi)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 py-3 font-semibold tracking-wide hover:scale-[1.02] transition"
          >
            {loading
              ? "Kuting..."
              : isRegister
              ? "Ro‘yxatdan o‘tish"
              : "Kirish"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center text-sm text-white/60 mt-6">
          {isRegister ? "Hisobingiz bormi?" : "Hisobingiz yo‘qmi?"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-sky-400 font-medium hover:underline"
          >
            {isRegister ? "Kirish" : "Ro‘yxatdan o‘tish"}
          </button>
        </p>

        <p className="text-center text-xs text-white/40 mt-4">
          © {new Date().getFullYear()} Aqso Tour · Travel with confidence
        </p>
      </div>
    </div>
  );
}

// 🔧 Firebase xatolarini odamga tushunarli qilish
function firebaseErrorToText(code) {
  switch (code) {
    case "auth/email-already-in-use":
      return "Bu email allaqachon ro‘yxatdan o‘tgan";
    case "auth/user-not-found":
      return "Bunday foydalanuvchi topilmadi";
    case "auth/wrong-password":
      return "Parol noto‘g‘ri";
    case "auth/weak-password":
      return "Parol kamida 6 ta belgidan iborat bo‘lishi kerak";
    case "auth/invalid-email":
      return "Email noto‘g‘ri formatda";
    default:
      return "Xatolik yuz berdi, qayta urinib ko‘ring";
  }
}

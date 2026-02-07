import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-lg">
        Yuklanmoqda...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md text-center bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Avval ro‘yxatdan o‘ting
          </h2>
          <p className="text-gray-600 mb-6">
            Ushbu sahifani ko‘rish uchun tizimga kirishingiz kerak.
          </p>

          <Link
            to="/login"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Login sahifaga o‘tish
          </Link>
        </div>
      </div>
    );
  }

  return children;
}

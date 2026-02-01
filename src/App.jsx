import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login";
import General from "./Pages/General/General";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* 🟢 PUBLIC */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* 🔒 PROTECTED */}
      <Route
        path="/general"
        element={
          <ProtectedRoute>
            <General />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

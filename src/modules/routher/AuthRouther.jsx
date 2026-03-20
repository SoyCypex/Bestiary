import { Navigate, Route, Routes } from "react-router-dom";
import Error403 from "C:/Users/Erick/OneDrive/Escritorio/5B node js/2do examen ordinario/bestiary/src/errors/Error403.jsx"
import Error404 from "C:/Users/Erick/OneDrive/Escritorio/5B node js/2do examen ordinario/bestiary/src/errors/Error404.jsx";
import Home from "../auth/Home";

export default function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/home" replace />} />
      <Route path="/auth/home" element={<Home />} />
      <Route path="/public/*" element={<Navigate to="/" replace />} />
      <Route path="/auth/*" element={<Error403 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

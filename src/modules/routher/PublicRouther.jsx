import { Navigate, Route, Routes } from "react-router-dom";
import Login from "C:/Users/Erick/OneDrive/Escritorio/5B node js/2do examen ordinario/bestiary/src/modules/public/Login.jsx"
import Error401 from "C:/Users/Erick/OneDrive/Escritorio/5B node js/2do examen ordinario/bestiary/src/errors/Error401.jsx";
import Error404 from "C:/Users/Erick/OneDrive/Escritorio/5B node js/2do examen ordinario/bestiary/src/errors/Error404.jsx";

export default function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/auth/*" element={<Error401 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

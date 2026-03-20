import { Navigate, Route, Routes } from "react-router-dom";

import Error404 from "C:/Users/Erick/OneDrive/Escritorio/5B node js/2do examen ordinario/bestiary/src/errors/Error404.jsx";
import Monster from "../games/Monster";

export default function MonsterRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/games" replace />} />
      <Route path="/games" element={<Monster />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

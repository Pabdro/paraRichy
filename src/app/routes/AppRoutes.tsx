import { Navigate, Route, Routes } from "react-router-dom";
import { SouvenirPage } from "../pages/SouvenirPage";
import { AuthRoute } from "../../auth/routes/AuthRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

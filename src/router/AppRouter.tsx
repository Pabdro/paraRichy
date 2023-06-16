import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../app/routes/AppRoutes";
import {useState} from 'react'
import { GuardedRoute } from "../guards/GuardedRoute";
import { SouvenirPage } from "../app/pages/SouvenirPage";
import { useStore } from "../context/ContextProvider";

export const AppRouter = () => {
  const [isAutheticated, setIsAutheticated] = useState(false);
  const {auth} = useStore();
  return (
    <Routes>
      <Route path="/" element={<GuardedRoute auth={auth}><SouvenirPage/></GuardedRoute>} />
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
};

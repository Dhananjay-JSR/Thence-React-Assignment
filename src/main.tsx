import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./screens/Landingpage.tsx";
import RegistrationForm from "./screens/RegistrationScreen.tsx";
import ResultScreen from "./screens/ResultScreen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    path: "/submit",
    element: <ResultScreen />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

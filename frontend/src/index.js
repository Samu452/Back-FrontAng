import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Selecciona el elemento root en el DOM
const container = document.getElementById("root");

// Usa createRoot para crear el root y renderizar tu aplicación
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

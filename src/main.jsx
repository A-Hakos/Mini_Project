import "./index.css";
import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/system";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </React.StrictMode>,
);

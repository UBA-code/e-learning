import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Providers from "./Providers.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>
);

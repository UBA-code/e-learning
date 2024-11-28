import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Providers from "./Providers.tsx";
import "@vidstack/react/player/styles/base.css";
import "@/../node_modules/video-react/dist/video-react.css";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Providers />
  // </StrictMode>
);

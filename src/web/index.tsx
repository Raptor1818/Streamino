import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import "./index.css";

createRoot(document.getElementById("root") as Element).render(
  <StrictMode>
    <App />
  </StrictMode>
);

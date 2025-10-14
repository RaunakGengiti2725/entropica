
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { url?: string };
    }
  }
}

  createRoot(document.getElementById("root")!).render(<App />);
  
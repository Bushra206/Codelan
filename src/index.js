import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PrimeReactProvider } from "primereact/api";
import ScrollToTop from "react-scroll-to-top";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
      <ScrollToTop smooth color="#f2f0f5" />
    </PrimeReactProvider>
  </React.StrictMode>
);

reportWebVitals();

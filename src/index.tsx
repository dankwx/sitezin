import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Canto from "./pages/Canto";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canto" element={<Canto />} />
        <Route
          path="*"
          element={
            <div style={{ color: "white" }}>404 - Página não encontrada</div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

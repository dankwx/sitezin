import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Canto from "./pages/Canto";
import Post1 from "./pages/Canto/Post1";
import Post2 from "./pages/Canto/Post2";
import Post3 from "./pages/Canto/Post3";
import Post4 from "./pages/Canto/Post4";
import Post5 from "./pages/Canto/Post5";
import Post6 from "./pages/Canto/Post6";
import Post7 from "./pages/Canto/Post7";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canto" element={<Canto />} />
        <Route path="/canto/post/1" element={<Post1 />} />
        <Route path="/canto/post/2" element={<Post2 />} />
        <Route path="/canto/post/3" element={<Post3 />} />
        <Route path="/canto/post/4" element={<Post4 />} />
        <Route path="/canto/post/5" element={<Post5 />} />
        <Route path="/canto/post/6" element={<Post6 />} />
        <Route path="/canto/post/7" element={<Post7 />} />
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

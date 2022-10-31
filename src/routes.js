import Home from "pages/Home";
import Canto from "pages/Canto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post1 from "./pages/Canto/Post1";
import Post2 from "./pages/Canto/Post2";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/canto" element={<Canto />} />
        <Route exact path="/canto/post/1" element={<Post1 />} />
        <Route exact path="/canto/post/2" element={<Post2 />} />
      </Routes>
    </Router>
  );
}

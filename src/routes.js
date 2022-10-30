import Home from "pages/Home";
import Canto from "pages/Canto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/canto" element={<Canto />} />
      </Routes>
    </Router>
  );
}

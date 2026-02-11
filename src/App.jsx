import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero"; // Ensure this path is correct
import OwnMachine from "./pages/OwnMachine";
import RequestMachine from "./pages/RequestMachine";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      {/* Container styling from your portfolio */}
      <div className="bg-white min-h-screen text-dark overflow-x-hidden font-sans selection:bg-primary selection:text-white">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/own" element={<OwnMachine />} />
          <Route path="/request" element={<RequestMachine />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

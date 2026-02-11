import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero"; // Acts as Home Page
import OwnMachine from "./pages/OwnMachine";
import RequestMachine from "./pages/RequestMachine";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen text-dark overflow-x-hidden font-sans selection:bg-primary selection:text-white flex flex-col justify-between">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/own" element={<OwnMachine />} />
            <Route path="/request" element={<RequestMachine />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import OwnMachine from "./pages/OwnMachine";
import RequestMachine from "./pages/RequestMachine";
import FAQ from "./pages/FAQ";
import GetStarted from "./pages/GetStarted";
import RightawayRamen from "./pages/RightawayRamen"; // <--- Import the Ramen Page

function App() {
  return (
    <Router>
      <div className="bg-primary min-h-screen text-dark overflow-x-hidden font-sans flex flex-col justify-between">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/own" element={<OwnMachine />} />
            <Route path="/request" element={<RequestMachine />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/get-started" element={<GetStarted />} />
            {/* --- Add the Ramen Route --- */}
            <Route path="/ramen" element={<RightawayRamen />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

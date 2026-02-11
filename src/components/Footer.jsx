import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 rounded-t-[3rem] mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-black mb-4">
            VEND<span className="text-primary">CO</span>
          </h2>
          <p className="text-white/50 max-w-xs">
            Revolutionizing the vending industry with smart machines and premium
            locations.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2 text-white/70">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/own" className="hover:text-white transition-colors">
              Buy a Machine
            </Link>
            <Link to="/request" className="hover:text-white transition-colors">
              Get a Machine Placed
            </Link>
            <Link to="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="text-white/70">support@vendco.com</p>
          <p className="text-white/70">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="text-center text-white/30 mt-16 text-sm">
        © 2024 VENDCO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

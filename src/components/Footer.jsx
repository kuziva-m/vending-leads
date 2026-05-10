import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-primary pt-20 pb-10 rounded-t-[3rem] mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-primary/10 pb-12 mb-8">
        <div>
          <h2 className="text-3xl font-black mb-4 tracking-tighter">
            VNDR<span className="text-primary/60 font-medium"> Global</span>
          </h2>
          <p className="text-primary/60 max-w-xs leading-relaxed">
            Premium smart vending solutions worldwide. From traditional snacks
            to specialty ramen and tech.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
          <div className="flex flex-col gap-3 text-primary/70">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/own" className="hover:text-white transition-colors">
              Buy a Machine
            </Link>
            <Link to="/request" className="hover:text-white transition-colors">
              Get a Machine Placed
            </Link>
            {/* We will build this Rightaway Ramen page soon! */}
            <Link to="/ramen" className="hover:text-white transition-colors">
              Rightaway Ramen
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
          <div className="flex flex-col gap-4 text-primary/70">
            <a
              href="mailto:Support@vndrglobal.com"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <Mail size={18} /> Support@vndrglobal.com
            </a>
            <a
              href="https://instagram.com/vndrglobal"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <Instagram size={18} /> @vndrglobal
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-primary/30 text-sm font-medium">
        © {new Date().getFullYear()} VNDR Global. All rights reserved. Worldwide
        Shipping Available.
      </div>
    </footer>
  );
};

export default Footer;

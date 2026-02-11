import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
      >
        <div className="bg-white/80 backdrop-blur-md border border-dark/5 shadow-lg shadow-dark/5 rounded-full px-6 py-3 flex items-center justify-between gap-8 md:gap-12 max-w-2xl w-full">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-black tracking-tighter text-dark"
          >
            VEND<span className="text-primary">CO</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 font-semibold text-sm">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/own" className="hover:text-primary transition-colors">
              Own a Machine
            </Link>
            <Link
              to="/request"
              className="hover:text-primary transition-colors"
            >
              Request Placement
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:block bg-dark text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-primary transition-colors"
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 pb-6 md:hidden flex flex-col gap-6"
          >
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold"
            >
              Home
            </Link>
            <Link
              to="/own"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold"
            >
              Own a Machine
            </Link>
            <Link
              to="/request"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold"
            >
              Request Placement
            </Link>
            <Link
              to="/faq"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold"
            >
              FAQ
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white">
      {/* Background Mesh (Red accent) */}
      <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(238,29,35,0.05)_0px,transparent_50%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 text-black">
            Vending <span className="text-primary">Redefined.</span>
          </h1>
        </motion.div>

        {/* Animated Text Slide from your portfolio */}
        <div className="h-[60px] md:h-[80px] overflow-hidden relative mb-12">
          <div className="animate-text-slide flex flex-col items-center">
            <div className="h-[60px] md:h-[80px] flex items-center">
              <span className="text-2xl md:text-4xl font-bold bg-black text-white px-6 py-2">
                Smart Machines
              </span>
            </div>
            <div className="h-[60px] md:h-[80px] flex items-center">
              <span className="text-2xl md:text-4xl font-bold bg-primary text-white px-6 py-2">
                Passive Income
              </span>
            </div>
            <div className="h-[60px] md:h-[80px] flex items-center">
              <span className="text-2xl md:text-4xl font-bold border-2 border-black text-black px-6 py-2">
                Venue Solutions
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/own"
            className="bg-primary text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all"
          >
            Own a Machine
          </Link>
          <Link
            to="/request"
            className="bg-black text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all"
          >
            Request Placement
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; // <--- The critical export

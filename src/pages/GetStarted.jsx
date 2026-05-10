import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Store } from "lucide-react";

const GetStarted = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-mesh-red">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-dark">
            Let's Get <span className="text-primary">Started.</span>
          </h1>
          <p className="text-xl text-dark/60 max-w-2xl mx-auto">
            Choose the path that fits your goals. Whether you're looking to
            build passive income or enhance your venue, we have a solution.
          </p>
        </motion.div>

        {/* Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Option 1: Own a Machine */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="group relative bg-dark text-white p-10 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <Store size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                I want to Own a Machine
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Start your own vending business. We provide the machines,
                location services, and tech support to get you profitable fast.
              </p>
              <Link
                to="/own"
                className="inline-flex items-center gap-2 font-bold text-lg group-hover:gap-4 transition-all text-primary group-hover:text-white"
              >
                View Packages <ArrowRight size={20} />
              </Link>
            </div>
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-primary/20 transition-colors"></div>
          </motion.div>

          {/* Option 2: Request Placement */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative bg-white border border-gray-100 p-10 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8">
                <Building2 size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-dark">
                I need a Machine Placed
              </h3>
              <p className="text-dark/60 mb-8 leading-relaxed">
                Transform your venue with our high-tech vending solutions. Fully
                managed service at zero cost to your business.
              </p>
              <Link
                to="/request"
                className="inline-flex items-center gap-2 font-bold text-lg group-hover:gap-4 transition-all text-dark group-hover:text-primary"
              >
                Request Now <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Generic "Safe" Legal Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t border-dark/10 pt-10 text-center"
        >
          <h4 className="text-sm font-bold uppercase tracking-widest text-dark/40 mb-4">
            Important Information
          </h4>
          <p className="text-xs text-dark/40 max-w-3xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> The information provided on this
            website is for general informational purposes only. All information
            on the site is provided in good faith, however, we make no
            representation or warranty of any kind, express or implied,
            regarding the accuracy, adequacy, validity, reliability,
            availability, or completeness of any information on the site.
            <br />
            <br />
            <strong>Business Opportunity:</strong> Vending machine earnings can
            vary based on location, traffic, and product selection. Past
            performance is not indicative of future results. We do not guarantee
            specific income levels. Please consult with a financial advisor
            before making any business investment decisions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const OwnMachine = () => {
  const fields = ["Name", "Email", "Phone", "City", "Budget", "Message"];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-mesh-red">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Package Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-black mb-6">
            Own a <span className="text-primary">Business.</span>
          </h1>
          <p className="text-xl text-dark/70 mb-8 leading-relaxed">
            Our turnkey vending packages are designed to get you profitable from
            day one.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">
                Starter Package Includes:
              </h3>
              <ul className="space-y-3">
                {[
                  "Brand New Smart Vending Machine",
                  "Credit Card Reader Installed",
                  "Location Placement Assistance",
                  "1 Year Warranty & Support",
                  "Inventory Management App",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-dark/80 font-medium"
                  >
                    <CheckCircle
                      className="text-primary flex-shrink-0"
                      size={20}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark text-white p-6 rounded-3xl">
              <h3 className="text-xl font-bold mb-2">ROI Estimate</h3>
              <p className="text-white/60">
                Most partners see a return on investment within 12-18 months.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Lead Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-dark/5"
        >
          <h2 className="text-3xl font-bold mb-8">Inquire Now</h2>
          <form className="space-y-4">
            {fields.map((field) => (
              <div key={field}>
                <label className="block text-sm font-bold mb-2 ml-1 uppercase tracking-wider text-xs text-dark/40">
                  {field}
                </label>
                {field === "Message" ? (
                  <textarea className="w-full p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all h-32 font-medium" />
                ) : (
                  <input
                    type="text"
                    className="w-full p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all font-medium"
                  />
                )}
              </div>
            ))}
            <button className="w-full bg-primary text-white font-bold py-5 rounded-xl text-lg hover:bg-dark transition-colors shadow-lg shadow-primary/25 mt-4">
              Get Information
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default OwnMachine;

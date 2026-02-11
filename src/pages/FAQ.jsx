import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-5xl font-black mb-12 text-center text-black">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>

        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <div className="border-b border-gray-100 pb-6">
            <h3 className="text-xl font-bold mb-2">
              How much does a machine cost?
            </h3>
            <p className="text-gray-500">
              Prices vary based on the model and configuration. Contact us for a
              quote.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="border-b border-gray-100 pb-6">
            <h3 className="text-xl font-bold mb-2">
              Do you provide maintenance?
            </h3>
            <p className="text-gray-500">
              Yes, all our packages include full maintenance and restocking
              support.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="border-b border-gray-100 pb-6">
            <h3 className="text-xl font-bold mb-2">
              How much space do I need?
            </h3>
            <p className="text-gray-500">
              Standard machines require about 10 sq ft of floor space and a
              standard power outlet.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ; // <--- THIS LINE IS CRITICAL

import React from "react";
import { motion } from "framer-motion";

const OwnMachine = () => {
  const fields = ["Name", "Email", "Phone", "City", "Budget", "Message"];

  return (
    <div className="min-h-screen py-20 px-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100"
      >
        <h2 className="text-4xl font-black mb-2 text-black">
          Start Your Business
        </h2>
        <p className="text-gray-500 mb-8 font-medium">
          Fill out the form below to get our vending package info.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field) => (
            <div
              key={field}
              className={field === "Message" ? "md:col-span-2" : ""}
            >
              <label className="block text-sm font-bold mb-2 ml-1">
                {field}
              </label>
              {field === "Message" ? (
                <textarea className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary h-32" />
              ) : (
                <input
                  type="text"
                  className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary"
                />
              )}
            </div>
          ))}
          <button className="md:col-span-2 bg-primary text-white font-bold py-5 rounded-2xl text-xl hover:bg-black transition-colors mt-4">
            Send Inquiry
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default OwnMachine;

import React from "react";
import { motion } from "framer-motion";

const RequestMachine = () => {
  return (
    <div className="min-h-screen py-20 px-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100"
      >
        <h2 className="text-4xl font-black mb-2 text-black">
          Request a Machine
        </h2>
        <p className="text-gray-500 mb-8 font-medium">
          Tell us where you need a machine, and we'll handle the rest.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-bold mb-2 ml-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold mb-2 ml-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-bold mb-2 ml-1">
              Location / Address
            </label>
            <input
              type="text"
              placeholder="e.g. 123 Main St, Lobby"
              className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Type of Requester */}
          <div>
            <label className="block text-sm font-bold mb-2 ml-1">
              I am a...
            </label>
            <div className="flex gap-4">
              <label className="flex-1 cursor-pointer">
                <input type="radio" name="type" className="peer sr-only" />
                <div className="p-4 rounded-2xl bg-gray-50 text-center border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/5 transition-all font-bold text-gray-600 peer-checked:text-primary">
                  Venue Owner
                </div>
              </label>
              <label className="flex-1 cursor-pointer">
                <input type="radio" name="type" className="peer sr-only" />
                <div className="p-4 rounded-2xl bg-gray-50 text-center border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/5 transition-all font-bold text-gray-600 peer-checked:text-primary">
                  Customer
                </div>
              </label>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-bold mb-2 ml-1">Message</label>
            <textarea className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary h-32" />
          </div>

          <button className="w-full bg-black text-white font-bold py-5 rounded-2xl text-xl hover:bg-primary transition-colors shadow-lg">
            Submit Request
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default RequestMachine;

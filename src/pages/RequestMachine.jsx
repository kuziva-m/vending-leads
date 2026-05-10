import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  User,
  Mail,
  Building2,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

const RequestMachine = () => {
  // Stagger animation for a premium feel
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-mesh-red">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-dark/5 relative overflow-hidden"
      >
        {/* Decorative background blob inside the card for subtle depth */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <motion.div
          variants={itemVariants}
          className="text-center mb-10 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black tracking-tight">
            Request a <span className="text-primary">Machine</span>
          </h2>
          <p className="text-dark/60 text-lg font-medium max-w-lg mx-auto">
            Transform your space or find the perfect spot. Tell us what you
            need.
          </p>
        </motion.div>

        <form className="space-y-6 relative z-10">
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div className="group">
              <label className="flex items-center gap-2 text-sm font-bold mb-2 ml-1 text-dark/70 group-focus-within:text-primary transition-colors">
                <User size={16} /> Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white outline-none transition-all font-medium"
              />
            </div>

            {/* Email */}
            <div className="group">
              <label className="flex items-center gap-2 text-sm font-bold mb-2 ml-1 text-dark/70 group-focus-within:text-primary transition-colors">
                <Mail size={16} /> Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white outline-none transition-all font-medium"
              />
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="group">
            <label className="flex items-center gap-2 text-sm font-bold mb-2 ml-1 text-dark/70 group-focus-within:text-primary transition-colors">
              <MapPin size={16} /> Location / Address
            </label>
            <input
              type="text"
              placeholder="e.g. 123 Main St, Lobby Area"
              className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white outline-none transition-all font-medium"
            />
          </motion.div>

          {/* Type of Requester - Interactive Cards */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-bold mb-3 ml-1 text-dark/70">
              I am a...
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Venue Owner Option */}
              <label className="cursor-pointer relative">
                <input type="radio" name="type" className="peer sr-only" />
                <div className="p-4 rounded-2xl border-2 border-gray-200 bg-white hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-dark/50 group-hover:text-primary peer-checked:bg-primary peer-checked:text-white transition-colors">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <span className="block font-bold text-dark group-hover:text-primary peer-checked:text-primary transition-colors">
                      Venue Owner
                    </span>
                    <span className="text-xs text-dark/50">I have a space</span>
                  </div>
                  <CheckCircle2
                    className="ml-auto opacity-0 peer-checked:opacity-100 text-primary transition-opacity"
                    size={20}
                  />
                </div>
              </label>

              {/* Customer Option */}
              <label className="cursor-pointer relative">
                <input type="radio" name="type" className="peer sr-only" />
                <div className="p-4 rounded-2xl border-2 border-gray-200 bg-white hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-dark/50 group-hover:text-primary peer-checked:bg-primary peer-checked:text-white transition-colors">
                    <User size={24} />
                  </div>
                  <div>
                    <span className="block font-bold text-dark group-hover:text-primary peer-checked:text-primary transition-colors">
                      Customer
                    </span>
                    <span className="text-xs text-dark/50">
                      I want a machine here
                    </span>
                  </div>
                  <CheckCircle2
                    className="ml-auto opacity-0 peer-checked:opacity-100 text-primary transition-opacity"
                    size={20}
                  />
                </div>
              </label>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants} className="group">
            <label className="flex items-center gap-2 text-sm font-bold mb-2 ml-1 text-dark/70 group-focus-within:text-primary transition-colors">
              <MessageSquare size={16} /> Message
            </label>
            <textarea
              placeholder="Tell us about the foot traffic, preferred machine type, or any questions..."
              className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white outline-none transition-all h-32 font-medium resize-none"
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-black text-white font-bold py-5 rounded-2xl text-xl hover:bg-primary transition-colors shadow-xl flex items-center justify-center gap-3"
          >
            Submit Request <Send size={20} />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default RequestMachine;

import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  CreditCard,
  ShieldCheck,
  BarChart3,
  BookOpen,
  Globe,
  MessageCircle,
} from "lucide-react";

const OwnMachine = () => {
  const fields = ["Name", "Email", "Phone", "City", "Budget", "Message"];

  const packageIncludes = [
    { icon: <Package size={20} />, text: "Brand new vending machine" },
    {
      icon: <CreditCard size={20} />,
      text: "NAYAX card reader + cash collecting system",
    },
    {
      icon: <ShieldCheck size={20} />,
      text: "12 months warranty + ongoing support",
    },
    {
      icon: <BarChart3 size={20} />,
      text: "Online inventory & data tracking system",
    },
    {
      icon: <BookOpen size={20} />,
      text: "Access to free course, contract templates & supplier pricing guides",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-premium relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Package Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-dark tracking-tighter">
            Own a <span className="text-dark/50 font-medium">Business.</span>
          </h1>
          <p className="text-xl text-dark/70 mb-10 leading-relaxed max-w-lg">
            Our premium turnkey packages provide everything you need to launch
            and scale a profitable automated business.
          </p>

          <div className="space-y-6">
            {/* Main Package Box */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-dark/5 border border-dark/5">
              <h3 className="text-2xl font-bold mb-6 text-dark border-b border-gray pb-4">
                The Complete Package
              </h3>
              <ul className="space-y-5">
                {packageIncludes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-dark/80 font-medium leading-tight"
                  >
                    <div className="text-dark mt-0.5 bg-primary p-2 rounded-xl">
                      {item.icon}
                    </div>
                    <span className="mt-1.5">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Global & Support Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-dark text-primary p-6 rounded-[2rem] shadow-lg hover:-translate-y-1 transition-transform">
                <Globe className="mb-4 text-primary/70" size={28} />
                <h4 className="font-bold text-lg mb-2">Global Delivery</h4>
                <p className="text-primary/60 text-sm leading-relaxed">
                  Shipping is fully included in all costs. We securely ship our
                  machines worldwide.
                </p>
              </div>

              <div className="bg-white border border-dark/10 text-dark p-6 rounded-[2rem] shadow-sm hover:-translate-y-1 transition-transform">
                <MessageCircle className="mb-4 text-dark/50" size={28} />
                <h4 className="font-bold text-lg mb-2">VIP Support</h4>
                <p className="text-dark/60 text-sm leading-relaxed">
                  Direct ongoing support and communication via WhatsApp for
                  maintenance & troubleshooting.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Lead Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-dark/10 border border-dark/5 relative z-10"
        >
          <h2 className="text-3xl font-bold mb-2 text-dark">Inquire Now</h2>
          <p className="text-dark/50 mb-8 font-medium">
            Fill out the form to get our latest pricing and catalog.
          </p>

          <form className="space-y-4">
            {fields.map((field) => (
              <div key={field}>
                <label className="block text-xs font-bold mb-2 ml-1 uppercase tracking-widest text-dark/40">
                  {field}
                </label>
                {field === "Message" ? (
                  <textarea
                    placeholder="Tell us about your goals..."
                    className="w-full p-4 rounded-2xl bg-gray border-2 border-transparent focus:border-dark focus:bg-white outline-none transition-all h-32 font-medium resize-none text-dark"
                  />
                ) : (
                  <input
                    type="text"
                    placeholder={`Enter your ${field.toLowerCase()}`}
                    className="w-full p-4 rounded-2xl bg-gray border-2 border-transparent focus:border-dark focus:bg-white outline-none transition-all font-medium text-dark"
                  />
                )}
              </div>
            ))}
            <button className="w-full bg-dark text-primary font-bold py-5 rounded-2xl text-lg hover:bg-dark/80 transition-colors shadow-lg mt-6 flex justify-center items-center gap-2 group">
              Submit Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default OwnMachine;

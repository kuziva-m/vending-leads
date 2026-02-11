import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, MapPin, ShieldCheck, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-mesh-red min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 text-dark">
            Passive Income <br />
            <span className="text-primary">Simplified.</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark/60 mb-10 max-w-2xl mx-auto">
            We provide state-of-the-art vending machines for entrepreneurs and
            premium placement services for venues.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/own"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
            >
              Own a Machine <ArrowRight size={20} />
            </Link>
            <Link
              to="/request"
              className="bg-white text-dark border border-dark/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              Request Placement <MapPin size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Floating Image Placeholder or Graphic */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mt-20 w-full max-w-5xl h-64 md:h-96 bg-dark rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden relative"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent"></div>
          <span className="text-white/20 text-4xl font-black">
            HIGH-TECH VENDING IMAGE HERE
          </span>
        </motion.div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <DollarSign size={32} />,
              title: "High ROI",
              desc: "Generate passive income 24/7 with our optimized machines.",
            },
            {
              icon: <Zap size={32} />,
              title: "Smart Tech",
              desc: "Real-time inventory tracking and cashless payment systems.",
            },
            {
              icon: <ShieldCheck size={32} />,
              title: "Full Support",
              desc: "We handle maintenance, stocking, and location scouting.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-dark/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACT BANNER --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Ready to Start?
            </h2>
            <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">
              Whether you're buying a machine or need one for your space, we're
              here to help.
            </p>
            <a
              href="mailto:contact@vendco.com"
              className="inline-block bg-white text-dark px-10 py-5 rounded-full font-bold text-xl hover:bg-primary hover:text-white transition-colors"
            >
              Contact Us Now
            </a>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

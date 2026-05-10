import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, MessageCircle, Store, MapPin } from "lucide-react";
import vendorImg from "../assets/vendor.png";

const Hero = () => {
  return (
    <div className="bg-premium min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-dark">
            Passive Income <br />
            <span className="text-dark/40 font-medium">Simplified.</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Premium smart vending solutions worldwide. From traditional snacks
            to specialty ramen and tech.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/own"
              className="bg-dark text-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-dark/10 flex items-center justify-center gap-2"
            >
              Own a Machine <ArrowRight size={20} />
            </Link>
            <Link
              to="/request"
              className="bg-white text-dark border border-dark/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray transition-colors flex items-center justify-center gap-2"
            >
              Request Placement <MapPin size={20} />
            </Link>
          </div>
        </motion.div>

        {/* --- FLOATING HERO IMAGE --- */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mt-20 w-full max-w-5xl h-80 md:h-[500px] bg-dark rounded-[3rem] shadow-2xl overflow-hidden relative border border-dark/10"
        >
          {/* The Image */}
          <img
            src={vendorImg}
            alt="High Tech Vending Machine"
            className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Gradient Overlay for Text Readability/Style */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent"></div>

          {/* Floating Badge */}
          <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/10 text-white px-6 py-3 rounded-2xl font-bold hidden md:block">
            <span className="text-green-400">●</span> Online Inventory Tracking
          </div>
        </motion.div>
      </section>

      {/* --- FEATURES SECTION (PHASE 3 SELLING POINTS) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe size={32} />,
              title: "Global Reach",
              desc: "We ship worldwide. Shipping is fully included in all our costs, ensuring no hidden fees.",
            },
            {
              icon: <MessageCircle size={32} />,
              title: "24/7 VIP Support",
              desc: "Ongoing support and direct communication via WhatsApp for maintenance, troubleshooting, and guidance.",
            },
            {
              icon: <Store size={32} />,
              title: "Endless Possibilities",
              desc: "From traditional snacks to specialty machines: ramen, hot food, flowers, coffee, gym prep, and tech.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-dark/5 border border-dark/5 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-dark text-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-dark tracking-tight">
                {feature.title}
              </h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACT BANNER --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tighter">
              Ready to Start?
            </h2>
            <p className="text-primary/60 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're buying a machine or need one for your space, our
              global team is ready to assist you.
            </p>
            <a
              href="mailto:Support@vndrglobal.com"
              className="inline-flex items-center gap-2 bg-primary text-dark px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-colors"
            >
              Contact Us <ArrowRight size={20} />
            </a>

            <div className="mt-8 text-primary/40 font-medium">
              <p>
                Or message us on Instagram{" "}
                <a
                  href="https://instagram.com/vndrglobal"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-white transition-colors"
                >
                  @vndrglobal
                </a>
              </p>
            </div>
          </div>
          {/* Subtle Decorative Background Blob */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

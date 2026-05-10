import React from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Clock,
  CreditCard,
  ChefHat,
  ArrowRight,
  MapPin,
} from "lucide-react";

const RightawayRamen = () => {
  const fields = [
    "Name",
    "Email",
    "Phone",
    "Planned Location / City",
    "Message",
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-premium">
      {/* --- RAMEN HERO SECTION --- */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="inline-block bg-dark text-primary px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            @rightawayramen x VNDR Global
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-dark tracking-tighter leading-tight">
            Serve Hot Ramen. <br />
            <span className="text-dark/40 font-medium">Anywhere, 24/7.</span>
          </h1>
          <p className="text-xl text-dark/70 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Capitalize on the hottest trend in automated dining. Our
            state-of-the-art noodle machines cook and serve restaurant-quality
            ramen in under 90 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#inquire"
              className="bg-dark text-primary px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 transition-transform shadow-xl shadow-dark/10 flex items-center justify-center gap-2"
            >
              Get Pricing <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

        {/* Floating Ramen Machine Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="relative w-full aspect-square md:aspect-[4/3] bg-dark rounded-[3rem] shadow-2xl overflow-hidden border border-dark/10 flex items-center justify-center">
            {/* Replace this Unsplash link with an actual picture of your ramen machine! */}
            <img
              src="https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1000&auto=format&fit=crop"
              alt="Delicious Hot Ramen"
              className="w-full h-full object-cover opacity-60 mix-blend-overlay hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent pointer-events-none"></div>
            <h2 className="absolute bottom-8 left-8 text-3xl font-black text-primary max-w-xs">
              Automated Noodle Bar.
            </h2>
          </div>
        </motion.div>
      </section>

      {/* --- WHY RAMEN? FEATURES --- */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tighter">
            The Ramen Advantage
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Flame size={28} />,
              title: "Hot & Ready",
              desc: "Dispenses piping hot noodles perfectly cooked in just 90 seconds.",
            },
            {
              icon: <ChefHat size={28} />,
              title: "Premium Quality",
              desc: "Specialty bowl designs keep ingredients fresh and flavors authentic.",
            },
            {
              icon: <MapPin size={28} />,
              title: "High Demand",
              desc: "Perfect for universities, hospitals, late-night spots, and offices.",
            },
            {
              icon: <CreditCard size={28} />,
              title: "Fully Automated",
              desc: "Equipped with NAYAX cashless readers and real-time inventory tracking.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-lg shadow-dark/5 border border-dark/5 hover:-translate-y-2 transition-transform"
            >
              <div className="w-14 h-14 bg-dark text-primary rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark">
                {feature.title}
              </h3>
              <p className="text-dark/60 font-medium text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- LEAD FORM SECTION --- */}
      <section id="inquire" className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark text-primary p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

          <div className="relative z-10 text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Start Your Noodle Empire
            </h2>
            <p className="text-primary/60 font-medium">
              Worldwide shipping included. Inquire below to get our exclusive
              Rightaway Ramen machine catalog and pricing.
            </p>
          </div>

          <form className="space-y-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fields.slice(0, 4).map((field) => (
                <div key={field}>
                  <label className="block text-xs font-bold mb-2 ml-1 uppercase tracking-widest text-primary/60">
                    {field}
                  </label>
                  <input
                    type="text"
                    placeholder={`Enter your ${field.toLowerCase()}`}
                    className="w-full p-4 rounded-2xl bg-white/10 border-2 border-transparent focus:border-primary focus:bg-white/20 outline-none transition-all font-medium text-primary placeholder:text-primary/30"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs font-bold mb-2 ml-1 uppercase tracking-widest text-primary/60 mt-2">
                Message (Tell us about your plans)
              </label>
              <textarea
                placeholder="I'm looking to place a machine in a university..."
                className="w-full p-4 rounded-2xl bg-white/10 border-2 border-transparent focus:border-primary focus:bg-white/20 outline-none transition-all h-32 font-medium resize-none text-primary placeholder:text-primary/30"
              />
            </div>

            <button className="w-full bg-primary text-dark font-black tracking-tight py-5 rounded-2xl text-xl hover:bg-white transition-colors shadow-xl mt-6">
              Request Info Package
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default RightawayRamen;

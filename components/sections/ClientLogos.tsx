"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Apex Group", initials: "AG" },
  { name: "Meridian Corp", initials: "MC" },
  { name: "Vantage Partners", initials: "VP" },
  { name: "Sterling Advisory", initials: "SA" },
  { name: "Zenith Capital", initials: "ZC" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          className="text-center text-xs font-semibold tracking-[0.3em] uppercase text-slate-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Trusted By Industry Leaders
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              className="flex items-center gap-2 opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.4, y: 0 }}
              whileHover={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{ background: "linear-gradient(135deg,#1e3a8a,#06b6d4)" }}
              >
                {logo.initials}
              </div>
              <span className="font-heading font-bold text-slate-700 text-sm whitespace-nowrap">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const industries = [
  {
    icon: "📡",
    title: "Communications",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: "🔍",
    title: "Audit & Evaluation",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: "🛒",
    title: "Consumer Markets",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: "💼",
    title: "Financial Services",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: "📊",
    title: "Taxes & Efficiency",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: "🏛️",
    title: "Estate Planning",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Gold eyebrow */}
          <span
            className="text-sm font-semibold tracking-[0.25em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            Expertise
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl md:text-4xl text-slate-900">
            Consultancy Industries
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        {/* Full 2×3 grid — all 6 cards, staggered entrance */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              className="group p-7 rounded-2xl border border-slate-100 hover:border-yellow-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden bg-white"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              {/* Subtle hover tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.04), rgba(224,185,77,0.06))" }}
              />

              {/* Gold icon */}
              <span
                className="text-3xl mb-4 block"
                style={{ filter: "sepia(1) saturate(3) hue-rotate(5deg)" }}
              >
                {ind.icon}
              </span>

              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                {ind.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{ind.body}</p>

              {/* Gold underline on hover */}
              <div
                className="mt-4 h-0.5 w-0 group-hover:w-16 transition-all duration-500 rounded-full"
                style={{ background: "linear-gradient(90deg, var(--gold-dark), var(--gold-light))" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

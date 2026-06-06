"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    eyebrow: "What We Offer",
    title: "Our Services",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    number: "02",
    eyebrow: "How We Work",
    title: "Our Approach",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    number: "03",
    eyebrow: "What You Gain",
    title: "The Results",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

export default function ThreeSteps() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-[0.25em] uppercase text-cyan-500">
            How It Works
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl md:text-4xl text-slate-900">
            Our Three-Step Process
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative group p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Large accent number */}
              <span
                className="absolute -top-4 -right-2 text-9xl font-bold font-heading select-none opacity-[0.06] transition-opacity group-hover:opacity-[0.1]"
                style={{ color: "#1e3a8a" }}
              >
                {step.number}
              </span>

              {/* Number pill */}
              <span
                className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full text-white mb-4"
                style={{ background: "linear-gradient(135deg,#1e3a8a,#06b6d4)" }}
              >
                {step.number}
              </span>

              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-2">
                {step.eyebrow}
              </p>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm mb-6">
                {step.body}
              </p>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-cyan-500 transition-colors"
                style={{ color: "#1e3a8a" }}
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Bottom gradient line on hover */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ background: "linear-gradient(90deg,#1e3a8a,#06b6d4)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

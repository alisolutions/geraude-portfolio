"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f1f4b 0%, #1e3a8a 50%, #0891b2 100%)" }}
    >
      {/* Geometric overlay shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #1d4ed8, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 42px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col lg:flex-row items-center gap-12 w-full">
        {/* Left text */}
        <motion.div
          className="flex-1 text-white"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Gold eyebrow */}
          <motion.span
            className="inline-block text-sm font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--gold)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Strategy &amp; Management Consulting
          </motion.span>

          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Providing The{" "}
            {/* Gold highlighted words */}
            <span style={{ color: "var(--gold-light)" }}>Expert Advice</span>{" "}
            You Always Need.
          </h1>

          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Gold outline buttons */}
            <a
              href="#about"
              className="px-8 py-3.5 rounded-full font-semibold transition-all duration-200 border-2"
              style={{
                color: "var(--gold)",
                borderColor: "var(--gold)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#0f1f4b";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
              }}
            >
              Read More
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full font-semibold transition-all duration-200 border-2"
              style={{
                color: "var(--gold)",
                borderColor: "var(--gold)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#0f1f4b";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
              }}
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Right portrait */}
        <motion.div
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-72 h-96 lg:w-80 lg:h-[28rem]">
            <div
              className="absolute -inset-1 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #06b6d4, #1e3a8a)" }}
            />
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-700">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=560&fit=crop&crop=faces"
                alt="James Geraude, Strategy Consultant"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Gold "20+" badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <p className="text-3xl font-bold font-heading" style={{ color: "var(--gold)" }}>
                20+
              </p>
              <p className="text-xs text-slate-500 font-medium">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom diagonal clip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />
    </section>
  );
}

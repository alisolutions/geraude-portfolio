"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0f1f4b 0%, #1e3a8a 50%, #0891b2 100%)" }}
      />

      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.4) 30px, rgba(255,255,255,0.4) 32px)",
        }}
      />

      {/* Portrait overlay */}
      <div className="absolute bottom-0 right-12 lg:right-32 w-64 h-80 opacity-20 pointer-events-none hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=560&fit=crop&crop=faces"
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-semibold tracking-[0.25em] uppercase text-cyan-400">
            Start Today
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl md:text-5xl mb-4">
            Get a Free Quote
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full font-semibold text-navy-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/30 text-lg"
            style={{ color: "#0f1f4b" }}
          >
            Request a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

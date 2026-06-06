"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-cyan-500">
              About Me
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              20+ Years of{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg,#1e3a8a,#06b6d4)" }}
              >
                Experience
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            {/* Strategic Vision callout */}
            <div
              className="flex items-start gap-4 p-5 rounded-xl border-l-4"
              style={{ borderColor: "#06b6d4", background: "linear-gradient(135deg, #eff6ff, #ecfeff)" }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white"
                style={{ background: "linear-gradient(135deg,#1e3a8a,#06b6d4)" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 mb-1">Strategic Vision</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Leveraging deep industry insight to craft forward-thinking strategies
                  that drive measurable, lasting results.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Gradient border frame */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-70"
                style={{ background: "linear-gradient(135deg,#1e3a8a,#06b6d4)" }}
              />
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-300">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Professional consulting team in a modern office"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-xl">
                <p
                  className="text-4xl font-bold font-heading"
                  style={{ color: "#1e3a8a" }}
                >
                  500+
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">Clients Served</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

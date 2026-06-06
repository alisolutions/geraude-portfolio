"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { label: "Strategy", value: 92 },
  { label: "Financial", value: 87 },
  { label: "Solicitory", value: 78 },
  { label: "Organisation", value: 95 },
];

const checklist = [
  "Consistency in Delivery",
  "Continuous Improvement",
  "Strategic Branching",
  "Value-Driven Outcomes",
];

function ProgressBar({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(value), 200);
      return () => clearTimeout(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-slate-700">{label}</span>
        {/* Gold percentage */}
        <span className="text-sm font-bold" style={{ color: "var(--gold)" }}>
          {inView ? value : 0}%
        </span>
      </div>
      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: "linear-gradient(90deg, var(--gold-dark), var(--gold-light))",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Gold eyebrow */}
            <span
              className="text-sm font-semibold tracking-[0.25em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              Skills
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Dynamically Innovate{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg,#1e3a8a,#06b6d4)" }}
              >
                Resource Leveling
              </span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            {/* Checklist with gold check icons */}
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, var(--gold-dark), var(--gold-light))" }}
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right progress bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-8">
                Core Competencies
              </h3>
              {skills.map((skill) => (
                <ProgressBar key={skill.label} {...skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

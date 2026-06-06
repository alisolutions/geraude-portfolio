"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Michael Carter",
    company: "Carter & Associates",
    quote:
      "James delivered exceptional strategic guidance that transformed our business model. His deep market knowledge and structured approach yielded measurable results within the first quarter.",
    stars: 5,
  },
  {
    name: "Sarah Livingstone",
    company: "Pinnacle Financial Group",
    quote:
      "Working with James was a game-changer for our firm. His financial advisory insights helped us navigate a complex merger seamlessly. Highly recommended to any serious enterprise.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" style={{ color: "var(--gold)" }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left photo */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="absolute -inset-3 rounded-2xl opacity-70"
              style={{ background: "linear-gradient(135deg,#06b6d4,#1e3a8a)" }}
            />
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] max-h-[500px] bg-slate-300">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=faces"
                alt="James Geraude, consultant portrait"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Right testimonials */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Gold eyebrow */}
            <span
              className="text-sm font-semibold tracking-[0.25em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              Client Feedback
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Testimonials
            </h2>

            {/* Gold large quote mark */}
            <div
              className="text-8xl font-serif leading-none mb-4 select-none"
              style={{ color: "var(--gold)", opacity: 0.35 }}
            >
              &ldquo;
            </div>

            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  {/* Gold stars */}
                  <Stars count={t.stars} />
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: "linear-gradient(135deg,#1e3a8a,#06b6d4)" }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

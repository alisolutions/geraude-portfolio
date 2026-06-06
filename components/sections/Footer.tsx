"use client";

import { useState } from "react";

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* About Me */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-5 text-white">About Me</h3>
          <div
            className="w-12 h-1 rounded-full mb-5"
            style={{ background: "linear-gradient(90deg,#1e3a8a,#06b6d4)" }}
          />
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="font-heading font-bold text-white">James Geraude</p>
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mt-1">
            Strategy Consultant
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-5 text-white">Contact</h3>
          <div
            className="w-12 h-1 rounded-full mb-5"
            style={{ background: "linear-gradient(90deg,#1e3a8a,#06b6d4)" }}
          />
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (555) 987-6543
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              james@geraude-consulting.com
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              123 Financial District, Suite 800<br />New York, NY 10004
            </li>
          </ul>
        </div>

        {/* Request a Callback */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-5 text-white">Request a Callback</h3>
          <div
            className="w-12 h-1 rounded-full mb-5"
            style={{ background: "linear-gradient(90deg,#1e3a8a,#06b6d4)" }}
          />
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#1e3a8a,#06b6d4)" }}
            >
              Send Request
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-5">
        <p className="text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} James Geraude Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold ring-1 ring-slate-200 mb-4 bg-white shadow-sm">
            ⭐ Top-rated dev partner
          </div>

          <h1 className="text-5xl font-extrabold text-slate-800 leading-tight">
            Build <span className="text-blue-600">products users love</span> — faster.
          </h1>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Full-stack teams for <strong>web, mobile, and cloud</strong>.  
            From idea to launch, we combine strategy, design, and engineering to deliver 
            solutions that don’t just work — they scale 🚀.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="px-6 py-3 border border-slate-300 rounded-lg font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              See Our Work
            </a>
          </div>

          {/* Stats Row */}
          <div className="mt-10 flex gap-12">
            <div>
              <p className="text-3xl font-bold text-blue-600">50+</p>
              <p className="text-slate-500">Successful Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">98%</p>
              <p className="text-slate-500">On-Time Delivery</p>
            </div>
          </div>
        </div>

        {/* Right: Image + Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://picsum.photos/seed/hero/800/520"
            alt="Hero"
            className="rounded-2xl shadow-xl ring-1 ring-slate-200"
          />

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-8 -left-8 bg-white p-5 rounded-xl shadow-lg w-56"
          >
            <p className="font-bold text-slate-800">🏆 Trusted by 30+ Brands</p>
            <p className="text-sm text-slate-500 mt-1">
              Startups & global enterprises alike.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

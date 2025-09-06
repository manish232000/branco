import { useState } from "react";
import { motion } from "framer-motion";
import { createUser } from "../api"; // connect to backend

export default function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]); // ✅ keep logs of all messages sent

  async function submit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await createUser({ name: state.name, email: state.email });

      const newLog = {
        name: state.name,
        email: state.email,
        message: state.message,
        time: new Date().toLocaleString(),
      };

      setLogs((prev) => [newLog, ...prev]); // ✅ prepend new log
      setNotice({ type: "ok", msg: "✅ Message sent successfully!" });
      setState({ name: "", email: "", message: "" });
    } catch (err) {
      setNotice({ type: "error", msg: "❌ Failed to send. " + err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="section bg-gradient-to-b from-slate-50 to-white py-20"
    >
      <div className="container grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="h2">Let’s talk about your project ✨</h2>
          <p className="text-slate-600 mt-3 text-lg leading-relaxed">
            Whether you’re a startup or enterprise, we’ll craft a clear plan —
            from <strong>MVP launch</strong> to <strong>scaling growth</strong>.
            Share your vision, and we’ll make it real.
          </p>

          <div className="mt-6 text-slate-700 space-y-3">
            <p className="flex items-center gap-2">
              📞 <span>+91 90000 00000</span>
            </p>
            <p className="flex items-center gap-2">
              ✉️ <span>hello@yourdomain.com</span>
            </p>
            <p className="flex items-center gap-2">
              📍 <span>Noida • Bengaluru • Remote</span>
            </p>
          </div>

          {/* Trust Logos / Badges */}
          <div className="mt-10 flex gap-6">
            <img
              src="https://dummyimage.com/100x40/ccc/000&text=AWS+Partner"
              alt="AWS Partner"
            />
            <img
              src="https://dummyimage.com/100x40/ccc/000&text=ISO+9001"
              alt="ISO Certified"
            />
            <img
              src="https://dummyimage.com/100x40/ccc/000&text=Clutch+Top"
              alt="Clutch Award"
            />
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <form
            onSubmit={submit}
            className="card p-8 shadow-xl bg-white border border-slate-100 rounded-2xl"
          >
            <label className="block mb-4">
              <span className="text-sm font-medium text-slate-700">Name</span>
              <input
                required
                value={state.name}
                onChange={(e) =>
                  setState((s) => ({ ...s, name: e.target.value }))
                }
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </label>
            <label className="block mb-4">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input
                required
                type="email"
                value={state.email}
                onChange={(e) =>
                  setState((s) => ({ ...s, email: e.target.value }))
                }
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@email.com"
              />
            </label>
            <label className="block mb-6">
              <span className="text-sm font-medium text-slate-700">
                Message
              </span>
              <textarea
                required
                rows="5"
                value={state.message}
                onChange={(e) =>
                  setState((s) => ({ ...s, message: e.target.value }))
                }
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your project..."
              ></textarea>
            </label>

            <button
              disabled={loading}
              className="btn btn-primary w-full py-3 font-semibold disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {notice && (
              <p
                className={`mt-4 text-sm font-medium ${
                  notice.type === "ok" ? "text-green-700" : "text-red-700"
                }`}
              >
                {notice.msg}
              </p>
            )}
          </form>

          {/* ✅ Message Logs */}
          {logs.length > 0 && (
            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-lg mb-3">📋 Messages Log</h3>
              <ul className="space-y-3 max-h-64 overflow-y-auto">
                {logs.map((log, i) => (
                  <li
                    key={i}
                    className="p-3 rounded-lg bg-white shadow border border-slate-100"
                  >
                    <p className="text-sm text-slate-500">{log.time}</p>
                    <p className="font-semibold">{log.name} ({log.email})</p>
                    <p className="text-slate-700 mt-1">{log.message}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

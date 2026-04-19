import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../App";

const EMAILJS_SERVICE_ID = "service_r4pjkex";
const EMAILJS_TEMPLATE_ID = "template_25qaj6r";
const EMAILJS_PUBLIC_KEY = "nHWgCdTQ1vFkNZ8yS";

const Contact = () => {
  const { dark } = useTheme();
  const formRef = useRef(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: `${form.firstName} ${form.lastName}`,
        from_email: form.email,
        phone: form.phone,
        message: form.message,
      }, EMAILJS_PUBLIC_KEY);
      setStatus({ loading: false, success: true, error: "" });
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch {
      setStatus({ loading: false, success: false, error: "Something went wrong. Please try again." });
    }
  };

  const inputClass = `w-full border text-sm rounded-xl px-5 py-4 outline-none transition-colors duration-200 ${
    dark
      ? "bg-[#111827] border-slate-700 text-white placeholder-slate-500 focus:border-orange-500 hover:border-slate-500"
      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500 hover:border-gray-400"
  }`;

  const contactLinks = [
    {
      label: "GitHub",
      value: "aakashsatyamjha",
      href: "https://github.com/aakashsatyamjha",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "aakash-satyam-jha",
      href: "https://www.linkedin.com/in/aakash-satyam-jha-7bab432a4",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: "LeetCode",
      value: "aakashsatyamjha",
      href: "https://leetcode.com/u/aakashsatyamjha/",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ),
    },
    {
      label: "Vercel",
      value: "aakashsatyamjhas-projects",
      href: "https://vercel.com/aakashsatyamjhas-projects",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.525H0l12-21.05 12 21.05z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className={`min-h-screen px-6 md:px-20 py-24 relative overflow-hidden transition-colors duration-300 ${dark ? "bg-[#080c14]" : "bg-slate-50"}`}>
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none" style={{ background: "radial-gradient(circle, #f97316, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-extrabold mb-3 ${dark ? "text-white" : "text-gray-900"}`}>
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className={dark ? "text-slate-400" : "text-gray-500"}>Let's connect and build something amazing together</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left: Links + avatar */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-center mb-2">
              <div className="relative">
                <svg width="220" height="260" viewBox="0 0 280 320" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="cbody" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#fb923c"/><stop offset="100%" stopColor="#c2410c"/></radialGradient>
                    <radialGradient id="cface" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#fde68a"/><stop offset="100%" stopColor="#fbbf24"/></radialGradient>
                  </defs>
                  <ellipse cx="140" cy="308" rx="80" ry="12" fill="rgba(249,115,22,0.15)"/>
                  <rect x="65" y="185" width="150" height="125" rx="30" fill="url(#cbody)"/>
                  <rect x="75" y="200" width="60" height="100" rx="18" fill="url(#cbody)"/>
                  <rect x="145" y="195" width="55" height="90" rx="10" fill="#1e293b"/>
                  <rect x="148" y="200" width="49" height="80" rx="8" fill="#0f172a"/>
                  <rect x="151" y="203" width="43" height="70" rx="6" fill="#1e3a5f"/>
                  <rect x="60" y="210" width="30" height="22" rx="11" fill="url(#cface)"/>
                  <rect x="200" y="195" width="22" height="14" rx="7" fill="url(#cface)"/>
                  <rect x="120" y="158" width="40" height="30" rx="8" fill="url(#cface)"/>
                  <ellipse cx="140" cy="130" rx="62" ry="65" fill="url(#cface)"/>
                  <rect x="108" y="118" width="22" height="16" rx="6" fill="none" stroke="#92400e" strokeWidth="2.5"/>
                  <rect x="150" y="118" width="22" height="16" rx="6" fill="none" stroke="#92400e" strokeWidth="2.5"/>
                  <line x1="130" y1="126" x2="150" y2="126" stroke="#92400e" strokeWidth="2"/>
                  <line x1="97" y1="126" x2="108" y2="126" stroke="#92400e" strokeWidth="2"/>
                  <line x1="172" y1="126" x2="183" y2="126" stroke="#92400e" strokeWidth="2"/>
                  <ellipse cx="119" cy="126" rx="5" ry="5.5" fill="#0f172a"/><ellipse cx="161" cy="126" rx="5" ry="5.5" fill="#0f172a"/>
                  <ellipse cx="120.5" cy="124.5" rx="1.5" ry="1.5" fill="white"/><ellipse cx="162.5" cy="124.5" rx="1.5" ry="1.5" fill="white"/>
                  <path d="M127 148 Q140 157 153 148" stroke="#92400e" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <ellipse cx="140" cy="68" rx="62" ry="22" fill="#1e293b"/>
                  <path d="M78 108 Q86 65 140 60 Q194 65 202 108" fill="#1e293b"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-500/50 group ${dark ? "bg-[#111827] border-slate-800 text-white" : "bg-white border-gray-200 text-gray-800 shadow-sm"}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${dark ? "bg-[#1e293b] text-slate-300 group-hover:text-orange-400" : "bg-gray-100 text-gray-600 group-hover:text-orange-500"}`}>
                    {link.icon}
                  </div>
                  <div>
                    <p className={`text-xs font-medium ${dark ? "text-slate-500" : "text-gray-400"}`}>{link.label}</p>
                    <p className={`text-sm font-semibold ${dark ? "text-white" : "text-gray-800"}`}>{link.value}</p>
                  </div>
                  <svg className="ml-auto w-4 h-4 opacity-30 group-hover:opacity-70 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className={`border rounded-2xl p-8 transition-colors duration-300 ${dark ? "bg-[#111827] border-slate-800" : "bg-white border-gray-200 shadow-sm"}`}>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input className={inputClass} type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
                <input className={inputClass} type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
              </div>
              <input className={inputClass} type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required />
              <input className={inputClass} type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" />
              <textarea className={`${inputClass} resize-none`} name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required rows={5} />
              {status.success && <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm px-4 py-3 rounded-xl">✓ Message sent! I'll get back to you soon.</div>}
              {status.error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">✕ {status.error}</div>}
              <button type="submit" disabled={status.loading} className="w-full bg-orange-500 hover:bg-orange-400 disabled:bg-orange-500/50 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                {status.loading ? (
                  <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                ) : (
                  <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

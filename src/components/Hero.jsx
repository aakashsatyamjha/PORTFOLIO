import { useTheme } from "../App";


const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/cv.pdf";
  link.download = "Aakash_Satyam_Jha_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  const { dark } = useTheme();

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/aakashsatyamjha",
      bg: "bg-[#24292e]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aakash-satyam-jha-7bab432a4",
      bg: "bg-[#0a66c2]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/aakashsatyamjha/",
      bg: "bg-[#1a1a1a]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      href: "https://vercel.com/aakashsatyamjhas-projects",
      bg: "bg-black border border-gray-700",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M24 22.525H0l12-21.05 12 21.05z" />
        </svg>
      ),
    },
  ];

  const badges = [
    { label: "👋 Hi!", style: "top-8 right-[-10px] bg-violet-600 border-violet-500", delay: "0s" },
    { label: "🤖 ML", style: "top-24 right-[-30px] bg-orange-500 border-orange-400 text-lg font-bold", delay: "0.4s" },
    { label: "⚛️ React", style: "bottom-44 right-[-35px] bg-[#1e293b] border-slate-700", delay: "0.8s" },
    { label: "🐍 Python", style: "bottom-28 left-[-10px] bg-[#1e293b] border-slate-700", delay: "1.2s" },
    { label: "B.Tech IT", style: "bottom-16 right-[10px] bg-blue-600 border-blue-500 font-bold text-xs", delay: "1.6s" },
  ];

  // Stats pulled from CV
  const stats = [
    { label: "CGPA", value: "7.636" },
    { label: "LeetCode", value: "150+" },
    { label: "Projects", value: "2+" },
  ];

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center pt-20 px-6 md:px-20 relative overflow-hidden transition-colors duration-300 ${
        dark ? "bg-[#0a0e1a]" : "bg-slate-100"
      }`}
    >
      {/* Background glows */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div className="z-10">
          {/* Social links */}
          <div className="flex gap-3 mb-8">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:scale-110 ${s.bg}`}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Heading */}
          <h1
            className={`text-5xl md:text-6xl font-extrabold leading-tight mb-3 ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, I'm <span className="text-orange-500">Aakash</span>
          </h1>

          {/* Role tag */}
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold px-3 py-1 rounded-full">
              ML Developer &amp; Frontend Engineer
            </span>
          </div>

          {/* Description — updated from CV */}
          <p
            className={`text-base leading-relaxed max-w-md mb-6 ${
              dark ? "text-slate-400" : "text-gray-600"
            }`}
          >
            B.Tech IT student at{" "}
            <span className={dark ? "text-slate-200 font-medium" : "text-gray-800 font-medium"}>
              Techno Main Salt Lake (MAKAUT)
            </span>
            , Kolkata. Skilled in Python, C++, React &amp; SQL — building ML-powered web apps and deploying on Streamlit &amp; Vercel. WBJEE Rank{" "}
            <span className="text-orange-400 font-semibold">7273</span>.
          </p>

          {/* Quick stats */}
          <div className="flex gap-6 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-extrabold text-orange-500">{s.value}</span>
                <span className={`text-xs font-medium ${dark ? "text-slate-500" : "text-gray-500"}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="mailto:aakash23112004@gmail.com"
              className={`flex items-center gap-1.5 text-sm ${
                dark ? "text-slate-400 hover:text-orange-400" : "text-gray-600 hover:text-orange-500"
              } transition-colors`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              aakash23112004@gmail.com
            </a>
            <span className={`flex items-center gap-1.5 text-sm ${dark ? "text-slate-400" : "text-gray-600"}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 8051528760
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/25"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className={`flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full border transition-all duration-200 hover:scale-105 active:scale-95 ${
                dark
                  ? "bg-transparent text-white border-slate-600 hover:border-slate-400"
                  : "bg-white text-gray-900 border-gray-300 hover:border-gray-500"
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right column — avatar */}
        <div className="relative flex justify-center items-center h-[500px]">
          <div
            className="absolute w-80 h-80 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #f97316, transparent 70%)" }}
          />
          <div className="relative z-10">
            <svg width="300" height="380" viewBox="0 0 300 380" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="hbody" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#c2410c" />
                </radialGradient>
                <radialGradient id="hface" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#fde68a" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </radialGradient>
              </defs>
              <ellipse cx="150" cy="365" rx="85" ry="14" fill="rgba(249,115,22,0.15)" />
              <rect x="70" y="195" width="160" height="170" rx="30" fill="url(#hbody)" />
              <rect x="85" y="210" width="130" height="86" rx="10" fill="#1e293b" />
              <rect x="88" y="213" width="124" height="80" rx="8" fill="#0f172a" />
              <rect x="92" y="217" width="116" height="72" rx="6" fill="#1e3a5f" />
              {/* Code text on laptop */}
              <text x="150" y="248" textAnchor="middle" fontSize="8" fill="#60a5fa" fontFamily="monospace">
                import sklearn
              </text>
              <text x="150" y="260" textAnchor="middle" fontSize="8" fill="#34d399" fontFamily="monospace">
                model.fit(X, y)
              </text>
              <text x="150" y="272" textAnchor="middle" fontSize="8" fill="#f97316" fontFamily="monospace">
                &lt;React /&gt;
              </text>
              <rect x="50" y="200" width="26" height="95" rx="13" fill="url(#hbody)" />
              <rect x="224" y="200" width="26" height="95" rx="13" fill="url(#hbody)" />
              <ellipse cx="150" cy="155" rx="65" ry="68" fill="url(#hface)" />
              <ellipse cx="128" cy="150" rx="9" ry="10" fill="#1e293b" />
              <ellipse cx="172" cy="150" rx="9" ry="10" fill="#1e293b" />
              <ellipse cx="128" cy="149" rx="6" ry="7" fill="#0f172a" />
              <ellipse cx="172" cy="149" rx="6" ry="7" fill="#0f172a" />
              <ellipse cx="130" cy="147" rx="2" ry="2" fill="white" />
              <ellipse cx="174" cy="147" rx="2" ry="2" fill="white" />
              <rect x="116" y="138" width="22" height="4" rx="7" fill="#92400e" />
              <rect x="162" y="138" width="22" height="4" rx="7" fill="#92400e" />
              <path d="M138 168 Q150 177 162 168" stroke="#92400e" strokeWidth="2" fill="none" strokeLinecap="round" />
              <ellipse cx="138" cy="167" rx="5" ry="3" fill="#fca5a5" opacity="0.5" />
              <ellipse cx="162" cy="167" rx="5" ry="3" fill="#fca5a5" opacity="0.5" />
              <ellipse cx="150" cy="87" rx="65" ry="22" fill="#1e293b" />
              <path d="M85 124 Q93 82 150 76 Q207 82 215 124" fill="#111827" />
            </svg>

            {/* Floating badges */}
            {badges.map((b, i) => (
              <div
                key={i}
                className={`absolute px-3 py-1.5 rounded-xl text-white text-sm font-semibold border animate-bounce ${b.style}`}
                style={{ animationDelay: b.delay, animationDuration: "2s" }}
              >
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-6 h-2 rounded-full bg-orange-500" />
        <div className={`w-2 h-2 rounded-full ${dark ? "bg-slate-600" : "bg-gray-400"}`} />
        <div className={`w-2 h-2 rounded-full ${dark ? "bg-slate-600" : "bg-gray-400"}`} />
      </div>
    </section>
  );
};

export default Hero;

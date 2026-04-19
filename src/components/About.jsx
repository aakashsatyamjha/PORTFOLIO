import { useTheme } from "../App";

const stats = [
  { value: "B.Tech", label: "IT Student" },
  //{ value: "3+", label: "Projects Built" },
  { value: "6+", label: "Skills Mastered" },
];

const About = () => {
  const { dark } = useTheme();
  return (
    <section id="about" className={`min-h-screen flex items-center px-6 md:px-20 py-24 relative overflow-hidden transition-colors duration-300 ${dark ? "bg-[#0a0e1a]" : "bg-white"}`}>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none -translate-y-1/2" style={{ background: "radial-gradient(circle, #f97316, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center items-center">
          <svg className="absolute w-[460px] h-[460px] opacity-90" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,5 125,70 195,70 140,110 160,175 100,135 40,175 60,110 5,70 75,70" fill="#f97316"/>
          </svg>
          <div className={`absolute top-12 left-20 w-12 h-12 rounded-xl flex items-center justify-center border hover:scale-110 transition-transform ${dark ? "bg-[#1e293b] border-slate-700" : "bg-white border-gray-200 shadow"}`}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#61dafb" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 12 12)"/></svg>
          </div>
          <div className={`absolute top-12 right-20 w-12 h-12 rounded-xl flex items-center justify-center border hover:scale-110 transition-transform ${dark ? "bg-[#1e293b] border-slate-700" : "bg-white border-gray-200 shadow"}`}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2C9 2 7 3.5 7 5.5V8h5v1H5.5C3.5 9 2 10.5 2 13s1.5 4 3.5 4H7v-3c0-2 2-3.5 5-3.5s5 1.5 5 3.5v5.5c0 2-2 3.5-5 3.5S7 21 7 19v-.5H5c-2 0-3-1.5-3-3.5" fill="none" stroke="#3b82f6" strokeWidth="1.5"/><path d="M12 2C15 2 17 3.5 17 5.5V8h-5V9h5.5C19.5 9 21 10.5 21 13s-1.5 4-3.5 4H17v-3c0-2-2-3.5-5-3.5" fill="none" stroke="#f59e0b" strokeWidth="1.5"/><circle cx="9.5" cy="5.5" r="1" fill="#3b82f6"/><circle cx="14.5" cy="18.5" r="1" fill="#f59e0b"/></svg>
          </div>
          <div className="absolute bottom-24 right-14 w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center font-black text-black text-xl hover:scale-110 transition-transform shadow-lg">JS</div>
          <div className="relative z-10 mt-4">
            <svg width="260" height="320" viewBox="0 0 260 320" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="abody" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#fcd34d"/><stop offset="100%" stopColor="#d97706"/></radialGradient>
                <radialGradient id="aface" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#fde68a"/><stop offset="100%" stopColor="#fbbf24"/></radialGradient>
              </defs>
              <ellipse cx="130" cy="308" rx="70" ry="12" fill="rgba(249,115,22,0.2)"/>
              <rect x="60" y="180" width="140" height="140" rx="28" fill="#1e40af"/>
              <rect x="78" y="165" width="44" height="60" rx="8" fill="#1e40af"/>
              <rect x="138" y="165" width="44" height="60" rx="8" fill="#1e40af"/>
              <rect x="68" y="188" width="124" height="60" rx="0" fill="#fcd34d"/>
              <rect x="55" y="210" width="82" height="56" rx="8" fill="#0f172a"/>
              <rect x="58" y="213" width="76" height="50" rx="6" fill="#1e3a5f"/>
              <circle cx="96" cy="238" r="12" fill="#f97316" opacity="0.8"/>
              <rect x="30" y="182" width="34" height="26" rx="13" fill="#fcd34d"/>
              <rect x="196" y="182" width="34" height="26" rx="13" fill="#fcd34d"/>
              <rect x="113" y="155" width="34" height="30" rx="8" fill="url(#aface)"/>
              <ellipse cx="130" cy="130" rx="58" ry="62" fill="url(#aface)"/>
              <rect x="100" y="120" width="22" height="16" rx="6" fill="none" stroke="#92400e" strokeWidth="2.5"/>
              <rect x="138" y="120" width="22" height="16" rx="6" fill="none" stroke="#92400e" strokeWidth="2.5"/>
              <line x1="122" y1="128" x2="138" y2="128" stroke="#92400e" strokeWidth="2"/>
              <line x1="89" y1="128" x2="100" y2="128" stroke="#92400e" strokeWidth="2"/>
              <line x1="160" y1="128" x2="171" y2="128" stroke="#92400e" strokeWidth="2"/>
              <ellipse cx="111" cy="128" rx="5" ry="5.5" fill="#0f172a"/><ellipse cx="149" cy="128" rx="5" ry="5.5" fill="#0f172a"/>
              <ellipse cx="112.5" cy="126.5" rx="1.5" ry="1.5" fill="white"/><ellipse cx="150.5" cy="126.5" rx="1.5" ry="1.5" fill="white"/>
              <path d="M117 148 Q130 158 143 148" stroke="#92400e" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <ellipse cx="150" cy="72" rx="58" ry="20" fill="#1e293b"/>
              <path d="M72 110 Q78 70 130 66 Q182 70 188 110" fill="#1e293b"/>
            </svg>
          </div>
        </div>
        <div>
          <h2 className="text-5xl font-extrabold text-orange-500 mb-6">About Me</h2>
          <p className={`text-lg leading-relaxed mb-10 ${dark ? "text-slate-300" : "text-gray-600"}`}>
            I'm <span className="text-orange-500 font-semibold">Aakash Satyam Jha</span>, a B.Tech IT student with a deep passion for Web Development, Machine Learning, and Python libraries. I enjoy crafting modern, responsive web interfaces with React and Tailwind CSS, and I'm always exploring new technologies to level up my skills.
          </p>
          <div className="flex gap-10 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="group">
                <p className="text-4xl font-extrabold text-orange-500 group-hover:scale-110 transition-transform inline-block">{s.value}</p>
                <p className={`text-sm mt-1 ${dark ? "text-slate-400" : "text-gray-500"}`}>{s.label}</p>
              </div>
            ))}
          </div>
          <button onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })} className="bg-transparent font-semibold px-8 py-3.5 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
export default About;

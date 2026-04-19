import { useTheme } from "../App";

const projects = [
  {
    title: "PORTFOLIO",
    description: "A modern styled portfolio for personal",
    tags: ["React", "tailwindcss", "emailjs"],
    color1: "#1e293b",
    color2: "#0f172a",
    codeLink: "https://github.com/your-username/portfolio",
    demoLink: "https://your-portfolio.vercel.app",
  },
  {
    title: "ProfileCard",
    description: "Simple profile card UI",
    tags: ["HTML5", "CSS"],
    color1: "#0c1a2e",
    color2: "#0f172a",
    codeLink: "https://github.com/aakashsatyamjha/ProfileCard",
    demoLink: "https://profile-card-seven-pi.vercel.app/",
  },
  {
    title: "Coming Soon",
    description: "More projects will be added soon",
    tags: [],
    color1: "#1a0c2e",
    color2: "#0f172a",
    codeLink: "",
    demoLink: "",
  },
];

const Projects = () => {
  const { dark } = useTheme();

  return (
    <section
      id="projects"
      className={`min-h-screen px-6 md:px-20 py-24 relative overflow-hidden transition-colors duration-300 ${
        dark ? "bg-[#0a0e1a]" : "bg-white"
      }`}
    >
      <div
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #a855f7, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className={`text-5xl font-extrabold mb-3 ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            My <span className="text-orange-500">Projects</span>
          </h2>
          <p className={dark ? "text-slate-400" : "text-gray-500"}>
            A showcase of my recent work
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group ${
                dark
                  ? "bg-[#111827] border-slate-800 hover:border-orange-500/40 hover:shadow-orange-500/10"
                  : "bg-white border-gray-200 hover:border-orange-300 shadow-sm hover:shadow-orange-100"
              }`}
            >
              {/* Card Top */}
              <div className="p-4">
                <div
                  className="w-full h-44 rounded-xl overflow-hidden relative"
                  style={{
                    background: `linear-gradient(135deg, ${p.color1}, ${p.color2})`,
                  }}
                >
                  <div className="absolute inset-0 flex flex-col gap-2 p-4 opacity-60">
                    <div className="flex gap-2">
                      <div className="h-2 rounded bg-white/20 w-24" />
                      <div className="h-2 rounded bg-white/10 w-16" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-16 rounded bg-white/10 w-28" />
                      <div className="h-16 rounded bg-white/10 flex-1" />
                    </div>
                    <div className="h-2 rounded bg-orange-500/40 w-3/4" />
                    <div className="h-2 rounded bg-white/10 w-1/2" />
                  </div>
                  <div className="absolute bottom-3 right-3 text-white/20 text-xs font-mono">
                    {p.title}
                  </div>
                </div>
              </div>

              {/* Card Bottom */}
              <div className="px-5 pb-5">
                <h3
                  className={`font-bold text-lg mb-2 ${
                    dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {p.title}
                </h3>

                <p
                  className={`text-sm mb-4 ${
                    dark ? "text-slate-400" : "text-gray-500"
                  }`}
                >
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full border ${
                        dark
                          ? "text-slate-300 border-slate-700"
                          : "text-gray-600 border-gray-300"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {p.codeLink ? (
                    <a
                      href={p.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 text-sm py-2.5 rounded-xl border transition-all ${
                        dark
                          ? "border-slate-700 text-white hover:bg-slate-800"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Code
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 text-sm py-2.5 rounded-xl bg-gray-400 text-white cursor-not-allowed"
                    >
                      Code
                    </button>
                  )}

                  {p.demoLink ? (
                    <a
                      href={p.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white text-sm py-2.5 rounded-xl transition-all hover:scale-105"
                    >
                      Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 text-sm py-2.5 rounded-xl bg-gray-400 text-white cursor-not-allowed"
                    >
                      Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
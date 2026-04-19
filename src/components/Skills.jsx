import { useTheme } from "../App";

const skills = [
  { name: "HTML", proficiency: 92, barColor: "bg-orange-500", icon: <svg width="36" height="36" viewBox="0 0 24 24"><path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4zm13 4H7l.2 2h9.4l-.6 6.5-4 1.1-4-1.1-.3-3h2l.1 1.5 2.2.5 2.2-.5.3-3.5H7.5L7 7z" fill="#e34f26"/></svg> },
  { name: "CSS", proficiency: 88, barColor: "bg-blue-500", icon: <svg width="36" height="36" viewBox="0 0 24 24"><path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4zm13 4l-.3 3H9.8l.2 2h6.7l-.6 6.5-4.1 1.1-4.1-1.1-.3-2.5h2l.1 1.2 2.3.5 2.3-.5.3-3.2H9.5L9 7h8z" fill="#264de4"/></svg> },
  { name: "JavaScript", proficiency: 85, barColor: "bg-yellow-400", icon: <svg width="36" height="36" viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#f7df1e"/><path d="M6 17.5c.4.7 1 1.2 2 1.2 1.1 0 1.7-.5 1.7-1.3 0-.9-.7-1.2-1.8-1.7l-.6-.3C5.8 14.8 5 14 5 12.5c0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5.9c-.3-.6-.6-.8-1.2-.8-.6 0-1 .4-1 .8 0 .6.4.8 1.3 1.2l.6.3c1.8.8 2.7 1.6 2.7 3.1 0 1.8-1.4 2.8-3.3 2.8-1.8 0-3-1-3.6-2.2l1.5-.8zm7.5.2c.3.6.7 1 1.5 1 .7 0 1.2-.3 1.2-1.4V10h1.9v7.4c0 2.3-1.3 3.3-3.2 3.3-1.7 0-2.7-.9-3.2-1.9l1.8-1.1z" fill="#000"/></svg> },
  { name: "Tailwind CSS", proficiency: 90, barColor: "bg-cyan-400", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.716 1.219C13.313 10.48 14.388 11.6 16.5 11.6c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.716-1.219C15.187 7.12 14.112 6 12 6zM7.5 11.6C5.1 11.6 3.6 12.8 3 15.2c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.716 1.219C8.813 16.08 9.888 17.2 12 17.2c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.716-1.219C10.687 12.72 9.612 11.6 7.5 11.6z" fill="#06b6d4"/></svg> },
  { name: "React", proficiency: 82, barColor: "bg-cyan-400", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.5" fill="#61dafb"/><ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61dafb" strokeWidth="1.5" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/></svg> },
  { name: "Python", proficiency: 80, barColor: "bg-yellow-400", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2C9 2 7 3.5 7 5.5V8h5v1H5.5C3.5 9 2 10.5 2 13s1.5 4 3.5 4H7v-3c0-2 2-3.5 5-3.5s5 1.5 5 3.5v5.5c0 2-2 3.5-5 3.5S7 21 7 19v-.5H5c-2 0-3-1.5-3-3.5" fill="none" stroke="#3b82f6" strokeWidth="1.5"/><path d="M12 2C15 2 17 3.5 17 5.5V8h-5V9h5.5C19.5 9 21 10.5 21 13s-1.5 4-3.5 4H17v-3c0-2-2-3.5-5-3.5" fill="none" stroke="#f59e0b" strokeWidth="1.5"/><circle cx="9.5" cy="5.5" r="1" fill="#3b82f6"/><circle cx="14.5" cy="18.5" r="1" fill="#f59e0b"/></svg> },
  { name: "C / C++", proficiency: 75, barColor: "bg-blue-600", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14.5A4.5 4.5 0 1 1 16.5 12H15a3 3 0 1 0-3 3v1.5zm5-3h-1v-1h-1v1h-1v1h1v1h1v-1h1v-1zm3.5 0h-1v-1h-1v1h-1v1h1v1h1v-1h1v-1z" fill="#00599c"/></svg> },
  { name: "Vite", proficiency: 87, barColor: "bg-purple-500", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M21 3L13.5 17.5 12 14l-2 4L3 3h6l3 6 3-6z" fill="#a855f7" opacity="0.9"/></svg> },
  { name: "Git", proficiency: 78, barColor: "bg-orange-600", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="#f05032"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 1 1-1.1 1.059l-2.48-2.48v6.511a1.839 1.839 0 1 1-1.511-.041V9.075a1.839 1.839 0 0 1-.999-2.418L7.614 3.904.454 11.063a1.551 1.551 0 0 0 0 2.187l10.48 10.478a1.55 1.55 0 0 0 2.187 0l10.425-10.424a1.55 1.55 0 0 0 0-2.374z"/></svg> },
];

const Skills = () => {
  const { dark } = useTheme();
  return (
    <section id="skills" className={`min-h-screen px-6 md:px-20 py-24 relative overflow-hidden transition-colors duration-300 ${dark ? "bg-[#080c14]" : "bg-slate-50"}`}>
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none" style={{ background: "radial-gradient(circle, #f97316, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-extrabold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className={`text-base max-w-xl mx-auto ${dark ? "text-slate-400" : "text-gray-500"}`}>Technologies and tools I work with to bring ideas to life</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <div key={skill.name} className={`border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group cursor-pointer ${dark ? "bg-[#111827] border-slate-800 hover:border-orange-500/40" : "bg-white border-gray-200 hover:border-orange-300 shadow-sm"}`}>
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center border group-hover:border-orange-500/40 transition-colors ${dark ? "bg-[#1e293b] border-slate-700" : "bg-gray-100 border-gray-200"}`}>{skill.icon}</div>
                <span className={`font-semibold text-lg ${dark ? "text-white" : "text-gray-800"}`}>{skill.name}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm ${dark ? "text-slate-400" : "text-gray-500"}`}>Proficiency</span>
                <span className="text-orange-500 font-bold text-sm">{skill.proficiency}%</span>
              </div>
              <div className={`w-full h-2 rounded-full overflow-hidden ${dark ? "bg-slate-800" : "bg-gray-200"}`}>
                <div className={`h-full rounded-full ${skill.barColor} transition-all duration-700`} style={{ width: `${skill.proficiency}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;

import { useState, useEffect } from "react";
import { useTheme } from "../App";

const Navbar = () => {
  const { dark, setDark } = useTheme();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["home", "about", "skills", "projects", "contact"];
  const scrollTo = (id) => { setActive(id); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-300 ${
        scrolled
          ? dark ? "bg-[#0d1117]/90 backdrop-blur-md shadow-lg shadow-black/40" : "bg-white/90 backdrop-blur-md shadow-lg shadow-black/10"
          : dark ? "bg-[#161b27]/80 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
      style={{ border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)"}` }}
    >
      <span className={`font-bold text-xl mr-2 ${dark ? "text-white" : "text-gray-900"}`}>
        Portfolio<span className="text-orange-500">.</span>
      </span>
      <ul className="flex items-center gap-6">
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              className={`capitalize text-sm font-medium transition-all duration-200 relative pb-1 ${
                active === link
                  ? `${dark ? "text-white" : "text-gray-900"} after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:rounded`
                  : dark ? "text-slate-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >{link}</button>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 ml-2">
        <button
          onClick={() => setDark(!dark)}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
            dark ? "bg-slate-800 hover:bg-slate-700" : "bg-gray-200 hover:bg-gray-300"
          }`}
          title={dark ? "Light Mode" : "Dark Mode"}
        >{dark ? "☀️" : "🌙"}</button>
        <button onClick={() => scrollTo("contact")} className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95">
          Hire Me
        </button>
      </div>
    </nav>
  );
};
export default Navbar;

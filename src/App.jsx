import { useState, createContext, useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

function App() {
  const [dark, setDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className={`min-h-screen transition-colors duration-300 ${dark ? "bg-[#0a0e1a] text-white" : "bg-slate-100 text-gray-900"}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer className={`text-center text-sm py-6 border-t transition-colors duration-300 ${dark ? "text-slate-600 border-slate-800" : "text-gray-400 border-gray-200"}`}>
          © {new Date().getFullYear()} 
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

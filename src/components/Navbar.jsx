import { Home, User, Briefcase, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "work", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: Home, href: "#home", section: "home" },
    { name: "About", icon: User, href: "#about", section: "about" },
    { name: "Work", icon: Briefcase, href: "#work", section: "work" },
    { name: "Contact", icon: Mail, href: "#contact", section: "contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden sm:block fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? "w-auto px-2 py-1.5 bg-white/5 backdrop-blur-md border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            : "w-auto px-4 py-2 bg-transparent border-transparent"
        } rounded-full border`}
      >
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.section;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-amber-400 bg-amber-400/10 shadow-[0_0_15px_rgba(251,191,36,0.1)]"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                <Icon className={`${scrolled ? "w-4 h-4" : "w-5 h-5"} transition-all`} />
                <span className="text-sm font-medium">{item.name}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[85%] bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
        <div className="flex items-center justify-around py-2 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.section;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-amber-400 bg-amber-400/10"
                    : "text-slate-400"
                }`}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

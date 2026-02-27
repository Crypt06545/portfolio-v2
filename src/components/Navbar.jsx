import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "work", "contact"];
      const scrollPosition = window.scrollY + 100;

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
      {/* Desktop Navbar - Top (hidden on mobile) */}
      <nav
        className={`hidden sm:block fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled
            ? "w-[95%] sm:w-95 py-1 bg-black/80 backdrop-blur-lg shadow-lg"
            : "w-[95%] sm:w-105 py-1.5 bg-black/50 backdrop-blur-sm"
        } rounded-full border border-white/10`}
      >
        <div className="flex items-center justify-center gap-1 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.section;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-amber-400 bg-amber-500/10"
                    : "text-slate-400 hover:text-amber-300 hover:bg-white/5"
                }`}
              >
                <Icon className={`${scrolled ? "w-3.5 h-3.5" : "w-4 h-4"} transition-all duration-300`} />
                <span className={`${scrolled ? "text-xs" : "text-sm"} font-medium transition-all duration-300`}>
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <nav className="sm:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] bg-black/80 backdrop-blur-lg rounded-full border border-white/10 shadow-lg">
        <div className="flex items-center justify-around py-1.5 px-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.section;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`p-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-amber-400 bg-amber-500/10"
                    : "text-slate-400 hover:text-amber-300"
                }`}
                aria-label={item.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </nav>

      {/* Desktop spacer */}
      <div className="hidden sm:block h-16"></div>

      {/* Mobile spacer */}
      <div className="sm:hidden h-20"></div>
    </>
  );
};

export default Navbar;

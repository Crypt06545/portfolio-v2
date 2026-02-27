import EditorCard from "./EditorCard";
import { MousePointer2 } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const modules = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Express",
    "REST API",
    "Git",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-4 sm:px-6 md:px-12"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl">
        {/* LEFT SIDE */}
        <div className="flex-1 md:flex-[1.2] text-center md:text-left space-y-5 md:space-y-6 w-full">
          {/* SYSTEM BADGE */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] sm:text-[11px] tracking-widest font-medium text-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            SYSTEM.KERNEL :: v2.5.0 ONLINE
          </div>

          {/* NAME */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 leading-tight">
            Hello, I'm <br />
            <span className="text-amber-400">Mehadi Hasan</span>
          </h1>

          {/* ROLE / ARCHITECT */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium">
            &lt;Architect /&gt; Engineering Beyond Boundaries
          </p>

          {/* DESCRIPTION */}
          <p className="text-slate-400/90 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
            Specializing in distributed systems, real-time architecture, and
            high-performance applications. I design scalable backend services
            and seamless web platforms focused on reliability, performance, and
            clean architecture.
          </p>

          {/* MODULES */}
          <div className="space-y-3 max-w-xl mx-auto md:mx-0">
            <p className="text-amber-400 text-xs tracking-widest font-semibold">
              LOADED_MODULES:
            </p>

            <div className="flex justify-center md:justify-start flex-wrap gap-2">
              {modules.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 sm:px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA BUTTON */}
          <Button className="mt-2 cursor-pointer h-auto px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 rounded-xl bg-amber-500/10 text-amber-300 font-semibold border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400/50 transition text-sm sm:text-base">
            Explore My Work{" "}
            <MousePointer2 className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>

          {/* ARCH TAGLINE - More visible */}
          <div className="mt-6 text-center md:text-left">
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 animate-pulse">
              [user@archlinux ~]$ echo "I use Arch, btw" {">>"} ~/.bashrc
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 md:flex-1 flex justify-center w-full">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <EditorCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

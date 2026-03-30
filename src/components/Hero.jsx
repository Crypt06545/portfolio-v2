import React, { useEffect, useRef } from "react";
import EditorCard from "./EditorCard";
import { MousePointer2 } from "lucide-react";
import { Button } from "./ui/button";
import { StarsBackground } from "./animate-ui/components/backgrounds/stars";
import { gsap } from "gsap";

const modules = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Express", "REST API", "Git"];

const HeroSection = () => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const modulesRef = useRef(null);
  const ctaRef = useRef(null);
  const taglineRef = useRef(null);
  const editorRef = useRef(null);

  const handleScroll = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Set initial states
      gsap.set([badgeRef.current, h1Ref.current, roleRef.current, descRef.current, modulesRef.current, ctaRef.current, taglineRef.current], {
        opacity: 0,
        y: 30,
      });
      gsap.set(editorRef.current, {
        opacity: 0,
        x: 50,
      });

      tl
        .to(badgeRef.current,   { opacity: 1, y: 0, duration: 0.7 }, 0.1)
        .to(h1Ref.current,      { opacity: 1, y: 0, duration: 0.8 }, 0.3)
        .to(roleRef.current,    { opacity: 1, y: 0, duration: 0.7 }, 0.5)
        .to(descRef.current,    { opacity: 1, y: 0, duration: 0.7 }, 0.65)
        .to(modulesRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.8)
        .to(ctaRef.current,     { opacity: 1, y: 0, duration: 0.7 }, 0.95)
        .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.7 }, 1.1)
        .to(editorRef.current,  { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, 0.4);

      // Stagger the module badges
      const badges = modulesRef.current?.querySelectorAll(".module-badge");
      if (badges?.length) {
        gsap.fromTo(badges,
          { opacity: 0, scale: 0.8, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "back.out(1.5)", delay: 0.85 }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-4 sm:px-6 md:px-12 overflow-hidden bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <StarsBackground starColor={isDarkMode ? "#fbbf24" : "#ffffff"} />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl">

        {/* LEFT */}
        <div className="flex-1 md:flex-[1.2] text-center md:text-left space-y-5 md:space-y-6 w-full">

          <div ref={badgeRef} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-amber-500/20 text-[10px] sm:text-[11px] tracking-widest font-mono font-medium text-amber-300 backdrop-blur-md shadow-[0_0_20px_rgba(251,191,36,0.08)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]"></span>
            SYSTEM.KERNEL :: v2.5.0 ONLINE
          </div>

          <h1 ref={h1Ref} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 leading-tight">
            Hello, I'm <br />
            <span className="text-amber-400 relative">
              Mehadi Hasan
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400/80 to-transparent rounded-full" />
            </span>
          </h1>

          <p ref={roleRef} className="text-base sm:text-lg md:text-xl text-slate-300 font-mono">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-slate-200">Architect</span>
            <span className="text-cyan-400"> /&gt;</span>
            <span className="text-slate-500 text-sm ml-2">Engineering Beyond Boundaries</span>
          </p>

          <p ref={descRef} className="text-slate-400/80 text-sm sm:text-base max-w-xl mx-auto md:mx-0 leading-relaxed">
            Specializing in distributed systems, real-time architecture, and
            high-performance applications. I design scalable backend services
            and seamless web platforms.
          </p>

          <div ref={modulesRef} className="space-y-3 max-w-xl mx-auto md:mx-0">
            <p className="text-amber-400/70 text-[10px] tracking-[0.2em] font-mono font-semibold">
              ── LOADED_MODULES ──
            </p>
            <div className="flex justify-center md:justify-start flex-wrap gap-2">
              {modules.map((tech) => (
                <span
                  key={tech}
                  className="module-badge px-2.5 py-1 rounded-lg bg-white/4 border border-white/10 text-xs text-slate-300 whitespace-nowrap backdrop-blur-sm hover:border-amber-500/30 hover:text-amber-300 hover:bg-amber-500/8 transition-all duration-300 cursor-default font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div ref={ctaRef}>
            <Button
              onClick={handleScroll}
              className="mt-1 cursor-pointer h-auto px-8 sm:px-10 py-2.5 sm:py-3 rounded-xl bg-amber-500/10 text-amber-300 font-mono font-semibold border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)] transition-all duration-300 text-sm sm:text-base active:scale-95"
            >
              Explore My Work
              <MousePointer2 className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div ref={taglineRef} className="text-center md:text-left">
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-600">
              <span className="text-emerald-500/70">[user@archlinux ~]$</span>
              <span className="text-slate-500 animate-pulse"> echo "I use Arch !"</span>
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div ref={editorRef} className="flex-1 flex justify-center w-full">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <EditorCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

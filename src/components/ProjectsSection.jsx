import { useState, useRef, useEffect } from "react";
import { FolderKanban, Rocket, LayoutGrid, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import TerminalCard from "./TerminalCard";
import CodeCard from "./CodeCard";
import { projects } from "@/assets/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyleToggle = ({ cardStyle, setCardStyle }) => (
  <div className="inline-flex items-center gap-1 mt-4 p-1 rounded-xl bg-white/4 border border-white/8 backdrop-blur-sm">
    {[
      { id: "terminal", icon: Terminal, label: "Terminal" },
      { id: "code", icon: LayoutGrid, label: "Editor" },
    ].map(({ id, icon: Icon, label }) => (
      <button
        key={id}
        onClick={() => setCardStyle(id)}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all duration-300",
          cardStyle === id
            ? "bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-[0_0_15px_rgba(251,191,36,0.1)]"
            : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
        )}
      >
        <Icon className="w-3 h-3" />
        {label}
      </button>
    ))}
  </div>
);

const ProjectsSection = () => {
  const [cardStyle, setCardStyle] = useState("terminal");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" }
        }
      );

      const cards = gridRef.current?.querySelectorAll(".project-card");
      if (cards?.length) {
        gsap.fromTo(cards,
          { opacity: 0, y: 60, scale: 0.94 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.7, stagger: 0.12, ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%", toggleActions: "play none none none" }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [cardStyle]);

  return (
    <section id="work" ref={sectionRef} className="px-4 sm:px-6 md:px-12 py-16 md:py-24 relative">
      {/* Section top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-amber-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-[10px] font-mono text-slate-500 mb-4 tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#22d3ee]"></span>
            FEATURED_WORK.MAP()
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-100 flex items-center justify-center gap-3 font-mono">
            <FolderKanban className="w-6 h-6 text-amber-400" />
            &lt;Featured_Work /&gt;
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-mono">// {projects.length} projects shipped to production</p>
          <StyleToggle cardStyle={cardStyle} setCardStyle={setCardStyle} />
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {cardStyle === "terminal" && <TerminalCard project={project} />}
              {cardStyle === "code" && <CodeCard project={project} />}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="bg-white/4 hover:bg-white/8 text-amber-300 border border-amber-500/25 hover:border-amber-500/40 px-8 py-2.5 rounded-xl font-mono text-sm hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-300 active:scale-95">
            <Rocket className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

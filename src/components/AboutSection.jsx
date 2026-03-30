import { useEffect, useRef } from "react";
import {
  MapPin, Terminal, User, Cpu, HardDrive,
  Wifi, Activity, Code2, Globe, Layers
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const userData = {
    name: "MEHADI HASAN",
    location: "Bogura, Bangladesh",
    status: "Available for Hire",
    uptime: "4+",
    projects: "50+"
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" }
        }
      );

      // Stagger bento cards
      const cards = gridRef.current?.querySelectorAll(".bento-card");
      if (cards?.length) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.7, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%", toggleActions: "play none none none" }
          }
        );
      }

      // Uptime counter animation
      const uptimeEl = document.getElementById("uptime-counter");
      if (uptimeEl) {
        gsap.fromTo({ val: 0 }, { val: 4 }, {
          duration: 1.5, ease: "power2.out",
          onUpdate: function() { uptimeEl.textContent = Math.floor(this.targets()[0].val) + "+"; },
          scrollTrigger: { trigger: uptimeEl, start: "top 80%", toggleActions: "play none none none" }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="px-4 sm:px-6 md:px-12 py-20 relative">
      {/* Section ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 shadow-[0_0_20px_rgba(251,191,36,0.1)]">
            <Terminal className="w-5 h-5 text-amber-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight font-mono">
            System.<span className="text-amber-400">profile</span>
            <span className="text-slate-600">()</span>
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-amber-500/20 to-transparent ml-4" />
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Main Identity - Span 8 */}
          <div className="bento-card md:col-span-8 group relative overflow-hidden rounded-3xl border border-white/8 bg-[#0d1117]/60 backdrop-blur-xl p-8 hover:border-amber-500/30 hover:shadow-[0_0_50px_rgba(251,191,36,0.06)] transition-all duration-500">
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-amber-400/70 font-mono text-[10px] tracking-[0.2em] mb-2">01 // THE_OPERATOR</p>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-100 uppercase tracking-tighter italic">
                    {userData.name}
                  </h3>
                </div>
                <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <User className="w-5 h-5" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {[
                    { icon: MapPin, text: userData.location, color: "text-amber-400" },
                    { icon: Globe, text: "Full-Stack Architect", color: "text-cyan-400" },
                  ].map(({ icon: Icon, text, color }) => (
                    <div key={text} className="flex items-center gap-3 text-slate-400">
                      <Icon className={`w-4 h-4 ${color} flex-shrink-0`} />
                      <span className="text-sm font-mono">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-end sm:justify-end">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{userData.status}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>

          {/* Uptime - Span 4 */}
          <div className="bento-card md:col-span-4 rounded-3xl border border-white/8 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-between hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(251,191,36,0.08)] transition-all duration-500 group">
            <div className="flex justify-between items-center">
              <Cpu className="w-4 h-4 text-amber-400 group-hover:animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-slate-600 font-mono text-[9px] tracking-widest uppercase">CPU_UPTIME</span>
            </div>
            <div>
              <h4 id="uptime-counter" className="text-5xl font-black text-amber-400 font-mono tracking-tighter">{userData.uptime}</h4>
              <p className="text-slate-500 text-[10px] mt-1 uppercase tracking-[0.15em] font-mono">Years of Debugging</p>
              <div className="mt-3 flex gap-1">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`flex-1 h-1 rounded-full ${i < 5 ? 'bg-amber-400/60' : 'bg-white/8'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Mission - Span 5 */}
          <div className="bento-card md:col-span-5 rounded-3xl border border-white/8 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.06)] transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono text-slate-400 tracking-[0.2em] uppercase">MISSION.EXE</span>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/5 font-mono text-[11px] text-slate-400 leading-relaxed">
              <span className="text-cyan-400">&gt;</span> Translating complex business requirements into robust technical solutions.
              <br /><span className="text-cyan-400 mt-1 block">&gt;</span> Focused on Microservices & AI integration.
            </div>
          </div>

          {/* Projects - Span 4 */}
          <div className="bento-card md:col-span-4 rounded-3xl border border-white/8 bg-[#0d1117]/60 backdrop-blur-xl p-6 flex flex-col justify-between group hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(52,211,153,0.06)] transition-all duration-500">
            <div className="flex justify-between items-center">
              <HardDrive className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-600 font-mono text-[9px] tracking-widest">DISK_USAGE</span>
            </div>
            <div>
              <h4 className="text-5xl font-black text-slate-100 font-mono">{userData.projects}</h4>
              <div className="w-full h-1.5 bg-slate-800 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 w-[92%] transition-all duration-1000 group-hover:w-full rounded-full" />
              </div>
              <p className="text-slate-600 text-[9px] mt-2 font-mono uppercase tracking-[0.15em]">Production Builds Loaded</p>
            </div>
          </div>

          {/* Stack - Span 3 */}
          <div className="bento-card md:col-span-3 rounded-3xl border border-white/8 bg-[#0d1117]/60 backdrop-blur-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.06)] transition-all duration-500 group">
            <div className="flex -space-x-2">
              <div className="w-11 h-11 rounded-2xl bg-[#161b22] border border-white/10 flex items-center justify-center group-hover:-translate-y-2 group-hover:-rotate-6 transition-transform duration-500">
                <Code2 className="w-5 h-5 text-violet-400" />
              </div>
              <div className="w-11 h-11 rounded-2xl bg-[#161b22] border border-white/10 flex items-center justify-center group-hover:translate-y-2 group-hover:rotate-6 transition-transform duration-500">
                <Layers className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-slate-200 font-bold text-[11px] uppercase tracking-[0.15em] font-mono">MERN_STACK</p>
              <p className="text-slate-600 text-[9px] mt-1 font-mono">Optimization: 99%</p>
            </div>
          </div>

          {/* Long Description - Span 12 */}
          <div className="bento-card md:col-span-12 rounded-3xl border border-white/8 bg-[#0d1117]/40 backdrop-blur-xl p-8 relative group hover:border-amber-500/20 transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="p-4 rounded-2xl bg-amber-500/8 text-amber-400 border border-amber-500/15 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500">
                <Wifi className="w-7 h-7 animate-pulse" />
              </div>
              <p className="text-slate-400 leading-relaxed text-sm max-w-3xl font-mono">
                <span className="text-amber-400/80 italic mr-2">system@archlinux:~$</span>
                Specializing in distributed systems, real-time architecture, and high-performance applications.
                I bridge the gap between heavy backend logic and seamless user interfaces with a focus on
                <span className="text-cyan-400/80"> reliability</span> and
                <span className="text-emerald-400/80"> clean architecture</span>.
              </p>
            </div>
            {/* Bottom separator glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import {
  MapPin,
  Terminal,
  User,
  Cpu,
  HardDrive,
  Wifi,
  Activity,
  Code2,
  Globe,
  Layers
} from "lucide-react";

const AboutSection = () => {
  const userData = {
    name: "MEHADI HASAN",
    location: "Bogura, Bangladesh",
    status: "Available for Hire",
    uptime: "4+ Years",
    projects: "50+ Completed"
  };

  return (
    <section id="about" className="px-4 sm:px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <Terminal className="w-6 h-6 text-amber-400" />
          </div>
          <h2 className="text-3xl font-bold text-slate-100 tracking-tight">
            System.<span className="text-amber-400">profile</span>()
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Main Identity Card - Span 8 */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-amber-500/30">
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-amber-400 font-mono text-xs mb-1">01 // THE_OPERATOR</p>
                  <h3 className="text-4xl font-bold text-slate-100 uppercase tracking-tighter italic">
                    {userData.name}
                  </h3>
                </div>
                <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <User className="w-6 h-6" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-400">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-mono">{userData.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-mono">Full-Stack Architect</span>
                  </div>
                </div>
                <div className="flex items-end sm:justify-end">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{userData.status}</span>
                    </div>
                </div>
              </div>
            </div>
            {/* Subtle Grid Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          {/* Uptime Stat - Span 4 */}
          <div className="md:col-span-4 rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all">
            <div className="flex justify-between items-center">
                <Cpu className="w-5 h-5 text-amber-400" />
                <span className="text-slate-500 font-mono text-[10px]">CPU_UPTIME</span>
            </div>
            <div>
                <h4 className="text-5xl font-bold text-amber-400 font-mono tracking-tighter">{userData.uptime}</h4>
                <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest">Years of Debugging</p>
            </div>
          </div>

          {/* Current Mission - Span 5 */}
          <div className="md:col-span-5 rounded-3xl border border-white/10 bg-slate-900/40 p-6 hover:border-cyan-500/30 transition-all backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
                <Activity className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-mono text-slate-300 tracking-widest">MISSION.EXE</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed font-mono">
                &gt; Translating complex business requirements into robust technical
                solutions. Focused on Microservices & AI.
            </p>
          </div>

          {/* Project Storage - Span 4 */}
          <div className="md:col-span-4 rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between group hover:border-emerald-500/30 transition-all">
             <div className="flex justify-between items-center">
                <HardDrive className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-500 font-mono text-[10px]">DISK_USAGE</span>
            </div>
            <div>
                <h4 className="text-5xl font-bold text-slate-100 font-mono">{userData.projects}</h4>
                <div className="w-full h-1 bg-slate-800 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[92%] transition-all group-hover:w-full duration-1000" />
                </div>
                <p className="text-slate-500 text-[10px] mt-2 font-mono uppercase">Production Builds Loaded</p>
            </div>
          </div>

          {/* Stack Summary - Span 3 */}
          <div className="md:col-span-3 rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col items-center justify-center gap-4 hover:border-purple-500/30 transition-all group">
            <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center group-hover:translate-y-[-5px] transition-transform">
                    <Code2 className="w-5 h-5 text-purple-400" />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center group-hover:translate-y-[5px] transition-transform">
                    <Layers className="w-5 h-5 text-cyan-400" />
                </div>
            </div>
            <div className="text-center">
                <p className="text-slate-200 font-bold text-xs uppercase tracking-widest">MERN_STACK</p>
                <p className="text-slate-500 text-[10px] mt-1 font-mono">Optimization: 99%</p>
            </div>
          </div>

          {/* Long Description Card - Span 12 */}
          <div className="md:col-span-12 rounded-3xl border border-white/10 bg-white/5 p-8 relative group hover:border-amber-500/30 transition-all">
             <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="p-4 rounded-2xl bg-white/5 text-amber-400 border border-white/10">
                    <Wifi className="w-8 h-8 animate-pulse" />
                </div>
                <div>
                    <p className="text-slate-300 leading-relaxed max-w-3xl">
                        <span className="text-amber-400 font-mono italic mr-2">system@archlinux:~$</span>
                        Specializing in distributed systems, real-time architecture, and high-performance applications.
                        I bridge the gap between heavy backend logic and seamless user interfaces with a focus on
                        reliability and clean architecture.
                    </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

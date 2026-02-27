import {
  MapPin,
  Terminal,
  User,
  Cpu,
  HardDrive,
  Wifi,
  Activity,
} from "lucide-react";

const AboutSection = () => {
  // Your details from JSON
  const userData = {
    name: "MEHADI HASAn",
    email: "fmehadi25@gmail.com",
    github: "@Crypt06545",
    linkedin: "@mehadihasan0",
    portfolio: "https://mehadi.onrender.com/",
    location: "Bogura Sadar, Bogura",
  };

  return (
    <section id="about" className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="mb-10 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 flex items-center justify-center gap-2">
          <Terminal className="w-6 h-6 text-amber-400" />
          &lt;About_System /&gt;
        </h2>

        {/* Content Container */}
        <div className="relative">
          {/* Terminal prompt */}
          <div className="flex items-center gap-2 mb-6 font-mono text-xs text-slate-400">
            <span className="text-amber-400">$</span>
            <span>neofetch --full</span>
          </div>

          {/* System Details - Full Width */}
          <div className="space-y-2 font-mono text-xs sm:text-sm bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10 mb-8">
            <div className="grid grid-cols-4 gap-2 pb-2 border-b border-white/10">
              <span className="text-amber-400">OPERATOR:</span>
              <span className="text-slate-200 col-span-3 flex items-center gap-1">
                <User className="w-3 h-3 text-emerald-400" />
                {userData.name}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 pb-2 border-b border-white/10">
              <span className="text-amber-400">ROLE:</span>
              <span className="text-cyan-300 col-span-3">
                FULL_STACK_DEVELOPER
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 pb-2 border-b border-white/10">
              <span className="text-amber-400">HOSTNAME:</span>
              <span className="text-slate-200 col-span-3 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                {userData.location}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 pb-2 border-b border-white/10">
              <span className="text-amber-400">KERNEL:</span>
              <span className="text-slate-200 col-span-3">
                continuous-learning
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              <span className="text-amber-400">STATUS:</span>
              <span className="flex items-center gap-2 col-span-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-emerald-400">OPEN</span>
              </span>
            </div>
          </div>

          {/* user_profile.log */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs">
              <span className="text-amber-400">$</span>
              <span className="text-cyan-400">cat</span>
              <span className="text-purple-400">user_profile.log</span>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-md p-4 font-mono text-xs sm:text-sm border border-white/10">
              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                <Activity className="w-3 h-3" />
                <span>[ whoami ]</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-4 border-l-2 border-amber-500/30">
                Passionate full-stack developer with expertise in modern web
                technologies. I specialize in creating robust, scalable
                applications that solve real-world problems.
              </p>
            </div>
          </div>

          {/* mission.txt */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs">
              <span className="text-amber-400">$</span>
              <span className="text-cyan-400">cat</span>
              <span className="text-pink-400">mission.txt</span>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-md p-4 font-mono text-xs sm:text-sm border border-white/10">
              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                <Cpu className="w-3 h-3" />
                <span>[ current_mission ]</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-4 border-l-2 border-amber-500/30">
                Translating complex business requirements into robust technical
                solutions. Currently focused on Microservices, Real-time
                Systems, and AI Integration.
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 text-center border-t border-white/10 pt-6">
            {/* Experience */}
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono">
                4+
              </div>
              <div className="flex items-center justify-center gap-1 text-[10px] sm:text-xs text-slate-400">
                <Cpu className="w-3 h-3" />
                <span>CPU::YEARS</span>
              </div>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full"
                  style={{ width: "80%" }}
                />
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono">
                50+
              </div>
              <div className="flex items-center justify-center gap-1 text-[10px] sm:text-xs text-slate-400">
                <HardDrive className="w-3 h-3" />
                <span>MEM::PROJECTS</span>
              </div>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full"
                  style={{ width: "95%" }}
                />
              </div>
            </div>

            {/* Caffeine */}
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">
                ∞
              </div>
              <div className="flex items-center justify-center gap-1 text-[10px] sm:text-xs text-slate-400">
                <Wifi className="w-3 h-3" />
                <span>NET::CAFFEINE</span>
              </div>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-400 rounded-full animate-pulse"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

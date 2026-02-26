import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Briefcase,
  Database,
  Coffee,
  Github,
  Linkedin,
  ExternalLink,
  Terminal,
  User,
  Cpu,
  HardDrive,
  Wifi,
  Activity,
  TerminalIcon,
  FolderKanban,
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
    <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header - Arch style but with original colors */}
          <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 flex items-center justify-center gap-2">
            <Terminal className="w-6 h-6 text-amber-400" />
            &lt;About_System /&gt;
          </h2>

        {/* Main Card - Arch terminal style but with original colors */}
        <Card className="w-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden">
          {/* Card Header - Terminal window style */}
          <CardHeader className="flex flex-row justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10 bg-black/20">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-3 h-3 text-amber-400" />
              <span className="text-[10px] sm:text-xs text-slate-400 font-mono truncate ml-2">
                user@archlinux:~/about
              </span>
            </div>
          </CardHeader>

          {/* Content */}
          <CardContent className="p-5 sm:p-6 md:p-8 relative">
            {/* Arch grid background - subtle */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 20 L80 20 L80 80 L20 80 Z' stroke='%23ffffff' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            {/* System Info - neofetch style with original colors */}
            <div className="relative z-10">
              {/* Terminal prompt */}
              <div className="flex items-center gap-2 mb-6 font-mono text-xs text-slate-400">
                <span className="text-amber-400">$</span>
                <span>neofetch --full</span>
              </div>

              {/* Profile Info Grid - system info style */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* ASCII Avatar Column - using Arch style but with original colors */}
                <div className="font-mono text-amber-400/40 text-[8px] leading-none whitespace-pre border border-white/10 rounded-lg p-3 bg-black/30">
                  {`     .--.
                    .'_\\/_'.
                    '. /\\ .'
                      "||"
        .____.    .--. || .--.
       / .-.  \\  / . \\||/ . \\
      |/   \\  ||| { } ||{ } |
            \\ ||| { } ||{ } |
            / ||| '_' || '_' |
       .-' /  ||\\___/ ||\\___/|
      '--'   '-'
      `}
                </div>

                {/* System Details - with original colors */}
                <div className="md:col-span-2 space-y-2 font-mono text-xs sm:text-sm bg-black/30 rounded-lg p-4 border border-white/10">
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
              </div>

              {/* user_profile.log - terminal style with original colors */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                  <span className="text-amber-400">$</span>
                  <span className="text-cyan-400">cat</span>
                  <span className="text-purple-400">user_profile.log</span>
                </div>
                <div className="bg-black/40 rounded-md p-4 font-mono text-xs sm:text-sm border border-white/10">
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

              {/* mission.txt - terminal style with original colors */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                  <span className="text-amber-400">$</span>
                  <span className="text-cyan-400">cat</span>
                  <span className="text-pink-400">mission.txt</span>
                </div>
                <div className="bg-black/40 rounded-md p-4 font-mono text-xs sm:text-sm border border-white/10">
                  <div className="flex items-center gap-2 text-emerald-400 mb-3">
                    <Cpu className="w-3 h-3" />
                    <span>[ current_mission ]</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-4 border-l-2 border-amber-500/30">
                    Translating complex business requirements into robust
                    technical solutions. Currently focused on Microservices,
                    Real-time Systems, and AI Integration.
                  </p>
                </div>
              </div>

              {/* Stats Row - system monitor style but with original colors */}
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

              {/* Arch tagline - subtle */}
              <div className="mt-4 text-center">
                <span className="text-[8px] font-mono text-slate-500/30 animate-pulse">
                  [user@archlinux ~]$ echo "I use Arch, btw" {">>"} ~/.bashrc
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;

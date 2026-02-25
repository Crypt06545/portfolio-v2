import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Briefcase,
  Database,
  Coffee,
  Github,
  Linkedin,
  ExternalLink,
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
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] sm:text-[11px] tracking-widest font-medium text-amber-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            SYSTEM.ABOUT :: USER_PROFILE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100">
            # About.system
          </h2>
        </div>

        {/* Main Card */}
        <Card className="w-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden">
          {/* Card Header */}
          <CardHeader className="flex flex-row justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
            </div>
            <span className="text-[10px] sm:text-xs text-slate-400 font-mono truncate ml-2">
              about_system
            </span>
          </CardHeader>

          {/* Content */}
          <CardContent className="p-5 sm:p-6 md:p-8">
            {/* System Avatar */}
            <div className="text-center mb-6">
              <span className="text-xs text-amber-400/70 font-mono">
                System Avatar
              </span>
            </div>

            {/* Profile Info Grid */}
            <div className="space-y-3 font-mono text-sm border border-white/5 rounded-lg p-4 bg-black/20 mb-6">
              <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
                <span className="text-amber-400">OPERATOR</span>
                <span className="text-slate-200 col-span-2">
                  {userData.name}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
                <span className="text-amber-400">ROLE</span>
                <span className="text-cyan-300 col-span-2">
                  FULL_STACK_SOFTWARE_ENGINEER
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
                <span className="text-amber-400">LOCATION</span>
                <span className="text-slate-200 col-span-2 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  {userData.location}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
                <span className="text-amber-400">STATUS</span>
                <span className="flex items-center gap-2 col-span-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-emerald-400 font-medium">OPEN</span>
                </span>
              </div>
            </div>

            {/* user_profile.log */}
            <div className="mb-6">
              <p className="text-xs text-slate-500 font-mono mb-2">
                user_profile.log
              </p>
              <div className="bg-black/40 rounded-md p-4 font-mono text-xs sm:text-sm">
                <p className="text-emerald-400 mb-2">➜ whoami</p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Passionate full-stack developer with expertise in modern web
                  technologies. I specialize in creating robust, scalable
                  applications that solve real-world problems.
                </p>
              </div>
            </div>

            {/* mission.txt */}
            <div className="mb-8">
              <div className="bg-black/40 rounded-md p-4 font-mono text-xs sm:text-sm">
                <p className="text-emerald-400 mb-2">➜ cat mission.txt</p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Translating complex business requirements into robust
                  technical solutions. Currently focused on Microservices,
                  Real-time Systems, and AI Integration.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 text-center border-t border-white/10 pt-6">
              {/* Experience */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono">
                  4+
                </div>
                <div className="flex items-center justify-center gap-1 text-[10px] sm:text-xs text-slate-400">
                  <Briefcase className="w-3 h-3" />
                  <span>YRS EXP</span>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono">
                  50+
                </div>
                <div className="flex items-center justify-center gap-1 text-[10px] sm:text-xs text-slate-400">
                  <Database className="w-3 h-3" />
                  <span>PROJECTS</span>
                </div>
              </div>

              {/* Caffeine */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">
                  ∞
                </div>
                <div className="flex items-center justify-center gap-1 text-[10px] sm:text-xs text-slate-400">
                  <Coffee className="w-3 h-3" />
                  <span>CAFFEINE</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-white/10">
              <a
                href="#"
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-300 transition"
              >
                <Github className="w-4 h-4" />
                <span>{userData.github}</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-300 transition"
              >
                <Linkedin className="w-4 h-4" />
                <span>{userData.linkedin}</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-300 transition"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Portfolio</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;

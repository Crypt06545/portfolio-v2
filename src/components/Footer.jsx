import { ExternalLink, Github, Linkedin } from "lucide-react";

const userData = {
  name: "MEHADI HASAn",
  email: "fmehadi25@gmail.com",
  github: "@Crypt06545",
  linkedin: "@mehadihasan0",
  portfolio: "https://mehadi.onrender.com/",
  location: "Bogura Sadar, Bogura",
};

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          {/* Name and Title */}
          <p className="text-sm sm:text-base text-slate-200">
            {userData.name} | Full Stack Developer
          </p>

          {/* Built with love - Fixed tech stack */}
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Built with &lt;3 using React, TypeScript & Tailwind
          </p>

          {/* Copyright */}
          <p className="text-xs text-slate-500 mt-2">
            © {new Date().getFullYear()} {userData.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 flex-wrap pb-6">
        <a
          href={`https://github.com/${userData.github.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-slate-400 hover:text-amber-300 transition px-3 py-1 rounded-md border border-white/10 hover:border-amber-500/30 bg-black/30"
        >
          <Github className="w-4 h-4" />
          <span className="font-mono">{userData.github}</span>
        </a>
        <a
          href={`https://linkedin.com/in/${userData.linkedin.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-slate-400 hover:text-amber-300 transition px-3 py-1 rounded-md border border-white/10 hover:border-amber-500/30 bg-black/30"
        >
          <Linkedin className="w-4 h-4" />
          <span className="font-mono">{userData.linkedin}</span>
        </a>
        <a
          href={userData.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-slate-400 hover:text-amber-300 transition px-3 py-1 rounded-md border border-white/10 hover:border-amber-500/30 bg-black/30"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="font-mono">portfolio</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

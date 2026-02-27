import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitBranch, Eye } from "lucide-react";
import { useState } from "react";

const TerminalCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  const accentColor = {
    amber: "text-amber-400 border-amber-500/30",
    cyan: "text-cyan-400 border-cyan-500/30",
    emerald: "text-emerald-400 border-emerald-500/30",
    purple: "text-purple-400 border-purple-500/30"
  }[project.accent];

  return (
    <Card
      className={cn(
        "group relative overflow-hidden bg-black/40 backdrop-blur-xl border-white/10",
        "hover:border-white/20 transition-all duration-500",
        "hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-2"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/10 bg-black/20">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
        </div>
        <span className="text-xs font-mono text-slate-500 ml-2">~/projects/{project.title.toLowerCase()}</span>
      </div>

      <CardContent className="p-5">
        {/* Terminal Prompt */}
        <div className="flex items-center gap-2 font-mono text-sm mb-4">
          <span className="text-emerald-400">➜</span>
          <span className="text-amber-400">projects/</span>
          <span className="text-cyan-400">cat</span>
          <span className="text-slate-400">README.md</span>
        </div>

        {/* Project Title */}
        <h3 className={cn("text-xl font-bold font-mono mb-2", accentColor)}>
          &lt;{project.title} /&gt;
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 font-mono mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack - Terminal Style */}
        <div className="space-y-2 mb-4">
          <div className="text-xs text-slate-500 font-mono">$ npm list --depth=0</div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={cn(
                  "px-2 py-1 text-xs font-mono rounded",
                  "bg-white/5 border border-white/10",
                  "text-slate-300"
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats - Terminal Style */}
        <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-black/40 rounded-lg border border-white/5">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-amber-400">
              <Star className="w-3 h-3 fill-amber-400" />
              <span className="text-xs font-mono">{project.stars}</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">stars</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-cyan-400">
              <GitBranch className="w-3 h-3" />
              <span className="text-xs font-mono">{project.forks}</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">forks</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-emerald-400">
              <Eye className="w-3 h-3" />
              <span className="text-xs font-mono">{project.views}</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">views</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 font-mono text-xs"
          >
            <Github className="w-3 h-3 mr-1" />
            <span>git clone</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 font-mono text-xs"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            <span>npm run demo</span>
          </Button>
        </div>

        {/* Animated Cursor */}
        {hovered && (
          <div className="absolute bottom-2 right-2 text-emerald-400/50 font-mono text-xs animate-pulse">
            _
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TerminalCard;

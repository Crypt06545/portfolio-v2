import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Star } from "lucide-react";

const CodeCard = ({ project }) => {
  const codeSnippet = `// ${project.title}
const project = {
  name: "${project.title}",
  tech: [${project.tech.map(t => `"${t}"`).join(', ')}],
  stars: ${project.stars},
  status: "active"
};

export default project;`;

  return (
    <Card className="group relative overflow-hidden bg-black/40 backdrop-blur-xl border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2">
      {/* Editor Header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-black/20">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
        </div>
        <span className="text-xs font-mono text-slate-500">project.config.js</span>
      </div>

      <CardContent className="p-4">
        {/* Code Preview */}
        <div className="font-mono text-xs space-y-1 mb-4 bg-black/40 p-3 rounded-lg">
          {codeSnippet.split('\n').map((line, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-slate-600 w-4 text-right">{i + 1}</span>
              <span className="text-slate-300">{line}</span>
            </div>
          ))}
        </div>

        {/* Project Info */}
        <h3 className="text-lg font-bold text-slate-200 mb-1">{project.title}</h3>
        <p className="text-xs text-slate-400 mb-3 line-clamp-2">{project.description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <Star className="w-3 h-3" />
            <span className="text-xs">{project.stars}</span>
          </div>
          <div className="flex gap-1">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:bg-white/10 rounded transition-colors inline-block"
            >
              <Github className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:bg-white/10 rounded transition-colors inline-block"
            >
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeCard;

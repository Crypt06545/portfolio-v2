import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Code2,
  Star,
  GitBranch,
  Eye,
  Clock,
  Calendar,
  Terminal,
  FolderKanban,
  Sparkles,
  Rocket,
  Cpu
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "CloudNexus",
    description: "Enterprise cloud management platform with real-time monitoring and auto-scaling capabilities.",
    tech: ["React", "Node.js", "AWS", "Docker"],
    stars: 342,
    forks: 89,
    views: "2.4k",
    image: null,
    color: "from-amber-500/20 to-orange-500/20",
    accent: "amber",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true
  },
  {
    id: 2,
    title: "DevFlow",
    description: "CI/CD pipeline visualizer and automation tool for modern development workflows.",
    tech: ["Next.js", "TypeScript", "Prisma", "Redis"],
    stars: 256,
    forks: 45,
    views: "1.8k",
    image: null,
    color: "from-cyan-500/20 to-blue-500/20",
    accent: "cyan",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true
  },
  {
    id: 3,
    title: "AI Assistant",
    description: "Intelligent chatbot powered by LLMs with context awareness and memory capabilities.",
    tech: ["Python", "FastAPI", "React", "TensorFlow"],
    stars: 189,
    forks: 32,
    views: "3.2k",
    image: null,
    color: "from-emerald-500/20 to-green-500/20",
    accent: "emerald",
    github: "https://github.com",
    live: "https://demo.com",
    featured: false
  },
  {
    id: 4,
    title: "DataViz Pro",
    description: "Interactive data visualization dashboard with real-time updates and custom widgets.",
    tech: ["D3.js", "Vue.js", "Express", "MongoDB"],
    stars: 423,
    forks: 67,
    views: "5.1k",
    image: null,
    color: "from-purple-500/20 to-pink-500/20",
    accent: "purple",
    github: "https://github.com",
    live: "https://demo.com",
    featured: false
  },
  {
    id: 5,
    title: "AuthFlow",
    description: "Authentication and authorization microservice with OAuth2, JWT, and SSO support.",
    tech: ["Node.js", "GraphQL", "PostgreSQL", "Redis"],
    stars: 567,
    forks: 123,
    views: "7.8k",
    image: null,
    color: "from-amber-500/20 to-yellow-500/20",
    accent: "amber",
    github: "https://github.com",
    live: "https://demo.com",
    featured: false
  },
  {
    id: 6,
    title: "CodeCollab",
    description: "Real-time collaborative code editor with video calls and pair programming features.",
    tech: ["WebRTC", "React", "Node.js", "Socket.io"],
    stars: 678,
    forks: 156,
    views: "9.2k",
    image: null,
    color: "from-cyan-500/20 to-teal-500/20",
    accent: "cyan",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true
  }
];

// Card Style 1: Terminal Style
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

// Card Style 2: Code Editor Style
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
            <button className="p-1 hover:bg-white/10 rounded transition-colors">
              <Github className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-1 hover:bg-white/10 rounded transition-colors">
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Card Style 3: Floating Glass Card
const GlassCard = ({ project }) => {
  const accentColor = {
    amber: "from-amber-500 to-orange-500",
    cyan: "from-cyan-500 to-blue-500",
    emerald: "from-emerald-500 to-green-500",
    purple: "from-purple-500 to-pink-500"
  }[project.accent];

  return (
    <Card className={cn(
      "group relative overflow-hidden backdrop-blur-xl border-white/10",
      "hover:border-white/20 transition-all duration-700",
      "hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-2",
      "bg-gradient-to-br", project.color
    )}>
      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={cn("absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl bg-gradient-to-r", accentColor)}></div>
        <div className={cn("absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl bg-gradient-to-r", accentColor)}></div>
      </div>

      <CardContent className="relative p-6">
        {/* Icon */}
        <div className="mb-4">
          <div className={cn(
            "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center",
            accentColor
          )}>
            <Rocket className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
        <p className="text-sm text-slate-300/80 mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-white/10 backdrop-blur-sm rounded-lg text-slate-200 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-slate-300">{project.stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitBranch className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-slate-300">{project.forks}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button size="sm" className="flex-1 bg-white/10 hover:bg-white/20 text-white border-0">
            <Github className="w-4 h-4 mr-1" />
            Code
          </Button>
          <Button size="sm" className="flex-1 bg-white/10 hover:bg-white/20 text-white border-0">
            <ExternalLink className="w-4 h-4 mr-1" />
            Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Main Component
export function ProjectsSection() {
  const [cardStyle, setCardStyle] = useState("terminal");

  return (
    <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 flex items-center justify-center gap-2">
            <FolderKanban className="w-6 h-6 text-amber-400" />
            &lt;Featured_Work /&gt;
          </h2>

          {/* Style Toggle */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => setCardStyle("terminal")}
              className={cn(
                "px-3 py-1 text-xs rounded-full border transition-all flex items-center gap-1",
                cardStyle === "terminal"
                  ? "bg-amber-500/20 border-amber-500/50 text-amber-300"
                  : "bg-white/5 border-white/10 text-slate-400"
              )}
            >
              <Terminal className="w-3 h-3" />
              Terminal
            </button>
            <button
              onClick={() => setCardStyle("code")}
              className={cn(
                "px-3 py-1 text-xs rounded-full border transition-all flex items-center gap-1",
                cardStyle === "code"
                  ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                  : "bg-white/5 border-white/10 text-slate-400"
              )}
            >
              <Code2 className="w-3 h-3" />
              Code
            </button>
            <button
              onClick={() => setCardStyle("glass")}
              className={cn(
                "px-3 py-1 text-xs rounded-full border transition-all flex items-center gap-1",
                cardStyle === "glass"
                  ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300"
                  : "bg-white/5 border-white/10 text-slate-400"
              )}
            >
              <Sparkles className="w-3 h-3" />
              Glass
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id}>
              {cardStyle === "terminal" && <TerminalCard project={project} />}
              {cardStyle === "code" && <CodeCard project={project} />}
              {cardStyle === "glass" && <GlassCard project={project} />}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button className="bg-white/5 hover:bg-white/10 text-amber-300 border border-amber-500/30 px-8">
            <Rocket className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

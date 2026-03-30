import * as React from 'react'; // Changed for better optimization
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderGit2, Play } from "lucide-react";

// 1. Move Regex outside to avoid re-compilation on every render
const CODE_REGEX = /(\b(?:const|return|import|from)\b|true|false|null|"[^"]*"|'[^']*'|<[A-Za-z][\w$]*|<\/[A-Za-z][\w$]*>|<\/?>|\{|\}|\[|\]|\(|\)|\.[a-zA-Z_$][\w$]*\(|=[^{}[\]"' ]*)/g;

const highlightCode = (line) => {
  if (!line.trim()) return line;
  if (line.trim().startsWith("//")) {
    return <span className="text-slate-500 italic">{line}</span>;
  }

  const parts = line.split(CODE_REGEX);

  return parts.filter(Boolean).map((part, i) => {
    if (/^\s+$/.test(part)) return part;
    if (/^(const|return|import|from)$/.test(part)) return <span key={i} className="text-pink-400 font-medium">{part}</span>;
    if (/^["'].*["']$/.test(part)) return <span key={i} className="text-orange-300">{part}</span>;
    if (/^(true|false|null)$/.test(part)) return <span key={i} className="text-emerald-400">{part}</span>;
    if (/^<[A-Za-z][\w$]*\/?$/.test(part) || part === "/>" || /^<\/[A-Za-z][\w$]*>$/.test(part)) {
      return <span key={i} className="text-cyan-400 font-medium">{part}</span>;
    }
    if (/^[{}[\]()]$/.test(part) || part === "=") return <span key={i} className="text-violet-300">{part}</span>;
    if (/^\.[a-zA-Z_$][\w$]*\($/.test(part) || /^[A-Z][a-zA-Z]*$/.test(part)) {
      return <span key={i} className="text-cyan-300 font-medium">{part}</span>;
    }
    return <span key={i} className="text-slate-200">{part}</span>;
  });
};

const EditorCard = () => {
    const handleScroll = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // 2. Memoize the static code lines so highlighting happens ONLY ONCE
  const renderedLines = React.useMemo(() => {
    const lines = [
      "// Welcome to my workspace",
      "import { Developer } from './universe';",
      "",
      "const Portfolio = () => {",
      "  return (",
      "    <Developer",
      '      name="Mehadi Hasan"',
      '      role="Full Stack Developer"',
      '      skills=["React", "Node", "MongoDB"]',
      "      passionate={true}",
      "    />",
      "  );",
      "};",
      "developer.build();",
    ];
    return lines.map((line, index) => ({
      id: index,
      content: highlightCode(line)
    }));
  }, []);

  return (
    <Card className="w-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden transform-gpu will-change-transform">
      {/* Header */}
      <CardHeader className="flex flex-row justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
        </div>
        <span className="text-[10px] sm:text-xs text-slate-400 font-mono">portfolio.tsx</span>
      </CardHeader>

      {/* Content - Optimized with static rendering */}
      <CardContent className="p-3 sm:p-5 font-mono text-[10px] sm:text-xs md:text-sm text-slate-200 space-y-1 overflow-x-auto min-h-[300px]">
        {renderedLines.map((line) => (
          <div key={line.id} className="flex gap-3">
            <span className="w-6 text-slate-600 text-right select-none">{line.id + 1}</span>
            <span className="whitespace-pre flex-1">{line.content}</span>
          </div>
        ))}
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col sm:flex-row gap-3 p-4 md:p-6">
        <Button className="w-full sm:w-auto bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 active:scale-95 transition-all">
          <Play className="w-4 h-4 mr-2" /> Run Profile
        </Button>
        <Button onClick={handleScroll} className="w-full sm:w-auto bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 active:scale-95 transition-all">
          <FolderGit2 className="w-4 h-4 mr-2" /> View Projects
        </Button>
      </CardFooter>
    </Card>
  );
};

export default React.memo(EditorCard);

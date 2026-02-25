import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderGit2, Play } from "lucide-react";

const EditorCard = () => {
  const codeLines = [
    "// Welcome to my workspace",
    "import { Developer }  from './universe';",
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

const highlightCode = (line) => {
  if (!line.trim()) {
    return line;
  }

  if (line.trim().startsWith("//")) {
    return <span className="text-slate-500 italic">{line}</span>;
  }

  // IMPROVED REGEX: Non-capturing groups for keywords to avoid duplicates
  const parts = line.split(
    /(\b(?:const|return|import|from)\b|true|false|null|"[^"]*"|'[^']*'|<[A-Za-z][\w$]*|<\/[A-Za-z][\w$]*>|<\/?>|\{|\}|\[|\]|\(|\)|\.[a-zA-Z_$][\w$]*\(|=[^{}[\]"' ]*)/g
  );

  // Filter out empty strings
  return parts.filter(part => part && part !== '').map((part, i) => {
    // Preserve whitespace
    if (/^\s+$/.test(part)) return part;

    // Keywords
    if (/^(const|return|import|from)$/.test(part)) {
      return <span key={i} className="text-pink-400 font-medium">{part}</span>;
    }

    // Strings
    if (/^["'].*["']$/.test(part)) {
      return <span key={i} className="text-orange-300">{part}</span>;
    }

    // Booleans / null
    if (/^(true|false|null)$/.test(part)) {
      return <span key={i} className="text-emerald-400">{part}</span>;
    }

    // JSX opening tags
    if (/^<[A-Za-z][\w$]*\/?$/.test(part)) {
      return <span key={i} className="text-cyan-400 font-medium">{part}</span>;
    }

    // Self-closing tag end
    if (part === "/>") {
      return <span key={i} className="text-cyan-400 font-medium">{part}</span>;
    }

    // Closing tag
    if (/^<\/[A-Za-z][\w$]*>$/.test(part)) {
      return <span key={i} className="text-cyan-400 font-medium">{part}</span>;
    }

    // Braces and brackets
    if (/^[{}[\]]$/.test(part)) {
      return <span key={i} className="text-violet-300">{part}</span>;
    }

    // Parentheses
    if (/^[()]$/.test(part)) {
      return <span key={i} className="text-violet-300">{part}</span>;
    }

    // Method calls .something(
    if (/^\.[a-zA-Z_$][\w$]*\($/.test(part)) {
      return <span key={i} className="text-cyan-300">{part}</span>;
    }

    // Assignment operators
    if (/^=$/.test(part)) {
      return <span key={i} className="text-violet-300">{part}</span>;
    }

    // Component name detection (simplified)
    if (/^[A-Z][a-zA-Z]*$/.test(part)) {
      return <span key={i} className="text-cyan-300 font-medium">{part}</span>;
    }

    // Default
    return <span key={i} className="text-slate-200">{part}</span>;
  });
};
  return (
    <Card className="w-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden">
      {/* Header */}
      <CardHeader className="flex flex-row justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
        </div>
        <span className="text-[10px] sm:text-xs text-slate-400 font-mono truncate ml-2">
          portfolio.tsx
        </span>
      </CardHeader>

      {/* Code */}
      <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 font-mono text-[10px] sm:text-xs md:text-sm text-slate-200 space-y-1 overflow-x-auto">
        {codeLines.map((line, index) => (
          <div key={index} className="flex gap-1.5 sm:gap-2 md:gap-3">
            <span className="w-4 sm:w-5 md:w-6 text-slate-500 text-right select-none text-[9px] sm:text-xs">
              {index + 1}
            </span>
            <span className="whitespace-pre break-all sm:break-normal flex-1">
              {highlightCode(line)}
            </span>
          </div>
        ))}
      </CardContent>

      {/* Buttons */}
      <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mt-1 sm:mt-2 px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
        <Button className="w-full cursor-pointer sm:w-auto bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400/50 text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4">
          <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
          Run Profile
        </Button>
        <Button className="w-full cursor-pointer sm:w-auto bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400/50 text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4">
          <FolderGit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
          View Projects
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EditorCard;

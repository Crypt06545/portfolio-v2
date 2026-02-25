import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EditorCard = () => {
  const codeLines = [
    "// Welcome to my workspace",
    "import { Developer } from './universe';",
    "",
    "const Portfolio = () => {",
    "  return (",
    "    <Developer",
    '      name="Mehadi Hasan"',
    '      role="Full Stack Developer"',
    '      skills=["React", "Node", "MongoDB"]',
    '      passionate={true}',
    "    />",
    "  );",
    "};",
    "developer.build();",
  ];

const highlightCode = (line) => {
  if (line.trim().startsWith("//")) {
    return <span className="text-slate-500 italic">{line}</span>;
  }

  return line.split(/(".*?"|\{.*?\}|\[.*?\]|<.*?>)/g).map((part, i) => {
    if (!part) return null;

    // Strings
    if (part.startsWith('"') || part.startsWith("'")) {
      return <span key={i} className="text-orange-300">{part}</span>;
    }

    // JSX tags
    if (part.startsWith("<") && part.endsWith(">")) {
      return <span key={i} className="text-cyan-400">{part}</span>;
    }

    // Booleans
    if (part.includes("true") || part.includes("false")) {
      return <span key={i} className="text-green-400">{part}</span>;
    }

    // Keywords
    if (["const", "return", "import", "from"].includes(part.trim())) {
      return <span key={i} className="text-red-400">{part}</span>;
    }

    // Functions
    if (part.includes("build()")) {
      return <span key={i} className="text-cyan-400">{part}</span>;
    }

    // Everything else
    return <span key={i}>{part}</span>;
  });
};

  return (
    <Card className="w-full max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden">
      {/* Header */}
      <CardHeader className="flex justify-between items-center px-4 py-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <span className="text-xs text-slate-400 font-mono">portfolio.tsx</span>
      </CardHeader>

      {/* Code */}
      <CardContent className="p-6 font-mono text-sm text-slate-200 space-y-1 overflow-x-auto">
        {codeLines.map((line, index) => (
          <div key={index} className="flex gap-3">
            <span className="w-6 text-slate-500 text-right select-none">{index + 1}</span>
            <span className="whitespace-pre">{highlightCode(line)}</span>
          </div>
        ))}
      </CardContent>

      {/* Buttons */}
      <CardFooter className="flex gap-4 mt-2">
        <Button className="bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400/50">
          Run Profile
        </Button>
        <Button className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400/50">
          View Projects
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EditorCard;

// import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const EditorCard = () => {
//   const codeLines = [
//     { line: 1, content: "// Welcome to my workspace" },
//     { line: 2, content: "import { Developer } from './universe';" },
//     { line: 3, content: "" },
//     { line: 4, content: "const Portfolio = () => {" },
//     { line: 5, content: "  return (" },
//     { line: 6, content: "    <Developer" },
//     { line: 7, content: '      name="Mehadi Hasan"' },
//     { line: 8, content: '      role="Full Stack Engineer"' },
//     { line: 9, content: '      passion="Beyond Boundaries"' },
//     { line: 10, content: "    />" },
//     { line: 11, content: "  );" },
//     { line: 12, content: "};" },
//   ];

//   const highlightCode = (text) => {
//     if (text.startsWith("//")) return <span className="text-slate-500 italic">{text}</span>;

//     return text.split(/("[^"]*")/).map((part, i) => {
//       if (part.startsWith('"')) return <span key={i} className="text-emerald-400">{part}</span>;
//       if (["const", "import", "from", "return"].includes(part.trim())) {
//         return <span key={i} className="text-purple-400">{part}</span>;
//       }
//       return part;
//     });
//   };

//   return (
//     <Card className="w-full gap-1 max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden">
//       {/* Header */}
//       <CardHeader className="flex flex-row items-center justify-between px-4 py-3 border-b border-white/10">
//         <div className="flex gap-1.5 sm:gap-2">
//           <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
//           <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
//           <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
//         </div>
//         <span className="text-[10px] sm:text-xs text-slate-400 font-mono">portfolio.tsx</span>
//         <div className="w-8 sm:w-10"></div>
//       </CardHeader>

//       {/* Code Section - Added overflow-x-auto and custom scrollbar */}
//       <CardContent className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-200 space-y-1 overflow-x-auto scrollbar-thin scrollbar-thumb-white/10">
//         {codeLines.map((line) => (
//           <div key={line.line} className="flex gap-3 sm:gap-4 min-w-fit">
//             <span className="w-4 shrink-0 text-slate-600 select-none text-right">
//               {line.line}
//             </span>
//             <span className="whitespace-pre">
//               {highlightCode(line.content)}
//             </span>
//           </div>
//         ))}
//       </CardContent>

//       {/* Buttons - Added flex-wrap and better padding */}
//       <CardFooter className="flex flex-wrap gap-3 sm:gap-4 p-4 sm:p-6 pt-0">
//         <Button className="flex-1 sm:flex-none bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400/50 text-xs sm:text-sm">
//           Run Profile
//         </Button>
//         <Button className="flex-1 sm:flex-none bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400/50 text-xs sm:text-sm">
//           View Projects
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default EditorCard;

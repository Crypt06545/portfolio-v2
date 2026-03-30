// import { Card, CardHeader, CardContent } from "@/components/ui/card";

// const JsonContactCard = () => {
//   const jsonLines = [
//     "{",
//     '  "status": "open_to_work",',
//     '  "email": "fmehadi25@gmail.com",',
//     '  "socials": {',
//     '    "github": "@Crypt06545",',
//     '    "linkedin": "@mehadihasan0",',
//     '    "portfolio": "https://mehadi.onrender.com"',
//     "  },",
//     '  "location": "Bogura, Bangladesh - 5800"',
//     "}",
//     "",
//     "// Waiting for connection...",
//     "_"
//   ];

//   const highlightJson = (line) => {
//     if (!line.trim()) return line;

//     if (line.trim().startsWith("//")) {
//       return <span className="text-slate-500 italic">{line}</span>;
//     }

//     if (line === "_") {
//       return <span className="text-slate-400 animate-pulse">_</span>;
//     }

//     const parts = line.split(/(\"[^\"]*\"|\btrue\b|\bfalse\b|\bnull\b|\d+|\+?\d+|\{|\}|\[|\]|,|:)/g);

//     return parts.filter(part => part && part !== '').map((part, i) => {
//       if (/^\s+$/.test(part)) return part;

//       if (/^\".*\"$/.test(part) && line.includes(':')) {
//         return <span key={i} className="text-cyan-300">{part}</span>;
//       }

//       if (/^\".*\"$/.test(part)) {
//         return <span key={i} className="text-green-300">{part}</span>;
//       }

//       if (/^\d+$/.test(part) || /^\+\d+$/.test(part)) {
//         return <span key={i} className="text-orange-300">{part}</span>;
//       }

//       if (/^[\{\}\[\]\:,]$/.test(part)) {
//         return <span key={i} className="text-violet-300">{part}</span>;
//       }

//       if (/^(true|false|null)$/.test(part)) {
//         return <span key={i} className="text-emerald-400">{part}</span>;
//       }

//       return <span key={i} className="text-slate-200">{part}</span>;
//     });
//   };

// return (
//     <Card
//       className="
//         bg-white/5 backdrop-blur-xl
//         border border-white/10
//         shadow-2xl rounded-xl sm:rounded-2xl
//         overflow-hidden
//       "
//     >
//       <CardHeader className="flex flex-row justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10">
//         <div className="flex gap-1.5">
//           <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
//           <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
//           <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
//         </div>
//         <span className="text-[10px] sm:text-xs text-slate-400 font-mono truncate ml-2">
//           contact.json
//         </span>
//       </CardHeader>

//       <CardContent
//         className="
//           p-4 sm:p-5 md:p-6
//           font-mono text-[10px] sm:text-xs md:text-sm text-slate-200
//           h-[calc(100%-3.25rem)]   // header ≈ 3–3.5rem — tune if needed
//           overflow-y-auto
//           scrollbar-thin scrollbar-thumb-slate-600/70 scrollbar-track-transparent
//         "
//       >
//         {jsonLines.map((line, index) => (
//           <div key={index} className="flex gap-1.5 sm:gap-2">
//             <span className="w-4 sm:w-5 md:w-6 text-slate-500 text-right select-none text-[9px] sm:text-xs">
//               {index + 1}
//             </span>
//             <span className="whitespace-pre break-all sm:break-normal flex-1">
//               {highlightJson(line)}
//             </span>
//           </div>
//         ))}
//       </CardContent>
//     </Card>
//   );
// };
// export default JsonContactCard;
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";

const SOCIAL_URLS = {
  '"@Crypt06545"': "https://github.com/Crypt06545",
  '"@mehadihasan0"': "https://linkedin.com/in/mehadihasan0",
  '"https://mehadi.onrender.com"': "https://mehadi.onrender.com",
  '"fmehadi25@gmail.com"': "mailto:fmehadi25@gmail.com",
};

const jsonLines = [
  "{",
  '  "status": "open_to_work",',
  '  "email": "fmehadi25@gmail.com",',
  '  "socials": {',
  '    "github": "@Crypt06545",',
  '    "linkedin": "@mehadihasan0",',
  '    "portfolio": "https://mehadi.onrender.com"',
  "  },",
  '  "location": "Bogura, Bangladesh - 5800"',
  "}",
  "",
  "// Waiting for connection...",
  "_",
];

const highlightJson = (line, hoveredLink, setHoveredLink) => {
  if (!line.trim()) return line;

  if (line.trim().startsWith("//")) {
    return <span className="text-slate-500 italic">{line}</span>;
  }

  if (line === "_") {
    return (
      <span className="inline-flex items-center gap-1 text-slate-400">
        <span className="w-[7px] h-[13px] bg-slate-400 rounded-sm animate-[blink_1.2s_step-end_infinite]" />
      </span>
    );
  }

  // Check if line contains a clickable value
  for (const [token, url] of Object.entries(SOCIAL_URLS)) {
    if (line.includes(token)) {
      const parts = line.split(token);
      const isHovered = hoveredLink === token;
      return (
        <>
          <span className="text-slate-200">{parts[0]}</span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredLink(token)}
            onMouseLeave={() => setHoveredLink(null)}
            className={cn(
              "transition-all duration-200 underline-offset-2 decoration-dashed",
              isHovered
                ? "text-amber-300 underline decoration-amber-400/60"
                : "text-green-300 hover:text-amber-300"
            )}
          >
            {token}
          </a>
          <span className="text-slate-200">{parts[1]}</span>
        </>
      );
    }
  }

  const parts = line.split(/(\"[^\"]*\"|\btrue\b|\bfalse\b|\bnull\b|\d+|\+?\d+|\{|\}|\[|\]|,|:)/g);

  return parts
    .filter((part) => part && part !== "")
    .map((part, i) => {
      if (/^\s+$/.test(part)) return part;

      if (/^\".*\"$/.test(part) && line.includes(":")) {
        return (
          <span key={i} className="text-cyan-300">
            {part}
          </span>
        );
      }

      if (/^\".*\"$/.test(part)) {
        return (
          <span key={i} className="text-green-300">
            {part}
          </span>
        );
      }

      if (/^\d+$/.test(part) || /^\+\d+$/.test(part)) {
        return (
          <span key={i} className="text-orange-300">
            {part}
          </span>
        );
      }

      if (/^[\{\}\[\]\:,]$/.test(part)) {
        return (
          <span key={i} className="text-violet-300">
            {part}
          </span>
        );
      }

      if (/^(true|false|null)$/.test(part)) {
        return (
          <span key={i} className="text-emerald-400">
            {part}
          </span>
        );
      }

      return (
        <span key={i} className="text-slate-200">
          {part}
        </span>
      );
    });
};

const JsonContactCard = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <Card className="w-full h-full bg-[#0d1117]/80 backdrop-blur-xl border border-white/8 shadow-2xl rounded-2xl overflow-hidden hover:border-white/15 hover:shadow-[0_0_50px_rgba(34,211,238,0.06)] transition-all duration-500 group">
      {/* Header chrome */}
      <CardHeader className="flex flex-row justify-between items-center px-4 py-3 border-b border-white/8 bg-[#161b22]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 group-hover:bg-[#ff5f56] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 group-hover:bg-[#ffbd2e] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 group-hover:bg-[#27c93f] transition-colors" />
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 animate-pulse" />
          <span className="text-[11px] text-slate-400 font-mono tracking-wide">contact.json</span>
        </div>
        <div className="text-[9px] text-slate-600 font-mono border border-white/8 px-1.5 py-0.5 rounded">JSON</div>
      </CardHeader>

      <CardContent className="p-0 font-mono text-[11px] sm:text-xs text-slate-200 overflow-y-auto bg-[#0d1117]">
        <div className="flex">
          {/* Line number gutter */}
          <div className="flex flex-col pt-4 pb-4 px-3 bg-[#0d1117] border-r border-white/5 select-none min-w-[2.5rem] text-right">
            {jsonLines.map((_, i) => (
              <div key={i} className="h-6 text-[10px] leading-6 text-slate-700">{i + 1}</div>
            ))}
          </div>

          {/* JSON content */}
          <div className="flex-1 pt-4 pb-4 px-4 space-y-0 overflow-x-auto">
            {jsonLines.map((line, index) => (
              <div key={index} className="h-6 flex items-center leading-6 hover:bg-white/[0.02] rounded transition-colors">
                <span className="whitespace-pre flex-1">
                  {highlightJson(line, hoveredLink, setHoveredLink)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      {/* Scanline texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.012] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,1)_2px,rgba(255,255,255,1)_4px)] rounded-2xl" />

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </Card>
  );
};

export default JsonContactCard;

import { Card, CardHeader, CardContent } from "@/components/ui/card";

const JsonContactCard = () => {
  const jsonLines = [
    "{",
    '  "status": "open_to_work",',
    '  "email": "fmehadi25@gmail.com",',
    '  "phone": "+8801719550746",',
    '  "socials": {',
    '    "github": "@Crypt06545",',
    '    "linkedin": "@mehadihasan0",',
    '    "portfolio": "https://mehadi.onrender.com/"',
    "  },",
    '  "location": "Bogra, Bangladesh - 5800"',
    "}",
    "",
    "// Waiting for connection...",
    "_"
  ];

  const highlightJson = (line) => {
    if (!line.trim()) return line;

    if (line.trim().startsWith("//")) {
      return <span className="text-slate-500 italic">{line}</span>;
    }

    if (line === "_") {
      return <span className="text-slate-400 animate-pulse">_</span>;
    }

    const parts = line.split(/(\"[^\"]*\"|\btrue\b|\bfalse\b|\bnull\b|\d+|\+?\d+|\{|\}|\[|\]|,|:)/g);

    return parts.filter(part => part && part !== '').map((part, i) => {
      if (/^\s+$/.test(part)) return part;

      if (/^\".*\"$/.test(part) && line.includes(':')) {
        return <span key={i} className="text-cyan-300">{part}</span>;
      }

      if (/^\".*\"$/.test(part)) {
        return <span key={i} className="text-green-300">{part}</span>;
      }

      if (/^\d+$/.test(part) || /^\+\d+$/.test(part)) {
        return <span key={i} className="text-orange-300">{part}</span>;
      }

      if (/^[\{\}\[\]\:,]$/.test(part)) {
        return <span key={i} className="text-violet-300">{part}</span>;
      }

      if (/^(true|false|null)$/.test(part)) {
        return <span key={i} className="text-emerald-400">{part}</span>;
      }

      return <span key={i} className="text-slate-200">{part}</span>;
    });
  };

  return (
    <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden">
      {/* Header */}
      <CardHeader className="flex flex-row justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
        </div>
        <span className="text-[10px] sm:text-xs text-slate-400 font-mono truncate ml-2">
          contact.json
        </span>
      </CardHeader>

      {/* JSON Content */}
      <CardContent className="p-4 sm:p-5 md:p-6 font-mono text-[10px] sm:text-xs md:text-sm text-slate-200 space-y-1 overflow-x-auto">
        {jsonLines.map((line, index) => (
          <div key={index} className="flex gap-1.5 sm:gap-2">
            <span className="w-4 sm:w-5 md:w-6 text-slate-500 text-right select-none text-[9px] sm:text-xs">
              {index + 1}
            </span>
            <span className="whitespace-pre break-all sm:break-normal flex-1">
              {highlightJson(line)}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default JsonContactCard;

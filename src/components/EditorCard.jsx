import * as React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderGit2, Play } from "lucide-react";

const LINES = [
  { text: "// Welcome to my workspace", type: "comment" },
  { text: "import { Developer } from './universe';", type: "import" },
  { text: "", type: "empty" },
  { text: "const Portfolio = () => {", type: "keyword" },
  { text: "  return (", type: "normal" },
  { text: "    <Developer", type: "jsx" },
  { text: '      name="Mehadi Hasan"', type: "string" },
  { text: '      role="Full Stack Developer"', type: "string" },
  { text: '      skills={["React", "Node", "MongoDB"]}', type: "string" },
  { text: "      passionate={true}", type: "bool" },
  { text: "    />", type: "jsx" },
  { text: "  );", type: "normal" },
  { text: "};", type: "normal" },
  { text: "developer.build();", type: "call" },
];

const TOKEN_COLORS = {
  comment: "text-slate-500 italic",
  import: "text-violet-400",
  keyword: "text-pink-400",
  jsx: "text-cyan-400 font-semibold",
  string: "text-amber-300",
  bool: "text-emerald-400",
  call: "text-cyan-300",
  normal: "text-slate-300",
  empty: "",
};

const useTypewriter = (lines, charDelay = 22, lineDelay = 60) => {
  const [displayedLines, setDisplayedLines] = React.useState(
    lines.map(() => ({ text: "", done: false }))
  );
  const stateRef = React.useRef({ lineIdx: 0, charIdx: 0, raf: null });

  React.useEffect(() => {
    const state = stateRef.current;

    const tick = () => {
      const { lineIdx, charIdx } = state;
      if (lineIdx >= lines.length) return;

      const currentLine = lines[lineIdx].text;

      if (charIdx <= currentLine.length) {
        setDisplayedLines(prev => {
          const next = [...prev];
          next[lineIdx] = { text: currentLine.slice(0, charIdx), done: false };
          return next;
        });
        state.charIdx++;
        state.raf = setTimeout(tick, charDelay);
      } else {
        // Mark line done, move to next
        setDisplayedLines(prev => {
          const next = [...prev];
          next[lineIdx] = { text: currentLine, done: true };
          return next;
        });
        state.lineIdx++;
        state.charIdx = 0;
        state.raf = setTimeout(tick, lineDelay);
      }
    };

    state.raf = setTimeout(tick, 400);
    return () => clearTimeout(state.raf);
  }, [charDelay, lineDelay, lines]);

  return displayedLines;
};

const EditorCard = () => {
  const displayedLines = useTypewriter(LINES, 20, 50);
  const activeLineIdx = displayedLines.findLastIndex(l => !l.done && l.text.length > 0);

  const handleScroll = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Card className="w-full bg-white/5  backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(251,191,36,0.07)] rounded-xl overflow-hidden">
      {/* Editor chrome */}
      <CardHeader className="flex flex-row justify-between items-center px-4 py-3 border-b  border-white/10">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_6px_#ff5f56]"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_#ffbd2e]"></span>
          <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_6px_#27c93f]"></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400/60 animate-pulse"></span>
          <span className="text-[11px] text-slate-400 font-mono tracking-wide">portfolio.tsx</span>
        </div>
        <div className="text-[10px] text-slate-600 font-mono">TSX</div>
      </CardHeader>

      {/* Code content */}
      <CardContent className="p-0 font-mono text-[11px] sm:text-xs min-h-[300px] ">
        <div className="flex">
          {/* Line numbers gutter */}
          <div className="flex flex-col pt-4 pb-4 px-3 border-r border-white/5 select-none min-w-[2.5rem] text-right">
            {LINES.map((_, i) => (
              <div key={i} className={`h-6 text-[10px] leading-6 ${i === activeLineIdx ? 'text-amber-400/70' : 'text-slate-700'}`}>
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code lines */}
          <div className="flex-1 pt-4 pb-4 px-4 space-y-0 overflow-x-auto">
            {LINES.map((line, i) => {
              const display = displayedLines[i];
              const isActive = i === activeLineIdx;
              return (
                <div
                  key={i}
                  className={`h-6 flex items-center leading-6 ${isActive ? 'bg-amber-500/5 rounded' : ''}`}
                >
                  <span className={`whitespace-pre ${TOKEN_COLORS[line.type] || 'text-slate-300'}`}>
                    {display?.text || ''}
                  </span>
                  {isActive && (
                    <span className="ml-px w-[2px] h-[14px] bg-amber-400 animate-[blink_1s_step-end_infinite] inline-block align-middle" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col sm:flex-row gap-3 p-4 border-t border-white/8 ">
        <Button className="w-full sm:w-auto bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] active:scale-95 transition-all duration-200 font-mono text-xs">
          <Play className="w-3.5 h-3.5 mr-2" /> Run Profile
        </Button>
        <Button onClick={handleScroll} className="w-full sm:w-auto bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] active:scale-95 transition-all duration-200 font-mono text-xs">
          <FolderGit2 className="w-3.5 h-3.5 mr-2" /> View Projects
        </Button>
      </CardFooter>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </Card>
  );
};

export default React.memo(EditorCard);

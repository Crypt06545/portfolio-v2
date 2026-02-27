import { cn } from "@/lib/utils";
import { Terminal, Code2 } from "lucide-react";

const StyleToggle = ({ cardStyle, setCardStyle }) => {
  return (
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
    </div>
  );
};

export default StyleToggle;

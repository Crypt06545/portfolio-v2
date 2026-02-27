import { cn } from "@/lib/utils";
import { Terminal, Package, Wrench, User, MapPin } from "lucide-react";

export function ArchLinuxStyle() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

      {/* System Details - with original colors */}
      <div className="md:col-span-2 space-y-2 font-mono text-xs sm:text-sm bg-black/30 rounded-lg p-4 border border-white/10">
        <div className="grid grid-cols-4 gap-2 pb-2 border-b border-white/10">
          <span className="text-amber-400">OPERATOR:</span>
          <span className="text-slate-200 col-span-3 flex items-center gap-1">
            <User className="w-3 h-3 text-emerald-400" />
            dadad
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 pb-2 border-b border-white/10">
          <span className="text-amber-400">ROLE:</span>
          <span className="text-cyan-300 col-span-3">FULL_STACK_DEVELOPER</span>
        </div>

        <div className="grid grid-cols-4 gap-2 pb-2 border-b border-white/10">
          <span className="text-amber-400">HOSTNAME:</span>
          <span className="text-slate-200 col-span-3 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-emerald-400" />
            dadad
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 pb-2 border-b border-white/10">
          <span className="text-amber-400">KERNEL:</span>
          <span className="text-slate-200 col-span-3">continuous-learning</span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <span className="text-amber-400">STATUS:</span>
          <span className="flex items-center gap-2 col-span-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400">OPEN</span>
          </span>
        </div>
      </div>
    </div>
  );
}

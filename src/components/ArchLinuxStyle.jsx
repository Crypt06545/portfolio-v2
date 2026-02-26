import { cn } from "@/lib/utils";
import { Terminal, Package, Wrench } from "lucide-react";

export function ArchLinuxStyle() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 p-6 group">
      {/* Arch logo grid background — adjusted to amber tint */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 20 L80 20 L80 80 L20 80 Z' stroke='%23fbbf24' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Glitch effect lines — using amber */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-amber-500/30 animate-pulse" style={{ animationDelay: '0.1s' }} />
        <div className="absolute top-2/4 left-0 w-full h-px bg-amber-500/30 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute top-3/4 left-0 w-full h-px bg-amber-500/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header with ASCII art style */}
        <div className="flex items-center gap-2 mb-4 font-mono text-amber-400">
          <Terminal className="w-4 h-4" />
          <span className="text-xs">[user@archlinux ~]$</span>
          <span className="text-cyan-300">./setup-environment.sh</span>
        </div>

        {/* Arch logo with glitch effect — kept image, adjusted glow */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 bg-amber-500/20 blur-xl animate-pulse" />
          <img
            src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/arch_linux.png"
            alt="Arch Linux"
            className="relative w-full h-full object-contain animate-pulse"
            style={{ animationDuration: '3s' }}
          />
          {/* Duplicate for glitch effect */}
          <img
            src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/arch_linux.png"
            alt=""
            className="absolute inset-0 w-full h-full object-contain opacity-50 mix-blend-screen"
            style={{
              filter: 'hue-rotate(45deg)',
              transform: 'translate(2px, -2px)',
              animation: 'glitch 4s infinite'
            }}
          />
        </div>

        {/* System info style cards */}
        <div className="space-y-2 font-mono text-xs">
          <div className="flex justify-between items-center border-b border-amber-500/20 pb-1">
            <span className="text-amber-400/70">OS:</span>
            <span className="text-amber-400 font-bold">Arch Linux</span>
          </div>
          <div className="flex justify-between items-center border-b border-amber-500/20 pb-1">
            <span className="text-amber-400/70">Kernel:</span>
            <span className="text-emerald-400">6.6.x-zen</span>
          </div>
          <div className="flex justify-between items-center border-b border-amber-500/20 pb-1">
            <span className="text-amber-400/70">Shell:</span>
            <span className="text-cyan-300">zsh 5.9</span>
          </div>
          <div className="flex justify-between items-center border-b border-amber-500/20 pb-1">
            <span className="text-amber-400/70">WM:</span>
            <span className="text-emerald-400">i3-gaps</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-amber-400/70">Packages:</span>
            <span className="text-cyan-300">1423 (pacman)</span>
          </div>
        </div>

        {/* Pacman progress bar */}
        <div className="mt-4 space-y-1">
          <div className="flex justify-between text-[10px] font-mono text-amber-400/60">
            <span>[ Updating system ]</span>
            <span>87%</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-amber-500/30">
            <div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full animate-pulse" style={{ width: '87%' }} />
          </div>
          <div className="flex gap-1 text-[8px] font-mono text-amber-400/40">
            <span>⠋</span>
            <span>同步数据库...</span>
            <span className="ml-auto">42 packages</span>
          </div>
        </div>

        {/* AUR helper section */}
        <div className="mt-4 p-2 bg-black/30 rounded border border-amber-500/20">
          <div className="flex items-center gap-1 text-amber-400/80 text-[10px] font-mono mb-1">
            <Package className="w-3 h-3" />
            <span>yay -S community-packages</span>
          </div>
          <div className="text-[8px] font-mono text-amber-400/40 truncate">
            :: searching AUR... ███████░░░░░ 12/42
          </div>
        </div>

        {/* I use Arch, btw */}
        <div className="mt-3 text-center">
          <span className="text-[8px] font-mono text-amber-400/30 animate-pulse">
            $ echo "I use Arch, btw" {'>'} ~/.bashrc
          </span>
        </div>
      </div>

      {/* Keep glitch animation */}
      <style jsx="true">{`
        @keyframes glitch {
          0%, 100% { transform: translate(0); opacity: 0.5; }
          20% { transform: translate(-2px, 2px); opacity: 0.7; }
          40% { transform: translate(2px, -2px); opacity: 0.3; }
          60% { transform: translate(-1px, 1px); opacity: 0.6; }
          80% { transform: translate(1px, -1px); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}

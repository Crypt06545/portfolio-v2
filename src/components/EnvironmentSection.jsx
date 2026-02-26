// EnvSection.jsx
import { ArchLinuxStyle } from "./ArchLinuxStyle";
import { Terminal, Cpu, HardDrive } from "lucide-react";

export function EnvironmentSection() {
  return (
    <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 flex items-center justify-center gap-2">
            <Terminal className="w-8 h-8 text-cyan-400" />
            <span>&lt;Development_Environment /&gt;</span>
          </h2>
          <p className="text-slate-400/90 text-sm sm:text-base max-w-2xl mx-auto mt-4">
            The tools and system I use for daily development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left side - Arch Linux */}
          <div>
            <ArchLinuxStyle />
          </div>

          {/* Right side - Other environment details */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h3 className="text-lg font-mono text-amber-400 mb-3">$ system-info</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-cyan-400">Editor:</span>
                  <span className="text-slate-300">Neovim / VS Code</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400">Terminal:</span>
                  <span className="text-slate-300">Alacritty</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400">Shell:</span>
                  <span className="text-slate-300">ZSH + Oh My Zsh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400">WM/DE:</span>
                  <span className="text-slate-300">i3-gaps</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h3 className="text-lg font-mono text-amber-400 mb-3">$ neofetch</h3>
              <div className="flex items-center gap-4">
                <Cpu className="w-12 h-12 text-cyan-400/50" />
                <div className="font-mono text-xs">
                  <div>Intel i7-12700K</div>
                  <div>32GB DDR5</div>
                  <div>NVIDIA RTX 3070</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal quote */}
        <div className="mt-8 text-center font-mono text-xs text-cyan-400/30">
          <span className="inline-block animate-pulse">$</span> echo "I use Arch, btw" {'>>'} ~/.bashrc
        </div>
      </div>
    </section>
  );
}

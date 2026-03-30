import React, { useMemo } from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { techSkills } from "@/assets/techSkills";

// 1. Memoized Card to prevent unnecessary re-renders during Marquee scroll
const TechCard = React.memo(({ name, icon, color, proficiency }) => {
  const dashArray = 2 * Math.PI * 10;
  const dashOffset = dashArray * (1 - proficiency / 100);

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <figure
            style={{ "--skill-color": color }}
            className={cn(
              "relative w-28 h-28 sm:w-32 sm:h-32 cursor-pointer overflow-hidden rounded-xl border p-3 mx-2",
              "bg-white/5 backdrop-blur-xl border-white/10",
              "hover:border-[var(--skill-color)]/50 transition-all duration-300",
              "shadow-lg shadow-black/5 group",
              "will-change-transform transform-gpu animate-wavy"
            )}
          >
            {/* GPU Accelerated Glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl bg-[var(--skill-color)]"
            />

            <div className="flex flex-col items-center justify-center h-full space-y-2 relative z-10">
              <img
                src={icon}
                alt={name}
                loading="lazy"
                className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover:scale-110 object-contain"
              />
              <span className="text-[10px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {name}
              </span>

              {/* Progress Ring */}
              <svg className="absolute top-1 right-1 w-6 h-6 -rotate-90 pointer-events-none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  className="text-white/5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke={color}
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray={dashArray}
                  style={{ strokeDashoffset: dashOffset }}
                  className="transition-all duration-700 ease-in-out"
                />
              </svg>
            </div>
          </figure>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="bg-black/90 border border-white/10 text-slate-200 p-3 font-mono shadow-2xl"
        >
          <div className="space-y-1 text-xs">
            <p className="font-bold" style={{ color: color }}>{name}</p>
            <p className="text-slate-400">
              Proficiency: <span className="text-emerald-400">{proficiency}%</span>
            </p>
            <div className="w-32 h-1 bg-white/10 rounded-full mt-2">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{ width: `${proficiency}%`, backgroundColor: color }}
              />
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

export function TechSkillsGrid() {
  // 2. Pre-split rows to avoid slicing on every single render
  const { firstRow, secondRow } = useMemo(() => {
    const half = Math.ceil(techSkills.length / 2);
    return {
      firstRow: techSkills.slice(0, half),
      secondRow: techSkills.slice(half),
    };
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            &lt;Tech_Stack /&gt;
          </h2>
          <div className="h-1 w-20 bg-amber-500/50 mx-auto mt-4 rounded-full" />
        </div>

        {/* Marquee Container with GPU Promotion */}
        <div className="relative flex flex-col gap-y-4 items-center justify-center overflow-hidden rounded-xl transform-gpu">
          <Marquee pauseOnHover className="[--duration:50s] py-6">
            {firstRow.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:50s] py-6">
            {secondRow.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </Marquee>

          {/* Fade Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-20" />
        </div>
      </div>

      {/* 3. Fixed Style Tag using String Attributes to stop console warnings */}
      <style jsx="true" global="true">{`
        @keyframes wavy {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -8px, 0); }
        }
        .animate-wavy {
          animation: wavy 6s ease-in-out infinite;
        }
        /* Staggered entry for each card */
        figure:nth-child(even) { animation-delay: 0.5s; }
        figure:nth-child(3n) { animation-delay: 1.2s; }
        figure:nth-child(4n) { animation-delay: 2s; }

        @media (prefers-reduced-motion: reduce) {
          .animate-wavy { animation: none; }
        }
      `}</style>
    </section>
  );
}

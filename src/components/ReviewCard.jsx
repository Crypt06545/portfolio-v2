import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { techSkills } from "@/assets/techSkills";

// Split into rows
const firstRow = techSkills.slice(0, Math.ceil(techSkills.length / 2));
const secondRow = techSkills.slice(Math.ceil(techSkills.length / 2));

const TechCard = ({ name, icon, color, proficiency }) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <figure
            className={cn(
              "relative w-28 h-28 sm:w-32 sm:h-32 cursor-pointer overflow-hidden rounded-xl border p-3 mx-2",
              "bg-white/5 backdrop-blur-xl border-white/10",
              "hover:border-amber-500/30 transition-all duration-300",
              "shadow-lg shadow-black/5",
              "group"
            )}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
              style={{ backgroundColor: color }}
            />
            <div className="flex flex-col items-center justify-center h-full space-y-2">
              <img
                src={icon}
                alt={name}
                className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover:scale-110 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-xs font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {name}
              </span>
              <svg className="absolute top-1 right-1 w-6 h-6 rotate-[-90deg]">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  className="text-white/10"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke={color}
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 10}`}
                  strokeDashoffset={`${2 * Math.PI * 10 * (1 - proficiency / 100)}`}
                  className="transition-all duration-500"
                />
              </svg>
            </div>
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-emerald-500/20 animate-pulse" />
            </div>
          </figure>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="bg-black/90 border border-amber-500/30 text-slate-200 p-3 font-mono"
        >
          <div className="space-y-1 text-xs">
            <p className="text-amber-400 font-bold">{name}</p>
            <p className="text-slate-400">
              Proficiency: <span className="text-emerald-400">{proficiency}%</span>
            </p>
            <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${proficiency}%`, backgroundColor: color }}
              />
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export function TechSkillsGrid() {
  return (
    <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100">
            &lt;Tech_Stack /&gt;
          </h2>
          <p className="text-slate-400/90 text-sm sm:text-base max-w-2xl mx-auto mt-4">
            Technologies I work with daily to build amazing applications
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl">
          <Marquee pauseOnHover className="[--duration:40s] py-4">
            {firstRow.map((tech, index) => (
              <TechCard key={`${tech.name}-${index}`} {...tech} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:40s] py-4">
            {secondRow.map((tech, index) => (
              <TechCard key={`${tech.name}-${index}`} {...tech} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-transparent to-transparent" />
        </div>

        <style jsx="true">{`
          @keyframes wavy {
            0%, 100% { transform: translateY(0); }
            25% { transform: translateY(-5px); }
            75% { transform: translateY(5px); }
          }
          figure {
            animation: wavy 4s ease-in-out infinite;
          }
          figure:nth-child(even) {
            animation-delay: 0.5s;
          }
          figure:nth-child(3n) {
            animation-delay: 1s;
          }
          figure:hover {
            animation: wavy 0.8s ease-in-out infinite !important;
          }
        `}</style>
      </div>
    </section>
  );
}

import { useState } from "react";
import { FolderKanban, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

import TerminalCard from "./TerminalCard";
import CodeCard from "./CodeCard";
import StyleToggle from "./StyleToggle";
import { projects } from "@/assets/projects";

const ProjectsSection = () => {
  const [cardStyle, setCardStyle] = useState("terminal");

  return (
    <section id="work" className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 flex items-center justify-center gap-2">
            <FolderKanban className="w-6 h-6 text-amber-400" />
            &lt;Featured_Work /&gt;
          </h2>

          {/* Style Toggle */}
          <StyleToggle cardStyle={cardStyle} setCardStyle={setCardStyle} />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id}>
              {cardStyle === "terminal" && <TerminalCard project={project} />}
              {cardStyle === "code" && <CodeCard project={project} />}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button className="bg-white/5 hover:bg-white/10 text-amber-300 border border-amber-500/30 px-8">
            <Rocket className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

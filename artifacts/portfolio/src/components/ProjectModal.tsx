import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Project } from './sections/Projects';
import { CheckCircle2, Target, Cpu, Code2, AlertTriangle, Rocket, Trophy, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function renderList(value: string | string[]) {
  if (Array.isArray(value)) {
    return (
      <ul className="space-y-1.5">
        {value.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="text-muted-foreground leading-relaxed text-sm">{value}</p>;
}

export default function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  const hasOutcome = !!project.details.outcome;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-white/10 text-foreground">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            {project.title}
          </DialogTitle>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.badges.map((badge, idx) => (
              <span key={idx} className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                {badge}
              </span>
            ))}
          </div>
          {project.githubUrl && (
            <div className="mt-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              </Button>
            </div>
          )}
        </DialogHeader>

        <div className="space-y-6">
          {/* Screenshot */}
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={project.image} alt={project.title} className="w-full object-cover" />
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left column */}
            <div className="space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-base font-bold text-foreground mb-2">
                  <Target className="text-red-400 w-4 h-4 flex-shrink-0" /> Problem
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{project.details.problem}</p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-base font-bold text-foreground mb-2">
                  <CheckCircle2 className="text-green-400 w-4 h-4 flex-shrink-0" /> How It Works
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{project.details.works}</p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-base font-bold text-foreground mb-3">
                  <Cpu className="text-blue-400 w-4 h-4 flex-shrink-0" /> Architecture
                </h4>
                <div className="p-3 bg-black/50 border border-white/5 rounded-lg flex flex-col items-center gap-0">
                  {project.details.architecture.split("→").map((step, i, arr) => (
                    <React.Fragment key={i}>
                      <div className="w-full text-center px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs font-medium">
                        {step.trim()}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="text-blue-500/40 text-base leading-none my-0.5 select-none">↓</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-base font-bold text-foreground mb-2">
                  <Code2 className="text-purple-400 w-4 h-4 flex-shrink-0" /> Features
                </h4>
                {renderList(project.details.features)}
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-base font-bold text-foreground mb-2">
                  <AlertTriangle className="text-yellow-400 w-4 h-4 flex-shrink-0" /> Challenges
                </h4>
                {renderList(project.details.challenges)}
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-base font-bold text-foreground mb-2">
                  <Rocket className="text-orange-400 w-4 h-4 flex-shrink-0" /> Future Scope
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{project.details.future}</p>
              </div>
            </div>
          </div>

          {/* Outcome — full width, only if present */}
          {hasOutcome && (
            <div className="border-t border-white/5 pt-5">
              <h4 className="flex items-center gap-2 text-base font-bold text-foreground mb-2">
                <Trophy className="text-cyan-400 w-4 h-4 flex-shrink-0" /> Outcome
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">{project.details.outcome}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Project } from './sections/Projects';
import { CheckCircle2, Target, Cpu, Code2, AlertTriangle, Rocket } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-white/10 text-foreground">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {project.title}
          </DialogTitle>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.badges.map((badge, idx) => (
              <span key={idx} className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        </DialogHeader>
        
        <div className="space-y-8">
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={project.image} alt={project.title} className="w-full object-cover" />
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-foreground mb-2">
                  <Target className="text-red-400 w-5 h-5" /> Problem
                </h4>
                <p className="text-muted-foreground leading-relaxed">{project.details.problem}</p>
              </div>
              
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-foreground mb-2">
                  <CheckCircle2 className="text-green-400 w-5 h-5" /> How it Works
                </h4>
                <p className="text-muted-foreground leading-relaxed">{project.details.works}</p>
              </div>
              
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-foreground mb-3">
                  <Cpu className="text-blue-400 w-5 h-5" /> Architecture
                </h4>
                <div className="p-3 bg-black/50 border border-white/5 rounded-lg flex flex-col items-center gap-0">
                  {project.details.architecture.split("→").map((step, i, arr) => (
                    <React.Fragment key={i}>
                      <div className="w-full text-center px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs font-medium">
                        {step.trim()}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="text-blue-500/50 text-lg leading-none my-0.5 select-none">↓</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-foreground mb-2">
                  <Code2 className="text-purple-400 w-5 h-5" /> Features
                </h4>
                <p className="text-muted-foreground leading-relaxed">{project.details.features}</p>
              </div>
              
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-foreground mb-2">
                  <AlertTriangle className="text-yellow-400 w-5 h-5" /> Challenges
                </h4>
                <p className="text-muted-foreground leading-relaxed">{project.details.challenges}</p>
              </div>
              
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-foreground mb-2">
                  <Rocket className="text-orange-400 w-5 h-5" /> Future Scope
                </h4>
                <p className="text-muted-foreground leading-relaxed">{project.details.future}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
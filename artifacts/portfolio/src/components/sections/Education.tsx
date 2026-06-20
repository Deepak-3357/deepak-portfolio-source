import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
              <span className="text-primary font-mono text-xl">04.</span> 
              Education
              <div className="h-[1px] bg-white/10 flex-1 ml-4"></div>
            </h2>

            <div className="relative pl-8 md:pl-0">
              {/* Timeline Line (Mobile) */}
              <div className="md:hidden absolute left-0 top-2 bottom-2 w-px bg-white/10"></div>
              
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 relative">
                {/* Timeline Dot (Mobile) */}
                <div className="md:hidden absolute -left-[33px] top-8 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 items-center justify-center text-primary">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-2 gap-2">
                      <h3 className="text-2xl font-bold text-foreground">B.E. Computer Science and Engineering</h3>
                      <span className="inline-flex items-center gap-2 text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full w-fit">
                        <Calendar className="w-4 h-4" /> Expected 2029
                      </span>
                    </div>
                    
                    <h4 className="text-lg text-foreground/80 font-medium mb-4">Saveetha School of Engineering, SIMATS</h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> Chennai, India
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4" /> Current Student
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const achievements: React.ReactNode[] = [
  "Maintained a 9.0 CGPA in Computer Science Engineering at SIMATS Engineering, demonstrating consistent academic excellence.",
  "Completed 7+ software development projects across AI, networking, security, and full-stack web development, with multiple projects published as open-source repositories on GitHub featuring comprehensive documentation and version control.",
  "Served as a Student Coordinator for NEURALZENATHON 2026, contributing to event planning, coordination, and successful execution of the hackathon.",
  "Lead Tech Organizer of BYTEFORGE 2026, overseeing website development, registration portal, authentication system, participant management, and technical infrastructure to ensure seamless event execution.",
  <span key="cto">
    <strong>💼 Chief Technology Officer at Lumenyx Technologies Pvt. Ltd.</strong>
    <br />
    Currently serving as Chief Technology Officer, contributing to technology strategy, software development, technical decision-making, and innovative technology solutions.
  </span>
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
              <span className="text-primary font-mono text-xl">05.</span> 
              Achievements
              <div className="h-[1px] bg-white/10 flex-1 ml-4"></div>
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4 border-l-2 border-white/10 pl-6 ml-2"
          >
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="relative"
              >
                <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-primary/30 transition-all group flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

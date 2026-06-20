import React from 'react';
import { motion } from 'framer-motion';

const proficiencyData = [
  {
    level: "Advanced",
    tagline: "Production-ready expertise",
    skills: ["Python", "C", "SQL"],
    badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/60",
    label: "text-cyan-400",
    dot: "bg-cyan-400",
    glow: "shadow-[0_0_20px_rgba(34,211,238,0.12)] hover:shadow-[0_0_28px_rgba(34,211,238,0.22)]",
    header: "border-cyan-500/20 bg-cyan-500/5",
  },
  {
    level: "Intermediate",
    tagline: "Comfortable and growing",
    skills: ["C++", "Java", "Power BI"],
    badge: "bg-violet-500/10 border-violet-500/30 text-violet-300 hover:bg-violet-500/20 hover:border-violet-400/60",
    label: "text-violet-400",
    dot: "bg-violet-400",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.1)] hover:shadow-[0_0_28px_rgba(139,92,246,0.2)]",
    header: "border-violet-500/20 bg-violet-500/5",
  },
  {
    level: "Learning",
    tagline: "Actively exploring",
    skills: ["Machine Learning", "JavaScript", "Web Development", "HTML", "CSS"],
    badge: "bg-orange-500/10 border-orange-500/30 text-orange-300 hover:bg-orange-500/20 hover:border-orange-400/60",
    label: "text-orange-400",
    dot: "bg-orange-400",
    glow: "shadow-[0_0_20px_rgba(249,115,22,0.08)] hover:shadow-[0_0_28px_rgba(249,115,22,0.18)]",
    header: "border-orange-500/20 bg-orange-500/5",
  },
];

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "SQL"]
  },
  {
    category: "AI & Computer Vision",
    skills: ["OpenCV", "LBPH Face Recognition", "Haar Cascade Detection", "Machine Learning"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "JDBC", "Database Design"]
  },
  {
    category: "Systems",
    skills: ["CPU Scheduling", "Operating Systems", "Computer Architecture", "Instruction Set Design"]
  },
  {
    category: "Networking",
    skills: ["Wi-Fi 6", "Cisco Packet Tracer", "Network Optimization"]
  },
  {
    category: "Tools",
    skills: ["GitHub", "VS Code", "Qt 6", "Power BI"]
  }
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
              <span className="text-primary font-mono text-xl">02.</span> 
              Technical Skills
              <div className="h-[1px] bg-white/10 flex-1 ml-4"></div>
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsData.map((group, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-6 text-primary/90">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-foreground/80 hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill Proficiency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-4">
              Skill Proficiency
              <div className="h-[1px] bg-white/10 flex-1 ml-4"></div>
            </h2>
            <p className="text-muted-foreground text-sm mb-10 ml-1">Technologies and tools I actively work with.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-5"
          >
            {proficiencyData.map((group, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`rounded-2xl border backdrop-blur-md overflow-hidden transition-all duration-300 ${group.glow}`}
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                {/* Card header */}
                <div className={`px-5 py-4 border-b ${group.header} flex items-center gap-3`}>
                  <span className={`w-2 h-2 rounded-full ${group.dot} flex-shrink-0`} />
                  <div>
                    <p className={`text-xs font-bold tracking-widest uppercase ${group.label}`}>{group.level}</p>
                    <p className="text-white/40 text-xs mt-0.5">{group.tagline}</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="px-5 py-5 bg-white/[0.03]">
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 text-sm font-medium border rounded-full transition-all duration-200 cursor-default ${group.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
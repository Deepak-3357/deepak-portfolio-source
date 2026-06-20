import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScanFace, Wifi } from 'lucide-react';
import ProjectModal from '../ProjectModal';

import secureFileImg from "@assets/Screenshot_2026-06-19_135320_1781873563742.png";
import cpuSchedulerImg from "@assets/Screenshot_2026-06-19_135729_1781873563743.png";
import cpuSimulatorImg from "@assets/Screenshot_2026-06-19_135813_1781873563743.png";
import bikeDemandImg from "@assets/Screenshot_2026-06-19_140112_1781873563744.png";

export type Project = {
  id: number;
  title: string;
  shortDesc: string;
  image?: string;
  placeholderIcon?: React.ReactNode;
  badges: string[];
  details: {
    problem: string;
    works: string;
    architecture: string;
    features: string;
    challenges: string;
    future: string;
  };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Attendance Management System",
    shortDesc: "Computer vision based attendance system using face recognition.",
    placeholderIcon: <ScanFace className="w-16 h-16 text-blue-400" />,
    badges: ["Python", "OpenCV", "LBPH", "Haar Cascade"],
    details: {
      problem: "Manual attendance is error-prone and time-consuming.",
      works: "Haar Cascade detects faces, LBPH recognizes them, and logs records to CSV.",
      architecture: "Live Webcam Feed → Haar Cascade Face Detection → LBPH Face Recognition → Student Database Lookup → CSV Report Export",
      features: "Face detection, liveness check, CSV reports",
      challenges: "Varying lighting conditions affecting accuracy",
      future: "Web dashboard, multi-camera support"
    }
  },
  {
    id: 2,
    title: "Wi-Fi 6 WLAN Architecture",
    shortDesc: "Simulated high-density enterprise network topology.",
    placeholderIcon: <Wifi className="w-16 h-16 text-purple-400" />,
    badges: ["Cisco Packet Tracer", "OFDMA", "MU-MIMO"],
    details: {
      problem: "High-density enterprise environments need efficient Wi-Fi.",
      works: "Layered topology with OFDMA/MU-MIMO simulated in Packet Tracer.",
      architecture: "Core Switch Layer → Distribution Layer → Wi-Fi 6 Access Points → High-Density Client Devices",
      features: "OFDMA, MU-MIMO, topology design",
      challenges: "Bandwidth allocation and interference mitigation",
      future: "QoS policies, network monitoring integration"
    }
  },
  {
    id: 3,
    title: "Secure File Management System",
    shortDesc: "Encrypted file storage with RBAC.",
    image: secureFileImg,
    badges: ["Java", "MySQL", "AES-256", "SHA-256", "JDBC"],
    details: {
      problem: "Sensitive files need strict encryption and access control.",
      works: "AES-256 encrypts files, SHA-256 verifies integrity, RBAC restricts access.",
      architecture: "Java Frontend UI → User Authentication → RBAC Permission Engine → AES-256 Encryption Layer → MySQL Encrypted Storage",
      features: "RBAC, encryption, SHA-256 checksums",
      challenges: "Secure key management and performance overhead",
      future: "Cloud storage integration, MFA"
    }
  },
  {
    id: 4,
    title: "Responsive CPU Task Scheduler",
    shortDesc: "ML-assisted scheduling algorithm simulator.",
    image: cpuSchedulerImg,
    badges: ["Python", "ML", "FCFS", "Round Robin", "Priority"],
    details: {
      problem: "Understanding scheduling trade-offs requires active simulation.",
      works: "Runs 3 algorithms, compares wait/turnaround times, ML recommends best approach.",
      architecture: "Process Input (Arrival & Burst Times) → Scheduling Algorithm Engine → ML Performance Analyzer → Comparison Dashboard",
      features: "3 algorithms, ML analysis, perf dashboard",
      challenges: "Complex preemptive simulation logic",
      future: "Multi-core support, interactive Gantt charts"
    }
  },
  {
    id: 5,
    title: "Custom CPU Simulator",
    shortDesc: "Hands-on instruction execution simulator.",
    image: cpuSimulatorImg,
    badges: ["Python", "Qt 6", "Computer Architecture"],
    details: {
      problem: "CPU learning needs hands-on instruction simulation for better understanding.",
      works: "Design custom opcodes, write programs, step-by-step execution with register/memory view.",
      architecture: "Instruction Set Designer → Program Builder → CPU Execution Engine → Register & Memory Visualizer",
      features: "Custom ISA, execution sim, register visualization",
      challenges: "Building a flexible and robust instruction parser",
      future: "Pipeline simulation, cache hierarchy visualization"
    }
  },
  {
    id: 6,
    title: "Bike Demand Prediction",
    shortDesc: "ML models for forecasting bike-sharing demand.",
    image: bikeDemandImg,
    badges: ["Python", "ML", "Power BI"],
    details: {
      problem: "Bike-sharing demand forecasting is critical for resource planning.",
      works: "Historical data preprocessed, features engineered, ML models trained, visualized via Power BI.",
      architecture: "Raw Historical Data → Data Preprocessing & Cleaning → Feature Engineering → ML Model Training → Power BI Dashboard",
      features: "Predictive modeling, feature engineering, Power BI viz",
      challenges: "Class imbalance, handling seasonal demand spikes",
      future: "Real-time API integration, dynamic pricing"
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
              <span className="text-primary font-mono text-xl">03.</span> 
              Projects
              <div className="h-[1px] bg-white/10 flex-1 ml-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col group hover:border-primary/50 transition-colors"
              >
                <div className="h-48 relative overflow-hidden bg-muted/30 flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      {project.placeholderIcon}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <Button 
                      variant="secondary" 
                      onClick={() => setSelectedProject(project)}
                      className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                    >
                      View Technical Details
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">{project.shortDesc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.badges.slice(0, 3).map((badge, bIdx) => (
                      <span key={bIdx} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                        {badge}
                      </span>
                    ))}
                    {project.badges.length > 3 && (
                      <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                        +{project.badges.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        open={!!selectedProject} 
        onOpenChange={(open) => !open && setSelectedProject(null)} 
      />
    </section>
  );
}
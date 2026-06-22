import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import ProjectModal from '../ProjectModal';

import secureFileImg from "@assets/Screenshot_2026-06-19_135320_1781873563742.png";
import cpuSchedulerImg from "@assets/Screenshot_2026-06-19_135729_1781873563743.png";
import cpuSimulatorImg from "@assets/Screenshot_2026-06-19_135813_1781873563743.png";
import bikeDemandImg from "@assets/Screenshot_2026-06-19_140112_1781873563744.png";
import wifiImg from "@assets/network_topology_1782100025045.png";
import weatherImg from "@assets/weather_prediction_interface_1782100065024.png";

export type Project = {
  id: number;
  title: string;
  shortDesc: string;
  image?: string;
  placeholderIcon?: React.ReactNode;
  customPlaceholder?: React.ReactNode;
  badges: string[];
  featured?: boolean;
  githubUrl?: string;
  details: {
    problem: string;
    works: string;
    architecture: string;
    features: string | string[];
    challenges: string | string[];
    future: string;
    outcome?: string;
  };
};


const AttendancePlaceholder = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-900/30 via-slate-900/40 to-purple-900/20">
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
      <circle cx="28" cy="20" r="12" stroke="#3b82f6" strokeWidth="2" fill="none" />
      <circle cx="28" cy="20" r="5" fill="#3b82f6" fillOpacity="0.4" />
      <path d="M8 48c0-11 9-18 20-18s20 7 20 18" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="36" y="30" width="16" height="16" rx="3" fill="#22d3ee" fillOpacity="0.15" stroke="#22d3ee" strokeWidth="1.5" />
      <path d="M39 38l3 3 5-5" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="text-xs font-mono text-blue-300/70 tracking-widest uppercase">Face Recognition</span>
  </div>
);

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Attendance Management System",
    shortDesc: "AI-powered desktop application using real-time face recognition, liveness detection, and Qt 6 GUI for automated attendance management and analytics.",
    placeholderIcon: null,
    badges: ["C++17", "OpenCV 4.12", "Qt 6", "LBPH", "Haar Cascade", "CMake"],
    details: {
      problem: "Manual attendance management is time-consuming, prone to human errors, and vulnerable to proxy attendance. Educational institutions require an automated and reliable solution for accurate attendance tracking.",
      works: "The system captures live video through a webcam. Haar Cascade detects faces, LBPH recognizes registered students, and liveness detection verifies genuine presence. Attendance records are automatically stored in CSV reports, and statistics are displayed through a Qt 6 dashboard.",
      architecture: "Live Webcam Feed → Face Detection (Haar Cascade) → Face Preprocessing → LBPH Face Recognition → Student Database Lookup → Liveness Verification → Attendance Logging → Analytics & Reports → Qt Dashboard GUI",
      features: [
        "Student Registration and Management",
        "Face Dataset Collection using Webcam",
        "LBPH Model Training",
        "Real-Time Face Detection and Recognition",
        "Liveness Detection",
        "Automatic Attendance Marking",
        "Duplicate Attendance Prevention",
        "Unknown Face Detection",
        "Attendance Analytics Dashboard",
        "Date-Wise Attendance Reports",
        "Student Profile Viewer",
        "Email Report Generation",
        "Admin Authentication",
        "Modern Qt GUI Interface",
      ],
      challenges: [
        "Varying lighting conditions affected face detection and recognition accuracy.",
        "Preventing proxy attendance using photos or mobile screens required liveness detection techniques.",
      ],
      future: "Integrate Deep Learning-based face recognition (FaceNet / ArcFace) for improved accuracy. Develop a cloud-enabled web/mobile dashboard with multi-camera support for remote attendance monitoring.",
    }
  },
  {
    id: 2,
    title: "Wi-Fi 6 WLAN Architecture",
    shortDesc: "Simulated high-density enterprise network topology using Wi-Fi 6 with OFDMA and MU-MIMO.",
    githubUrl: "https://github.com/Deepak-3357/wifi6-network-architecture",
    image: wifiImg,
    badges: ["Cisco Packet Tracer", "Wi-Fi 6", "OFDMA", "MU-MIMO"],
    details: {
      problem: "High-density enterprise environments need efficient Wi-Fi that traditional Wi-Fi 5 cannot handle at scale.",
      works: "Layered network topology using Wi-Fi 6 features (OFDMA for multi-user scheduling, MU-MIMO for simultaneous transmissions) designed and simulated in Cisco Packet Tracer.",
      architecture: "Core Switch Layer → Distribution Layer → Wi-Fi 6 Access Points → High-Density Client Devices",
      features: "OFDMA & MU-MIMO implementation, network topology design, performance optimization, Packet Tracer simulation",
      challenges: "Bandwidth allocation and interference mitigation across high-density client environments",
      future: "QoS policies, network monitoring integration, real-time traffic analysis",
    }
  },
  {
    id: 3,
    title: "Secure File Management System",
    shortDesc: "Encrypted file storage platform with AES-256, SHA-256 integrity checks, and role-based access control.",
    image: secureFileImg,
    githubUrl: "https://github.com/Deepak-3357/secure-file-management-system",
    badges: ["Java", "MySQL", "AES-256", "SHA-256", "JDBC"],
    details: {
      problem: "Sensitive file storage systems lack proper access controls and encryption, making them vulnerable to unauthorized access.",
      works: "AES-256 encrypts files before storage, SHA-256 checksums verify integrity on retrieval, and RBAC restricts what each user can access based on their role.",
      architecture: "Java Frontend UI → User Authentication → RBAC Permission Engine → AES-256 Encryption Layer → MySQL Encrypted Storage",
      features: "Role-based access control (RBAC), AES-256 encryption, SHA-256 integrity verification, user authentication",
      challenges: "Secure key management without performance degradation; enforcing RBAC across nested file structures",
      future: "Cloud storage integration, multi-factor authentication, audit logging dashboard",
    }
  },
  {
    id: 4,
    title: "Responsive CPU Task Scheduler",
    shortDesc: "ML-assisted CPU scheduling simulator comparing FCFS, Round Robin, and Priority algorithms with a performance dashboard.",
    image: cpuSchedulerImg,
    githubUrl: "https://github.com/Deepak-3357/responsive-cpu-task-scheduler",
    badges: ["Python", "Machine Learning", "FCFS", "Round Robin", "Priority"],
    details: {
      problem: "Understanding CPU scheduling algorithm trade-offs requires hands-on simulation with real performance metrics.",
      works: "Users input process arrival and burst times. The simulator runs FCFS, Round Robin, and Priority algorithms, compares wait/turnaround times, and an ML model recommends the most efficient algorithm for the given workload.",
      architecture: "Process Input (Arrival & Burst Times) → Scheduling Algorithm Engine → ML Performance Analyzer → Comparison Dashboard",
      features: "FCFS, Round Robin & Priority scheduling, adaptive ML-based analysis, performance comparison dashboard",
      challenges: "Accurately simulating preemptive vs. non-preemptive scheduling edge cases",
      future: "Multi-core simulation, interactive Gantt chart visualization, real-time OS process monitoring",
    }
  },
  {
    id: 5,
    title: "Custom CPU Simulator",
    shortDesc: "Interactive CPU simulator for designing custom instruction sets and visualizing step-by-step execution.",
    image: cpuSimulatorImg,
    githubUrl: "https://github.com/Deepak-3357/custom-cpu-simulator",
    badges: ["Python", "Qt 6", "Computer Architecture"],
    details: {
      problem: "Learning CPU architecture through theory alone leaves gaps — students need interactive simulation of instruction execution to build intuition.",
      works: "Users design custom opcodes and operand schemas, write programs using those instructions, then step through execution watching registers and memory update in real time.",
      architecture: "Instruction Set Designer → Program Builder → CPU Execution Engine → Register & Memory Visualizer",
      features: "Custom instruction set design, CPU execution simulation, register and memory visualization, interactive learning environment",
      challenges: "Building a flexible instruction parser that handles variable operand counts and custom mnemonics without conflicts",
      future: "Pipeline simulation, cache hierarchy visualization, assembly language compiler support",
    }
  },
  {
    id: 6,
    title: "Bike Demand Prediction",
    shortDesc: "Machine learning model forecasting bike-sharing demand from historical data, visualized via Power BI.",
    image: bikeDemandImg,
    githubUrl: "https://github.com/Deepak-3357/bike-demand-prediction-system",
    badges: ["Python", "Machine Learning", "Power BI", "Data Science"],
    details: {
      problem: "Bike-sharing companies struggle to predict demand, leading to poor resource allocation and reduced service quality.",
      works: "Historical bike rental data is preprocessed, features are engineered (hour, season, weather, holiday), and ML models are trained to predict hourly demand. Results are visualized in an interactive Power BI dashboard.",
      architecture: "Raw Historical Data → Data Preprocessing & Cleaning → Feature Engineering → ML Model Training → Power BI Dashboard",
      features: "Predictive modeling, data preprocessing & feature engineering, Power BI visualization dashboard",
      challenges: "Handling class imbalance and seasonal demand fluctuations; feature selection for time-series patterns",
      future: "Real-time prediction API, mobile app integration, demand-based dynamic pricing",
    }
  },
  {
    id: 7,
    title: "Weather Prediction System",
    shortDesc: "Machine learning based weather forecasting application that predicts weather conditions using historical meteorological data and advanced data analytics techniques.",
    image: weatherImg,
    githubUrl: "https://github.com/Deepak-3357/weather-prediction-system",
    badges: ["Python", "Machine Learning", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
    details: {
      problem: "Weather forecasting is essential for agriculture, transportation, disaster management, and daily planning. Traditional forecasting methods often struggle with rapidly changing weather conditions, making accurate prediction challenging.",
      works: "The system processes historical weather data, performs preprocessing and feature engineering, trains machine learning models on weather parameters such as temperature, humidity, wind speed, and rainfall, and generates weather forecasts. Prediction results are visualized through interactive charts and analytics dashboards.",
      architecture: "Historical Weather Dataset → Data Cleaning & Preprocessing → Feature Engineering → Machine Learning Model Training → Weather Prediction → Performance Evaluation → Visualization Dashboard → Forecast Reports",
      features: [
        "Historical Weather Data Analysis",
        "Data Cleaning & Preprocessing",
        "Feature Engineering",
        "Weather Condition Prediction",
        "Temperature Forecasting",
        "Humidity & Rainfall Analysis",
        "Machine Learning Model Training",
        "Forecast Accuracy Evaluation",
        "Data Visualization Dashboard",
        "Performance Comparison of Models",
      ],
      challenges: [
        "Handling missing and inconsistent weather records.",
        "Selecting the most relevant weather features for accurate forecasting.",
        "Improving prediction accuracy across different seasonal patterns.",
        "Managing fluctuations caused by extreme weather conditions.",
      ],
      future: "Deep Learning based forecasting using LSTM networks. Real-time weather API integration. Cloud-based prediction platform. Mobile application for live weather updates. Regional forecasting using geospatial datasets.",
      outcome: "Successfully developed a machine learning based weather prediction system capable of analyzing historical weather patterns, forecasting future weather conditions, and visualizing insights through interactive dashboards. The project demonstrates practical applications of data science and predictive analytics for real-world forecasting problems.",
    }
  },
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
                data-cursor="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col group hover:border-primary/50 transition-all duration-300"
              >
                {/* Image / Placeholder */}
                <div className="h-48 relative overflow-hidden bg-muted/30">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : project.customPlaceholder ? (
                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                      {project.customPlaceholder}
                    </div>
                  ) : project.placeholderIcon ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      {project.placeholderIcon}
                    </div>
                  ) : (
                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                      <AttendancePlaceholder />
                    </div>
                  )}


                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <Button
                      data-cursor="detail"
                      variant="secondary"
                      onClick={() => setSelectedProject(project)}
                      className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                    >
                      View Technical Details
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 flex-1 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                    {project.badges.slice(0, 4).map((badge, bIdx) => (
                      <span key={bIdx} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                        {badge}
                      </span>
                    ))}
                    {project.badges.length > 4 && (
                      <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                        +{project.badges.length - 4}
                      </span>
                    )}
                  </div>

                  <div className={project.id === 1 ? "flex flex-col gap-2" : "flex flex-col sm:flex-row gap-2"}>
                    <Button
                      data-cursor="detail"
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 text-sm transition-all"
                    >
                      View Technical Details
                    </Button>
                    {project.githubUrl && (
                      <Button
                        asChild
                        data-cursor="link"
                        variant="outline"
                        size="sm"
                        className="flex-1 border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 text-sm transition-all"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                          <Github className="w-3.5 h-3.5" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.id === 1 && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-full cursor-not-allowed">
                            <Button
                              disabled
                              variant="outline"
                              size="sm"
                              className="w-full border-white/10 bg-white/5 text-sm transition-all opacity-50 pointer-events-none"
                            >
                              🔗 GitHub Repository (Coming Soon)
                            </Button>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          Repository will be available soon
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>

                  {project.id === 1 && (
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <h4 className="text-xs font-semibold text-foreground/80 mb-1 flex items-center gap-1.5">
                        <span>🚧</span> GitHub Repository
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        The source code repository is currently being prepared and organized for public release. The GitHub repository will be added soon with complete source code, project documentation, build instructions, and implementation details.
                      </p>
                    </div>
                  )}
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

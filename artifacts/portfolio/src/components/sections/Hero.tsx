import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import TypingAnimation from '../TypingAnimation';
import { Button } from '@/components/ui/button';
import profilePhoto from "@assets/DE_PHOTO_1781873583208.JPG";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-mono text-primary mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Deepak R
            </h1>
            <div className="text-2xl md:text-4xl font-bold text-muted-foreground mb-8 h-12">
              <TypingAnimation 
                sequence={["Python Developer", "AI Enthusiast", "Computer Science Engineer"]}
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              />
            </div>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto md:mx-0">
              Building intelligent software solutions through Artificial Intelligence and Software Engineering.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-shadow">
                <a href="#projects" data-cursor="projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-sm">
                <a href="/Deepak_R_Resume.pdf" download data-cursor="download">
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <div className="flex gap-4 ml-4">
                <a href="https://github.com/Deepak-3357" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all backdrop-blur-sm">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/deepak-rajesh-912092354/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all backdrop-blur-sm">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full p-2" 
                 style={{ 
                   background: 'linear-gradient(45deg, rgba(59,130,246,0.5), rgba(168,85,247,0.5))',
                   boxShadow: '0 0 40px rgba(59,130,246,0.5), 0 0 80px rgba(59,130,246,0.2)' 
                 }}>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-card relative">
                <img 
                  src={profilePhoto} 
                  alt="Deepak R" 
                  className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
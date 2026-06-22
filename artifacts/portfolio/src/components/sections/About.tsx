import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, BrainCircuit, Cpu, Mail } from 'lucide-react';

const CountUp = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span> 
            About Me
            <div className="h-[1px] bg-white/10 flex-1 ml-4"></div>
          </h2>

          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Motivated Computer Science Engineering student with a strong interest in Artificial Intelligence and Software Engineering.
              </p>
              <p>
                Passionate about exploring modern technologies and continuously expanding my knowledge through academic learning, technical projects, and hands-on experimentation. I enjoy understanding how software systems are designed, optimized, and applied to solve real-world challenges.
              </p>
              <p>
                Currently seeking opportunities to strengthen my technical expertise, gain industry experience, and contribute to innovative software and AI-driven solutions while continuing my growth as a future software engineer.
              </p>
              <div className="pt-6 flex items-center gap-3 text-foreground">
                <Mail className="text-primary" />
                <a href="mailto:deepak3357rajesh@gmail.com" className="hover:text-primary transition-colors">deepak3357rajesh@gmail.com</a>
              </div>
            </div>

            <div className="md:col-span-4 grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <Code2 className="text-primary mb-4 h-8 w-8" />
                <h3 className="text-3xl font-bold text-foreground mb-1"><CountUp end={7} />+</h3>
                <p className="text-sm text-muted-foreground">Technical Projects</p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <BrainCircuit className="text-secondary mb-4 h-8 w-8" />
                <h3 className="text-3xl font-bold text-foreground mb-1"><CountUp end={5} />+</h3>
                <p className="text-sm text-muted-foreground">Technical Domains</p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <Cpu className="text-accent mb-4 h-8 w-8" />
                <h3 className="text-3xl font-bold text-foreground mb-1"><CountUp end={4} /></h3>
                <p className="text-sm text-muted-foreground">Programming Languages</p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <div className="text-primary mb-4 font-mono font-bold h-8 flex items-center">AI/OS</div>
                <p className="text-sm text-muted-foreground">Core Focus</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
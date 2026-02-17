import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ScrambleText from "./ScrambleText";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-start pb-2 lg:pb-2 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />
      </div>

      {/* Grid decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-6 lg:left-12 text-muted-foreground/20 text-xs font-mono">+</div>
        <div className="absolute top-20 right-6 lg:right-12 text-muted-foreground/20 text-xs font-mono">+</div>
        <div className="absolute bottom-20 left-6 lg:left-12 text-muted-foreground/20 text-xs font-mono">+</div>
        <div className="absolute bottom-20 right-6 lg:right-12 text-muted-foreground/20 text-xs font-mono">+</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground/10 text-xs font-mono">+</div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-end">
          {/* Left column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase">
                — Full Stack Developer | Java & MERN Stack
              </span>
            </motion.div>

            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[140px] font-bold leading-[0.85] tracking-tight text-foreground"
              >
                <ScrambleText text="Anusha" speed={100} className="inline-block" />
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[140px] font-bold leading-[0.85] tracking-tight text-foreground"
              >
                <ScrambleText text="Jindal" speed={100} className="inline-block" />
                <span className="text-accent">.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-6"
            >
              {[
                { icon: Github, href: "https://github.com/anushajindal2046" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/anusha-jindal-36959028a" },
                { icon: Mail, href: "mailto:anushajindal1940@gmail.com" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-500"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase mb-4">
                — Introduction
              </p>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug text-foreground mb-4">
                Java & MERN Stack<br />
                Enthusiast
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-md">
                Building scalable, secure, and impactful web applications with expertise in Spring Boot, Node.js, React, and modern system design patterns.
              </p>
              <p className="text-xs text-muted-foreground/80 leading-relaxed mb-8 max-w-md">
                Specializing in microservices architecture, real-time applications, authentication systems, and performance optimization.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-accent text-sm font-medium group"
              >
                View Projects
                <ArrowDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-border origin-left"
      />
    </section>
  );
};

export default HeroSection;

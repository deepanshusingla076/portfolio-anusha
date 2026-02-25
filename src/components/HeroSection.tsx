import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import ScrambleText from "./ScrambleText";

const HeroSection = () => (
    <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center py-32 border-b border-border overflow-hidden"
    >
        {/* Corner marks */}
        <div className="absolute top-8 left-6 lg:left-12 text-muted-foreground/20 text-xs font-mono">+</div>
        <div className="absolute top-8 right-6 lg:right-12 text-muted-foreground/20 text-xs font-mono">+</div>
        <div className="absolute bottom-8 left-6 lg:left-12 text-muted-foreground/20 text-xs font-mono">+</div>
        <div className="absolute bottom-8 right-6 lg:right-12 text-muted-foreground/20 text-xs font-mono">+</div>

        {/* Subtle grid background */}
        <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
                backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "60px 60px",
            }}
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <p className="text-[10px] tracking-[0.35em] text-muted-foreground font-medium uppercase mb-8">
                    00 — Full Stack Developer
                </p>
            </motion.div>

            <div className="mb-10">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight text-foreground"
                >
                    <ScrambleText text="Anusha" startDelay={400} />
                    <br />
                    <ScrambleText text="Jindal" startDelay={700} />
                </motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 max-w-4xl"
            >
                <p className="max-w-md text-sm text-muted-foreground leading-[1.8]">
                    Building scalable backend systems with Spring Boot &amp; Node.js. Passionate about
                    microservices, clean architecture, and real-time applications.
                </p>

                <div className="flex items-center gap-4 shrink-0">
                    <a
                        href="https://github.com/anushajindal2046"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 border border-border hover:border-foreground/30 text-muted-foreground hover:text-foreground transition-all duration-500"
                        aria-label="GitHub"
                    >
                        <Github size={16} strokeWidth={1.5} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/anusha-jindal-36959028a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 border border-border hover:border-foreground/30 text-muted-foreground hover:text-foreground transition-all duration-500"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={16} strokeWidth={1.5} />
                    </a>
                    <a
                        href="mailto:anushajindal1940@gmail.com"
                        className="p-2.5 border border-border hover:border-foreground/30 text-muted-foreground hover:text-foreground transition-all duration-500"
                        aria-label="Email"
                    >
                        <Mail size={16} strokeWidth={1.5} />
                    </a>
                    <a
                        href="#about"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-foreground text-primary-foreground text-[11px] font-semibold tracking-[0.18em] uppercase hover:opacity-90 transition-opacity"
                    >
                        View Work
                    </a>
                </div>
            </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
                <ArrowDown size={16} className="text-muted-foreground/40" strokeWidth={1.5} />
            </motion.div>
        </motion.div>
    </section>
);

export default HeroSection;

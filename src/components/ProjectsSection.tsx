import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    num: "01",
    title: "Fitness Point",
    subtitle: "Fitness Tracking Platform",
    tech: ["Spring Boot", "Hibernate", "MySQL", "Thymeleaf"],
    description: "Full-stack application for workout and diet management with RESTful APIs using Controller-Service-Repository architecture.",
    highlights: ["Microservices with API Gateway & Eureka Server", "Responsive Thymeleaf UI", "Complete CRUD operations"],
    github: "https://github.com/anushajindal2046",
  },
  {
    num: "02",
    title: "Quizzard",
    subtitle: "Interactive Quiz App",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Dynamic quiz platform with real-time score calculation, instant feedback, and answer validation.",
    highlights: ["Dynamic question rendering", "Cross-browser compatible", "Responsive design"],
    github: "https://github.com/anushajindal2046",
  },
  {
    num: "03",
    title: "Scoopy Doo",
    subtitle: "Scoop Into Happiness",
    tech: ["Node.js", "Express.js", "MongoDB", "Redis", "EJS"],
    description: "Production-ready MVC architecture with JWT auth, bcrypt hashing, role-based authorization, and real-time communication.",
    highlights: ["Socket.IO real-time features", "Redis caching layer", "Jest & Puppeteer testing"],
    github: "https://github.com/anushajindal2046",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-10 lg:py-14 border-t border-border relative">
    <div className="absolute top-8 left-6 lg:left-12 text-muted-foreground/20 text-xs font-mono">+</div>
    <div className="absolute top-8 right-6 lg:right-12 text-muted-foreground/20 text-xs font-mono">+</div>

    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase mb-4">
            02 — Featured Projects
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Real-World
            <br />
            <span>Applications</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="space-y-0 border-t border-border">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 0.1}>
            <motion.div
              className="border-b border-border py-10 lg:py-14 group cursor-pointer"
              whileHover={{ backgroundColor: "hsl(0 0% 5%)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                <div className="lg:col-span-1">
                  <span className="text-xs text-muted-foreground font-mono">{project.num}</span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 tracking-wide">{project.subtitle}</p>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <ul className="space-y-1">
                    {project.highlights.map((h) => (
                      <li key={h} className="text-xs text-muted-foreground/70 flex items-start gap-2">
                        <span className="w-[3px] h-[3px] rounded-full bg-accent mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[10px] tracking-wider border border-border text-muted-foreground uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                      <Github size={16} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

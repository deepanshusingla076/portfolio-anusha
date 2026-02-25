import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  { title: "Languages", skills: ["Java", "C++", "Python", "SQL", "JavaScript", "HTML/CSS"] },
  { title: "Frameworks", skills: ["Node.js", "Express", "Spring Boot", "React"] },
  { title: "Databases", skills: ["MySQL", "MongoDB", "Redis"] },
  { title: "Cloud & Tools", skills: ["AWS EC2", "AWS S3", "Git", "Postman", "VS Code", "Socket.IO"] },
  { title: "Core Concepts", skills: ["DSA", "OOP", "DBMS", "OS", "Networks", "System Design"] },
  { title: "Soft Skills", skills: ["Communication", "Leadership", "Team Management", "Problem Solving"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-16 lg:py-20 border-t border-border relative">
    <div className="absolute top-8 left-6 lg:left-12 text-muted-foreground/20 text-xs font-mono">+</div>
    <div className="absolute top-8 right-6 lg:right-12 text-muted-foreground/20 text-xs font-mono">+</div>

    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase mb-4">
          03 — Technical Skills
        </p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-16">
          Tools &
          <br />
          <span>Technologies</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {skillCategories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.06}>
            <div className="bg-background p-8 lg:p-10 h-full group hover:bg-card transition-colors duration-500">
              <h3 className="text-[10px] tracking-[0.25em] text-accent font-medium uppercase mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.04 + 0.2 }}
                    className="px-3 py-1.5 text-xs border border-border text-secondary-foreground hover:border-foreground/30 hover:text-foreground transition-all duration-500 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

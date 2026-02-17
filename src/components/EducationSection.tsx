import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const education = [
  { degree: "Bachelor of Engineering — Chitkara University", year: "2023–Present", score: "CGPA: 8.62" },
  { degree: "XII — GMSSS Sec-16D, Chandigarh", year: "2023", score: "82.2%" },
  { degree: "X — Amravati Vidyalaya, Panchkula", year: "2021", score: "94.6%" },
];

const EducationSection = () => (
  <section id="education" className="py-10 lg:py-14 relative">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap size={18} className="text-accent" strokeWidth={1.5} />
          <h3 className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase">Academic Background</h3>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.12}>
        <div className="space-y-0 border-t border-border">
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex justify-between items-start py-6 border-b border-border group hover:bg-card/50 transition-colors duration-300 px-3"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground leading-snug">{edu.degree}</p>
                <p className="text-xs text-muted-foreground mt-2">{edu.year}</p>
              </div>
              <span className="text-accent text-xs font-mono font-bold ml-4 whitespace-nowrap">{edu.score}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default EducationSection;

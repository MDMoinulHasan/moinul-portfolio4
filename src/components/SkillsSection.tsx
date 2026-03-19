import { motion } from "framer-motion";

const skills = [
  { name: "C", icon: "C" },
  { name: "C++", icon: "C++" },
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "JS" },
  { name: "Dart", icon: "🎯" },
  { name: "HTML", icon: "<>" },
  { name: "CSS", icon: "🎨" },
  { name: "MySQL", icon: "🗄️" },
  { name: "AI", icon: "🤖" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 grid-bg relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass-card rounded-xl p-6 flex flex-col items-center gap-3 group cursor-default hover:glow-cyan transition-all duration-300"
            >
              <span className="text-3xl font-mono font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {skill.icon}
              </span>
              <span className="font-mono text-sm text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Consulting badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <div className="glass-card rounded-full px-6 py-3 font-mono text-sm flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Technical Consulting — <span className="text-primary">Core Service</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

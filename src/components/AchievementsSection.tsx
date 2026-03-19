import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Problem Solving",
    issuer: "Competitive Programming",
    description: "Active problem solver across online judges, building algorithmic thinking and data structure proficiency.",
  },
  {
    title: "Database Design",
    issuer: "Academic Project",
    description: "Designed and implemented a complete Tax Management System with advanced SQL queries and normalized schemas.",
  },
  {
    title: "Mobile Development",
    issuer: "Flutter & Dart",
    description: "Built a cross-platform Fantasy Cricket App demonstrating proficiency in mobile UI/UX and state management.",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-24 grid-bg relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Achievements & <span className="text-gradient">Highlights</span>
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 space-y-3 group hover:glow-accent transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Award size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm tracking-tight">{item.title}</h3>
              <p className="font-mono text-xs text-primary">{item.issuer}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

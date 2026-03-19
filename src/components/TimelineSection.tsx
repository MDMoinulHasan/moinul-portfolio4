import { motion } from "framer-motion";
import { GraduationCap, Briefcase, BookOpen } from "lucide-react";

const timelineItems = [
  {
    icon: BookOpen,
    date: "Present",
    title: "B.Sc. in CSE",
    subtitle: "National Institute of Textile Engineering and Research (NITER)",
    description: "Constituent Institute of the University of Dhaka. Studying Computer Science and Engineering with focus on software development and systems design.",
    status: "In Progress",
  },
  {
    icon: GraduationCap,
    date: "Academic",
    title: "Technical Skill Development",
    subtitle: "Self-directed & Coursework",
    description: "Mastered C, C++, Java, Python, JavaScript, Dart. Built projects in SQL database design and Flutter mobile development.",
  },
  {
    icon: Briefcase,
    date: "Next Step",
    title: "Seeking Internship",
    subtitle: "Open to Opportunities",
    description: "Looking to apply engineering principles in a professional environment. Available for Technical Consulting and internship roles.",
    status: "Open",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Education & <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto" />
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border/50" />

          <div className="space-y-12">
            {timelineItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-6 relative"
              >
                {/* Icon node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center glass-card">
                    <item.icon size={22} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="glass-card rounded-xl p-5 flex-1 space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-mono text-xs text-primary">{item.date}</span>
                    {item.status && (
                      <span className="flex items-center gap-1.5 font-mono text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-400">{item.status}</span>
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.subtitle}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

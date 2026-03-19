import { motion } from "framer-motion";
import { Code2, Database, Smartphone, MonitorCog } from "lucide-react";

const services = [
  {
    icon: MonitorCog,
    title: "Technical Consulting",
    description: "Providing expert guidance on software architecture, database optimization, and technical problem-solving for student and small-scale projects.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "End-to-end web application development with modern frameworks, clean code practices, and scalable architecture.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Robust relational database design with optimized queries, proper normalization, and efficient CRUD operations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications using Flutter and Dart, delivering native performance with a single codebase.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 grid-bg relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            What I <span className="text-gradient">Do</span>
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto" />
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Delivering precision-engineered solutions across the full development lifecycle.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card rounded-xl p-6 group hover:glow-accent transition-all duration-200 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-2 tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed flex-1">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

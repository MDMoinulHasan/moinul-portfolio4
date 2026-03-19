import { motion } from "framer-motion";
import { Database, Smartphone } from "lucide-react";
import taxImg from "@/assets/project-tax.jpg";
import cricketImg from "@/assets/project-cricket.jpg";

const projects = [
  {
    title: "Tax Management System",
    description: "A robust backend system built with SQL. Features include complex CRUD operations, advanced relational database design, and optimized data querying.",
    tags: ["SQL", "Database Design", "CRUD", "Backend"],
    icon: Database,
    image: taxImg,
  },
  {
    title: "Fantasy Cricket App",
    description: "A cross-platform mobile application developed using Flutter and Dart, focusing on a seamless user interface and real-time data handling.",
    tags: ["Flutter", "Dart", "Mobile", "UI/UX"],
    icon: Smartphone,
    image: cricketImg,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card rounded-xl overflow-hidden group relative"
            >
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out" />
              </div>

              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: "grayscale(20%) contrast(110%)" }}
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <project.icon size={16} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg tracking-tight">{project.title}</h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

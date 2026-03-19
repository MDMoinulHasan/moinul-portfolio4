import { motion } from "framer-motion";
import { PenLine, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Why I Chose SQL for My First Backend Project",
    excerpt: "Exploring the fundamentals of relational databases and how building a Tax Management System taught me structured thinking.",
    date: "Coming Soon",
    tags: ["SQL", "Backend"],
  },
  {
    title: "Getting Started with Flutter as a CS Student",
    excerpt: "My journey into cross-platform mobile development and lessons learned building the Fantasy Cricket App.",
    date: "Coming Soon",
    tags: ["Flutter", "Mobile"],
  },
  {
    title: "The Art of Technical Consulting",
    excerpt: "How a structured approach to problem-solving can elevate any engineering project from concept to delivery.",
    date: "Coming Soon",
    tags: ["Consulting", "Career"],
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Blog & <span className="text-gradient">Articles</span>
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto" />
          <p className="text-muted-foreground text-sm">Technical write-ups and learnings from my journey.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 space-y-4 group hover:glow-accent transition-all duration-200 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                  <PenLine size={14} className="text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="font-semibold text-sm tracking-tight leading-snug flex-1">{post.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

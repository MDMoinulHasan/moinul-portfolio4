import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 2, suffix: "+", label: "Projects Completed" },
  { value: 8, suffix: "+", label: "Technologies" },
  { value: 1, suffix: "+", label: "Years Learning" },
  { value: 100, suffix: "%", label: "Commitment" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.max(1, Math.floor(target / (duration / 30)));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold tracking-tighter text-gradient tabular-nums font-mono">
      {count}{suffix}
    </span>
  );
};

const StatsBar = () => {
  return (
    <section className="py-16 relative border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-2"
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <p className="font-mono text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;

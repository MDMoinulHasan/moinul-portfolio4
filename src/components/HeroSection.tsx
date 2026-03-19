import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, FileDown } from "lucide-react";
import profileImg from "@/assets/profile-photo.jpg";

const terminalLines = [
  { prompt: "moinul@niter:~$", command: " locate --specialist" },
  { output: '> "Technical Consulting, Development"' },
];

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 35);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      {!done && <span className="animate-blink text-primary">▊</span>}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 grid-bg overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            {/* Terminal */}
            <div className="glass-card rounded-xl overflow-hidden max-w-lg">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">terminal</span>
              </div>
              <div className="p-4 font-mono text-sm space-y-2">
                <div className="text-muted-foreground">
                  <span className="text-primary">{terminalLines[0].prompt}</span>
                  <TypingText text={terminalLines[0].command} delay={500} />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                  className="text-green-400"
                >
                  {terminalLines[1].output}
                </motion.div>
              </div>
            </div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1]"
              >
                Md. Moinul Hasan{" "}
                <span className="text-gradient">Akash</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="font-mono text-xs text-primary tracking-wider uppercase"
              >
                Computer Engineer | Technical Consultant
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-muted-foreground text-base md:text-lg max-w-md"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Driven by challenges and dedicated to building perfect technical solutions.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="glass-button px-6 py-3 rounded-lg font-mono text-sm hover:text-primary border-b-2 border-primary/50 hover:border-primary transition-all duration-200 flex items-center gap-2"
              >
                <ArrowDown size={14} />
                View My Projects
              </a>
              <a
                href="#contact"
                className="glass-button px-6 py-3 rounded-lg font-mono text-sm hover:text-primary transition-all duration-200 flex items-center gap-2"
              >
                <Mail size={14} />
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                download="Moinul_Hasan_Akash_Resume.pdf"
                className="glass-button px-6 py-3 rounded-lg font-mono text-sm hover:text-primary transition-all duration-200 flex items-center gap-2"
              >
                <FileDown size={14} />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-card p-1">
                <img
                  src={profileImg}
                  alt="Md. Moinul Hasan Akash"
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
              {/* Orbit ring */}
              <div className="absolute inset-[-16px] rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="absolute inset-[-32px] rounded-full border border-primary/10 animate-[spin_30s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

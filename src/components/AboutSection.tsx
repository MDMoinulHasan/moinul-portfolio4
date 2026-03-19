import { motion } from "framer-motion";
import { Users, Zap, Target } from "lucide-react";

const traits = [
{ icon: Users, label: "Team Player", desc: "Thrives in collaborative environments" },
{ icon: Zap, label: "Challenge-Driven", desc: "Relentless pursuit of solutions" },
{ icon: Target, label: "Solution-Oriented", desc: "Refining until perfection" }];


const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-6">
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto" />
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">A Computer Engineering student at NITER (constituent institute of the University of Dhaka) driven by challenges and team synergy. I possess a relentless spirit for task completion and a passion for refining solutions until they are perfect.


          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {traits.map((trait, i) =>
          <motion.div
            key={trait.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="glass-card rounded-xl p-6 text-center group hover:glow-accent transition-all duration-200">
            
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <trait.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{trait.label}</h3>
              <p className="text-muted-foreground text-xs">{trait.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default AboutSection;
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50"
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <a href="#home" className="font-mono text-sm tracking-tight font-semibold">
            <span className="text-primary">Moinul</span>
            <span className="text-muted-foreground"> Hasan</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  if (link.href === "#contact") {
                    window.dispatchEvent(new CustomEvent("highlight-all-contacts"));
                  }
                }}
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setDark(!dark)}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-mono text-xs font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              Hire Me
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="text-muted-foreground hover:text-foreground"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-primary origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden glass-card border-t border-border/50 px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setOpen(false);
                  if (link.href === "#contact") {
                    window.dispatchEvent(new CustomEvent("highlight-all-contacts"));
                  }
                }}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-mono text-sm font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
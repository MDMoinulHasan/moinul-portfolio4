import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import AchievementsSection from "@/components/AchievementsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <AchievementsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default Index;

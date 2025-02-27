import Hero from "@components/Hero";
import AboutSection from "@components/AboutSection";
import ExperienceSection from "@components/ExperienceSection";
import SkillsSection from "@components/SkillSection";
import Projects from "@components/Projects";
import EducationSection from "@components/EducationSection";
import ContactSection from "@components/ContactsSection";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <Projects />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}

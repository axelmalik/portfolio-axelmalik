import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import ContactSection from "@/components/ContactSection"
import ResumeModal from "@/components/ResumeModal"

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <ResumeModal />
    </main>
  )
}

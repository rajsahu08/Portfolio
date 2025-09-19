'use client'
import HeroAnimation from "@/components/sections/HeroAnimation"
import Navigation from "@/components/sections/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
export default function HomePage() {
  return (
    <div className="w-full h-[425vh]  sm:h-[250vh] border-amber-400 relative bg-black flex">
      <HeroAnimation />
      <div className="absolute z-10 pointer-events-none w-full px-5 sm:px-30">
        <Navigation />
        <HeroSection />
        {/* <div id="skills"></div> */}
        <Skills />
        {/* <div id="projects"></div> */}
        <Projects />
        {/* <div id="contact"></div> */}
        <Contact />
      </div>
    </div>
  )
}

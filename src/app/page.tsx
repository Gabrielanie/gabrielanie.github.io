import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Animated gradient background */}
      <div className="bg-animation" aria-hidden="true">
        <span className="bg-orb bg-orb-3" />
        <span className="bg-orb bg-orb-4" />
        <span className="bg-orb bg-orb-5" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

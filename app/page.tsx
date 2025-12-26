import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050511] text-white selection:bg-[#D946EF] selection:text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

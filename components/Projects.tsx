import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import SectionReveal from "./SectionReveal";
import SectionBackground from "./SectionBackground";

export default function Projects() {
    return (
        <section className="relative py-24 bg-[#050511] overflow-hidden">
            <SectionBackground />
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <SectionReveal>
                    <h2 className="text-3xl font-semibold mb-12 text-white">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, i) => (
                            <ProjectCard key={i} {...project} />
                        ))}
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}

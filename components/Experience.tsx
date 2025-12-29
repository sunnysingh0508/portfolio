import { experiences } from "@/lib/data";
import SectionReveal from "./SectionReveal";
import SectionBackground from "./SectionBackground";

export default function Experience() {
    return (
        <section id="experience" className="relative min-h-screen flex items-center justify-center py-24 bg-[#050511] overflow-hidden">
            {/* Use a different gradient or background style if needed, reusing SectionBackground for consistency */}
            <SectionBackground />
            <SectionReveal>
                <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-semibold mb-12 text-white text-center">Experience</h2>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-8 border-l border-white/10 last:border-0">
                                {/* Dot on timeline */}
                                <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#D946EF] shadow-[0_0_10px_rgba(217,70,239,0.5)]" />

                                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                            <p className="text-[#D946EF] font-medium">{exp.company}</p>
                                        </div>
                                        <div className="text-gray-500 text-sm mt-2 sm:mt-0 font-mono">
                                            {exp.period} | {exp.location}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
}

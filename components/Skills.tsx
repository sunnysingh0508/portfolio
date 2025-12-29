import { skills } from "@/lib/data";
import SectionReveal from "./SectionReveal";
import SectionBackground from "./SectionBackground";
import TiltCard from "./TiltCard";

export default function Skills() {
    return (
        <section id="skills" className="relative min-h-screen flex items-center justify-center py-24 bg-[#050511] overflow-hidden">
            <SectionBackground />
            <SectionReveal>
                <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-semibold mb-12 text-white text-center">Skills & Strengths</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Strengths */}
                        <div>
                            <h3 className="text-xl text-white mb-6 border-l-4 border-[#D946EF] pl-4">Strengths</h3>
                            <div className="space-y-4">
                                {skills.strengths.map((skill, index) => (
                                    <TiltCard key={index} className="h-full">
                                        <div className="bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition duration-300 h-full">
                                            <h4 className="text-white font-medium">{skill.name}</h4>
                                            <p className="text-sm text-gray-400 mt-1">{skill.description}</p>
                                        </div>
                                    </TiltCard>
                                ))}
                            </div>
                        </div>

                        {/* Tech & Languages */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl text-white mb-6 border-l-4 border-blue-500 pl-4">Technical Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tech.map((tech, index) => (
                                        <TiltCard key={index} className="inline-block">
                                            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm hover:bg-blue-500/20 transition cursor-default">
                                                {tech}
                                            </span>
                                        </TiltCard>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl text-white mb-6 border-l-4 border-green-500 pl-4">Languages</h3>
                                <div className="grid gap-3">
                                    {skills.languages.map((lang, index) => (
                                        <TiltCard key={index}>
                                            <div className="flex justify-between items-center bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10 transition cursor-default">
                                                <span className="text-gray-300">{lang.name}</span>
                                                <span className="text-xs text-[#D946EF] bg-[#D946EF]/10 px-2 py-0.5 rounded-full">{lang.level}</span>
                                            </div>
                                        </TiltCard>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
}

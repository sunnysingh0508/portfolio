import { skills } from "@/lib/data";
import SectionReveal from "./SectionReveal";

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 bg-[#050511] overflow-hidden">
            <SectionReveal>
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-12 text-white text-center">Skills & Strengths</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Strengths */}
                        <div>
                            <h3 className="text-xl text-white mb-6 border-l-4 border-[#D946EF] pl-4">Strengths</h3>
                            <div className="space-y-4">
                                {skills.strengths.map((skill, index) => (
                                    <div key={index} className="bg-white/5 border border-white/5 p-4 rounded-xl">
                                        <h4 className="text-white font-medium">{skill.name}</h4>
                                        <p className="text-sm text-gray-400 mt-1">{skill.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech & Languages */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl text-white mb-6 border-l-4 border-blue-500 pl-4">Technical Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tech.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl text-white mb-6 border-l-4 border-green-500 pl-4">Languages</h3>
                                <div className="grid gap-3">
                                    {skills.languages.map((lang, index) => (
                                        <div key={index} className="flex justify-between items-center bg-white/5 px-4 py-2 rounded-lg">
                                            <span className="text-gray-300">{lang.name}</span>
                                            <span className="text-xs text-[#D946EF] bg-[#D946EF]/10 px-2 py-0.5 rounded-full">{lang.level}</span>
                                        </div>
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

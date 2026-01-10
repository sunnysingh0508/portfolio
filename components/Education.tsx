import { education } from "@/lib/data";
import SectionReveal from "./SectionReveal";
import SectionBackground from "./SectionBackground";
import TiltCard from "./TiltCard";

export default function Education() {
    return (
        <section id="education" className="relative min-h-screen flex items-center justify-center py-24 bg-[#050511] overflow-hidden">
            <SectionBackground />
            <SectionReveal>
                <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-semibold mb-12 text-white text-center">Education</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {education.map((edu, index) => (
                            <TiltCard key={index} className="h-full">
                                <div className="group relative bg-[#14181C]/20 backdrop-blur-md border border-white/5 p-6 rounded-2xl overflow-hidden hover:border-white/10 transition h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#D946EF]/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                                        <p className="text-[#D946EF] text-lg mb-1">{edu.degree}</p>
                                        <div className="flex justify-end items-center text-sm text-gray-500 mt-4 font-mono">
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
}

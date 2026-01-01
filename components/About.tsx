"use client";

import { useProfile } from "@/context/ProfileContext";
import SectionReveal from "./SectionReveal";
import SectionBackground from "./SectionBackground";
import TiltCard from "./TiltCard";

export default function About() {
    const { user } = useProfile();
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center py-24 bg-[#050511] overflow-hidden">
            <SectionBackground />
            <div className="w-full max-w-6xl mx-auto px-6">
                <SectionReveal>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 text-white">About Me</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {user.about}
                            </p>
                            <div className="mt-8">
                                <a href="#contact" className="text-[#D946EF] underline hover:text-white transition">Get in touch</a>
                            </div>
                        </div>
                        {/* Placeholder for image or graphic */}
                        <TiltCard className="h-full">
                            <div className="bg-[#14181C] h-64 md:h-80 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent group-hover:opacity-75 transition" />
                                <span className="text-gray-600 font-mono text-sm">Image / Graphic Placeholder</span>
                            </div>
                        </TiltCard>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}

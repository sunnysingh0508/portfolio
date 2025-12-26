
import { user } from "@/lib/data";
import SectionReveal from "./SectionReveal";
import SectionBackground from "./SectionBackground";

export default function About() {
    return (
        <section className="relative py-24 bg-[#050511] overflow-hidden">
            <SectionBackground />
            <SectionReveal>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
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
                    <div className="bg-[#14181C] h-64 md:h-80 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent group-hover:opacity-75 transition" />
                        <span className="text-gray-600 font-mono text-sm">Image / Graphic Placeholder</span>
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
}

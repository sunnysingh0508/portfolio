import SectionReveal from "./SectionReveal";
import SectionBackground from "./SectionBackground";

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 bg-[#050511] border-t border-white/5 overflow-hidden">
            <SectionBackground />
            <SectionReveal>
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to build something amazing?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition transform hover:-translate-y-1">
                        Say Hello
                    </button>
                </div>
            </SectionReveal>
        </section>
    );
}

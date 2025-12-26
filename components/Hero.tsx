import SectionBackground from "./SectionBackground";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-[#050511] overflow-hidden">

            <SectionBackground />

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-8xl md:text-9xl font-script tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)] pb-4">
                    Sunny
                </h1>
                <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg md:text-xl">
                    Designing and building modern software systems
                </p>
            </div>

        </section>
    );
}

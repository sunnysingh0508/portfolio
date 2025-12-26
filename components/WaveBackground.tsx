export default function WaveBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Soft abstract mesh/gradient */}
            <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-purple-600/30 via-transparent to-cyan-500/30 blur-3xl opacity-40 animate-[pulse_6s_ease-in-out_infinite]" />

            {/* Bottom fade wave */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050511] to-transparent blur-2xl" />
        </div>
    );
}

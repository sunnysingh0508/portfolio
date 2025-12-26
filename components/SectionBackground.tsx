'use client';

import { useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";
import { WireframeCube, TechLine, ParticleGroup } from "./GeometricShapes";

export default function SectionBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Center the values
            mouseX.set(e.clientX - window.innerWidth / 2);
            mouseY.set(e.clientY - window.innerHeight / 2);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Ambient Glow follows cursor (smoothed/lagged ideally, but direct for now)
    const glowX = useTransform(mouseX, [-1000, 1000], [-200, 200]);
    const glowY = useTransform(mouseY, [-1000, 1000], [-200, 200]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Cyber Grid Overlay - Static */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Shapes with Parallax */}
            <WireframeCube className="top-10 -left-10 opacity-40 border-cyan-500/50" size="w-64 h-64" duration={20} mouseX={mouseX} mouseY={mouseY} />
            <WireframeCube className="top-32 left-10 opacity-30" size="w-32 h-32" delay={2} duration={15} mouseX={mouseX} mouseY={mouseY} />

            <WireframeCube className="bottom-10 -right-10 opacity-40 border-purple-500/50" size="w-56 h-56" delay={1} duration={18} mouseX={mouseX} mouseY={mouseY} />
            <ParticleGroup className="bottom-40 right-20" mouseX={mouseX} mouseY={mouseY} />

            <TechLine className="top-1/4 left-1/4 w-96 rotate-45" delay={0} mouseX={mouseX} mouseY={mouseY} />
            <TechLine className="bottom-1/3 right-1/4 w-64 -rotate-12" delay={1.5} mouseX={mouseX} mouseY={mouseY} />
            <TechLine className="top-1/2 right-10 w-48 rotate-90" delay={3} mouseX={mouseX} mouseY={mouseY} />

            {/* Interactive Ambient Glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-cyan-900/10 blur-[150px] rounded-full mix-blend-screen"
                style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
            />
        </div>
    );
}

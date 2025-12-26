'use client';

import { motion, useTransform, MotionValue } from "framer-motion";

interface ShapeProps {
    className?: string;
    size?: string;
    delay?: number;
    duration?: number;
    mouseX?: MotionValue<number>;
    mouseY?: MotionValue<number>;
}

export function WireframeCube({ className, size = "w-32 h-32", delay = 0, duration = 10, mouseX, mouseY }: ShapeProps) {
    const rotateX = useTransform(mouseY || new MotionValue(0), [-500, 500], [20, -20]);
    const rotateY = useTransform(mouseX || new MotionValue(0), [-500, 500], [-20, 20]);

    return (
        <motion.div
            className={`absolute ${className} ${size} perspective-1000`}
            style={{
                transformStyle: "preserve-3d",
                rotateX: mouseX ? rotateX : 0,
                rotateY: mouseY ? rotateY : 0
            }}
            animate={{
                rotateZ: [0, 180, 360],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay,
            }}
        >
            {/* Cube Faces - Border Only */}
            <div className="absolute inset-0 border border-cyan-400/30" style={{ transform: "translateZ(32px)" }} />
            <div className="absolute inset-0 border border-cyan-400/30" style={{ transform: "rotateY(180deg) translateZ(32px)" }} />
            <div className="absolute inset-0 border border-cyan-400/30" style={{ transform: "rotateY(90deg) translateZ(32px)" }} />
            <div className="absolute inset-0 border border-cyan-400/30" style={{ transform: "rotateY(-90deg) translateZ(32px)" }} />
            <div className="absolute inset-0 border border-cyan-400/30" style={{ transform: "rotateX(90deg) translateZ(32px)" }} />
            <div className="absolute inset-0 border border-cyan-400/30" style={{ transform: "rotateX(-90deg) translateZ(32px)" }} />

            {/* Inner glow */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-xl" style={{ transform: "translateZ(0)" }} />
        </motion.div>
    );
}

export function TechLine({ className, delay = 0, mouseX, mouseY }: ShapeProps) {
    // Parallax movement
    const x = useTransform(mouseX || new MotionValue(0), [-1000, 1000], [-50, 50]);
    const y = useTransform(mouseY || new MotionValue(0), [-1000, 1000], [-50, 50]);

    return (
        <motion.div
            className={`absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent ${className}`}
            style={{ x, y }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
                scaleX: [0, 1.5, 0],
                opacity: [0, 0.8, 0],
                x: [-100, 100] // Base animation
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
        />
    )
}

export function ParticleGroup({ className, mouseX, mouseY }: ShapeProps) {
    // Inverse Parallax
    const x = useTransform(mouseX || new MotionValue(0), [-1000, 1000], [30, -30]);
    const y = useTransform(mouseY || new MotionValue(0), [-1000, 1000], [30, -30]);

    return (
        <motion.div className={`absolute ${className}`} style={{ x, y }}>
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{
                        x: (Math.random() - 0.5) * 100,
                        y: (Math.random() - 0.5) * 100,
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                />
            ))}
        </motion.div>
    )
}

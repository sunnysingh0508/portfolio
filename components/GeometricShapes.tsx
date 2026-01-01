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
    );
}

export function PlusShape({ className, size = "w-12 h-12", delay = 0, duration = 15, mouseX, mouseY }: ShapeProps) {
    const rotateX = useTransform(mouseY || new MotionValue(0), [-500, 500], [30, -30]);
    const rotateY = useTransform(mouseX || new MotionValue(0), [-500, 500], [-30, 30]);

    return (
        <motion.div
            className={`absolute ${className} ${size} perspective-1000`}
            style={{
                transformStyle: "preserve-3d",
                rotateX: mouseX ? rotateX : 0,
                rotateY: mouseY ? rotateY : 0
            }}
            animate={{
                rotateZ: [0, 360],
                rotateY: [0, 360]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay,
            }}
        >
            {/* Horizontal Bar */}
            <div className="absolute top-1/2 left-0 w-full h-1/4 -translate-y-1/2 bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-sm"
                style={{ transform: "translateZ(0)" }} />

            {/* Vertical Bar */}
            <div className="absolute top-0 left-1/2 w-1/4 h-full -translate-x-1/2 bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-sm"
                style={{ transform: "translateZ(0)" }} />

            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-400/10 blur-md" />
        </motion.div>
    );
}

export function LShape({ className, size = "w-16 h-16", delay = 0, duration = 12, mouseX, mouseY }: ShapeProps) {
    const rotateX = useTransform(mouseY || new MotionValue(0), [-500, 500], [45, -45]);
    const rotateY = useTransform(mouseX || new MotionValue(0), [-500, 500], [-45, 45]);

    return (
        <motion.div
            className={`absolute ${className} ${size} perspective-1000`}
            style={{
                transformStyle: "preserve-3d",
                rotateX: mouseX ? rotateX : 0,
                rotateY: mouseY ? rotateY : 0
            }}
            animate={{
                rotateZ: [0, -360],
                rotateX: [0, 180, 360]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay,
            }}
        >
            {/* Vertical Segment */}
            <div className="absolute top-0 left-0 w-1/4 h-full bg-purple-500/20 border border-purple-400/40 backdrop-blur-sm"
                style={{ transform: "translateZ(0)" }} />

            {/* Horizontal Segment */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-purple-500/20 border border-purple-400/40 backdrop-blur-sm"
                style={{ transform: "translateZ(0)" }} />

            {/* Glow */}
            <div className="absolute inset-0 bg-purple-400/10 blur-md" />
        </motion.div>
    );
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

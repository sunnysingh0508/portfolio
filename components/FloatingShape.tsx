'use client';

import { motion } from "framer-motion";

export default function FloatingShape({ className, delay = 0 }: { className?: string; delay?: number }) {
    return (
        <motion.div
            className={`absolute ${className}`}
            animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay,
            }}
        >
            {/* Abstract 3D Cube-like effect with gradients */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-[#D946EF]/20 to-[#06B6D4]/20 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(217,70,239,0.3)] transform rotate-45" />
        </motion.div>
    );
}

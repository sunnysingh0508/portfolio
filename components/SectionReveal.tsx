'use client';

import { motion } from "framer-motion";

export default function SectionReveal({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -10, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

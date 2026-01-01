"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react";
import Image from "next/image";
import { user } from "@/lib/data";
import SectionBackground from "./SectionBackground";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050511]"
        >
            <SectionBackground />

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">

                {/* Profile Image with Badge */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-8 group"
                >
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-transparent p-1 bg-gradient-to-tr from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/20">
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0A0A0A]">
                            <Image
                                src={user.avatar}
                                alt={user.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute -bottom-2 -right-2 md:bottom-0 md:right-0 bg-[#0A0A0A] border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-md">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-gray-300 whitespace-nowrap">Open to work</span>
                    </div>
                </motion.div>

                {/* Name & Role */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="space-y-6"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        {user.name}
                    </h1>

                    <div className="flex flex-col items-center gap-4">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm md:text-base font-medium backdrop-blur-sm">
                            <span className="mr-2">💼</span> {user.role}
                        </span>

                        <div className="flex items-center gap-2 text-gray-500 text-sm md:text-base">
                            <MapPin className="w-4 h-4" />
                            <span>{user.location}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-12 flex items-center gap-8"
                >
                    {[
                        { icon: Mail, href: `mailto:${user.email}`, label: "Email" },
                        { icon: Linkedin, href: user.linkedin, label: "LinkedIn" },
                        { icon: Github, href: "https://github.com", label: "GitHub" },
                        { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                        >
                            <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="font-medium hidden md:inline">{social.label}</span>
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Minimal Grid Background Accent */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none" />

        </section>
    );
}

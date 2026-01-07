"use client";

import { Home, User, Briefcase, Code, GraduationCap, Wrench, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    { name: "About", href: "#about", icon: User },


    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Wrench },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Education", href: "#education", icon: GraduationCap },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit">
            <nav className="flex items-center gap-1 p-2 rounded-full bg-transparent">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    // Extract ID from href (e.g., "#about" -> "about") or use "home" for "/"
                    const sectionId = item.href === "/" ? "home" : item.href.replace("#", "");

                    const isActive = activeSection === sectionId;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveSection(sectionId)}
                            className={cn(
                                "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-white",
                                isActive ? "text-white" : "text-gray-400"
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            <span>{item.name}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="navbar-active"
                                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

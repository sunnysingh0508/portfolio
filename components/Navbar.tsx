"use client";

import { Home, User, Briefcase, Code, GraduationCap, Wrench, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Skills", href: "#skills", icon: Wrench },
    { name: "Blog", href: "#blog", icon: LinkIcon },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit">
            <nav className="flex items-center gap-1 p-2 rounded-full bg-transparent">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href || (item.href.startsWith("#") && false); // Simple active check, can be improved for scroll spy

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
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

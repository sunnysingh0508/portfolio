import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    link: string;
    color?: string;
}

import TiltCard from "./TiltCard";

export default function ProjectCard({ title, description, tech, link, color }: ProjectCardProps) {
    return (
        <TiltCard className="group h-full">
            <Link
                href={link}
                className="block bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-[#D946EF]/50 transition-colors h-full flex flex-col justify-between hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]"
            >
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color || 'from-[#D946EF] to-[#06B6D4]'} opacity-80 group-hover:opacity-100 transition blur-[2px] group-hover:blur-0`} />
                        <ArrowUpRight className="text-gray-500 group-hover:text-[#D946EF] transition transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                    </div>

                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#6EE7B7] transition-colors">{title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tech.map((t, i) => (
                        <span key={i} className="text-xs font-medium text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                            {t}
                        </span>
                    ))}
                </div>
            </Link>
        </TiltCard>
    );
}

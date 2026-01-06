import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }: any) {
    return (
        <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <div
                className="relative bg-white/5 border border-white/10 rounded-xl p-6
                   hover:border-blue-500/50 hover:scale-[1.02]
                   transition duration-300 group cursor-pointer"
            >
                {/* Arrow Icon */}
                <div
                    className="absolute top-4 right-4 text-gray-400
                     group-hover:text-blue-400 transition"
                >
                    <ArrowUpRight size={18} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold">
                    {project.title}
                </h3>

                <p className="text-gray-400 mt-2">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t: string) => (
                        <span
                            key={t}
                            className="text-xs px-2 py-1 rounded-md
                         bg-white/10 text-gray-300"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}

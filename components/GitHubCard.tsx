"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

import { Github } from "lucide-react";

export default function GitHubCard() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Link
            href="https://github.com/sunnysingh0508"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <div
                className="bg-black/60 backdrop-blur
                   border border-white/10 rounded-2xl p-8
                   hover:border-white/30 hover:scale-[1.02]
                   transition duration-300 cursor-pointer
                   max-w-md mx-auto text-center"
            >
                {/* GitHub Icon */}
                <Github size={36} className="mx-auto mb-4 text-white" />

                {/* Title */}
                <h3 className="text-2xl font-semibold">GitHub</h3>

                {/* Subtitle */}
                <p className="text-gray-400 text-sm mt-1">
                    Open-source projects & contributions
                </p>

                {/* Contribution Graph */}
                <div className="mt-6 flex justify-center text-white h-[158px] github-calendar-wrapper">
                    {mounted ? (
                        <GitHubCalendar
                            username="sunnysingh0508"
                            colorScheme="dark"
                            blockSize={12}
                            blockMargin={5}
                            fontSize={14}
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">
                            Loading contribution graph...
                        </div>
                    )}
                </div>

                <p className="text-xs text-gray-500 mt-4">
                    Click to view GitHub profile
                </p>
            </div>
        </Link>
    );
}

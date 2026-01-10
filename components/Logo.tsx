"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="fixed top-6 left-6 z-50 hover:opacity-80 transition-opacity">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-lg">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </Link>
    );
}

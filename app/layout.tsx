import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ProfileProvider } from "@/context/ProfileContext";
import FloatingEditButton from "@/components/FloatingEditButton";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Portfolio | Design & Scale",
    description: "Buidling modern software systems and AI products.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased bg-[#050511]`}
            >
                <ProfileProvider>
                    <Navbar />
                    {children}
                    <FloatingEditButton />
                </ProfileProvider>
            </body>
        </html>
    );
}

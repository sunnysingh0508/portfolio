"use client";

import { Pencil } from "lucide-react";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";

export default function FloatingEditButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-8 right-8 z-50 p-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full shadow-lg shadow-cyan-500/20 transition-all hover:scale-110 active:scale-95 group"
                aria-label="Edit Profile"
            >
                <Pencil className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </button>

            <EditProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

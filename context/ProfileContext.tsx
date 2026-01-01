"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { user as defaultUser } from "@/lib/data";

interface UserData {
    name: string;
    role: string;
    secondaryRole: string;
    about: string;
    location: string;
    email: string;
    linkedin: string;
    avatar: string;
}

interface ProfileContextType {
    user: UserData;
    updateUser: (newUser: Partial<UserData>) => void;
    resetProfile: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserData>(defaultUser);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const savedUser = localStorage.getItem("user_profile");
        if (savedUser) {
            try {
                setUser({ ...defaultUser, ...JSON.parse(savedUser) });
            } catch (e) {
                console.error("Failed to parse saved profile", e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save to localStorage whenever user changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("user_profile", JSON.stringify(user));
        }
    }, [user, isLoaded]);

    const updateUser = (newUser: Partial<UserData>) => {
        setUser((prev) => ({ ...prev, ...newUser }));
    };

    const resetProfile = () => {
        setUser(defaultUser);
        localStorage.removeItem("user_profile");
    };

    return (
        <ProfileContext.Provider value={{ user, updateUser, resetProfile }}>
            {children}
        </ProfileContext.Provider>
    );
}

export function useProfile() {
    const context = useContext(ProfileContext);
    if (context === undefined) {
        throw new Error("useProfile must be used within a ProfileProvider");
    }
    return context;
}

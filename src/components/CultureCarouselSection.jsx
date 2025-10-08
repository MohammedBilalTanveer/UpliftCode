"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Heart,
    Target,
    TrendingUp,
    Handshake,
    Brain,
    Users,
} from "lucide-react";

const culturePrinciples = [
    {
        number: "1",
        title: "Obsess Over Trust",
        description:
            "Every product we build or test must earn trust — from users, clients, and ourselves. Reliability and transparency define our success.",
        icon: Heart,
        gradientFrom: "#f43f5e",
        gradientVia: "#db2777",
        gradientTo: "#9333ea",
        iconBgFrom: "#f43f5e",
        iconBgTo: "#9333ea",
    },
    {
        number: "2",
        title: "Ownership",
        description:
            "We own outcomes, not just tasks. When we commit, we deliver — learning from every challenge and turning it into a milestone",
        icon: Target,
        gradientFrom: "#f97316",
        gradientVia: "#d97706",
        gradientTo: "#ca8a04",
        iconBgFrom: "#f97316",
        iconBgTo: "#ca8a04",
    },
    {
        number: "3",
        title: "Deliver Impact, Not Just Output",
        description:
            "Speed means nothing without purpose. Our work is measured by the value it creates for clients and the quality it sustains.",
        icon: TrendingUp,
        gradientFrom: "#10b981",
        gradientVia: "#0d9488",
        gradientTo: "#0891b2",
        iconBgFrom: "#10b981",
        iconBgTo: "#0891b2",
    },
    {
        number: "4",
        title: "Earn Every Partnership",
        description:
            "Seek to understand the purpose of every system we create. Relationships are built through consistency and care. Every interaction should make people want to work with us again.",
        icon: Handshake,
        gradientFrom: "#8b5cf6",
        gradientVia: "#9333ea",
        gradientTo: "#c026d3",
        iconBgFrom: "#8b5cf6",
        iconBgTo: "#c026d3",
    },
    {
        number: "5",
        title: "Make AI a Mindset",
        description:
            "AI isn't a feature - it's how we reinforce and amplify our thoughts and insights.",
        icon: Brain,
        gradientFrom: "#a855f7",
        gradientVia: "#7c3aed",
        gradientTo: "#4f46e5",
        iconBgFrom: "#a855f7",
        iconBgTo: "#4f46e5",
    },
    {
        number: "6",
        title: "Uplift People, Always",
        description:
            "We grow by lifting others — our clients, teammates, and community. Mentorship, respect, and collaboration are part of our DNA.",
        icon: Users,
        gradientFrom: "#ec4899",
        gradientVia: "#e11d48",
        gradientTo: "#dc2626",
        iconBgFrom: "#ec4899",
        iconBgTo: "#dc2626",
    },
];

export default function CultureCarouselSection() {
    return (
        <div
            id="our-culture"
            className="relative min-h-screen flex flex-col items-center font-[Poppins] py-24 px-4 md:px-8 bg-transparent"
        >
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                    Our Culture
                </h2>
                <p className="text-base md:text-lg text-[rgba(224,230,237,0.85)] mt-3">
                    How we lead, build, and test — everyday at UpliftCode
                </p>
            </motion.div>

            {/* Responsive Grid */}
            <div className="relative w-full max-w-6xl mx-auto flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 place-items-center">
                    {culturePrinciples.map((principle, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.03,
                                y: -6,
                                transition: { duration: 0.3 },
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative cursor-pointer flex flex-col w-[90%] sm:w-[85%] max-w-[360px]"
                        >
                            <div className="relative rounded-2xl p-2 h-full flex flex-col backdrop-blur-sm">
                                {/* Main Card */}
                                <div
                                    className="relative rounded-xl p-6 sm:p-8 flex flex-col justify-between flex-grow border border-white/10 group-hover:bg-gray-900/90 transition-all duration-500"
                                    style={{
                                        backgroundColor: "rgba(17,24,39,0.95)",
                                        minHeight: "270px",
                                    }}
                                >
                                    {/* Icon + Number */}
                                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                                        <motion.div
                                            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-4 flex items-center justify-center"
                                            style={{
                                                backgroundImage: `linear-gradient(to right, ${principle.iconBgFrom}, ${principle.iconBgTo})`,
                                            }}
                                            whileHover={{
                                                rotate: [0, -10, 10, 0],
                                                scale: [1, 1.1, 1],
                                                transition: { duration: 0.6 },
                                            }}
                                        >
                                            <principle.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                            <motion.div
                                                className="absolute inset-0 rounded-2xl opacity-30"
                                                style={{
                                                    backgroundImage: `linear-gradient(to right, ${principle.iconBgFrom}, ${principle.iconBgTo})`,
                                                }}
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.3, 0, 0.3],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.3,
                                                }}
                                            />
                                        </motion.div>

                                        <motion.div
                                            className="text-5xl sm:text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity"
                                            style={{
                                                backgroundImage: `linear-gradient(to right, ${principle.gradientFrom}, ${principle.gradientVia}, ${principle.gradientTo})`,
                                                backgroundClip: "text",
                                                color: "transparent",
                                            }}
                                        >
                                            {principle.number}
                                        </motion.div>
                                    </div>

                                    {/* Title + Description */}
                                    <div className="flex-grow">
                                        <h3
                                            className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4"
                                            style={{
                                                backgroundImage: `linear-gradient(to right, ${principle.gradientFrom}, ${principle.gradientVia}, ${principle.gradientTo})`,
                                                backgroundClip: "text",
                                                color: "transparent",
                                            }}
                                        >
                                            {principle.title}
                                        </h3>
                                        <p className="text-sm sm:text-base leading-relaxed text-gray-400">
                                            {principle.description}
                                        </p>
                                    </div>

                                    {/* Bottom Gradient Line */}
                                    <motion.div
                                        className="h-1 rounded-full opacity-60 group-hover:opacity-100 mt-4 sm:mt-6"
                                        style={{
                                            backgroundImage: `linear-gradient(to right, ${principle.gradientFrom}, ${principle.gradientVia}, ${principle.gradientTo})`,
                                        }}
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{
                                            delay: index * 0.1 + 0.5,
                                            duration: 0.8,
                                        }}
                                        viewport={{ once: true }}
                                    />

                                    {/* Hover Overlay */}
                                    <div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            backgroundImage: `linear-gradient(to right, ${principle.gradientFrom}, ${principle.gradientVia}, ${principle.gradientTo})`,
                                        }}
                                    />
                                </div>

                                {/* Floating Particles (Background Animation) */}
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 rounded-full opacity-40"
                                        style={{
                                            backgroundImage: `linear-gradient(to right, ${principle.iconBgFrom}, ${principle.iconBgTo})`,
                                            left: `${20 + i * 25}%`,
                                            top: `${15 + i * 20}%`,
                                            filter: "blur(2px)",
                                        }}
                                        animate={{
                                            y: [-10, 10, -10],
                                            x: [-5, 5, -5],
                                            opacity: [0.2, 0.6, 0.2],
                                            scale: [0.8, 1.2, 0.8],
                                        }}
                                        transition={{
                                            duration: 4 + i,
                                            repeat: Infinity,
                                            delay: index * 0.2 + i * 0.8,
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

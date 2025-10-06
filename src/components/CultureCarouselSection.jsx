"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import {
    Heart,
    Target,
    TrendingUp,
    Search,
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
        gradientFrom: '#f43f5e',
        gradientVia: '#db2777',
        gradientTo: '#9333ea',
        iconBgFrom: '#f43f5e',
        iconBgTo: '#9333ea',
    },
    {
        number: "2",
        title: "Ownership",
        description:
            "We own outcomes, not just tasks. When we commit, we deliver — learning from every challenge and turning it into long-term progress.",
        icon: Target,
        gradientFrom: '#f97316',
        gradientVia: '#d97706',
        gradientTo: '#ca8a04',
        iconBgFrom: '#f97316',
        iconBgTo: '#ca8a04',
    },
    {
        number: "3",
        title: "Deliver Impact, Not Just Output",
        description:
            "Speed means nothing without purpose. Our work is measured by the value it creates for clients and the quality it sustains.",
        icon: TrendingUp,
        gradientFrom: '#10b981',
        gradientVia: '#0d9488',
        gradientTo: '#0891b2',
        iconBgFrom: '#10b981',
        iconBgTo: '#0891b2',
    },
    {
        number: "4",
        title: "Go Deep, Then Go Fast",
        description:
            "We don't skip the details. Understanding the \"why\" behind every system helps us move faster and smarter.",
        icon: Search,
        gradientFrom: '#3b82f6',
        gradientVia: '#4f46e5',
        gradientTo: '#9333ea',
        iconBgFrom: '#3b82f6',
        iconBgTo: '#9333ea',
    },
    {
        number: "5",
        title: "Earn Every Partnership",
        description:
            "We believe relationships are built through consistency and care. Every interaction should make people want to work with us again.",
        icon: Handshake,
        gradientFrom: '#8b5cf6',
        gradientVia: '#9333ea',
        gradientTo: '#c026d3',
        iconBgFrom: '#8b5cf6',
        iconBgTo: '#c026d3',
    },
    {
        number: "6",
        title: "Make AI a Mindset",
        description:
            "AI isn't a feature — it's how we think. We infuse intelligence into every process to make smarter, faster, and fairer systems.",
        icon: Brain,
        gradientFrom: '#a855f7',
        gradientVia: '#7c3aed',
        gradientTo: '#4f46e5',
        iconBgFrom: '#a855f7',
        iconBgTo: '#4f46e5',
    },
    {
        number: "7",
        title: "Uplift People, Always",
        description:
            "We grow by lifting others — our clients, teammates, and community. Mentorship, respect, and collaboration are part of our DNA.",
        icon: Users,
        gradientFrom: '#ec4899',
        gradientVia: '#e11d48',
        gradientTo: '#dc2626',
        iconBgFrom: '#ec4899',
        iconBgTo: '#dc2626',
    },
];

export default function CultureCarouselSection() {
    return (
        <div id='our-culture' className="relative min-h-screen flex flex-col items-center font-[Poppins] py-28 bg-transparent">
            <style>
                {`
          .swiper-slide {
            transition: all 0.5s ease;
            transform: scale(0.9);
            opacity: 0.6;
            z-index: 10;
          }
          .swiper-slide-active {
            transform: scale(1.1);
            opacity: 1;
            z-index: 20;
          }
          .swiper-button-prev, .swiper-button-next {
            background: transparent !important;
          }
        `}
            </style>

            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                    Our Culture
                </h2>
                <p className="text-lg text-[rgba(224,230,237,0.85)] mt-3">
                    How we lead build and test - everyday at UpliftCode            </p>
            </motion.div>

            {/* Swiper Carousel */}
            <div className="relative flex items-center justify-center w-full max-w-7xl min-h-[720px] py-10 px-12">
                {/* Prev Button */}
                <button className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-4 md:left-[-3rem] bg-gradient-to-r from-purple-500 to-fuchsia-500 p-3 rounded-full shadow-lg hover:opacity-90 z-30 transition">
                    <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                <Swiper
                    modules={[EffectCoverflow, Autoplay, Navigation]}
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    loop
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 1.2 },
                        768: { slidesPerView: 1.6 },
                        1024: { slidesPerView: 2.5 },
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 80,
                        depth: 200,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    className="w-full px-12 visible culture-margin"
                >
                    {culturePrinciples.map((principle, index) => (
                        <SwiperSlide key={index} style={{ overflow: 'visible' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.03, // Reduced scale to minimize clipping
                                    rotateY: 5,
                                    z: 50,
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="group cursor-pointer"
                                style={{ zIndex: 20 }}
                            >
                                <div className="relative rounded-2xl p-2 shadow-glow-soft" style={{ background: '#35165466', overflow: 'visible' }}>
                                    {/* Animated Background Grid */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                            backgroundSize: '30px 30px'
                                        }} />
                                    </div>

                                    {/* Main Card Content */}
                                    <div className="relative rounded-xl p-8 h-full border border-white/10 group-hover:bg-gray-900/90 transition-all duration-500 cust-height flex flex-col justify-between" style={{ backgroundColor: 'rgba(17,24,39,0.95)', overflow: 'visible' }}>
                                        {/* Number Badge and Icon */}
                                        <div className="flex items-start justify-between mb-6">
                                            <motion.div
                                                className="relative w-16 h-16 rounded-2xl p-4 shadow-lg flex items-center justify-center"
                                                style={{ backgroundImage: `linear-gradient(to right, ${principle.iconBgFrom}, ${principle.iconBgTo})` }}
                                                whileHover={{
                                                    rotate: [0, -10, 10, 0],
                                                    scale: [1, 1.1, 1],
                                                    transition: { duration: 0.6 }
                                                }}
                                            >
                                                <principle.icon className="w-8 h-8 text-white drop-shadow-lg" />

                                                {/* Pulsing Ring Effect */}
                                                <motion.div
                                                    className="absolute inset-0 rounded-2xl opacity-30"
                                                    style={{ backgroundImage: `linear-gradient(to right, ${principle.iconBgFrom}, ${principle.iconBgTo})` }}
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.3, 0, 0.3]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: index * 0.3
                                                    }}
                                                />
                                            </motion.div>

                                            <motion.div
                                                className="text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity"
                                                style={{ backgroundImage: `linear-gradient(to right, ${principle.gradientFrom}, ${principle.gradientVia}, ${principle.gradientTo})`, backgroundClip: 'text', color: 'transparent' }}
                                                initial={{ opacity: 0.1 }}
                                                whileInView={{ opacity: 0.2 }}
                                                viewport={{ once: true }}
                                            >
                                            </motion.div>
                                        </div>

                                        {/* Principle Title and Description */}
                                        <div className="flex-grow">
                                            <h3 className="text-3xl font-bold mb-4" style={{ backgroundImage: `linear-gradient(to right, ${principle.gradientFrom}, ${principle.gradientVia}, ${principle.gradientTo})`, backgroundClip: 'text', color: 'transparent' }}>
                                                {principle.title}
                                            </h3>
                                            <p className="text-2xl leading-relaxed" style={{ color: '#9ca3af' }}>
                                                {principle.description}
                                            </p>
                                        </div>

                                        {/* Bottom Gradient Line */}
                                        <motion.div
                                            className="h-1 rounded-full opacity-60 group-hover:opacity-100 mt-auto"
                                            style={{ backgroundImage: `linear-gradient(to right, ${principle.gradientFrom}, ${principle.gradientVia}, ${principle.gradientTo})` }}
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                                            viewport={{ once: true }}
                                        />

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, ${principle.gradientFrom}, ${principle.gradientVia}, ${principle.gradientTo})` }} />
                                    </div>

                                    {/* Floating Particles */}
                                    {[...Array(3)].map((_, particleIndex) => (
                                        <motion.div
                                            key={particleIndex}
                                            className="absolute w-2 h-2 rounded-full opacity-40"
                                            style={{
                                                backgroundImage: `linear-gradient(to right, ${principle.iconBgFrom}, ${principle.iconBgTo})`,
                                                left: `${20 + particleIndex * 25}%`,
                                                top: `${15 + particleIndex * 20}%`,
                                            }}
                                            animate={{
                                                y: [-10, 10, -10],
                                                x: [-5, 5, -5],
                                                opacity: [0.2, 0.6, 0.2],
                                                scale: [0.8, 1.2, 0.8]
                                            }}
                                            transition={{
                                                duration: 4 + particleIndex,
                                                repeat: Infinity,
                                                delay: index * 0.2 + particleIndex * 0.8
                                            }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Next Button */}
                <button className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-4 md:right-[-3rem] bg-gradient-to-r from-fuchsia-500 to-purple-500 p-3 rounded-full shadow-lg hover:opacity-90 z-30 transition">
                    <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
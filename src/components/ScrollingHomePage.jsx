/* File: src/components/ScrollingHomePage.jsx */
"use client";
import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion,useMotionValue } from "motion/react";
import { Button } from "./ui/button";
import heroImg from "../assets/Milky_way.jpg";
import bhavyaImg from "../assets/bhavya-gundanna.jpg";
import CultureCarouselSection from './CultureCarouselSection'
import {
  ArrowRight,
  Code,
  Calendar,
  CheckCircle,
  Globe,
  TestTube,
  Cog,
  BarChart3,
  Zap,
  Shield,
  Mail,
  Phone,
  Clock,
} from "lucide-react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card } from "@/components/ui/card";
/**
 * ScrollingHomePage — self-contained version.
 * - Hero with typewriter tagline
 * - Services auto-scrolling carousel (patterned cards)
 * - About section (Bhavya Gundanna)
 * - Contact form (EmailJS via VITE_EMAILJS_*)
 *
 * Notes:
 * - Requires: /public/bg.jpg and /public/bhavya-gundanna.jpg
 * - Env: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
 */

export function ScrollingHomePage({ onPageChange }) {
  // -----------------------------------------
  // Typing effect for tagline
  // -----------------------------------------
  const [displayText, setDisplayText] = useState("");
  const fullText = "Code to Confidence: AI-driven development, QA and evals";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 45);
    return () => clearInterval(timer);
  }, []);

  // -----------------------------------------
  // Scroll-to-section / onPageChange sync
  // -----------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", name: "Home" },
        { id: "services", name: "Services" },
        { id: "our-culture", name: "Our Culture" },
        { id: "about", name: "About" },
        { id: "contact-us", name: "Contact Us" },
      ];
      const scrollPosition = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && scrollPosition >= el.offsetTop) {
          onPageChange && onPageChange(sections[i].name);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onPageChange]);

  // -----------------------------------------
  // Services data (patterns, gradients, icons)
  // -----------------------------------------
  const services = useMemo(
    () => [
      {
        icon: Globe,
        title: "AI Product Testing",
        subtitle: "Intelligent Model Validation",
        description:
          "Comprehensive testing solutions for AI and ML products including model validation, bias detection, and performance optimization.",
        features: [
          "Model Validation",
          "Bias Detection",
          "Performance Testing",
          "Edge Case Analysis",
        ],
        gradient: "from-cyan-400 via-blue-500 to-indigo-600",
        bgGradient:
          "from-cyan-500/20 via-blue-600/10 to-indigo-500/20",
        iconBg: "from-cyan-400 to-indigo-600",
        pattern: "waves",
      },
      {
        icon: TestTube,
        title: "Security & Vulnerability Testing",
        subtitle: "Advanced Threat Detection",
        description:
          "Comprehensive security testing with AI-powered vulnerability scanning and threat detection for robust protection.",
        features: [
          "Vulnerability Scanning",
          "Code Analysis",
          "Security AI",
          "Threat Detection",
        ],
        gradient: "from-red-500 via-rose-600 to-purple-600",
        bgGradient:
          "from-red-500/20 via-rose-600/10 to-purple-600/20",
        iconBg: "from-red-500 to-purple-600",
        pattern: "dots",
      },
      {
        icon: Cog,
        title: "Regression Testing",
        subtitle: "Automated Quality Assurance",
        description:
          "Smart regression testing with visual diffing, anomaly detection, and fast execution for continuous quality.",
        features: [
          "Visual Diffing",
          "Anomaly Detection",
          "Fast Execution",
          "Smart Automation",
        ],
        gradient: "from-purple-500 via-violet-600 to-indigo-600",
        bgGradient:
          "from-purple-500/20 via-violet-600/10 to-indigo-600/20",
        iconBg: "from-purple-500 to-indigo-600",
        pattern: "grid",
      },
      {
        icon: BarChart3,
        title: "Test Analytics & Reporting",
        subtitle: "Real-time Insights",
        description:
          "Advanced analytics with real-time data visualization, actionable insights, and custom dashboards.",
        features: [
          "Real-time Data",
          "Actionable Insights",
          "Custom Dashboards",
          "Performance Metrics",
        ],
        gradient: "from-emerald-500 via-teal-600 to-cyan-600",
        bgGradient:
          "from-emerald-500/20 via-teal-600/10 to-cyan-600/20",
        iconBg: "from-emerald-500 to-cyan-600",
        pattern: "waves",
      },
      {
        icon: Zap,
        title: "Performance Optimization",
        subtitle: "Speed & Efficiency",
        description:
          "AI-driven performance testing and optimization to ensure your applications run at peak efficiency.",
        features: [
          "Load Testing",
          "Speed Optimization",
          "Resource Analysis",
          "Scalability Testing",
        ],
        gradient: "from-blue-500 via-indigo-600 to-purple-600",
        bgGradient:
          "from-blue-500/20 via-indigo-600/10 to-purple-600/20",
        iconBg: "from-blue-500 to-purple-600",
        pattern: "diagonal",
      },
      {
        icon: Shield,
        title: "API & Integration Testing",
        subtitle: "Seamless Connectivity",
        description:
          "Comprehensive API testing and integration validation to ensure seamless connectivity across platforms.",
        features: [
          "API Validation",
          "Integration Testing",
          "Data Flow Analysis",
          "Endpoint Security",
        ],
        gradient: "from-amber-500 via-yellow-600 to-orange-600",
        bgGradient:
          "from-amber-500/20 via-yellow-600/10 to-orange-600/20",
        iconBg: "from-amber-500 to-orange-600",
        pattern: "hexagon",
      },
    ],
    []
  );
  // Inside ScrollingHomePage component
  useEffect(() => {
    const handleShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const el = document.getElementById("contact-us");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

const x = useMotionValue(0);
const servicesContainerRef = useRef(null);
const [isHovered, setIsHovered] = useState(false);
const [isMobile, setIsMobile] = useState(false);
const [halfWidth, setHalfWidth] = useState(0);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

useEffect(() => {
  const updateWidth = () => {
    if (servicesContainerRef.current) {
      setHalfWidth(servicesContainerRef.current.scrollWidth / 2);
    }
  };
  updateWidth();
  window.addEventListener('resize', updateWidth);
  return () => window.removeEventListener('resize', updateWidth);
}, []);

useEffect(() => {
  let raf;
  if (halfWidth === 0) return;

  let lastTime = performance.now();
  const pxPerMs = halfWidth / 40000; // For 40s duration

  const animateScroll = () => {
    const now = performance.now();
    const delta = now - lastTime;
    lastTime = now;

    let current = x.get();
    current -= pxPerMs * delta;
    if (current < -halfWidth) {
      current += halfWidth;
    }
    x.set(current);

    raf = requestAnimationFrame(animateScroll);
  };

  if (!isHovered && !isMobile) {
    animateScroll();
  }

  return () => {
    if (raf) cancelAnimationFrame(raf);
  };
}, [isHovered, isMobile, x, halfWidth]);

// The modified services section
  // -----------------------------------------
  // Contact form (EmailJS)
  // -----------------------------------------
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

  const sendEmail = (e) => {
    e.preventDefault();
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error(
        "EmailJS is not configured — set VITE_EMAILJS_* environment variables.",
        { position: "bottom-right" }
      );
      return;
    }

    setIsSending(true);
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully ✅", {
            position: "bottom-right",
          });
          formRef.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message ❌ Try again later.", {
            position: "bottom-right",
          });
          setIsSending(false);
        }
      );
  };

  // -----------------------------------------
  // Render
  // -----------------------------------------
  return (
    <div className="relative">
      {/* Floating Book Consultation Button */}
      <motion.div className="fixed bottom-8 right-8 z-50" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
        <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg rounded-full px-6 py-3" onClick={() => { const el = document.getElementById('contact-us'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>
          <Calendar className="mr-2 w-5 h-5" /> Book Free Consultation
        </Button>
      </motion.div>
      {/* HERO SECTION */}
      <section
        id="home"
        className="hero-section min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat pt-20"
        style={{
          background: `url(${heroImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat:'no-repeat'
        }}
      >
        {/* Hero Container */}
        <div className="hero-container text-center px-6 py-16 max-w-5xl mx-auto space-y-6">
          <h1 className="hero-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent extra-margin">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ color: "#1837f3" }}
            >
              |
            </motion.span>
          </h1>

          <p className="hero-subtext text-lg text-muted-foreground max-w-3xl mx-auto">
            UpliftCode delivers AI-driven development, QA, and evaluations—ensuring
            your product is built with trust, quality, and scale in mind.
          </p>

          <div className="hero-buttons flex flex-wrap gap-4 justify-center">
            <button
              className="hero-btn-primary bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:shadow-lg transition"
              onClick={() => {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </button>

            <button
              className="hero-btn-secondary border border-purple-500/50 text-purple-400 px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-purple-500/10 transition"
              onClick={() => {
                const el = document.getElementById("contact-us");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Calendar className="w-4 h-4" />
              Book Free Consultation
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="container mx-auto px-6 mt-10 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Code,
                title: "AI-Driven Development",
                points: [
                  "We don’t just build software, we engineer intelligent systems that scale",
                ],
              },
              {
                icon: Shield,
                title: "Quality Assurance & Testing",
                points: [
                  "Testing that goes beyond bugs ensuring reliability, speed, and security",
                ],
              },
              {
                icon: BarChart3,
                title: "AI Evals & Reliability",
                points: [
                  "Turning AI into measurable trust through rigorous evaluation.",
                ],
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-purple-500/20 text-left rounded-2xl shadow-md">
                  <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                    {feature.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

<section id="services" className="services-section">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h1
        className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent relative inline-block"
        style={{
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
          paddingBottom: "0.2em",
        }}
      >
        Uplifting Every Stage of Software Development
      </h1>
      <p className="text-xl text-[rgba(224,230,237,0.8)] max-w-3xl mx-auto">
        Development. Testing. Evaluation. Delivered with an AI-first mindset.
      </p>
    </motion.div>

    <div
      className="overflow-hidden overflow-x-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={servicesContainerRef}
        className="flex gap-8 services-scroll"
        style={{ x }}
        drag={isMobile ? "x" : false}
        dragConstraints={isMobile ? { left: -halfWidth, right: 0 } : undefined}
      >
        {[...services, ...services].map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              className="relative shrink-0 rounded-2xl overflow-hidden shadow-xl bg-black/40 widthing"
              whileHover={{ scale: 1.05 }}
            >
              {/* Animated pattern background */}
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    service.pattern === "diagonal"
                      ? "repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 2px, transparent 2px, transparent 6px)"
                      : service.pattern === "dots"
                        ? "radial-gradient(rgba(255,255,255,0.25) 2px, transparent 4px)"
                        : service.pattern === "grid"
                          ? "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)"
                          : service.pattern === "waves"
                            ? "repeating-radial-gradient(circle, rgba(255,255,255,0.12), transparent 60px)"
                            : "linear-gradient(135deg, rgba(255,255,255,0.1), transparent)",
                  backgroundSize:
                    service.pattern === "dots"
                      ? "40px 40px"
                      : service.pattern === "grid"
                        ? "60px 60px"
                        : "200% 200%",
                }}
                animate={
                  service.pattern === "dots"
                    ? { backgroundPosition: ["0% 0%", "40px 40px"] }
                    : service.pattern === "grid"
                      ? { backgroundPosition: ["0% 0%", "60px 60px"] }
                      : service.pattern === "waves"
                        ? { scale: [1, 1.1, 1] }
                        : service.pattern === "diagonal"
                          ? { rotate: [0, 360] }
                          : { opacity: [0.3, 0.6, 0.3] }
                }
                transition={{
                  duration:
                    service.pattern === "diagonal"
                      ? 25
                      : service.pattern === "waves"
                        ? 6
                        : 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-70`}
              />

              {/* Card content */}
              <div className="relative z-10 p-6 flex flex-col h-full text-white">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${service.iconBg} p-2 mb-4 flex items-center justify-center`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3
                  className={`text-3xl font-bold mb-1 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                >
                  {service.title}
                </h3>

                <p className="text-lg font-medium mb-3 text-white/80">
                  {service.subtitle}
                </p>

                <div className="space-y-2 mb-4 flex-1 overflow-hidden">
                  {service.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-xs">
                      <div
                        className={`w-4 h-4 rounded-full bg-gradient-to-r ${service.iconBg} flex items-center justify-center`}
                      >
                        <CheckCircle className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-white/90 truncate text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  className={`h-1 rounded-full bg-gradient-to-r ${service.gradient} opacity-90`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </div>
</section>
      <CultureCarouselSection id='our-culture' />
      <section id="about" className="py-20 bg-[#0d0d14]">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              About
            </h2>
            <p className="text-lg text-[rgba(224,230,237,0.85)] mt-3">
              Shaped by experience, driven by innovation.
            </p>
          </motion.div>

          {/* Content */}
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-8">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-60 blur-lg group-hover:opacity-90 transition duration-500"></div>
                <img
                  className="relative w-[320px] sm:w-[390px] rounded-full border-4 border-purple-500 shadow-lg imgwidth"
                  src={bhavyaImg}
                  alt="Bhavya Gundanna"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-6">
                I’m Bhavya Gundanna — Founder & CEO
              </h3>

              {/* Unified paragraph */}
              <p className="text-[rgba(224,230,237,0.85)] leading-relaxed mb-6">
                With over 14 years in software quality and technology spanning Amazon (US/India),
                Bosch (Germany/India), Glean (India), and leadership roles at FinTech and AI startups,
                I started UpliftCode to solve a growing challenge: how do we build, test, and truly
                trust AI systems? At UpliftCode, we combine my background in QA with a global team
                of developers and evaluators to deliver development, QA, and Evals as one unified
                service. We don’t just write code, we engineer <strong>confidence</strong>.
              </p>

              {/* Mission & Values */}
              <div className="mt-10 flex gap-8 flex-wrap missionvalues-container">
                {/* Mission Box */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="missionvalues p-6 rounded-2xl shadow-lg border border-[rgba(255,255,255,0.08)] "
                >
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#2BBBAD] mt-1.5 flex-shrink-0" />
                    <div className="flex-1 break-words">
                      <h4 className="text-xl font-semibold mb-2 text-white">Mission</h4>
                      <p className="text-[rgba(224,230,237,0.9)] leading-relaxed">
                        Deliver reliable, trustworthy AI systems through unified
                        engineering, QA and evaluation services.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Values Box */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="missionvalues p-6 rounded-2xl shadow-lg border border-[rgba(255,255,255,0.08)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#7B2FF7] mt-1.5 flex-shrink-0" />
                    <div className="flex-1 break-words">
                      <h4 className="text-xl font-semibold mb-2 text-white">Values</h4>
                      <p className="text-[rgba(224,230,237,0.9)] leading-relaxed">
                        Pragmatism, measurable quality, and ethical AI.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact-us" className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-[rgba(224,230,237,0.85)] max-w-3xl mx-auto mt-3">
              Ready to Uplift Your Product? Get in Touch.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl p-8 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)]">
                <h2 className="text-2xl font-semibold mb-6">
                  Book Your Free Consultation
                </h2>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-3 py-2 rounded-md bg-transparent border border-[rgba(255,255,255,0.06)]"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-1" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-3 py-2 rounded-md bg-transparent border border-[rgba(255,255,255,0.06)]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="user_email"
                      required
                      className="w-full px-3 py-2 rounded-md bg-transparent border border-[rgba(255,255,255,0.06)]"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1" htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      className="w-full px-3 py-2 rounded-md bg-transparent border border-[rgba(255,255,255,0.06)]"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1" htmlFor="service">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-3 py-2 rounded-md bg-[#1a1a26] text-white border border-[rgba(255,255,255,0.06)] focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-testing">AI Product Testing</option>
                      <option value="security">Security & Vulnerability</option>
                      <option value="regression">Regression Testing</option>
                      <option value="analytics">Test Analytics & Reporting</option>
                      <option value="performance">Performance Optimization</option>
                      <option value="integration">API & Integration Testing</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-3 py-2 rounded-md bg-transparent border border-[rgba(255,255,255,0.06)]"
                      placeholder="Tell us..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full px-4 py-3 rounded-md bg-gradient-to-r from-purple-500 to-purple-700 text-white"
                  >
                    {isSending ? "Sending..." : "Book Free Consultation"}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl p-8 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)] custmargin">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-[rgba(224,230,237,0.75)]">bhavyag@upliftcode.in</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-[rgba(224,230,237,0.75)]">+91 90600 62992</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-[rgba(224,230,237,0.75)]">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-6 mt-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] text-center">
                <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Discuss your needs</h3>
                <p className="text-sm text-[rgba(224,230,237,0.75)] mb-4">
                  Schedule a 30-minute consultation to discuss your needs
                </p>
                <div className="flex justify-center items-center gap-2">
                  <div className="w-2 h-2 bg-[#2BBBAD] rounded-full animate-pulse" />
                  <span className="text-sm text-[#2BBBAD]">Booking now open</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ToastContainer />
      <footer className="bg-[#0d0d14] border-t border-[rgba(255,255,255,0.08)] py-10 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-[rgba(224,230,237,0.8)] margintop">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              UpliftCode
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Code to Confidence — AI-driven development, QA, and evaluations.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-purple-400">Home</a></li>
              <li><a href="#services" className="hover:text-purple-400">Services</a></li>
              <li><a href="#our-culture" className="hover:text-purple-400">Our Culture</a></li>
              <li><a href="#about" className="hover:text-purple-400">About</a></li>
              <li><a href="#contact-us" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Contact</h4>
            <p>Email: <span className="text-purple-400">bhavyag@upliftcode.in</span></p>
            <p>Phone: +91 90600 62992</p>
            <p>Mon - Fri: 9:00 AM - 6:00 PM IST</p>
          </div>
        </div>

        <div className="text-center mt-8 text-xs margintop marginbottom bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          © {new Date().getFullYear()} UpliftCode. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

ScrollingHomePage.propTypes = {
  onPageChange: PropTypes.func,
};

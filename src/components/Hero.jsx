import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";

import heroBg from "../assets/hero-background.jpg";

const stats = [
    {
        value: 100,
        suffix: "+",
        label: "Projects Delivered",
    },
    {
        value: 95,
        suffix: "%",
        label: "Client Satisfaction",
    },
    {
        value: "24/7",
        label: "Support",
    },
];

const Hero = () => {
    const [animatingCounts, setAnimatingCounts] = useState([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setAnimatingCounts((prev) => {
                let ans = [];
                for (let i = 0; i < stats.length; i++) {
                    const stat = stats[i];
                    if (typeof stat.value !== "number") {
                        ans.push(stat.value);
                    } else {
                        if (prev[i] >= stat.value) {
                            ans.push(stat.value);
                        } else {
                            ans.push((prev[i] || 0) + 1);
                        }
                    }
                }
                let stopTimer = true;
                for (let i = 0; i < stats.length; i++) {
                    if (prev[i] !== stats.value) {
                        stopTimer = false;
                        break;
                    }
                }
                if (stopTimer) {
                    clearInterval(timer);
                }
                return ans;
            });
        }, 50);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={heroBg}
                    alt="Codecelix Hero Background"
                    className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-32 md:py-40">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
                            <Sparkles className="w-4 h-4 text-accent" />
                            Trusted by 50+ growing businesses worldwide
                        </span>
                    </motion.div>
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading text-white leading-tight max-w-4xl mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                        Transform Your Business with{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                            High-Converting Digital Solutions
                        </span>
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}>
                        We help startups and businesses grow through modern
                        websites, custom software, and user-focused digital
                        experiences that drive real results.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-4 mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-alt text-white text-base font-semibold rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg shadow-accent/25 hover:shadow-accent/40">
                            Book Free Consultation
                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="#portfolio"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-base font-semibold rounded-full transition-all duration-300">
                            View Portfolio
                            <ArrowUpRight size={18} />
                        </a>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-3 gap-8 md:gap-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}>
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-extrabold font-heading text-white mb-1">
                                    {animatingCounts[index]}
                                    {stat.suffix}
                                </div>

                                <div className="text-sm text-white/60 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                }}>
                <ChevronDown className="text-white/50 w-8 h-8" />
            </motion.div>
        </section>
    );
};

export default Hero;

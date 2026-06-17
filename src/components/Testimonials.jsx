import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        company: "TechFlow Solutions",
        rating: 5,
        quote: "Codecelix transformed our outdated platform into a modern, high-performing SaaS dashboard. Our user engagement skyrocketed by 120% within the first month. The team was incredibly responsive and delivered ahead of schedule.",
    },
    {
        name: "Marcus Rodriguez",
        company: "GreenLeaf Organics",
        rating: 4,
        quote: "Working with Codecelix was a game-changer for our e-commerce business. They redesigned our entire shopping experience, and we saw a 65% increase in conversion rates. Professional, creative, and results-driven.",
    },
    {
        name: "Emily Watson",
        company: "UrbanBite Restaurants",
        rating: 5,
        quote: "From concept to launch, Codecelix delivered beyond our expectations. Our new website not only looks stunning but also generates 3x more leads than before. The local SEO work they did was phenomenal.",
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const next = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -50 : 50,
            opacity: 0,
        }),
    };

    const item = testimonials[current];

    return (
        <section id="testimonials" className="py-20 md:py-28 bg-background-alt">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                    <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                        What Our Clients Say
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray mb-4">
                        Trusted by{" "}
                        <span className="text-secondary">Industry Leaders</span>
                    </h2>
                </motion.div>

                {/* Testimonial Card */}
                <div className="max-w-5xl mx-auto text-center">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            className="bg-background rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm border border-gray/10"
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4 }}>
                            {/* Stars */}
                            <div className="flex items-center justify-center gap-1 mb-6">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className={`w-5 h-5 text-yellow-400 ${
                                            index < item.rating
                                                ? "fill-yellow-400"
                                                : "fill-transparent"
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-lg md:text-2xl text-gray/80 leading-relaxed mb-8 italic max-w-3xl mx-auto">
                                “{item.quote}”
                            </blockquote>

                            {/* Author */}
                            <div className="mb-8">
                                <p className="text-base font-bold font-heading text-gray">
                                    {item.name}
                                </p>
                                <p className="text-sm text-gray/70">
                                    {item.company}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                {/* Controls */}
                <div className="flex items-center justify-center gap-3 m-4">
                    <button
                        onClick={prev}
                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray hover:border-gray-400 transition-all duration-200">
                        <ArrowLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={next}
                        className="w-12 h-12 rounded-full bg-gray flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-200">
                        <ArrowRight className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2 ml-4">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`transition-all duration-300 rounded-full ${
                                    i === current
                                        ? "bg-gray w-8 h-2.5"
                                        : "bg-gray-300 w-2.5 h-2.5"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

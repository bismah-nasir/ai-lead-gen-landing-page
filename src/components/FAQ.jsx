import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on scope and complexity. A standard 5-page business website typically takes 7-14 days. E-commerce platforms and custom web applications can take 4-8 weeks. We always provide a detailed timeline during the discovery phase.",
    },
    {
        question: "What industries do you work with?",
        answer: "We work across diverse industries including SaaS, e-commerce, healthcare, fintech, education, food & beverage, real estate, and professional services. Our adaptable approach allows us to understand your unique industry needs and deliver tailored solutions.",
    },
    {
        question: "Do you provide support after project launch?",
        answer: "Absolutely. All our projects include post-launch support. Our Business plan includes 1 month of free support, and the Enterprise plan includes 6 months. We also offer ongoing maintenance packages for long-term partnerships.",
    },
    {
        question: "What technologies do you use?",
        answer: "We use modern, battle-tested technologies: React, Next.js, TypeScript for frontend; Node.js, Python for backend; PostgreSQL, MongoDB for databases; and AWS, Vercel for hosting. We choose the best tech stack based on your specific project requirements.",
    },
    {
        question: "How much does a website cost?",
        answer: "Our pricing is transparent and project-based. Starter websites begin at $2,499, business websites at $5,999, and enterprise solutions are custom-quoted based on scope. Every project includes design, development, testing, and deployment. No hidden fees, ever.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 md:py-28 bg-background-alt">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        Frequently Asked Questions
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray mb-4">
                        Got Questions?{" "}
                        <span className="text-primary">We've Got Answers</span>
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border
                                ${
                                    openIndex === index
                                        ? "bg-background border-primary/20"
                                        : "bg-background border-background-alt hover:border-gray/20"
                                }`}>
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-base md:text-lg font-semibold font-heading text-gray">
                                        {faq.question}
                                    </h3>

                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                                        ${
                                            openIndex === index
                                                ? "bg-primary text-white"
                                                : "bg-background-alt text-gray-alt"
                                        }`}>
                                        {openIndex === index ? (
                                            <X className="w-4 h-4" />
                                        ) : (
                                            <Plus className="w-4 h-4" />
                                        )}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                            className="overflow-hidden">
                                            <p className=" text-gray-alt text-sm leading-relaxed border-t border-background-alt pt-4 mt-4">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

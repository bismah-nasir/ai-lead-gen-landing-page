import { Rocket, CircleDollarSign, Users, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Rocket,
        title: "Fast Delivery",
        description:
            "We ship projects on time without compromising quality. Our agile workflow ensures rapid iteration and quick turnaround.",
    },
    {
        icon: CircleDollarSign,
        title: "Affordable Pricing",
        description:
            "Transparent, competitive pricing with no hidden fees. Flexible packages that deliver maximum value for your investment.",
    },
    {
        icon: Users,
        title: "Expert Team",
        description:
            "Seasoned developers, designers, and strategists with years of industry experience across diverse technology stacks.",
    },
    {
        icon: Headphones,
        title: "Reliable Support",
        description:
            "Dedicated support team available to assist you at every stage — from initial consultation to post-launch maintenance.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 md:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    {/* Left Content */}
                    <motion.div
                        className="lg:w-2/5 flex-shrink-0"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}>
                        <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                            Why Choose Us
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray mb-4 leading-tight">
                            Why Businesses Choose{" "}
                            <span className="text-secondary">Codecelix</span>
                        </h2>

                        <p className="text-gray-alt text-base leading-relaxed">
                            We combine technical expertise with business
                            strategy to deliver solutions that not only look
                            great but also drive measurable growth for your
                            company.
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    className="p-6 rounded-2xl bg-background-alt border border-gray-200/70 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 cursor-default"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.25,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -3,
                                        scale: 1.02,
                                    }}>
                                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-secondary" />
                                    </div>

                                    <h3 className="text-lg font-bold font-heading text-gray mb-2">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-alt text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

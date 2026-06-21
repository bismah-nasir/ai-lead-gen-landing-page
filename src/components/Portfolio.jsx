import portfolio1 from "../assets/portfolio/portfolio-1.png";
import portfolio2 from "../assets/portfolio/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio/portfolio-3.png";
import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";

const portfolioData = [
    {
        title: "E-Commerce Platform",
        image: portfolio1,
        challenge:
            "Low conversion rates and abandoned carts hurting revenue growth.",
        solution:
            "Redesigned checkout flow with one-click purchase and personalized product recommendations.",
        stats: [
            { value: "+40%", label: "Revenue Growth" },
            { value: "+65%", label: "Conversion Rate" },
            { value: "+35%", label: "Cart Recovery" },
        ],
    },
    {
        title: "SaaS Dashboard",
        image: portfolio2,
        challenge:
            "Complex user interface causing high churn and low feature adoption.",
        solution:
            "Complete UX overhaul with intuitive navigation, interactive data visualizations, and guided onboarding.",
        stats: [
            { value: "+120%", label: "User Engagement" },
            { value: "+85%", label: "Feature Adoption" },
            { value: "-40%", label: "Churn Reduction" },
        ],
    },
    {
        title: "Local Service Platform",
        image: portfolio3,
        challenge:
            "Outdated website failing to attract local clients and generate qualified leads.",
        solution:
            "Modern responsive redesign with local SEO optimization, booking system, and conversion-focused landing pages.",
        stats: [
            { value: "+65%", label: "Lead Generation" },
            { value: "+90%", label: "Organic Traffic" },
            { value: "+55%", label: "Booking Rate" },
        ],
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 md:py-28 bg-background-alt">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                    <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                        Success Stories
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray mb-4">
                        Real Results from{" "}
                        <span className="text-secondary">Real Projects</span>
                    </h2>
                    <p className="text-gray-alt max-w-2xl mx-auto text-base md:text-lg">
                        See how we've helped businesses transform their digital
                        presence and achieve remarkable growth.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {portfolioData.map((project, index) => (
                        <PortfolioCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

import { motion } from "framer-motion";

const PortfolioCard = ({ project, index }) => {
    return (
        <motion.div
            className="rounded-2xl bg-background border border-gray-200 overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
                y: -8,
            }}>
            <div className="h-48 relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                />

                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                        {project.title}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Challenge
                    </p>

                    <p className="text-sm text-gray-700 leading-relaxed">
                        {project.challenge}
                    </p>
                </div>

                <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Solution
                    </p>

                    <p className="text-sm text-gray-700 leading-relaxed">
                        {project.soltion}
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-auto pt-4 border-t border-gray-200">
                    {project.stats.map((stat) => {
                        return (
                            <div className="text-center">
                                <div className="text-lg font-extrabold font-heading text-primary">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-gray-500 leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioCard;

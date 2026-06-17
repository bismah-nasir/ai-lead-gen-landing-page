import background from "../assets/cta-background.jpg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTA = () => {
    return (
        <section>
            <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}>
                <div className="absolute inset-0">
                    <img
                        src={background}
                        alt="CTA Background"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950/70 to-gray-950/40"></div>
                </div>
                <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
                        Ready to Grow Your Business Online?
                    </h2>
                    <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10">
                        Let's discuss your project and build something amazing
                        together. Your digital transformation starts here.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-3.5 bg-accent hover:bg-accent text-white text-base font-semibold rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer shadow-lg shadow-accent/25 flex items-center gap-2">
                            Book Consultation
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#portfolio"
                            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-base font-semibold rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer">
                            View Our Work
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default FinalCTA;

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const leftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 },
    },
};

const rightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 },
    },
};

const Contact = () => {
    const [state, handleSubmit] = useForm("xpqgzzzo");

    return (
        <section id="contact" className="py-20 md:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="lg:w-2/5"
                        variants={leftVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}>
                        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                            Get in Touch
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray mb-4 leading-tight">
                            Get Your Free{" "}
                            <span className="text-primary">Strategy Call</span>
                        </h2>

                        <p className="text-gray-alt text-base leading-relaxed mb-8">
                            Ready to take your business to the next level? Fill
                            out the form and our team will reach out within 24
                            hours to discuss your project.
                        </p>

                        <div className="flex items-center gap-3 text-sm text-gray-alt">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                            </div>

                            <span>
                                No spam. We'll contact you within 24 hours.
                            </span>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        className="lg:w-3/5 w-full"
                        variants={rightVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}>
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 rounded-2xl bg-background-alt border border-background">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="block text-sm font-medium text-gray mb-2">
                                        Full Name
                                    </label>

                                    <input
                                        name="fullName"
                                        id="fullName"
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-background-alt text-gray text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray mb-2">
                                        Email Address
                                    </label>

                                    <input
                                        name="email"
                                        id="email"
                                        type="email"
                                        placeholder="john@company.com"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-background-alt text-gray text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                                    />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="businessType"
                                    className="block text-sm font-medium text-gray mb-2">
                                    Business Type
                                </label>

                                <select
                                    name="businessType"
                                    id="businessType"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-background-alt text-gray text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200">
                                    <option value="">
                                        Select your business type
                                    </option>
                                    <option value="startup">Startup</option>
                                    <option value="smb">
                                        Small / Medium Business
                                    </option>
                                    <option value="ecommerce">
                                        E-Commerce
                                    </option>
                                    <option value="local">
                                        Local Service Business
                                    </option>
                                    <option value="enterprise">
                                        Enterprise
                                    </option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray mb-2">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    maxLength={500}
                                    required
                                    placeholder="Tell us about your project..."
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-background-alt text-gray text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                                />
                            </div>

                            {state.succeeded && (
                                <div className="mb-4 rounded-xl bg-accent/10 border border-accent/20 p-4 text-center">
                                    <p className="text-accent font-medium">
                                        Message sent successfully! We will
                                        contact you within 24 hours.
                                    </p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full py-3.5 bg-primary hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-full transition-all duration-200">
                                {state.submitting
                                    ? "Sending..."
                                    : "Get Free Strategy Call"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "py-3 bg-background/70 backdrop-blur-md shadow-sm"
                    : isOpen
                      ? "py-5 bg-background/30 backdrop-blur-md"
                      : "py-5 bg-transparent"
            }`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                        <Code2 className="w-6 h-6 text-white" />
                    </div>

                    <span
                        className={`text-xl font-bold font-heading whitespace-nowrap transition-colors ${
                            scrolled ? "text-dark" : "text-white"
                        }`}>
                        {" "}
                        Codecelix
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`text-sm font-medium transition-colors duration-200 ${
                                scrolled
                                    ? "text-gray hover:text-dark"
                                    : "text-white/80 hover:text-white"
                            }`}>
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden lg:flex items-center">
                    <a
                        href="#contact"
                        className="px-5 py-2.5 bg-accent hover:bg-accent-alt text-white text-sm font-semibold rounded-full transition-all duration-200">
                        Book Free Consultation
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors ${
                        scrolled ? "text-gray" : "text-white"
                    }`}
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="lg:hidden p-6">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                // className="text-gray/80 hover:text-gary-alt transition-colors"
                                className={`transition-colors ${
                                    scrolled
                                        ? "text-gray/80 hover:text-gary-alt"
                                        : "text-white"
                                }`}>
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="mt-2 px-5 py-3 bg-accent text-center text-white font-semibold rounded-full">
                            Book Free Consultation
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2563EB", // Blue color
                },

                secondary: {
                    DEFAULT: "#4F46E5", // Purple color
                },

                accent: {
                    DEFAULT: "#10B981", // Green color
                    alt: "#059669",
                },

                gray: {
                    DEFAULT: "#1F2937", // Dark Gray color for headings
                    alt: "#363b42", // Light Gray for text
                },

                background: {
                    DEFAULT: "#fcfcfa",
                    alt: "#f6f5f1",
                },
            },

            fontFamily: {
                heading: ["Poppins", "sans-serif"], // Creates 'font-heading' utility class
                body: ["Inter", "sans-serif"], // Creates 'font-body' utility class
            },
        },
    },
    plugins: [],
};

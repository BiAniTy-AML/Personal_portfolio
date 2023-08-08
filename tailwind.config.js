/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            transitionProperty: {
                left: "left",
            },
            textShadow: {
                sm: "0 1px 2px var(--tw-shadow-color)",
                DEFAULT: "0 2px 4px var(--tw-shadow-color)",
                lg: "0 8px 16px var(--tw-shadow-color)",
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
                change: "change 10s ease-in-out infinite",
                "pulse-fast":
                    "pulse 800ms cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
                change: {
                    "0%, 12.66%, 100%": { transform: "translate3d(0, 0, 0)" },
                    "16.66%, 29.32%": { transform: "translate3d(0, -25 %, 0)" },
                    "33.32%, 45.98%": { transform: "translate3d(0, -50 %, 0)" },
                    "49.98%, 62.64%": { transform: "translate3d(0, -75 %, 0)" },
                    "66.64%, 79.3%": { transform: "translate3d(0, -50 %, 0)" },
                    "83.3%, 95.96%": { transform: "translate3d(0, -25 %, 0)" },
                },
            },
        },
    },
    plugins: [
        function({ addVariant }) {
            addVariant("children", "& > *");
            addVariant("children-hover", "& > *:hover");

            addVariant("descendants", "& *");
            addVariant("descendants-hover", "& *:hover");
        },
        function({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "text-shadow": (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme("textShadow") }
            );
        },
    ],
};

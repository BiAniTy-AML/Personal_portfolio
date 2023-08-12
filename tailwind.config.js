/** @type {import('tailwindcss').Config} */
function multipleBoxShadow(n, range = 2000) {
    const random_range = (to, from = 0) => {
        const r = Math.random();
        return Math.floor(r * (to - from) + from);
    };

    // let value = `shadow-[${random_range(range)}px_${random_range(range)}px`;
    let value = `${random_range(range)}px ${random_range(range)}px`;

    for (let i = 1; i <= n; i++) {
        // value = `${value},${random_range(range)}px_${random_range(range)}px`;
        value = `${value},${random_range(range)}px ${random_range(range)}px`;
    }

    return value;
}

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
            backgroundImage: {
                "ellipsis-night":
                    "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",
            },
            boxShadow: {
                "multiple-sm": multipleBoxShadow(700),
                "multiple-md": multipleBoxShadow(200),
                "multiple-lg": multipleBoxShadow(100),
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
                change: "change 10s ease-in-out infinite",
                "pulse-fast":
                    "pulse 800ms cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "star-sm": "animStar 50s linear infinite",
                "star-md": "animStar 100s linear infinite",
                "star-lg": "animStar 150s linear infinite",
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
                animStar: {
                    from: {
                        transform: "translateY(0)",
                    },
                    to: {
                        transform: "translateY(-2000px)",
                    },
                },
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("children", "& > *");
            addVariant("children-hover", "& > *:hover");

            addVariant("descendants", "& *");
            addVariant("descendants-hover", "& *:hover");
        },
        function ({ matchUtilities, theme }) {
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

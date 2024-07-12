/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            "dark",
            "retro",
            "cyberpunk",
            "valentine",
            "aqua",
            "coffee",
            "forest",
            "dim",
            "dracula",
            "sunset",
        ],
    },
};

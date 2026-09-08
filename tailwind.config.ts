import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        muted: "#737373",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      zIndex: {
        // Stacking order (low to high): fixed navbar, then a drawer's
        // overlay/content, then the mobile menu toggle button (so it stays
        // usable as the menu's own close control above the drawer it
        // opens), then an "elevated" drawer (one with its own close
        // button, e.g. project details) that doesn't need the toggle
        // showing through on top of it.
        navbar: "30",
        drawer: "60",
        "drawer-content": "70",
        "menu-toggle": "80",
        "drawer-elevated": "85",
        "drawer-content-elevated": "90",
      },
      keyframes: {
        "drawer-slide-in": {
          from: { transform: "translate3d(100%, 0, 0)" },
          to: { transform: "translate3d(0, 0, 0)" },
        },
        "drawer-slide-out": {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(100%, 0, 0)" },
        },
        "overlay-fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "overlay-fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "drawer-slide-in":
          "drawer-slide-in 280ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "drawer-slide-out":
          "drawer-slide-out 240ms cubic-bezier(0.4, 0, 1, 1) forwards",
        "overlay-fade-in": "overlay-fade-in 200ms ease-out forwards",
        "overlay-fade-out": "overlay-fade-out 200ms ease-out forwards",
      },
    },
  },
} satisfies Config;

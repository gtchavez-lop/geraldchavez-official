module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        customDark: {
          "primary": "#f3f4f6",
          "secondary": "#0284c7",
          "accent": "#0f766e",
          "neutral": "#4b5563",
          "base-100": "#1f2937",
          "info": "#38bdf8",
          "success": "#4ade80",
          "warning": "#facc15",
          "error": "#ef4444",

          "--rounded-box": "1rem", // border radius used in card and other large boxes
          "--rounded-btn": "0.2rem", // border radius used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
        customLight: {
          "primary": "#1f2937",
          "secondary": "#155e75",
          "accent": "#0369a1",
          "neutral": "#4b5563",
          "base-100": "#f3f4f6",
          "info": "#38bdf8",
          "success": "#4ade80",
          "warning": "#facc15",
          "error": "#ef4444",

          "--rounded-box": "1rem", // border radius used in card and other large boxes
          "--rounded-btn": "0.2rem", // border radius used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
}

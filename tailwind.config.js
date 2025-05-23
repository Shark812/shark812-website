/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        // Add other font families if needed
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        ring: "var(--ring)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        input: "var(--input)",
        "input-foreground": "var(--input-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        link: "var(--link)",
        "link-hover": "var(--link-hover)",
      },
      borderColor: {
        DEFAULT: "var(--border)",
      },
      outlineColor: {
        DEFAULT: "var(--ring)",
      },
      ringOffsetColor: {
        DEFAULT: "var(--background)",
      },
      ringColor: {
        DEFAULT: "var(--ring)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 
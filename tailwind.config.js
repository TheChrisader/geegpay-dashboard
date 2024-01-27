/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
      inter: ["Inter", "Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      colors: {
        sidebar: "var(--sidebar-bg)",
        sidebarBorder: "var(--sidebar-border)",
        mainRed: "var(--main-red)",
        mainGreen: "var(--main-green)",
        screenBg: "var(--screen-bg)",
        headerBottom: "var(--header-border-b)",
        darkText: "var(--dark-text)",
        darkerText: "var(--darker-text)",
        darkestText: "var(--darkest-text)",
        darkThin: "var(--dark-thin-text)",
        darkerThin: "var(--darker-thin-text)",
        emailText: "var(--email-text)",
        darkBorder: "var(--dark-border)",
        darkBorderTouch: "var(--dark-border-touch)",
        tableHead: "var(--table-head)",
        progressBg: "var(--progress-bg)",
        searchHolder: "var(--search-placeholder)",
        dropBorder: "var(--drop-border)",
        mainWhite: "var(--main-white)",
        lightBorder: "var(--light-border)",
        switchFill: "var(--switch-icon-fill)",
        reportMonth: "var(--report-month)",
        reportTitle: "var(--report-title)",
        rankingTitle: "var(--ranking-title)",
        //
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0, 1.93, 1, 1.01)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

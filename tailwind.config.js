module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'display': ['var(--font-nantes)', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      animation: {
        marquee: 'marquee 40s linear infinite',
        marquee2: 'marquee2 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        'black': '#000',
        'white': '#FFF',
        'off-white': '#EBE8DF',
        'blue': '#4650E2',
        'brown': '#B89486',
        'red': '#BD3146',
        'green': '#437256',
        'peach': '#FC6E5C',
        'mint': '#9BD5B9',
        'purple': '#9D5EFB',
        'orange': '#FC8200'
      }
    },
  },
  plugins: []
}
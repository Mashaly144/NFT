module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    fontFamily: {
      primary: 'Cabin',
    },
    extend: {
      colors: {
        primaryGreen: '#96F122',
        dimWhite: '#929292',
      },
      boxShadow: {
        primary: '0px 20px 200px rgba(57, 23, 119, 0.05)',
      },
      backgroundImage: {
        newsletter: "url('/src/assets/img/newsletter-bg.png')",
        newsletterBox: "url('/src/assets/img/newsletter-box.png')",
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
  },
  plugins: [],
};

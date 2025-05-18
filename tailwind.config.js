/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'media',
    extend: {
      backgroundColor: {
        'light-surface': "#F2F7FD",
        'dark-surface': "#2B2E33",
      },
      backgroundImage: {
        'gradient-purple': "linear-gradient(306.84deg, #E1C9FF -9.11%, #7F27F0 100.45%)",
        'gradient-orange': "linear-gradient(129.32deg, #FCE32C 6.33%, #EC672B 76.01%)",
        'gradient-primary': "linear-gradient(180deg, #46BFF4 0%, #4095EE 100%)",
        'gradient-card-light': "linear-gradient(180deg, #46BFF4 0%, #4095EE 100%)",
        'gradient-dark': "linear-gradient(180deg, #52555B 0%, #13161A 100%)",
        'gradient-card-dark': "linear-gradient(180deg, #46BFF4 0%, #4095EE 100%)",
      },
      colors: {
        'primary-black': "#020A0D",
        'neutral-gray': "#62696d",
        'accent-green': "#22E2AD",
        "gray-muted": "#34373E",
      },
      fontFamily: {
        'exo': ['"Exo 2"', 'sans-serif'],
      },
      spacing: {
        "30": "30px"
      },
      borderRadius: {
        'xl': "20px",
      },
      boxShadow: {
        'base': "4px 4px 20px 0px #0015611A, -2px -2px 30px 0px #0015610D",
        'btn': "6px 6px 15px 0px #01294559, -2px -2px 8px 0px #FFFFFF, 0.5px 0.5px 4px 0px #FFFFFF1A inset, 2px 2px 8px 0px #FFFFFF66 inset, -4px -4px 4px 0px #FFFFFF, -1px -1px 2px 0px #000D571A",
        'bold': "4px 4px 20px 0px #00000080",
        'button-dark': "6px 6px 15px 0px #00000059, -2px -2px 8px 0px #34373E, 0.5px 0.5px 4px 0px #34373E inset, 2px 2px 8px 0px #34373E80 inset, -4px -4px 4px 0px #34373E66, -1px -1px 2px 0px #0000001A",
        'card-dark': "4px 4px 20px 0px #00000040, -2px -2px 30px 0px #0000001A",
        'slider': "4px 4px 20px 0px #00047040",
        'switch': "6px 6px 15px 0px #01294559, -2px -2px 8px 0px #FFFFFF,0.5px 0.5px 4px 0px #FFFFFF1A inset, 2px 2px 8px 0px #FFFFFF66 inset, -4px -4px 4px 0px #FFFFFF, -1px -1px 2px 0px #000D571A;"
      },
      lineHeight: {
        'tight': "120%",
      },
      screens: {
        'xl-max': '1440px',
        "lg-max": "1200px",
        "md-max": "980px",
        "sm-min": "490px"
      }
    },
  },
  plugins: [],
}

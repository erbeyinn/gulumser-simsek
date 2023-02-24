module.exports = {
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem'
      }
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '6rem'
      }
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: {
        DEFAULT: '#FFFFFF'
      },
      site: {
        error: '#DF1642',
        success: '#18A957',
        info: '#1E90FF'
      },
    },
    textColor: {
      white: '#FFFFFF',
      dark: '#393F49',
      error: '#DF1642',
      success: '#18A957',
      info: '#1E90FF',
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}

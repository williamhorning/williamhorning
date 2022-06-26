module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,scss}'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extends: {
      colors: {
        grey: {
          100: '#F5F7FA',
          1000: '#1F2933',
        },
      },
      typography: (theme) => ({
        default: {
          css: {
            pre: {
              color: theme('colors.grey.1000'),
              backgroundColor: theme('colors.grey.100'),
            },
            'pre code::before': {
              'padding-left': 'unset',
            },
            'pre code::after': {
              'padding-right': 'unset',
            },
            code: {
              backgroundColor: theme('colors.grey.100'),
              color: '#DD1144',
              fontWeight: '400',
              'border-radius': '0.25rem',
            },
            'code::before': {
              content: '""',
              'padding-left': '0.25rem',
            },
            'code::after': {
              content: '""',
              'padding-right': '0.25rem',
            },
          },
        },
      }),
    },
  },
};


module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['"Poppins"'],
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: theme => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    extend: {
      backgroundImage:{
        'hero-image': "url('@/assets/images/bg-hero.jpg')",
        'hero-image-1': "url('@/assets/images/bg-1.jpg')",
        'hero-image-2': "url('@/assets/images/bg-2.jpg')",
        'hero-image-3': "url('@/assets/images/bg-3.jpg')",
        'section-image': "url('@/assets/images/bg-section.jpeg')",
      }
    },
  },
  plugins: [],
}

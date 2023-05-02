module.exports = {
       content: ["./docs/**/*.{md,mdx}"],
       theme: {
              extend: {},
       },
       plugins: [
              require('@xpd/tailwind-3dtransforms')
       ],
};
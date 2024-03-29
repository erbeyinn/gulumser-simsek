import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
    vite: {
        plugins: [
            svgLoader({
                /* ... */
            }),

        ]
    },

})

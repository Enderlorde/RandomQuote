import postcss_nested from 'postcss-nested';

export default {
    root: "./src",
    mode: "development",
    envDir: "../",
    build: {
        outDir: "../dist",
        emptyOutDir: true
    },
    css: {
        postcss: {
            plugins: [postcss_nested]
        }
    },
    server: {
        proxy:{
            '/api':{
                target: "https://favqs.com/api/",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            }
        }
    }
}
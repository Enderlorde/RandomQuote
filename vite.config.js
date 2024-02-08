export default {
    root: "./src",
    mode: "development",
    build: {
        outDir: "../dist",
        emptyOutDir: true
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
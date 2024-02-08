export default {
    root: "./src",
    mode: "development",
    envDir: "../",
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
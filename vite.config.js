export default {
    root: "./src",
    mode: "development",
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
import Precss from 'precss';

export default {
    root: "./src",
    mode: "development",
    css:{
        postcss: {
            plugins: [Precss]
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
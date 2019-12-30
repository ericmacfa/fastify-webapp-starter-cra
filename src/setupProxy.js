const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/management',
        proxy({
            target: 'https://localhost:3000',
            secure: false,
            changeOrigin: true
        })
    );
    app.use(
        '/api',
        proxy({
            target: 'https://localhost:3000',
            secure: false,
            changeOrigin: true
        })
    );
};

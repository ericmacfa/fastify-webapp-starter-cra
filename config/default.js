module.exports = {
    appEnv: 'local',
    appUrl: 'https://localhost:3000',
    contextRoot: '',
    server: {
        logger: true,
        ports: {
            http: 3000,
            https: 8443,
            http2: 3000
        },
        ssl: {
            certificate: 'certs/app-local.crt',
            key: 'certs/app-local.key'
        }
    }
};

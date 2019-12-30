const config = require('config');
const { withProductionConfig } = require('./withProductionConfig');

const configureServeWebapp = (app, handleAuthentication) => {
    if (config.get('appEnv') !== 'local' || process.env.DISABLE_HMR === 'true') {
        // Serve static bundle
        // return withProductionConfig(app, handleAuthentication);
        return withProductionConfig(app);
    }

    // Only serve the static bundle in production, it is served by CRA in development
};

module.exports = { configureServeWebapp };

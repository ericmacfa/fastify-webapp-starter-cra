const fastifyCookie = require('fastify-cookie');
const fastifyFormBody = require('fastify-formbody');

const configurePlugins = (app) => {
    app.register(fastifyFormBody);
    app.register(fastifyCookie);
};

module.exports = { configurePlugins };

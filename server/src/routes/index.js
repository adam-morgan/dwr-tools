const { initializeRomRoutes } = require('./rom');
const { initializeSpriteRoutes } = require('./sprites');

const initializeRoutes = (server) => {
    initializeRomRoutes(server);
    initializeSpriteRoutes(server);

    server.get('/ping', () => 'pong');
};

module.exports = exports = {
    initializeRoutes
};

const { initializeRomRoutes } = require('./rom');
const { initializeSpriteRoutes } = require('./sprites');
const { initializeMapRoutes } = require('./map');

const initializeRoutes = (server) => {
    initializeRomRoutes(server);
    initializeSpriteRoutes(server);
    initializeMapRoutes(server);

    server.get('/ping', () => 'pong');
};

module.exports = exports = {
    initializeRoutes
};

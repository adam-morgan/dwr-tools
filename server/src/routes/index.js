const { initializeSpriteRoutes } = require('./sprites');

const initializeRoutes = (server) => {
    initializeSpriteRoutes(server);

    server.get('/ping', () => 'pong');
};

module.exports = exports = {
    initializeRoutes
};

const { generateMapImage } = require('../sprites/map');

const initializeMapRoutes = (server) => {
    server.post('/map', async (request, reply) => {
        try {
            const tiles = request.body;

            if (!tiles || !Array.isArray(tiles)) {
                return reply.code(400).send('Bad Request');
            }

            const map = await generateMapImage(tiles);

            reply.type(map.mimeType);
            reply.send(map.buffer);
        } catch (e) {
            console.error(e);
            reply.code(404).send('Not Found');
        }
    });
};

module.exports = exports = {
    initializeMapRoutes
};

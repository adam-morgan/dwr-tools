const { loadSprite } = require('../sprites');

const initializeSpriteRoutes = (server) => {
    server.get('/sprites/monsters/:monster', async (request, reply) => {
        try {
            const sprite = await loadSprite('monster', request.params.monster, {
                resize: getResizeOptions(request)
            });

            reply.type(sprite.mimeType);
            reply.send(sprite.buffer);
        } catch (e) {
            console.error(e);
            reply.code(404);
        }
    });
};

const getResizeOptions = (request) => {
    if (request.query?.width != null || request.query.height != null) {
        return {
            width: request.query.width ? parseInt(request.query.width, 10) : undefined,
            height: request.query.height ? parseInt(request.query.height, 10) : undefined
        };
    }
};

module.exports = exports = {
    initializeSpriteRoutes
};

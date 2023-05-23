const { parseRomFromBuffer } = require('../rom');

const initializeRomRoutes = (server) => {
    server.post('/rom/analyze', async (request, reply) => {
        try {
            const data = parseRomFromBuffer(request.body);
            reply.send(data);
        } catch (e) {
            console.error(e);
            reply.code(500);
        }
    });
};

module.exports = exports = {
    initializeRomRoutes
};

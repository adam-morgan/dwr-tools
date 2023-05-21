const fastify = require('fastify');

const { initializeRoutes } = require('./routes');

const PORT = parseInt(process.env.PORT ?? '3004', 10);

const server = fastify();

initializeRoutes(server);

const init = async () => {
    console.log('Initializing server...');

    // TODO
};

init().then(() => {
    server.listen({ port: PORT }, (err, address) => {
        if (err) {
            console.error(err);
            return process.exit(1);
        }

        console.log(`Server listening at ${address}`);
    });
});

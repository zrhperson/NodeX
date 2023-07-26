const Hapi = require("@hapi/hapi");

const server = Hapi.server({
  port: 3000,
  host: "localhost",
});

server.route({
    method: 'GET',
    path: '/test',
    handler: (request, h) => {

        return 'test';
    }
});
server.route({
    method: 'GET',
    path: '/test/{id}',
    handler: function (request, h) {

        const id = request.params.id;
        return 'params: ' + id;
    }
});

// 插件
const myPlugin = {
    name: 'myPlugin',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/plugin',
            handler: function (request, h) {
                console.log('Plugin - /plugin')
                return 'Plugin';
            }
        });

    }
};
const start = async function () {
    await server.register(myPlugin);
    server.start();
};

start()
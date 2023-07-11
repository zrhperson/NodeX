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

server.start();
